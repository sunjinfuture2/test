import * as THREE from 'three'
import { ctx, FLOOR_SCALE, CX, CZ, LEVELS } from '../scene/helpers.js'

/**
 * 건물을 걸어 다닐 수 있게 만든다 — 벽에 문을 뚫고, 통로를 막은 물건을 치운다.
 *
 * 원본 도면 모델의 벽은 한 장짜리 통 슬래브다 — 전산동 남측 벽 하나가
 * 105 m를 끊김 없이 가로지른다. 위에서 내려다보는 다이어그램에서는 그게
 * 맞지만, 안에서 걸으면 방과 방 사이에 드나들 데가 한 곳도 없다.
 * 실제로 연결통로는 양 끝이 막혀 있어 공급동으로 갈 방법이 없었다.
 *
 * 벽을 통과하게 만드는 것(충돌체만 지우기)은 답이 아니다 — 눈앞의 벽을
 * 뚫고 지나가면 그 순간 건물이 아니라 화면이 된다. 그래서 지오메트리를
 * 실제로 잘라 개구부를 만들고, 위에는 인방(lintel)을 남긴다. 충돌체는
 * 잘린 지오메트리에서 다시 뽑히므로 저절로 따라온다.
 *
 * buildFacility.js는 손대지 않는다. 용어사전과 같은 파일이라 거기서
 * 벽을 자르면 부감 다이어그램의 벽에도 구멍이 뚫린다.
 */

const MAIN = { x0: 0, x1: 105.3, y0: 0, y1: 38.6 }
const SUP = { x0: 4.2, x1: 63.9, y0: 54, y1: 104 }

const DOOR_H = 4.0          // 개구부 높이(m) — 층고 12.5 m에 견줘 큰 문
const DOOR_W = 4.5          // 기본 개구부 폭
const SPACING = 22          // 이 간격마다 문 하나
const MIN_LEN = 8           // 이보다 짧은 칸막이는 돌아가면 된다
const MIN_PIER = 0.8        // 문 옆에 남겨야 하는 벽 두께(기둥)

/**
 * 지정 개구부 — 사용자가 콕 집은 자리다. 자동 배치에 맡기면 통로 폭에
 * 맞지 않는 곳에 뚫려서 문을 지나자마자 장비에 막힌다.
 *
 * axis: 이 개구부가 잘라 내는 벽의 긴 축. 그 축의 [a, b] 구간을 뚫는다.
 * near: 벽이 놓인 반대 축의 위치 — 이 근처(±2 m)의 벽에만 적용한다.
 */
const OPENINGS = [
  /* 연결통로 ↔ 전산동 남측 벽. 통로 안쪽 폭(32.6~37.9)을 그대로 연다 */
  { axis: 'x', a: 32.6, b: 37.9, near: 38.05, floors: ['b1', 'f1', 'f2'] },
  /* 연결통로 ↔ 공급동 북측 벽 */
  { axis: 'x', a: 32.6, b: 37.9, near: 54.55, floors: ['b1', 'f1', 'f2'] },
  /* 항온항습실 갤러리 벽 — 팬월 10기 사이 틈에 맞춰 아홉 군데.
     틈과 어긋나게 뚫으면 문을 지나자마자 팬월 옆구리에 막힌다. 폭은 틈
     그대로(2.7 m) — 문이 통로보다 좁으면 들어갈 때마다 문틀에 걸린다 */
  ...[16.35, 25.45, 34.55, 43.65, 52.75, 61.85, 70.95, 80.05, 89.15].map((c) => ({
    axis: 'x', a: c - 1.35, b: c + 1.35, near: 4.75, floors: ['f1', 'f2'],
  })),
]

/** 평면 좌표가 두 동 중 하나의 안쪽인가 */
function insideBuilding(px, py) {
  const inR = (r) => px >= r.x0 - 1 && px <= r.x1 + 1 && py >= r.y0 - 1 && py <= r.y1 + 1
  return inR(MAIN) || inR(SUP)
}

/** [a,b] 구간들을 합쳐 겹침을 없앤다 */
function merge(runs) {
  if (!runs.length) return runs
  runs.sort((p, q) => p[0] - q[0])
  const out = [runs[0]]
  for (let i = 1; i < runs.length; i++) {
    const last = out[out.length - 1]
    if (runs[i][0] <= last[1] + 0.05) last[1] = Math.max(last[1], runs[i][1])
    else out.push(runs[i])
  }
  return out
}

/**
 * @param {THREE.Object3D} root buildFacility가 채운 그룹
 * @returns {{walls:number, doors:number}}
 */
export function cutDoors(root) {
  /* 외벽은 wallsFade에 등록돼 있다 — 건물 껍데기에 임의로 구멍을 내면
     복도가 바깥 허공으로 뚫린다. 지정 개구부만 예외로 허용한다 */
  const exterior = new Set(ctx.wallsFade.map((w) => w.m))

  const walls = []
  root.traverse((o) => {
    if (!o.isMesh || !o.userData.structureMesh || o.userData.slabMesh) return
    const g = o.geometry && o.geometry.parameters
    if (!g || g.width === undefined) return
    if (Math.min(g.width, g.depth) > 2) return          // 벽이 아니라 덩어리
    if (Math.max(g.width, g.depth) < MIN_LEN) return
    walls.push(o)
  })

  let doors = 0, cut = 0
  const removed = new Set()

  for (const m of walls) {
    const g = m.geometry.parameters
    const alongX = g.width > g.depth
    const len = alongX ? g.width : g.depth
    const p = m.position
    /* 벽 긴 축의 월드 구간과, 반대 축의 도면 좌표 */
    const c = alongX ? p.x : p.z
    const lo = c - len / 2, hi = c + len / 2
    const crossPlan = alongX ? p.z + CZ : p.x + CX
    const isExt = exterior.has(m)

    /* 1) 지정 개구부 */
    const cuts = []
    for (const op of OPENINGS) {
      if ((op.axis === 'x') !== alongX) continue
      if (op.floors && !op.floors.includes(m.userData.floor)) continue
      if (Math.abs(crossPlan - op.near) > 2) continue
      const off = alongX ? CX : CZ
      cuts.push([op.a - off, op.b - off])
    }

    /* 2) 지정이 없는 내벽은 일정 간격으로 자동 배치.
          외벽은 건드리지 않는다 */
    if (!cuts.length && !isExt) {
      const midPlanX = alongX ? c + CX : p.x + CX
      const midPlanY = alongX ? p.z + CZ : c + CZ
      if (!insideBuilding(midPlanX, midPlanY)) continue   // 마당 쪽 벽(연결통로 옆면 등)
      const n = Math.max(1, Math.min(5, Math.round(len / SPACING)))
      const w = Math.min(DOOR_W, (len - MIN_PIER * (n + 1)) / n)
      if (w < 1.6) continue
      for (let i = 0; i < n; i++) {
        const dc = lo + len * ((i + 0.5) / n)
        cuts.push([dc - w / 2, dc + w / 2])
      }
    }
    if (!cuts.length) continue

    /* 구간을 벽 안으로 자르고 정리 */
    const open = merge(
      cuts.map(([a, b]) => [Math.max(a, lo + MIN_PIER), Math.min(b, hi - MIN_PIER)])
        .filter(([a, b]) => b - a > 0.9),
    )
    if (!open.length) continue

    const parent = m.parent
    const H = g.height
    const yBottom = p.y - H / 2
    const doorH = Math.min(DOOR_H * FLOOR_SCALE, H - 0.3)
    const thick = alongX ? g.depth : g.width

    const add = (cAxis, length, yCenter, height) => {
      const geo = alongX
        ? new THREE.BoxGeometry(length, height, thick)
        : new THREE.BoxGeometry(thick, height, length)
      const mm = new THREE.Mesh(geo, m.material)
      mm.position.set(alongX ? cAxis : p.x, yCenter, alongX ? p.z : cAxis)
      mm.userData = Object.assign({}, m.userData)
      parent.add(mm)
    }

    /* 개구부 사이의 벽 조각 */
    let x = lo
    for (const [a, b] of open) {
      if (a - x > 0.02) add((x + a) / 2, a - x, p.y, H)
      /* 문 위 인방 */
      const lintelH = H - doorH
      if (lintelH > 0.05) add((a + b) / 2, b - a, yBottom + doorH + lintelH / 2, lintelH)
      x = b
      doors++
    }
    if (hi - x > 0.02) add((x + hi) / 2, hi - x, p.y, H)

    parent.remove(m)
    removed.add(m)
    cut++
  }

  /* 잘라 낸 외벽은 페이드 목록에서도 빼 준다 — 워크스루는 쓰지 않지만
     사라진 메시를 들고 있을 이유가 없다 */
  ctx.wallsFade = ctx.wallsFade.filter((w) => !removed.has(w.m))

  return { walls: cut, doors }
}


/* 연결통로 — 전산동과 공급동을 잇는 다리. 안쪽 유효 폭은 5.3 m다 */
const BRIDGE = { x0: 32.6, x1: 37.9, y0: 38.6, y1: 54 }
const BRIDGE_CLEAR_SHIFT = -18   // 막은 물건을 전산동 쪽(북)으로 물리는 거리(m)
const WALK_FEET = 0.28           // 이 아래는 밟고 넘어간다 (Controller의 STEP_UP)
const WALK_HEAD = 1.85           // 이 위로는 머리 위로 지나간다
const FLOOR_Y = { b1: LEVELS[0], f1: LEVELS[1], f2: LEVELS[2], roof: LEVELS[3] }

/**
 * 연결통로 한가운데 서 있는 장비를 치운다.
 *
 * 2층 다리에는 소화가스 실린더 뱅크(4.4 m)가 통로 정중앙에 놓여 있어 유효폭
 * 5.3 m 중 0.9 m밖에 남지 않는다. 실제 시설이라면 피난 통로에 둘 수 없는
 * 물건이고, 걸어서 지나갈 수도 없다. 통로 밖(전산동 남측 밴드, 빈 자리로
 * 확인된 곳)으로 물린다.
 *
 * 벽을 통과하게 만들지 않는 것과 같은 이유다 — 눈에 보이는 물건을 뚫고
 * 지나가면 건물이 아니라 화면이 된다. 보이는 대로 걸리되, 걸릴 만한 자리에
 * 있지 않게 한다.
 *
 * 옮기는 기준을 좁게 잡은 이유가 있다. 통로에 걸치는 것을 전부 옮기면
 * 머리 위 6 m로 지나가는 발전기 배관까지 따라 움직인다 — 막지도 않는데
 * 도면만 틀어진다. 지하층 GIS 기둥(0.8 m)도 돌아가면 그만이다. 그래서
 *   ① 보행 높이(발~머리)에서 걸리고
 *   ② 그 그룹이 통로 유효폭의 절반 넘게 가릴 때
 * 만 옮기고, 옮길 때는 그 그룹이 통로 안에 둔 메시를 통째로 옮긴다 —
 * 몸통만 옮기고 뚜껑을 두고 가면 안 된다.
 */
export function clearBridge(root) {
  const CLEAR = BRIDGE.x1 - BRIDGE.x0
  const bb = new THREE.Box3()

  /* 통로에 걸치는 메시를 용어·층별로 모으고, 보행 높이 가림 폭을 잰다 */
  const groups = new Map()
  for (const term in ctx.groupReg) {
    ctx.groupReg[term].traverse((o) => {
      if (!o.isMesh || o.userData.flowParticle) return
      o.updateWorldMatrix(true, false)
      bb.setFromObject(o)
      const x0 = bb.min.x + CX, x1 = bb.max.x + CX
      const y0 = bb.min.z + CZ, y1 = bb.max.z + CZ
      if (x1 < BRIDGE.x0 || x0 > BRIDGE.x1) return
      if (y1 < BRIDGE.y0 || y0 > BRIDGE.y1) return

      const floor = o.userData.floor
      const key = term + '/' + floor
      let g = groups.get(key)
      if (!g) { g = { term, floor, meshes: [], x0: Infinity, x1: -Infinity }; groups.set(key, g) }
      g.meshes.push(o)

      const fy = FLOOR_Y[floor]
      if (fy === undefined) return
      if (bb.min.y - fy < WALK_HEAD && bb.max.y - fy > WALK_FEET) {
        g.x0 = Math.min(g.x0, Math.max(x0, BRIDGE.x0))
        g.x1 = Math.max(g.x1, Math.min(x1, BRIDGE.x1))
      }
    })
  }

  const moved = []
  for (const g of groups.values()) {
    if (!(g.x1 - g.x0 > CLEAR / 2)) continue
    for (const o of g.meshes) o.position.z += BRIDGE_CLEAR_SHIFT
    moved.push({ term: g.term, floor: g.floor, blocked: +(g.x1 - g.x0).toFixed(1), meshes: g.meshes.length })
  }
  return moved
}
