import * as THREE from 'three'
import { LABELS } from '../scene/buildFacility.js'
import { ctx, LEVELS } from '../scene/helpers.js'

/**
 * 도면 모델(buildFacility)에서 1인칭 탐색에 필요한 두 가지를 뽑아낸다:
 * 걸어 다닐 때 부딪히는 상자 목록과, 조준·설명에 쓰는 장비 목록.
 *
 * 실내 마감(재질·조명·숨길 메시)은 탐색 코드(src/main.js)가 직접 입힌다.
 */

/** 층 id → 바닥 높이(m). LEVELS는 [B1, 1F, 2F, 옥상] */
export const FLOOR_Y = { b1: LEVELS[0], f1: LEVELS[1], f2: LEVELS[2], roof: LEVELS[3] }

/* 부지 중심 (도면 좌표 기준) */
const CX = 72, CZ = 56

/**
 * 수평 AABB 목록을 만든다.
 *
 * 장비를 용어 그룹 단위로 한 상자에 묶으면 안 된다. GPU 랙처럼 홀 전체에
 * 9열로 퍼진 그룹은 바운딩 박스가 홀을 통째로 채워 버려서 걸어 들어갈
 * 자리가 없어진다. mesh 하나하나로 잡고, 공간 해시가 검사량을 감당한다.
 */
export function collectColliders(root) {
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

export function collectTerms(root) {
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

