import * as THREE from 'three'
import { buildFacility, LABELS } from '../scene/buildFacility.js'
import { ctx, LEVELS } from '../scene/helpers.js'
import { cutDoors, clearBridge } from './access.js'

/**
 * 부감용 다이어그램 씬을 1인칭에서 실내처럼 보이게 바꾼다.
 *
 * 원본은 위에서 내려다보라고 만든 모델이라 벽·슬래브가 반투명이고,
 * 재질은 전부 Lambert에 그림자가 없다. 그대로 들어가면 종이 모형 속처럼
 * 보이므로 아래를 바꾼다:
 *   - 구조체를 불투명으로 (반투명 벽 너머로 옆 방이 비치면 실내가 아니다)
 *   - Lambert → Standard (거칠기·금속성이 있어야 빛이 재질을 구분해 준다)
 *   - 천장 조명·안개·톤매핑 (데이터센터 특유의 균일한 밝기와 깊이감)
 */

/** 층 id → 바닥 높이(m). LEVELS는 [B1, 1F, 2F, 옥상] */
export const FLOOR_Y = { b1: LEVELS[0], f1: LEVELS[1], f2: LEVELS[2], roof: LEVELS[3] }
export const FLOOR_ORDER = ['b1', 'f1', 'f2', 'roof']
export const FLOOR_LABEL = { b1: 'B1', f1: '1F', f2: '2F', roof: 'PH' }

/* 도면 좌표 → 월드 좌표 (helpers.V와 같은 변환, 스케일 1) */
const CX = 72, CZ = 56
export const planToWorld = (x, y) => [x - CX, y - CZ]

/** 실내 재질 팔레트 — 용도별 거칠기/금속성 */
const MAT = {
  floor:    { color: 0x969ba1, roughness: 0.34, metalness: 0.03 },
  wallOut:  { color: 0xc6cbd0, roughness: 0.88, metalness: 0.0 },
  wallIn:   { color: 0xd6dade, roughness: 0.84, metalness: 0.0 },
  rack:     { color: 0x3a3f46, roughness: 0.52, metalness: 0.32 },  // 랙 판금
  steel:    { color: 0xb9bfc6, roughness: 0.30, metalness: 0.80 },  // 배관·트레이
  cabinet:  { color: 0xd3d7d2, roughness: 0.52, metalness: 0.35 },  // RAL 7035 반
  insulate: { color: 0xe7e9eb, roughness: 0.92, metalness: 0.0 },   // 단열 피복
}

/**
 * 원본 색은 계통을 구분하려고 칠한 다이어그램 색이다 (전력=노랑, 냉각=파랑…).
 * 실제 데이터센터 안은 회색·검정·흰색이 거의 전부이고 색은 표시등·표지판
 * 정도에만 있다. 그래서 채도를 크게 죽이고 명도로만 재질군을 나눈다.
 * 이 한 단계가 "다이어그램 안"과 "실제 실내"를 가르는 가장 큰 차이다.
 */
const _hsl = { h: 0, s: 0, l: 0 }
const _span = new THREE.Vector3()

/** 메시의 로컬 최대 변 길이(m) — 스케일이 1이라 그대로 실치수다 */
function meshSpan(mesh) {
  const g = mesh.geometry
  if (!g) return 99
  if (!g.boundingBox) g.computeBoundingBox()
  g.boundingBox.getSize(_span)
  return Math.max(_span.x, _span.y, _span.z)
}

function realize(mesh) {
  const d = mesh.userData
  if (d.slabMesh || d.floorTop) return { spec: MAT.floor, force: true }
  if (d.structureMesh) return { spec: d.interiorWall ? MAT.wallIn : MAT.wallOut, force: true }

  const c = mesh.material.color
  c.getHSL(_hsl)
  const lum = _hsl.l
  let spec
  if (lum < 0.34) spec = MAT.rack
  else if (lum < 0.62) spec = MAT.steel
  else if (lum < 0.84) spec = MAT.cabinet
  else spec = MAT.insulate

  /* 색을 살리는 것은 "작고 채도 높은 면"뿐이다 — 표시등·비상 표지.
     채도만 보고 살리면 계통 구분용 노랑(전력)이 그대로 남아 복도 전체가
     겨자색이 된다. 실제 데이터센터에서 큰 면은 거의 예외 없이 회색이다 */
  const size = meshSpan(mesh)
  const keepColor = _hsl.s > 0.55 && lum > 0.35 && lum < 0.7 && size < 0.6
  return { spec, force: false, desat: keepColor ? 0.55 : 0.06 }
}

/**
 * 씬을 만들고 1인칭용으로 개조한다.
 * @returns {{root, colliders, terms, lights}}
 */
export function buildWorld(scene) {
  const root = new THREE.Group()
  root.name = 'facility'
  scene.add(root)
  buildFacility(root)          // 도면 지오메트리 (스케일 1 = 실측 미터)

  /* 벽에 문을 뚫는다 — 재질 개조보다 먼저 해야 잘라 낸 조각도 함께
     실내 재질을 받는다 */
  const cuts = cutDoors(root)
  const movedOff = clearBridge(root)
  if (typeof console !== 'undefined' && console.debug) console.debug('문', cuts, '연결통로 정리', movedOff.length)

  /* ── 1. 재질 개조 ── */
  root.traverse((o) => {
    if (o.isLineSegments || o.isLine) {
      /* 다이어그램용 윤곽선 — 실내에서는 모든 모서리에 검은 선이 그어져
         만화처럼 보인다. 전부 끈다 */
      o.visible = false
      return
    }
    if (!o.isMesh || !o.material || !o.material.color) return
    const d = o.userData
    /* hideAlways를 함께 세우는 이유: 이 메시들도 층 태그를 달고 있어서
       나중에 층 필터가 visible을 다시 켜 버린다. 실제로 층 구분용 회색
       바닥판(focusFloor)이 진짜 바닥 4 cm 위에 되살아나 실내 바닥이
       통째로 연회색으로 덮이는 문제가 여기서 났다 */
    const drop = d.ghostShell || d.envelope || d.focusFloor ||
                 (d.terrain && !d.floorTop) || d.groundSurface
    if (drop) { o.visible = false; d.hideAlways = true; return }

    const r = realize(o)
    const std = new THREE.MeshStandardMaterial({
      color: o.material.color.clone(),
      roughness: r.spec.roughness,
      metalness: r.spec.metalness,
    })
    if (r.force) {
      std.color.setHex(r.spec.color)
    } else {
      /* 원본 색의 명암은 남기고 채도만 죽인 뒤, 재질군 기준색과 섞는다 */
      std.color.getHSL(_hsl)
      std.color.setHSL(_hsl.h, _hsl.s * r.desat, _hsl.l)
      std.color.lerp(new THREE.Color(r.spec.color), 0.45)
    }
    o.material = std
    o.material.transparent = false
    o.material.opacity = 1
    o.material.depthWrite = true
    o.castShadow = false
    o.receiveShadow = true
  })

  /* ── 2. 실내 조명 ── */
  const lights = buildLighting(scene, root)

  /* ── 3. 충돌체 · 장비 목록 ── */
  const colliders = collectColliders(root)
  const terms = collectTerms(root)
  const aimMeshes = collectAim(root)

  return { root, colliders, terms, aimMeshes, lights }
}

/* ═══════════════ 조명 ═══════════════ */

function buildLighting(scene, root) {
  /* 데이터센터 화이트스페이스는 천장 라인 조명으로 바닥 500 lx 정도의
     균일한 밝기를 만든다. 그림자를 드리우는 강한 단일광이 아니라
     여러 개의 약한 광원이 고르게 깔린 인상이 핵심이다 */
  const hemi = new THREE.HemisphereLight(0xeef3f9, 0xb9bec5, 0.85)
  scene.add(hemi)
  /* 실내는 벽이 직사광을 막으므로 앰비언트가 없으면 구석이 새까매진다 */
  const amb = new THREE.AmbientLight(0xe8edf3, 0.28)
  scene.add(amb)

  const key = new THREE.DirectionalLight(0xffffff, 0.25)
  key.position.set(60, 120, 40)
  scene.add(key)

  const group = new THREE.Group()
  group.name = 'ceilingLights'
  root.add(group)

  /* 층별로 천장 바로 아래에 라인 조명을 격자 배열한다.
     발광 평면(보이는 것) + 포인트 라이트(비추는 것)를 짝지어 놓는다 */
  const fixtureGeo = new THREE.BoxGeometry(2.4, 0.06, 0.16)
  const fixtureMat = new THREE.MeshStandardMaterial({
    color: 0xffffff, emissive: 0xfff3e2, emissiveIntensity: 0.9, roughness: 1,
  })

  const HALLS = [
    // [floor, x0, x1, y0, y1] 도면 좌표
    ['b1', 2, 103, 2, 37],
    ['b1', 6, 62, 56, 102],
    ['f1', 2, 103, 2, 37],
    ['f1', 6, 62, 56, 102],
    ['f2', 2, 103, 2, 37],
    ['f2', 6, 62, 56, 102],
  ]
  const lampPoints = []
  for (const [floor, x0, x1, y0, y1] of HALLS) {
    const yTop = FLOOR_Y[floor] + 11.4          // 천장(슬래브 아래) 근처
    for (let x = x0 + 4; x < x1; x += 7) {
      for (let y = y0 + 4; y < y1; y += 7) {
        const [wx, wz] = planToWorld(x, y)
        const f = new THREE.Mesh(fixtureGeo, fixtureMat)
        f.position.set(wx, yTop, wz)
        f.userData.floor = floor
        f.userData.fixture = true
        group.add(f)
        lampPoints.push({ floor, x: wx, y: yTop - 1.4, z: wz })
      }
    }
  }

  /* 포인트 라이트는 비싸다 — 전부 켜지 않고, 카메라 주변 것만 켠다.
     풀을 만들어 두고 매 프레임 가까운 순으로 재배치한다 */
  const POOL = 16
  const pool = []
  for (let i = 0; i < POOL; i++) {
    /* three r155+는 물리 기반 광량이 기본이라 PointLight 세기는 칸델라다.
       decay 2에서 3 m 거리에 쓸 만한 밝기를 내려면 수백 단위가 필요하다 */
    const l = new THREE.PointLight(0xfff2df, 0, 30, 2)
    scene.add(l)
    pool.push(l)
  }

  return { hemi, key, group, lampPoints, pool }
}

/** 카메라 주변 램프만 켠다 (매 프레임 호출) */
export function updateLights(lights, camPos, floor) {
  const { lampPoints, pool } = lights
  const near = []
  for (let i = 0; i < lampPoints.length; i++) {
    const p = lampPoints[i]
    if (p.floor !== floor) continue
    const dx = p.x - camPos.x, dz = p.z - camPos.z
    const d2 = dx * dx + dz * dz
    if (d2 < 40 * 40) near.push({ p, d2 })
  }
  near.sort((a, b) => a.d2 - b.d2)
  for (let i = 0; i < pool.length; i++) {
    const l = pool[i]
    if (i < near.length) {
      l.position.set(near[i].p.x, near[i].p.y, near[i].p.z)
      l.intensity = 95
    } else {
      l.intensity = 0
    }
  }
}

/* ═══════════════ 충돌체 ═══════════════ */

/**
 * 수평 AABB 목록을 만든다.
 *
 * 장비를 용어 그룹 단위로 한 상자에 묶으면 안 된다. GPU 랙처럼 홀 전체에
 * 9열로 퍼진 그룹은 바운딩 박스가 홀을 통째로 채워 버려서 걸어 들어갈
 * 자리가 없어진다. mesh 하나하나로 잡고, 공간 해시가 검사량을 감당한다.
 */
function collectColliders(root) {
  const boxes = []
  const bb = new THREE.Box3()

  const push = (b, floor, wall) => {
    if (b.isEmpty()) return
    if (b.max.y - b.min.y < 0.4) return            // 걸레받이·패드·바닥 마감은 넘어간다
    if ((b.max.x - b.min.x) * (b.max.z - b.min.z) < 0.02) return  // 볼트·손잡이 수준
    boxes.push({
      x0: b.min.x, x1: b.max.x, z0: b.min.z, z1: b.max.z,
      y0: b.min.y, y1: b.max.y, floor, wall,
    })
  }

  root.traverse((o) => {
    if (!o.isMesh || !o.visible) return
    const d = o.userData
    /* 바닥·천장·지형은 밟고 지나간다. 배관 유체 표현도 통과 */
    if (d.slabMesh || d.floorTop || d.terrain || d.groundSurface) return
    if (d.flowPart || d.flowParticle || d.fixture) return
    let inTerm = false
    for (let q = o; q; q = q.parent) if (q.userData && q.userData.term) { inTerm = true; break }
    if (!inTerm && !d.structureMesh) return        // 장비도 구조체도 아니면 장식물
    bb.setFromObject(o)
    /* wall 표시는 미니맵이 벽과 장비를 다르게 그리는 데 쓴다 */
    push(bb.clone(), d.floor || null, !inTerm)
  })

  return boxes
}

/* ═══════════════ 장비 목록 ═══════════════ */

function collectTerms(root) {
  const out = []
  const bb = new THREE.Box3()
  const anchor = {}
  for (const [id, p] of LABELS) anchor[id] = p

  for (const term in ctx.groupReg) {
    const g = ctx.groupReg[term]
    bb.setFromObject(g)
    if (bb.isEmpty()) continue
    const c = bb.getCenter(new THREE.Vector3())
    const a = anchor[term]
    out.push({
      id: term,
      group: g,
      center: c,
      box: bb.clone(),
      /* 라벨 앵커가 있으면 그 지점을, 없으면 그룹 중심을 대표 위치로 */
      spot: a ? new THREE.Vector3(a[0] - CX, a[2], a[1] - CZ) : c.clone(),
    })
  }
  return out
}

/**
 * 조준용 메시 목록.
 *
 * 그룹 중심으로 조준을 판정하면 안 된다. 수배전 계통 그룹 하나가 98 m를
 * 가로지르는 식이라, 장비 코앞에 서 있어도 "그룹 중심"은 40 m 밖이고
 * 방향도 옆을 가리킨다. 사람이 보는 것은 눈앞의 그 캐비닛 한 짝이므로
 * 메시 단위로 레이를 쏘고, 맞은 메시가 속한 용어를 집는다.
 *
 * 벽·바닥판도 함께 넣는다. 용어가 없는(aimTerm 없는) 이 메시들이 먼저
 * 맞으면 조준은 없음이 된다 — 벽 너머 장비가 잡히는 것을 막는 장치다.
 */
function collectAim(root) {
  const meshes = []
  for (const term in ctx.groupReg) {
    ctx.groupReg[term].traverse((o) => {
      if (!o.isMesh || o.userData.flowParticle) return
      o.userData.aimTerm = term
      meshes.push(o)
    })
  }
  root.traverse((o) => {
    if (!o.isMesh || o.userData.aimTerm) return
    const d = o.userData
    if (d.structureMesh || d.slabMesh || d.floorTop) meshes.push(o)
  })
  return meshes
}

/* 시선 방향 → yaw. 카메라는 -Z를 보므로 forward = (-sin, 0, -cos) */
const YAW = { E: -Math.PI / 2, W: Math.PI / 2, S: Math.PI, N: 0 }

/**
 * 스폰 지점 — 충돌 격자를 실제로 훑어서 "사방 2 m 여유 + 가장 긴 시선"이
 * 나오는 좌표를 골랐다. 넓이는 면적이 아니라 시선 길이로 느껴지므로,
 * 첫 화면이 홀 끝까지 뚫려 있는 것이 중요하다.
 */
export const SPAWNS = [
  { id: 'f2-hall', floor: 'f2', label: '2층 전산실 (86 m 축)', x: 11, y: 31, yaw: YAW.E },
  { id: 'f1-hall', floor: 'f1', label: '1층 주 복도 (99 m 축)', x: 101, y: 29, yaw: YAW.W },
  { id: 'b1-mech', floor: 'b1', label: '지하 기계실 (55 m 축)', x: 11, y: 33, yaw: YAW.E },
]
