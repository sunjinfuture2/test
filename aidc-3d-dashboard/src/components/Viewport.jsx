import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { buildFacility, LABELS } from '../scene/buildFacility.js'
import { ctx } from '../scene/helpers.js'
import { CX, CZ, MZ } from '../scene/helpers.js'
import { TERMS, CATS } from '../data/terms.js'
import { useAppStore } from '../store/useAppStore.js'

/**
 * 3D 뷰포트 — 레퍼런스(용어사전 HTML)의 카메라·라벨·인터랙션 로직을
 * 그대로 포팅한 명령형 three.js 계층. React는 컨테이너와 상태 구독만 담당.
 *
 * 모션 동일성 체크리스트 (레퍼런스 대비):
 *  · 좌드래그 궤도 / 우드래그 팬 / 휠 커서줌(레이캐스트 타깃 이동) / 시점 초기화
 *  · 카메라 이동 중 라벨 페이드아웃 → 정지 260ms 후 방사형 재배치
 *  · 호버: 발광 하이라이트 + 커서 추종 툴팁
 *  · 선택: 나머지 회색화(Focus) + 굵은 검정 윤곽선 + 선택 리더 강조
 *  · 외벽 카메라방향 자동 페이드, 상부 슬래브 탑뷰/선택 연동 페이드
 *  · 배관 그라디언트 + 흐름 패킷(꼬리 4개) 애니메이션, 계통별 토글
 */

function V(x, y, z) { return new THREE.Vector3(x - CX, z, y - CZ) }

/* 층 판정 임계값 — 매핑 후 좌표(층 피치 20.25m) 기준 */
const FLOOR_OF_Z = (z) => (z < 18 ? 'b1' : z < 38.25 ? 'f1' : z < 58.5 ? 'f2' : 'roof')
/* 층별 z-대역 (매핑 후 좌표) — 흐름 배관/도트의 층 아이솔레이션 판정용 */
const FLOOR_BANDS = { b1: [-99, 18], f1: [18, 38.25], f2: [38.25, 58.5], roof: [58.5, 999] }

export default function Viewport() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    const canvas = host.querySelector('canvas')
    const leadersSvg = host.querySelector('.leaders')
    const selectedLeaderSvg = host.querySelector('.selected-leader')
    const labelsDiv = host.querySelector('.labels')
    const tip = host.querySelector('.tip3d')

    /* ── 렌더러/카메라 ── */
    // 고정 디자인 캔버스(1908×928)가 scale로 축소되므로, 선명도를 위해 배율을 픽셀비율에 반영
    const designScale = () => window.__designScale || 1
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    const applyPixelRatio = () =>
      renderer.setPixelRatio(Math.min(Math.max((window.devicePixelRatio || 1) * designScale(), 0.75), 2.5))
    applyPixelRatio()
    renderer.setClearColor(0xffffff, 1)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    const scene = new THREE.Scene()
    // 시인성 확장: 수평 1.8배(면적 3.24배) · 수직 2.2배(층고 피치 20.25→44.6m)
    // 도면 좌표계는 그대로 두고 씬 루트 그룹을 비등방 스케일한다
    const FS = new THREE.Vector3(1.8, 2.2, 1.8)
    const camera = new THREE.PerspectiveCamera(33, 1, 1, 8000)
    const target = new THREE.Vector3(-40, 21, -11)
    const sph = { az: -0.62, pol: 1.02, dist: 700 }
    const HOME = { az: -0.62, pol: 1.02, dist: 700, tx: -40, ty: 33, tz: -11 }

    function updateCam() {
      const sp = Math.sin(sph.pol), cp = Math.cos(sph.pol)
      camera.position.set(
        target.x + sph.dist * sp * Math.sin(sph.az),
        target.y + sph.dist * cp,
        target.z + sph.dist * sp * Math.cos(sph.az))
      camera.lookAt(target)
      markCameraMoving()
    }

    // 고명도 파스텔 무드: 하이키 조명 (그림자 최소, 밝은 바닥 반사광)
    /* 전체 컬러톤 명도 상향 */
    scene.add(new THREE.HemisphereLight(0xffffff, 0xeef1f5, 1.4))
    const dir1 = new THREE.DirectionalLight(0xffffff, 0.52); dir1.position.set(120, 180, 80); scene.add(dir1)
    const dir2 = new THREE.DirectionalLight(0xffffff, 0.26); dir2.position.set(-100, 80, -120); scene.add(dir2)

    /* ── 시설 구축 (스케일 그룹) ── */
    const facilityRoot = new THREE.Group()
    facilityRoot.scale.copy(FS)
    scene.add(facilityRoot)
    buildFacility(facilityRoot)
    const { groupReg, pickables, wallsFade, flows, slabs } = ctx

    /* ── 비선택 장식물 ───────────────────────────────────────────
       책상·모니터·집기·수목·바닥 마킹처럼 용어로 등록되지 않아 선택할 수
       없는 것들. 장비를 고르면 흰색으로 남겨두는 대신 아예 감춘다.
       구조체(벽·슬래브)·지형·바닥면·고스트 쉘은 맥락을 주므로 제외한다. */
    const decorObjects = []
    facilityRoot.traverse((o) => {
      if (!o.isMesh && !o.isLineSegments && !o.isLine) return
      const u = o.userData || {}
      if (u.structureMesh || u.structure || u.floorTop || u.terrain || u.ghostShell || u.selectionOutline) return
      for (let p = o; p; p = p.parent) if (p.userData && p.userData.term) return
      decorObjects.push(o)
    })

    /* 장비 색 보정 — 파스텔 무드: 명도는 유지하고 채도만 살짝 올린다 */
    ;(function enhanceBaseEquipmentColors() {
      const seen = []
      for (const id in groupReg) groupReg[id].traverse((o) => {
        if (!o.isMesh || !o.material || !o.material.color || o.userData.flowPart || o.userData.selectionOutline) return
        if (seen.indexOf(o.material) !== -1) return
        seen.push(o.material)
        const hsl = { h: 0, s: 0, l: 0 }
        o.material.color.getHSL(hsl)
        if (hsl.s > 0.04) hsl.s = Math.min(1, hsl.s * 1.12 + 0.015)
        o.material.color.setHSL(hsl.h, hsl.s, hsl.l)
      })
    })()

    /* ── 라벨/리더 생성 ── */
    const labelObjs = []
    const anchorZ = {}
    for (let i = 0; i < LABELS.length; i++) {
      const id = LABELS[i][0]
      const t = TERMS[id]
      anchorZ[id] = MZ(LABELS[i][1][2])
      const div = document.createElement('div')
      div.className = 'lbl'
      div.setAttribute('data-label-id', id)
      div.style.setProperty('--cat', CATS[t.cat].color)
      div.innerHTML = '<div class="lt">' + t.name + '</div><div class="le">' + t.en + '</div>'
      div.addEventListener('click', (e) => { e.stopPropagation(); hideTip(); useAppStore.getState().setSelected(id) })
      div.addEventListener('mouseenter', (e) => showTip(id, e))
      div.addEventListener('mousemove', moveTip)
      div.addEventListener('mouseleave', hideTip)
      labelsDiv.appendChild(div)
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      ln.setAttribute('stroke', '#929497'); ln.setAttribute('stroke-width', '1.6')
      ln.setAttribute('stroke-dasharray', '0.1 7'); ln.setAttribute('stroke-linecap', 'round')
      ln.setAttribute('stroke-opacity', '0.88')
      leadersSvg.appendChild(ln)
      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      dot.setAttribute('r', '1.25'); dot.setAttribute('fill', '#929497')
      dot.setAttribute('stroke', '#929497'); dot.setAttribute('stroke-opacity', '0.88')
      leadersSvg.appendChild(dot)
      labelObjs.push({
        id, anchor: V(LABELS[i][1][0], LABELS[i][1][1], MZ(LABELS[i][1][2])).multiply(FS),
        div, line: ln, dot, hidden: false, sx: 0, sy: 0,
        floor: FLOOR_OF_Z(MZ(LABELS[i][1][2])),
      })
    }

    /* ── 라벨 레이아웃 (레퍼런스 알고리즘 포팅) ── */
    let labelsDirty = true
    let labelTimer = null
    function markCameraMoving() {
      host.classList.add('labels-moving')
      labelsDirty = true
      if (labelTimer) clearTimeout(labelTimer)
      labelTimer = setTimeout(() => {
        host.classList.remove('labels-moving')
        layoutLabels(true)
      }, 160)
    }

    function layoutLabels(force) {
      if (!useAppStore.getState().labelsOn) return
      if (host.classList.contains('labels-moving')) return
      if (!force && !labelsDirty) return
      labelsDirty = false
      const w = host.clientWidth, h = host.clientHeight
      if (!w || !h) return
      const items = []
      const labelW = Math.max(104, Math.min(140, w * 0.105)), labelH = 31
      for (let i = 0; i < labelObjs.length; i++) {
        const L = labelObjs[i]
        if (L.hidden) {
          L.div.classList.add('hid'); L.line.setAttribute('opacity', '0'); L.dot.setAttribute('opacity', '0')
          continue
        }
        const p = L.anchor.clone().project(camera)
        L.sx = (p.x * 0.5 + 0.5) * w; L.sy = (-p.y * 0.5 + 0.5) * h
        L.div.classList.remove('hid'); L.div.style.width = labelW + 'px'; L.div.style.maxWidth = labelW + 'px'
        items.push(L)
      }
      if (!items.length) return
      /* 단층 원본과 동일한 라벨 프레임 공식 */
      const frame = { l: Math.max(18, w * 0.018) + 20, r: w - Math.max(18, w * 0.018) - 20, t: Math.max(16, h * 0.025) + 50, b: h - Math.max(16, h * 0.025) - 40 }
      const gapX = Math.max(30, w * 0.022), gapY = Math.max(26, h * 0.038), innerW = frame.r - frame.l
      const horizontalCapacity = Math.max(4, Math.floor((innerW + gapX) / (labelW + gapX)))
      let topCount = Math.min(horizontalCapacity, Math.ceil(items.length * 0.34))
      let bottomCount = Math.min(horizontalCapacity, Math.ceil(items.length * 0.34))
      let sideTotal = Math.max(0, items.length - topCount - bottomCount)
      let leftCount = Math.ceil(sideTotal / 2), rightCount = sideTotal - leftCount
      const maxSide = Math.max(leftCount, rightCount), usableSideH = frame.b - frame.t - labelH * 2 - gapY * 2
      if (maxSide > 1 && usableSideH / (maxSide - 1) < labelH + gapY) {
        const need = items.length - (Math.floor(usableSideH / (labelH + gapY)) + 1) * 2
        topCount = Math.min(horizontalCapacity, Math.ceil(need / 2)); bottomCount = Math.min(horizontalCapacity, need - topCount)
        sideTotal = Math.max(0, items.length - topCount - bottomCount); leftCount = Math.ceil(sideTotal / 2); rightCount = sideTotal - leftCount
      }
      const slots = []
      function addHorizontal(count, y, side) {
        if (!count) return
        const space = innerW - labelW
        for (let n = 0; n < count; n++) slots.push({ x: frame.l + (count === 1 ? space / 2 : space * n / (count - 1)), y, side })
      }
      function addVertical(count, x, side) {
        if (!count) return
        const y0 = frame.t + labelH + gapY, y1 = frame.b - labelH * 2 - gapY
        for (let n = 0; n < count; n++) slots.push({ x, y: count === 1 ? (y0 + y1) / 2 : y0 + (y1 - y0) * n / (count - 1), side })
      }
      addHorizontal(topCount, frame.t, 'top'); addHorizontal(bottomCount, frame.b - labelH, 'bottom')
      addVertical(leftCount, frame.l, 'left'); addVertical(rightCount, frame.r - labelW, 'right')
      ;(function addAvoidanceCandidates() {
        const maxX = frame.r - labelW, yTop = frame.t, yBottom = frame.b - labelH
        const stepX = Math.max(18, (labelW + gapX) / 4), stepY = Math.max(14, (labelH + gapY) / 3)
        for (let ax = frame.l; ax <= maxX + 0.5; ax += stepX) { slots.push({ x: Math.min(ax, maxX), y: yTop, side: 'top' }); slots.push({ x: Math.min(ax, maxX), y: yBottom, side: 'bottom' }) }
        slots.push({ x: maxX, y: yTop, side: 'top' }); slots.push({ x: maxX, y: yBottom, side: 'bottom' })
        const minY = frame.t + labelH + gapY, maxY = frame.b - labelH * 2 - gapY
        for (let ay = minY; ay <= maxY + 0.5; ay += stepY) { slots.push({ x: frame.l, y: Math.min(ay, maxY), side: 'left' }); slots.push({ x: frame.r - labelW, y: Math.min(ay, maxY), side: 'right' }) }
        slots.push({ x: frame.l, y: maxY, side: 'left' }); slots.push({ x: frame.r - labelW, y: maxY, side: 'right' })
      })()
      function buildModelAvoidRects() {
        const rects = []
        const bb = new THREE.Box3()
        const v = new THREE.Vector3()
        scene.updateMatrixWorld(true); camera.updateMatrixWorld(true)
        scene.traverse((o) => {
          if (!o.isMesh || !o.visible || o.userData.groundSurface || o.userData.selectionOutline || o.userData.flowParticle) return
          bb.setFromObject(o)
          if (bb.isEmpty()) return
          let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity, valid = false
          for (let xi = 0; xi < 2; xi++) for (let yi = 0; yi < 2; yi++) for (let zi = 0; zi < 2; zi++) {
            v.set(xi ? bb.max.x : bb.min.x, yi ? bb.max.y : bb.min.y, zi ? bb.max.z : bb.min.z).project(camera)
            if (!isFinite(v.x) || !isFinite(v.y)) continue
            const px = (v.x * 0.5 + 0.5) * w, py = (-v.y * 0.5 + 0.5) * h
            valid = true
            minX = Math.min(minX, px); maxX = Math.max(maxX, px); minY = Math.min(minY, py); maxY = Math.max(maxY, py)
          }
          if (!valid || maxX < 0 || minX > w || maxY < 0 || minY > h) return
          rects.push({ l: minX - 4, r: maxX + 4, t: minY - 4, b: maxY + 4 })
        })
        return rects
      }
      const modelAvoidKey = [w, h, camera.position.x.toFixed(3), camera.position.y.toFixed(3), camera.position.z.toFixed(3), camera.quaternion.x.toFixed(5), camera.quaternion.y.toFixed(5), camera.quaternion.z.toFixed(5), camera.quaternion.w.toFixed(5)].join('|')
      let modelAvoidRects
      if (layoutLabels._key === modelAvoidKey && layoutLabels._rects) modelAvoidRects = layoutLabels._rects
      else { modelAvoidRects = buildModelAvoidRects(); layoutLabels._key = modelAvoidKey; layoutLabels._rects = modelAvoidRects }
      function modelOverlapPenalty(slot) {
        const l = slot.x - 3, r = slot.x + labelW + 3, t = slot.y - 3, b = slot.y + labelH + 3
        let maxArea = 0, hits = 0
        for (let mi = 0; mi < modelAvoidRects.length; mi++) {
          const mr = modelAvoidRects[mi]
          const ox = Math.min(r, mr.r) - Math.max(l, mr.l), oy = Math.min(b, mr.b) - Math.max(t, mr.t)
          if (ox > 0 && oy > 0) { hits++; maxArea = Math.max(maxArea, ox * oy) }
        }
        return maxArea ? 240000 + maxArea * 45 + Math.min(hits, 8) * 3500 : 0
      }
      for (let mp = 0; mp < slots.length; mp++) slots[mp].modelPenalty = modelOverlapPenalty(slots[mp])
      function cross(a, b, c, d) {
        function ccw(p1, p2, p3) { return (p3.y - p1.y) * (p2.x - p1.x) > (p2.y - p1.y) * (p3.x - p1.x) }
        return ccw(a, c, d) !== ccw(b, c, d) && ccw(a, b, c) !== ccw(a, b, d)
      }
      function segmentHitsText(a, b, slot) {
        const r = { l: slot.x + 5, r: slot.x + labelW, t: slot.y + 1, b: slot.y + labelH - 1 }
        if (a.x > r.l && a.x < r.r && a.y > r.t && a.y < r.b) return true
        const tl = { x: r.l, y: r.t }, tr = { x: r.r, y: r.t }, br = { x: r.r, y: r.b }, bl = { x: r.l, y: r.b }
        return cross(a, b, tl, tr) || cross(a, b, tr, br) || cross(a, b, br, bl) || cross(a, b, bl, tl)
      }
      function endpoint(slot, item) {
        const top = { x: slot.x, y: slot.y }, bottom = { x: slot.x, y: slot.y + labelH - 2 }, anchor = { x: item.sx, y: item.sy }
        const topScore = (segmentHitsText(anchor, top, slot) ? 1000000 : 0) + Math.hypot(anchor.x - top.x, anchor.y - top.y)
        const bottomScore = (segmentHitsText(anchor, bottom, slot) ? 1000000 : 0) + Math.hypot(anchor.x - bottom.x, anchor.y - bottom.y)
        return topScore <= bottomScore ? top : bottom
      }
      function slotsOverlap(a, b) {
        return !(a.x + labelW + gapX <= b.x || b.x + labelW + gapX <= a.x || a.y + labelH + gapY <= b.y || b.y + labelH + gapY <= a.y)
      }
      const cx2 = w / 2, cy2 = h / 2, used = {}, assigned = []
      items.sort((a, b) => Math.hypot(b.sx - cx2, b.sy - cy2) - Math.hypot(a.sx - cx2, a.sy - cy2))
      for (let k = 0; k < items.length; k++) {
        const item = items[k]
        let best = -1, bestScore = Infinity
        let ivx = item.sx - cx2, ivy = item.sy - cy2
        const il = Math.max(1, Math.hypot(ivx, ivy)); ivx /= il; ivy /= il
        for (let pass2 = 0; pass2 < 2; pass2++) {
          for (let q = 0; q < slots.length; q++) {
            if (used[q]) continue
            let blocked = false
            for (let ba = 0; ba < assigned.length; ba++) if (slotsOverlap(slots[q], assigned[ba].slot)) { blocked = true; break }
            if (pass2 === 0 && blocked) continue
            const e = endpoint(slots[q], item)
            let svx = e.x - cx2, svy = e.y - cy2
            const sl = Math.max(1, Math.hypot(svx, svy)); svx /= sl; svy /= sl
            let score = Math.hypot(item.sx - e.x, item.sy - e.y) + (1 - (ivx * svx + ivy * svy)) * 1100 + (slots[q].modelPenalty || 0) + (blocked ? 5000000 : 0)
            for (let a = 0; a < assigned.length; a++) if (cross({ x: item.sx, y: item.sy }, e, { x: assigned[a].item.sx, y: assigned[a].item.sy }, assigned[a].end)) score += 100000
            if (score < bestScore) { bestScore = score; best = q }
          }
          if (best >= 0) break
        }
        if (best < 0) continue
        used[best] = true
        assigned.push({ item, slot: slots[best], end: endpoint(slots[best], item) })
      }
      function assignmentScore(arr) {
        let total = 0
        for (let i = 0; i < arr.length; i++) {
          const ai = arr[i].item, ae = endpoint(arr[i].slot, ai)
          const avx = ai.sx - cx2, avy = ai.sy - cy2, al = Math.max(1, Math.hypot(avx, avy))
          const evx = ae.x - cx2, evy = ae.y - cy2, el = Math.max(1, Math.hypot(evx, evy))
          total += Math.hypot(ai.sx - ae.x, ai.sy - ae.y) + (1 - (avx / al * evx / el + avy / al * evy / el)) * 700 + (arr[i].slot.modelPenalty || 0)
          for (let r = 0; r < arr.length; r++) if (r !== i && segmentHitsText({ x: ai.sx, y: ai.sy }, ae, arr[r].slot)) total += 45000
          for (let j = i + 1; j < arr.length; j++) {
            const aj = arr[j].item, je = endpoint(arr[j].slot, aj)
            if (cross({ x: ai.sx, y: ai.sy }, ae, { x: aj.sx, y: aj.sy }, je)) total += 140000
            if (slotsOverlap(arr[i].slot, arr[j].slot)) total += 8000000
          }
        }
        return total
      }
      /* ── 배치 최적화 ─────────────────────────────────────────────
         교환 후보마다 assignmentScore를 통째로 다시 계산하면 O(패스 × n⁴)이라
         라벨 28개에서 1.5초가 걸린다(13개는 11ms — n에 따라 폭발한다).
         교환은 두 항목의 슬롯만 뒤바꾸므로, 달라지는 항은 그 둘이 관련된 것뿐이다.
         슬롯 겹침 항은 슬롯 집합이 그대로라 아예 불변이므로 델타에서 빠진다.
         → 관련 항만 더해 차이를 구하면 교환당 O(n)이 된다. */
      const nAsg = assigned.length
      const ends = new Array(nAsg)
      for (let i = 0; i < nAsg; i++) ends[i] = endpoint(assigned[i].slot, assigned[i].item)
      function soloTerm(i) {
        const ai = assigned[i].item, ae = ends[i]
        const avx = ai.sx - cx2, avy = ai.sy - cy2, al = Math.max(1, Math.hypot(avx, avy))
        const evx = ae.x - cx2, evy = ae.y - cy2, el = Math.max(1, Math.hypot(evx, evy))
        return Math.hypot(ai.sx - ae.x, ai.sy - ae.y)
          + (1 - (avx / al * evx / el + avy / al * evy / el)) * 700
          + (assigned[i].slot.modelPenalty || 0)
      }
      function hitTerm(i, r) {
        const ai = assigned[i].item
        return segmentHitsText({ x: ai.sx, y: ai.sy }, ends[i], assigned[r].slot) ? 45000 : 0
      }
      function crossTerm(i, j) {
        const ai = assigned[i].item, aj = assigned[j].item
        return cross({ x: ai.sx, y: ai.sy }, ends[i], { x: aj.sx, y: aj.sy }, ends[j]) ? 140000 : 0
      }
      /* p 또는 q가 관련된 항의 합 (겹침 항 제외 — 교환에 불변) */
      function affectedScore(p, q) {
        let t = soloTerm(p) + soloTerm(q)
        for (let r = 0; r < nAsg; r++) {
          if (r !== p) { t += hitTerm(p, r); t += crossTerm(r, p) }
          if (r !== q) { t += hitTerm(q, r); t += crossTerm(r, q) }
          if (r !== p && r !== q) { t += hitTerm(r, p); t += hitTerm(r, q) }
        }
        return t - crossTerm(p, q)   // 위에서 두 번 더해진 (p,q) 쌍 보정
      }
      function swapSlots(p, q) {
        const hold = assigned[p].slot; assigned[p].slot = assigned[q].slot; assigned[q].slot = hold
        ends[p] = endpoint(assigned[p].slot, assigned[p].item)
        ends[q] = endpoint(assigned[q].slot, assigned[q].item)
      }
      let currentScore = assignmentScore(assigned)
      /* 델타로 줄여도 교환 후보 자체는 O(n²)이므로, 라벨이 지금보다 크게 늘 때를
         대비한 안전장치로 상한을 둔다. 현재 28개에서는 180ms 안에 끝나 걸리지
         않으므로 배치 결과는 종전과 동일하다. */
      const optDeadline = performance.now() + 250
      for (let pass = 0; pass < 18; pass++) {
        let bestSwapI = -1, bestSwapJ = -1, bestSwapScore = currentScore
        for (let si = 0; si < nAsg - 1; si++) for (let sj = si + 1; sj < nAsg; sj++) {
          const before = affectedScore(si, sj)
          swapSlots(si, sj)
          const trial = currentScore + (affectedScore(si, sj) - before)
          swapSlots(si, sj)
          if (trial < bestSwapScore - 0.5) { bestSwapScore = trial; bestSwapI = si; bestSwapJ = sj }
        }
        if (bestSwapI < 0) break
        swapSlots(bestSwapI, bestSwapJ)
        assigned[bestSwapI].end = ends[bestSwapI]
        assigned[bestSwapJ].end = ends[bestSwapJ]
        currentScore = bestSwapScore
        if (performance.now() > optDeadline) break
      }
      const selected = useAppStore.getState().selected
      for (let z2 = 0; z2 < assigned.length; z2++) {
        const A = assigned[z2], item = A.item, x = A.slot.x, y = A.slot.y
        item.div.style.left = x + 'px'; item.div.style.top = y + 'px'
        const attach = endpoint(A.slot, item), lineX = attach.x, lineY = attach.y
        const hit = selectedOutlinePoint(item, lineX, lineY, w, h)
        item.line.setAttribute('x1', hit.x); item.line.setAttribute('y1', hit.y)
        item.line.setAttribute('x2', lineX); item.line.setAttribute('y2', lineY)
        item.dot.setAttribute('cx', hit.x); item.dot.setAttribute('cy', hit.y)
        item.line.setAttribute('opacity', item.id === selected ? '1' : (selected ? '0' : '.78'))
        item.dot.setAttribute('opacity', item.id === selected ? '1' : (selected ? '0' : '.78'))
      }
    }

    function refreshSelectedLeader() {
      const w = host.clientWidth, h = host.clientHeight
      const selected = useAppStore.getState().selected
      for (let i = 0; i < labelObjs.length; i++) {
        const L = labelObjs[i]
        const x2 = parseFloat(L.line.getAttribute('x2')), y2 = parseFloat(L.line.getAttribute('y2'))
        if (!isFinite(x2) || !isFinite(y2)) continue
        const hit = (L.id === selected) ? selectedOutlinePoint(L, x2, y2, w, h) : { x: L.sx, y: L.sy }
        L.line.setAttribute('x1', hit.x); L.line.setAttribute('y1', hit.y)
        L.dot.setAttribute('cx', hit.x); L.dot.setAttribute('cy', hit.y)
      }
    }

    /* ── 툴팁 ── */
    function showTip(id, e) {
      const t = TERMS[id]
      if (!t) return
      tip.style.setProperty('--tip-color', CATS[t.cat].color)
      tip.classList.toggle('power-tip', t.cat === 'power')
      tip.innerHTML = '<div class="t-name">' + t.name + '</div><div class="t-en">' + t.en + '</div><div class="t-short">' + t.short + '</div>'
      tip.style.display = 'block'
      if (e) moveTip(e)
    }
    function moveTip(e) {
      // 스케일된 캔버스: 화면 px → 디자인 px 변환 후 배치
      const s = designScale()
      const rect = host.getBoundingClientRect()
      const ex = (e.clientX - rect.left) / s, ey = (e.clientY - rect.top) / s
      const pad = 14
      let x = ex + pad, y = ey + pad
      const tw = tip.offsetWidth, th = tip.offsetHeight
      if (x + tw > host.clientWidth - 8) x = ex - tw - pad
      if (y + th > host.clientHeight - 8) y = ey - th - pad
      tip.style.left = x + 'px'; tip.style.top = y + 'px'
    }
    function hideTip() { tip.style.display = 'none' }

    /* ── 호버/선택/포커스/윤곽선 (레퍼런스 포팅) ── */
    function groupMats(term, fn) {
      const g = groupReg[term]
      if (!g) return
      g.traverse((o) => { if (o.material) fn(o) })
    }
    let hovered = null
    function setHover(term) {
      if (hovered === term) return
      hovered = term
      /* 호버 시 채도 틴트 없이 선택과 동일한 검은 라인 아웃라인만 표시 */
      clearHoverOutline()
      if (hovered && hovered !== useAppStore.getState().selected) buildOutlineEdges(hovered, hoverOutline)
    }

    /* ── 선택 포커스 ──────────────────────────────────────────
       장비를 고르면 나머지 모델은 흰색 쪽으로 강하게 날리고 반투명하게
       낮춰, 선택한 장비만 색과 윤곽을 유지하도록 한다. 벽·슬래브·지형은
       렌더 루프가 매 프레임 불투명도를 몰아가므로 여기서 값을 잡아도
       덮이는데, 대신 루프 쪽 목표값에 FOCUS_STRUCT_OP를 곱해 함께 낮춘다. */
    /* 선택 외 면은 램버트 음영을 지워 '회색'이 아닌 평평한 흰색으로 만들고
       불투명도를 크게 낮춘다. 형태는 아주 옅은 윤곽선만 남겨 맥락을 준다. */
    /* 면은 흰 배경에 묻혀 불투명도를 올려도 보이지 않는다 — 형태는 전적으로
       윤곽선이 만든다. 그래서 선 쪽을 3단으로 나눈다:
         진하게 — 장비 윤곽선, 건물 외벽선 (형태를 읽는 기준)
         연하게 — 칸막이·슬래브·지형선 (있다는 것만 알 정도) */
    /* 램버트 음영을 없애고 재질을 지정한 색으로 평평하게 칠한다.
       발광을 지원하지 않는 재질(Basic 등)은 색을 그대로 쓴다 */
    function flatten(mat, color) {
      if (mat.emissive) {
        mat.color.setRGB(0, 0, 0)
        mat.emissive.copy(color)
      } else {
        mat.color.copy(color)
      }
    }
    const FOCUS_EDGE_COLOR = new THREE.Color('#a9aeb4') // 선택 외 장비 윤곽선 색
    /* 선택 외 장비(배관 루프 포함) 면 — 아주 연한 파랑으로 칠하고 불투명하게
       둔다. 반투명이면 내부 부속까지 비쳐 형태가 지저분해진다. */
    const FOCUS_TERM_COLOR = new THREE.Color('#e5edf8')
    const FOCUS_TERM_OP = 1        // 불투명 — 내부가 비쳐 보이지 않게
    /* 층 바닥판 — 층이 구분될 정도의 연한 회색 */
    const FOCUS_OP = 0.16          // 선택 외 면 불투명도 배율
    const FOCUS_EDGE_OP = 0.5      // 장비 윤곽선 불투명도 (절대값)
    const FOCUS_EXT_EDGE = 0.72    // 건물 외벽 윤곽선 불투명도
    const FOCUS_SOFT_EDGE = 0.12   // 칸막이·슬래브·지형 윤곽선 불투명도
    const FOCUS_STRUCT_OP = 0.12   // 벽·슬래브 등 구조체 면 불투명도 배율

    /* ── 포커스용 보조 윤곽선 ────────────────────────────────────
       box()만 addEdges를 호출하므로 cylY·cylDir·noedge 박스로 이루어진 설비
       (유류탱크는 전부, GIS는 모선·부싱·캐비닛)는 윤곽선이 아예 없다. 면만으로는
       다른 장비처럼 읽히지 않으므로, 빌드 후 한 번 만들어 두고 포커스 중에만 켠다.
       작은 디테일까지 그리면 어지러워지므로 일정 크기 이상만 대상으로 한다. */
    /* 건물 외곽선 — buildFacility가 층별로 한 겹씩 만들어 둔 것 */
    const envelopeLines = []
    const focusFloors = []
    facilityRoot.traverse((o) => {
      if (o.userData.envelope) envelopeLines.push(o)
      if (o.userData.focusFloor) focusFloors.push(o)
    })

    const FOCUS_EDGE_MIN_R = 0.55  // 지오메트리 바운딩스피어 반경 하한 (도면 m)
    const focusEdges = []
    for (const term in groupReg) {
      const targets = []
      groupReg[term].traverse((o) => {
        if (!o.isMesh || !o.geometry || o.userData.hasEdge) return
        if (o.userData.flowPart || o.userData.floorTop || o.userData.selectionOutline) return
        o.geometry.computeBoundingSphere()
        const bs = o.geometry.boundingSphere
        if (!bs || bs.radius < FOCUS_EDGE_MIN_R) return
        targets.push(o)
      })
      for (let i = 0; i < targets.length; i++) {
        const o = targets[i]
        /* 28° 임계 — 매끄러운 원통·구의 측면은 걸러지고 림·모서리만 남는다 */
        const ls = new THREE.LineSegments(
          new THREE.EdgesGeometry(o.geometry, 28),
          new THREE.LineBasicMaterial({
            color: FOCUS_EDGE_COLOR.clone(), transparent: true,
            opacity: FOCUS_EDGE_OP, depthWrite: false,
          }),
        )
        ls.material.userData = { baseOp: FOCUS_EDGE_OP }
        ls.position.copy(o.position)
        ls.quaternion.copy(o.quaternion)
        ls.scale.copy(o.scale)
        ls.userData.focusEdge = true
        ls.userData.floor = o.userData.floor
        ls.visible = false
        o.parent.add(ls)
        focusEdges.push({ ls, src: o })
      }
    }

    let focusActive = false
    let focusSaved = []
    let focusHidden = []
    function restoreFocus() {
      for (let i = 0; i < focusHidden.length; i++) focusHidden[i].visible = true
      focusHidden = []
      for (let i = 0; i < focusEdges.length; i++) focusEdges[i].ls.visible = false
      for (let i = 0; i < envelopeLines.length; i++) envelopeLines[i].visible = false
      for (let i = 0; i < focusFloors.length; i++) focusFloors[i].visible = false
      for (let i = 0; i < focusSaved.length; i++) {
        const f = focusSaved[i]
        f.material.color.copy(f.color)
        if (f.emissive) f.material.emissive.copy(f.emissive)
        f.material.opacity = f.opacity
        f.material.transparent = f.transparent
        f.material.depthWrite = f.depthWrite
        if (f.hadVC) { f.material.vertexColors = true; f.material.needsUpdate = true }
      }
      focusSaved = []
      focusActive = false
    }
    function applyFocus(term) {
      restoreFocus()
      const keep = groupReg[term]
      const whiteTarget = new THREE.Color('#ffffff')
      scene.traverse((o) => {
        if (o.userData.groundSurface) {
          /* 대지 그라데이션 면 — 셰이더 재질이라 아래 색 분기를 타지 않고
             지하층 높이에 깔린 큰 흰 시트로 남는다. 포커스 중에는 감춘다 */
          if (o.visible) { o.visible = false; focusHidden.push(o) }
          return
        }
        if (!o.material || !o.material.color || o.userData.selectionOutline) return
        /* 건물 외곽선·층 바닥판은 포커스 전용이라 자체 색·불투명도를 지킨다 */
        if (o.userData.envelope || o.userData.focusFloor) return
        /* 선택 그룹 제외 + 다른 용어 그룹(=선택 가능한 장비)인지 판별 */
        let inTerm = false
        for (let p = o; p; p = p.parent) {
          if (p === keep) return
          if (p.userData && p.userData.term) inTerm = true
        }
        for (let k = 0; k < focusSaved.length; k++) if (focusSaved[k].material === o.material) return
        const entry = {
          material: o.material,
          color: o.material.color.clone(),
          opacity: o.material.opacity,
          transparent: o.material.transparent,
          depthWrite: o.material.depthWrite,
        }
        if (o.material.emissive) entry.emissive = o.material.emissive.clone()
        if (o.material.vertexColors) {
          entry.hadVC = true
          o.material.vertexColors = false
          o.material.needsUpdate = true
        }
        const base = (o.material.userData && o.material.userData.baseOp !== undefined)
          ? o.material.userData.baseOp : o.material.opacity
        const isLine = o.isLineSegments === true || o.isLine === true
        if (isLine && o.userData.interiorWall) {
          /* 칸막이선 — 렌더 루프가 건드리지 않으므로 여기서 연하게 낮춘다 */
          o.material.opacity = Math.min(1, base * FOCUS_SOFT_EDGE)
        } else if (isLine && o.userData.structure) {
          /* 외벽·슬래브·지형선은 원래 색을 지키고, 불투명도는 렌더 루프가
             FOCUS_EXT_EDGE / FOCUS_SOFT_EDGE로 나눠 몰아간다 */
        } else if (isLine) {
          /* 장비 윤곽선 — 형태를 읽는 기준이라 진하게.
             재질별 baseOp(0.55 등)에 곱하면 묻히므로 절대값으로 잡는다 */
          o.material.color.copy(FOCUS_EDGE_COLOR)
          o.material.opacity = FOCUS_EDGE_OP
        } else if (inTerm) {
          /* 다른 장비 면 (배관 루프 포함) — 연한 파랑 불투명.
             면 색을 검게 두고 발광만 목표색으로 주면 조명·각도와 무관하게
             정확히 그 색으로 평평하게 칠해진다 (발광을 색과 같이 주면
             확산광이 더해져 흰색으로 날아간다) */
          flatten(o.material, FOCUS_TERM_COLOR)
          o.material.opacity = FOCUS_TERM_OP
          o.material.transparent = FOCUS_TERM_OP < 1
          o.material.depthWrite = FOCUS_TERM_OP >= 1
          focusSaved.push(entry)
          return
        } else if (o.userData.terrain || o.userData.slabMesh || o.userData.floorTop) {
          /* 슬래브 두께 박스·상판, 실 마감 바닥, 부지 포장면 — 층마다 여러 겹이
             겹쳐 있어 각각 칠하면 실 안쪽만 진해지고 정렬이 뒤집히며 깜빡인다.
             층 구분은 건물 윤곽과 똑같은 focusFloor 한 겹이 맡고 이쪽은 지운다 */
          o.material.opacity = 0
        } else {
          /* 벽·지형 등 나머지 구조체 — 램버트 음영을 발광으로 상쇄해
             각도와 무관하게 평평한 흰색이 되게 한다 */
          o.material.color.set(whiteTarget)
          if (o.material.emissive) o.material.emissive.set(whiteTarget)
          o.material.opacity = Math.min(o.material.opacity, base * FOCUS_OP)
        }
        o.material.transparent = true
        /* 깊이 기록을 꺼야 뒤쪽 형상이 가려지지 않고 제대로 비쳐 보인다 */
        o.material.depthWrite = false
        focusSaved.push(entry)
      })
      /* 윤곽선이 없는 설비의 보조 윤곽선 — 선택된 그룹 외에서만 켠다 */
      for (let i = 0; i < focusEdges.length; i++) {
        const fe = focusEdges[i]
        let inKeep = false
        for (let p = fe.src; p; p = p.parent) if (p === keep) { inKeep = true; break }
        fe.ls.visible = !inKeep && fe.src.visible && !fe.src.userData._floorHidden
      }
      /* 장식물은 흰색으로 남기지 않고 감춘다 (층·계통 필터로 이미 숨은 것은 건드리지 않음) */
      for (let i = 0; i < decorObjects.length; i++) {
        const o = decorObjects[i]
        if (!o.visible) continue
        o.visible = false
        focusHidden.push(o)
      }
      /* 흐름 패킷은 선택 중에는 흐르지 않아도 되므로 감춘다 */
      for (let f = 0; f < flows.length; f++) {
        const dots = flows[f].dots
        for (let d = 0; d < dots.length; d++) {
          if (!dots[d].visible) continue
          dots[d].visible = false
          focusHidden.push(dots[d])
        }
      }
      /* 건물 외곽선 — 벽 윤곽선 대신 층별 한 겹만 켠다 */
      for (let i = 0; i < envelopeLines.length; i++) {
        const el = envelopeLines[i]
        el.visible = !el.userData._floorHidden
      }
      /* 층 바닥판 — 슬래브 상판 대신 층별·동별 한 겹만 켠다 */
      for (let i = 0; i < focusFloors.length; i++) {
        const ff = focusFloors[i]
        ff.visible = !ff.userData._floorHidden
      }
      focusActive = true
    }

    const selectionOutline = []
    const hoverOutline = []
    function clearOutlineList(list) {
      for (let i = 0; i < list.length; i++) {
        const edge = list[i]
        if (edge.parent) edge.parent.remove(edge)
        if (edge.geometry) edge.geometry.dispose()
        if (edge.material) edge.material.dispose()
      }
      list.length = 0
    }
    function clearSelectionOutline() { clearOutlineList(selectionOutline) }
    function clearHoverOutline() { clearOutlineList(hoverOutline) }
    /* 굵은 검은 선을 간선마다 실린더 mesh로 만들면 항온항습실 기준 6,300개가
       생겨(재질 clone 포함) 100ms 넘게 멈추고, 호버가 유지되는 동안 그만큼
       드로우콜이 늘어난다. 정점을 하나의 버퍼에 직접 채워 mesh 한 개로 그린다. */
    const OUTLINE_SEG = 6
    const _oa = new THREE.Vector3(), _ob = new THREE.Vector3(), _od = new THREE.Vector3()
    const _ou = new THREE.Vector3(), _ov = new THREE.Vector3(), _oref = new THREE.Vector3()
    function buildTubeMesh(segs, radius, bucket) {
      const n = segs.length / 6
      if (!n) return
      const arr = new Float32Array(n * OUTLINE_SEG * 6 * 3)
      let k = 0
      for (let e = 0; e < n; e++) {
        const o6 = e * 6
        _oa.set(segs[o6], segs[o6 + 1], segs[o6 + 2])
        _ob.set(segs[o6 + 3], segs[o6 + 4], segs[o6 + 5])
        _od.subVectors(_ob, _oa).normalize()
        _oref.set(0, 1, 0)
        if (Math.abs(_od.y) > 0.9) _oref.set(1, 0, 0)
        _ou.crossVectors(_od, _oref).normalize().multiplyScalar(radius)
        _ov.crossVectors(_od, _ou).normalize().multiplyScalar(radius)
        for (let sg = 0; sg < OUTLINE_SEG; sg++) {
          const t0 = (sg / OUTLINE_SEG) * Math.PI * 2, t1 = ((sg + 1) / OUTLINE_SEG) * Math.PI * 2
          const c0 = Math.cos(t0), s0 = Math.sin(t0), c1 = Math.cos(t1), s1 = Math.sin(t1)
          const ax = _ou.x * c0 + _ov.x * s0, ay = _ou.y * c0 + _ov.y * s0, az = _ou.z * c0 + _ov.z * s0
          const bx = _ou.x * c1 + _ov.x * s1, by = _ou.y * c1 + _ov.y * s1, bz = _ou.z * c1 + _ov.z * s1
          arr[k++] = _oa.x + ax; arr[k++] = _oa.y + ay; arr[k++] = _oa.z + az
          arr[k++] = _ob.x + ax; arr[k++] = _ob.y + ay; arr[k++] = _ob.z + az
          arr[k++] = _ob.x + bx; arr[k++] = _ob.y + by; arr[k++] = _ob.z + bz
          arr[k++] = _oa.x + ax; arr[k++] = _oa.y + ay; arr[k++] = _oa.z + az
          arr[k++] = _ob.x + bx; arr[k++] = _ob.y + by; arr[k++] = _ob.z + bz
          arr[k++] = _oa.x + bx; arr[k++] = _oa.y + by; arr[k++] = _oa.z + bz
        }
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(arr, 3))
      const mesh = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
        color: 0x000000, depthTest: true, depthWrite: false,
        polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
      }))
      mesh.userData.selectionOutline = true
      mesh.renderOrder = 80
      mesh.frustumCulled = false
      scene.add(mesh)
      bucket.push(mesh)
    }
    function applySelectionOutline(term) {
      clearSelectionOutline()
      buildOutlineEdges(term, selectionOutline)
    }
    /* 검은 라인 아웃라인 — 선택·호버 공용 */
    function buildOutlineEdges(term, bucket) {
      const g = groupReg[term]
      if (!g) return
      const meshes = []
      let maxDiag = 0
      const tmpSize = new THREE.Vector3()
      g.traverse((o) => {
        if (!o.isMesh || !o.geometry || o.userData.flowPart || o.userData.selectionOutline) return
        if (!o.visible || o.userData._floorHidden) return // 아이솔레이션에서 숨겨진 부재 제외
        o.geometry.computeBoundingBox()
        if (!o.geometry.boundingBox) return
        const diag = o.geometry.boundingBox.getSize(tmpSize).length()
        maxDiag = Math.max(maxDiag, diag)
        meshes.push({ mesh: o, diag })
      })
      /* 합쳐진 mesh는 씬 루트에 놓이므로 두께도 월드 기준으로 환산한다
         (기존에는 부모 mesh의 자식이라 facilityRoot 스케일을 물려받았다) */
      const radius = Math.max(0.06, Math.min(0.13, maxDiag * 0.0065)) * (FS.x + FS.y + FS.z) / 3
      g.updateMatrixWorld(true)
      const segs = []
      for (let m = 0; m < meshes.length; m++) {
        const o = meshes[m].mesh, type = o.geometry.type || ''
        // 그룹 안의 긴 부속(트레이·덕트) 때문에 본체가 탈락하지 않게 절대 하한과 병행
        if (meshes[m].diag < Math.min(2.2, maxDiag * 0.26) || (!/BoxGeometry|CylinderGeometry/.test(type))) continue
        const edges = new THREE.EdgesGeometry(o.geometry, 24), pos = edges.attributes.position
        for (let i = 0; i < pos.count; i += 2) {
          _oa.fromBufferAttribute(pos, i).applyMatrix4(o.matrixWorld)
          _ob.fromBufferAttribute(pos, i + 1).applyMatrix4(o.matrixWorld)
          if (_oa.distanceToSquared(_ob) < 0.0001) continue
          segs.push(_oa.x, _oa.y, _oa.z, _ob.x, _ob.y, _ob.z)
        }
        edges.dispose()
      }
      buildTubeMesh(segs, radius, bucket)
    }
    function convexHull2D(points) {
      if (points.length < 3) return points
      points.sort((a, b) => (a.x === b.x ? a.y - b.y : a.x - b.x))
      function cr(o, a, b) { return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x) }
      const lower = [], upper = []
      for (let i = 0; i < points.length; i++) { while (lower.length >= 2 && cr(lower[lower.length - 2], lower[lower.length - 1], points[i]) <= 0) lower.pop(); lower.push(points[i]) }
      for (let j = points.length - 1; j >= 0; j--) { while (upper.length >= 2 && cr(upper[upper.length - 2], upper[upper.length - 1], points[j]) <= 0) upper.pop(); upper.push(points[j]) }
      lower.pop(); upper.pop()
      return lower.concat(upper)
    }
    /* ── 선택 장비 리더(검은 선)의 끝점 ──────────────────────────
       한 용어가 여러 층·여러 실에 흩어져 설치되는 경우(축전지실·수배전반
       등)가 많다. 그룹 전체를 하나의 볼록껍질로 감싸면 인스턴스 사이의 빈
       공간까지 껍질에 들어가, 껍질 경계로 잡은 끝점이 아무 장비에도 닿지
       않는 허공에 놓인다. 그래서
         1) 라벨 앵커가 가리키는 한 덩어리(인스턴스)만 골라 껍질을 만들고,
         2) 그렇게 얻은 점이 실제로 그 장비 위에 있는지 레이캐스트로 확인해
            닿을 때까지 안쪽으로 당긴다.
       카메라를 돌려 형상이 볼록하지 않게 겹쳐 보일 때도 끝점이 장비 표면을
       벗어나지 않는다. */
    const leaderRay = new THREE.Raycaster()
    const leaderNdc = new THREE.Vector2()
    const LEADER_LINK = 7   // 이 간격(월드) 안에 붙어 있으면 같은 덩어리로 본다

    function projectToScreen(v, w, h) {
      const p = v.clone().project(camera)
      return { x: (p.x * 0.5 + 0.5) * w, y: (-p.y * 0.5 + 0.5) * h }
    }
    function screenHitsAny(px, py, w, h, objs) {
      leaderNdc.set((px / w) * 2 - 1, -(py / h) * 2 + 1)
      leaderRay.setFromCamera(leaderNdc, camera)
      return leaderRay.intersectObjects(objs, false).length > 0
    }
    /** 라벨 앵커에 가장 가까운 부재를 씨앗으로, 맞닿은 부재만 이어붙인 덩어리 */
    function leaderCluster(term, anchor) {
      const g = groupReg[term]
      if (!g) return null
      g.updateMatrixWorld(true)
      const parts = []
      const bb = new THREE.Box3(), size = new THREE.Vector3()
      g.traverse((o) => {
        if (!o.isMesh || !o.geometry || o.userData.selectionOutline || o.userData.flowPart) return
        if (o.userData.floorTop) return                 // 바닥 존 색면은 장비가 아니다
        if (!o.visible || o.userData._floorHidden) return // 아이솔레이션에서 숨겨진 부재 제외
        bb.setFromObject(o)
        if (bb.isEmpty()) return
        parts.push({ obj: o, c: bb.getCenter(new THREE.Vector3()), r: bb.getSize(size).length() / 2 })
      })
      if (!parts.length) return null
      let seed = 0
      let seedD = parts[0].c.distanceTo(anchor)
      for (let i = 1; i < parts.length; i++) {
        const d = parts[i].c.distanceTo(anchor)
        if (d < seedD) { seedD = d; seed = i }
      }
      const taken = new Array(parts.length).fill(false)
      taken[seed] = true
      const queue = [seed]
      while (queue.length) {
        const a = parts[queue.pop()]
        for (let i = 0; i < parts.length; i++) {
          if (taken[i]) continue
          const b = parts[i]
          if (a.c.distanceTo(b.c) <= a.r + b.r + LEADER_LINK) { taken[i] = true; queue.push(i) }
        }
      }
      const cluster = []
      for (let i = 0; i < parts.length; i++) if (taken[i]) cluster.push(parts[i])
      return { cluster, seed: parts[seed] }
    }

    function selectedOutlinePoint(item, toX, toY, w, h) {
      const selected = useAppStore.getState().selected
      if (item.id !== selected || !groupReg[item.id]) return { x: item.sx, y: item.sy }
      const picked = leaderCluster(item.id, item.anchor)
      if (!picked) return { x: item.sx, y: item.sy }

      const points = [], objs = []
      const corner = new THREE.Vector3()
      for (let m = 0; m < picked.cluster.length; m++) {
        const o = picked.cluster[m].obj
        objs.push(o)
        o.geometry.computeBoundingBox()
        const b = o.geometry.boundingBox
        if (!b) continue
        const mn = b.min, mx = b.max
        const cs = [[mn.x, mn.y, mn.z], [mx.x, mn.y, mn.z], [mn.x, mx.y, mn.z], [mx.x, mx.y, mn.z], [mn.x, mn.y, mx.z], [mx.x, mn.y, mx.z], [mn.x, mx.y, mx.z], [mx.x, mx.y, mx.z]]
        for (let k = 0; k < cs.length; k++)
          points.push(projectToScreen(corner.set(cs[k][0], cs[k][1], cs[k][2]).applyMatrix4(o.matrixWorld), w, h))
      }
      /* 반드시 장비 위에 있는 기준점 — 씨앗 부재의 중심 */
      const safe = projectToScreen(picked.seed.c, w, h)

      const hull = convexHull2D(points)
      let hit = null
      if (hull.length >= 3) {
        let cx3 = 0, cy3 = 0
        for (let i = 0; i < hull.length; i++) { cx3 += hull[i].x; cy3 += hull[i].y }
        cx3 /= hull.length; cy3 /= hull.length
        const rx = toX - cx3, ry = toY - cy3
        let best = Infinity
        for (let n = 0; n < hull.length; n++) {
          const a = hull[n], b = hull[(n + 1) % hull.length]
          const sx = b.x - a.x, sy = b.y - a.y, den = rx * sy - ry * sx
          if (Math.abs(den) < 0.0001) continue
          const qx = a.x - cx3, qy = a.y - cy3
          const t = (qx * sy - qy * sx) / den, u = (qx * ry - qy * rx) / den
          if (t > 0 && u >= 0 && u <= 1 && t < best) { best = t; hit = { x: cx3 + rx * t, y: cy3 + ry * t } }
        }
      }
      if (!hit) return safe
      if (screenHitsAny(hit.x, hit.y, w, h, objs)) return hit
      /* 껍질은 볼록이라 실제 형상 밖으로 나갈 수 있다 → 닿을 때까지 당긴다 */
      let lo = 0, hi = 1
      for (let it = 0; it < 12; it++) {
        const mid = (lo + hi) / 2
        if (screenHitsAny(safe.x + (hit.x - safe.x) * mid, safe.y + (hit.y - safe.y) * mid, w, h, objs)) lo = mid
        else hi = mid
      }
      return { x: safe.x + (hit.x - safe.x) * lo, y: safe.y + (hit.y - safe.y) * lo }
    }
    let xraySaved = []
    function clearXray() {
      for (let i = 0; i < xraySaved.length; i++) {
        xraySaved[i].m.depthTest = xraySaved[i].dt
        xraySaved[i].obj.renderOrder = xraySaved[i].ro
      }
      xraySaved = []
    }

    /* ── 라벨 동기화 (선택 상태) ── */
    function syncLabels() {
      const selected = useAppStore.getState().selected
      for (let j = 0; j < labelObjs.length; j++) {
        const L = labelObjs[j]
        if (L.hidden) {
          L.div.classList.remove('sel', 'dim')
          L.line.setAttribute('opacity', '0'); L.dot.setAttribute('opacity', '0')
          leadersSvg.appendChild(L.line); leadersSvg.appendChild(L.dot)
          continue
        }
        const same = L.id === selected
        L.div.classList.toggle('sel', same)
        L.div.classList.toggle('dim', !!selected && !same)
        L.line.setAttribute('stroke', same ? '#000' : '#929497')
        L.line.setAttribute('stroke-width', same ? '1.65' : '1.6')
        L.dot.setAttribute('fill', same ? '#000' : '#929497')
        L.dot.setAttribute('r', same ? '2.24' : '1.25')
        L.dot.setAttribute('stroke', same ? '#000' : '#929497')
        L.dot.setAttribute('stroke-opacity', same ? '1' : '.88')
        L.line.setAttribute('stroke-opacity', same ? '1' : '.88')
        /* 선택 중에는 다른 라벨의 리더선·점을 숨긴다 — 모델이 흰색으로
           물러난 상태에서 이것들만 남으면 허공에 뜬 점·선으로 보인다 */
        L.line.setAttribute('opacity', same ? '1' : (selected ? '0' : '.78'))
        L.dot.setAttribute('opacity', same ? '1' : (selected ? '0' : '.78'))
        ;(same ? selectedLeaderSvg : leadersSvg).appendChild(L.line)
        ;(same ? selectedLeaderSvg : leadersSvg).appendChild(L.dot)
      }
    }

    /* ── 계통/층 필터 (opacity 결합) ── */
    function applyVisibility() {
      const { filter, floor } = useAppStore.getState()
      // 계통 dim: term 그룹 단위 (레퍼런스 동일)
      scene.traverse((o) => {
        if (!o.material) return
        /* 고스트 쉘: 층 아이솔레이션에서 지상면 기준선만 표시.
           타 층 외곽선은 depthTest를 끈 선이라 선택한 층 위에 그대로 얹히면서
           내용을 가려, 켜지 않는다 (shellFloor !== floor 로 바꾸면 되살아난다) */
        if (o.userData.ghostShell) {
          o.visible = floor !== 'all' && o.userData.shellFloor === 'ground'
          return
        }
        /* 건물 외곽선·포커스 보조 윤곽선: 평소엔 숨김 — 층 판정만 갱신해 둔다 */
        if (o.userData.envelope || o.userData.focusFloor) {
          const hid = floor !== 'all' && o.userData.floor !== floor
          o.userData._floorHidden = !!hid
          o.visible = focusActive && !hid
          return
        }
        if (o.userData.focusEdge) {
          const hid = floor !== 'all' && o.userData.floor && o.userData.floor !== floor
          o.userData._floorHidden = !!hid
          o.visible = focusActive && !hid
          return
        }
        const base = (o.material.userData && o.material.userData.baseOp !== undefined) ? o.material.userData.baseOp : 1
        let catDim = false
        for (let p = o; p; p = p.parent) {
          if (p.userData && p.userData.cat) { catDim = filter !== 'all' && p.userData.cat !== filter; break }
        }
        // 층 필터는 완전 숨김(반투명 누적 방지), 계통 필터는 레퍼런스처럼 잔상 유지
        // 사이트 디테일(주차장·도로·조경)은 전체 뷰와 "1층" 뷰에서만 표시
        let floorHidden = false
        if (floor !== 'all' && o.userData.flowPart) {
          // 층 아이솔레이션 중에는 Flow 관련(배관·조인트·파티클) 전부 숨김
          floorHidden = true
        } else if (!o.userData.flowParticle) {
          floorHidden =
            (floor !== 'all' && o.userData.floor && o.userData.floor !== floor) ||
            (o.userData.siteDetail && floor !== 'f1' && floor !== 'all') ||
            // 미태깅 사이트·지형·대지: 2층/옥상 아이솔레이션에서는 숨김 (전체·1층·B1 유지)
            ((floor === 'f2' || floor === 'roof') && !o.userData.floor && !o.userData.selectionOutline) ||
            // 지하 요소(지형 볼륨·굴토 피트)는 1층 아이솔레이션에서도 숨김
            (floor === 'f1' && o.userData.underground)
        }
        o.userData._dimmed = catDim || !!floorHidden
        o.userData._floorHidden = !!floorHidden
        /* 층 아이솔레이션: 타 층 구조·장비는 숨김 — 외곽 실루엣은 고스트 쉘이 담당 */
        o.visible = !floorHidden
        o.material.transparent = catDim || base < 1
        o.material.opacity = catDim ? (o.isLineSegments ? 0.03 : 0.06) : base
        // 지하 1층 뷰: 지형 상면을 반투명 유리처럼 (지하가 천장에 덮이지 않게)
        if (o.userData.terrain && o.userData.floorTop) {
          o.material.transparent = true
          o.material.opacity = floor === 'b1' ? 0.14 : base
        }
      })
      for (let i = 0; i < labelObjs.length; i++) {
        const L = labelObjs[i]
        const cat = TERMS[L.id].cat
        L.hidden = (filter !== 'all' && cat !== filter) || (floor !== 'all' && L.floor !== floor)
      }
      labelsDirty = true
      layoutLabels(true)
      syncLabels()
      syncFlowUI()
      /* 위 traverse가 불투명도를 base로 되돌리므로 선택 중이면 다시 입힌다.
         아웃라인은 원본 mesh의 자식이 아니라 씬 루트에 있어 부모를 따라
         숨지 않으므로, 숨김 대상이 바뀌면 다시 만들어야 한다 */
      clearHoverOutline()
      const selNow = useAppStore.getState().selected
      if (selNow && groupReg[selNow]) { applyFocus(selNow); applySelectionOutline(selNow) }
    }

    /* ── Flow 토글 (레퍼런스 syncFlowUI 포팅) ── */
    function syncFlowUI() {
      const { flowState } = useAppStore.getState()
      for (let f = 0; f < flows.length; f++) {
        const enabled = !!flowState[flows[f].key]
        flows[f].enabled = enabled
        for (let p = 0; p < flows[f].parts.length; p++) {
          const part = flows[f].parts[p], mat = part.material
          part.visible = !part.userData._floorHidden
          if (!mat.userData) mat.userData = {}
          if (!mat.userData.flowBaseColor) mat.userData.flowBaseColor = mat.color.clone()
          /* Flow OFF: 배관은 색·불투명도 그대로 유지, 움직임(도트 애니메이션)만 정지 */
          mat.color.copy(mat.userData.flowBaseColor)
          if (part.userData._dimmed) continue  // 층/계통 필터가 우선
          const baseOp = mat.userData.baseOp === undefined ? 1 : mat.userData.baseOp
          mat.transparent = baseOp < 1
          mat.opacity = baseOp
          mat.needsUpdate = true
        }
        for (let d = 0; d < flows[f].dots.length; d++) {
          // OFF: 도트(패킷)는 숨김 — 배관은 위에서 그대로 유지됨
          flows[f].dots[d].visible = enabled && !flows[f].dots[d].userData._floorHidden
        }
      }
    }

    /* ── 카메라 조작 (레퍼런스 포팅) ── */
    let dragMode = 0
    const last = { x: 0, y: 0 }
    let dragMoved = false
    const ray = new THREE.Raycaster(), mv = new THREE.Vector2()
    let camGoal = null   // 사이드바 포커스 비행 목표 { t:Vector3, d, p }

    function onMouseDown(e) {
      camGoal = null      // 사용자가 직접 조작하면 비행 취소
      dragMode = (e.button === 2) ? 2 : 1
      dragMoved = false
      last.x = e.clientX; last.y = e.clientY
    }
    function onMouseMove(e) {
      if (!dragMode) { hoverPick(e); return }
      // 화면 px → 디자인 px (스케일 배율 보정, 단층 원본과 동일한 조작감)
      const s = designScale()
      const dx = (e.clientX - last.x) / s, dy = (e.clientY - last.y) / s
      if (Math.abs(dx) + Math.abs(dy) > 3) dragMoved = true
      last.x = e.clientX; last.y = e.clientY
      if (dragMode === 1) {
        sph.az -= dx * 0.0052
        // 거의 180° 상하 회전: 수직 탑뷰(0.06) ↔ 수평 시점(1.54)
        sph.pol = Math.max(0.06, Math.min(1.54, sph.pol - dy * 0.0042))
      } else {
        const k = sph.dist * 0.0011
        const right = new THREE.Vector3().subVectors(camera.position, target).cross(new THREE.Vector3(0, 1, 0)).normalize()
        const up = new THREE.Vector3(0, 1, 0)
        target.add(right.multiplyScalar(dx * k)).add(up.multiplyScalar(dy * k))
      }
      updateCam()
    }
    function onMouseUp() { dragMode = 0 }
    function onWheel(e) {
      e.preventDefault()
      camGoal = null
      const newDist = Math.max(52, Math.min(1400, sph.dist * (e.deltaY > 0 ? 1.1 : 1 / 1.1)))
      const applied = newDist / sph.dist
      const r = canvas.getBoundingClientRect()
      mv.x = ((e.clientX - r.left) / r.width) * 2 - 1
      mv.y = -((e.clientY - r.top) / r.height) * 2 + 1
      ray.setFromCamera(mv, camera)
      let pt = new THREE.Vector3()
      const hits = ray.intersectObjects(pickables, false)
      if (hits.length) pt.copy(hits[0].point)
      else if (!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0, 1, 0), 0), pt)) pt = null
      if (pt) target.lerp(pt, 1 - applied)
      sph.dist = newDist
      updateCam()
    }
    function termOf(obj) {
      let o = obj
      while (o) { if (o.userData && o.userData.term) return o.userData.term; o = o.parent }
      return null
    }
    function pickAt(e) {
      const r = canvas.getBoundingClientRect()
      mv.x = ((e.clientX - r.left) / r.width) * 2 - 1
      mv.y = -((e.clientY - r.top) / r.height) * 2 + 1
      ray.setFromCamera(mv, camera)
      const hits = ray.intersectObjects(pickables, false)
      const { filter, floor } = useAppStore.getState()
      for (let i = 0; i < hits.length; i++) {
        const obj = hits[i].object
        if (obj.userData._dimmed) continue
        const t = termOf(obj)
        if (t) {
          if (filter !== 'all' && TERMS[t] && TERMS[t].cat !== filter) continue
          if (floor !== 'all' && obj.userData.floor && obj.userData.floor !== floor) continue
          return t
        }
      }
      return null
    }
    function hoverPick(e) {
      if (e.target !== canvas) { setHover(null); return }
      const t = pickAt(e)
      setHover(t)
      if (t) { showTip(t, e); canvas.style.cursor = 'pointer' }
      else { hideTip(); canvas.style.cursor = dragMode ? 'grabbing' : 'default' }
    }
    function onClick(e) {
      if (dragMoved) { dragMoved = false; return }
      const t = pickAt(e)
      useAppStore.getState().setSelected(t || null)
    }
    canvas.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    canvas.addEventListener('contextmenu', (e) => e.preventDefault())
    canvas.addEventListener('wheel', onWheel, { passive: false })
    canvas.addEventListener('click', onClick)

    /* ── 스토어 구독 ── */
    // 재마운트(모드 전환) 시 라벨 OFF 상태가 유지된 채 돌아올 수 있으므로
    // 초기 labelsOn을 즉시 반영 — 안 하면 미배치 라벨이 (0,0)에 겹쳐 노출된다
    host.classList.toggle('labels-off', !useAppStore.getState().labelsOn)
    let prev = { selected: null, filter: 'all', floor: 'all', flowState: useAppStore.getState().flowState, resetTick: 0, labelsOn: useAppStore.getState().labelsOn, focusTick: 0 }
    const unsubscribe = useAppStore.subscribe((state) => {
      if (state.labelsOn !== prev.labelsOn) {
        host.classList.toggle('labels-off', !state.labelsOn)
        if (state.labelsOn) { labelsDirty = true; layoutLabels(true) }
      }
      /* 사이드바 포커스: 해당 층으로 전환 + 카메라가 부품으로 비행·확대 */
      if (state.focusTick !== prev.focusTick && state.focusId) {
        const L = labelObjs.find((l) => l.id === state.focusId)
        if (L) {
          // fws처럼 전 층을 관통하는 계통은 층 아이솔레이션 없이 전체 뷰 유지
          // 층 전환은 requestFocus 액션이 floor를 함께 설정 → 아래 floor 브랜치에서 처리
          let dist = 140
          const fg = groupReg[state.focusId]
          if (fg) {
            const bb = new THREE.Box3().setFromObject(fg)
            if (!bb.isEmpty()) {
              const sphere = bb.getBoundingSphere(new THREE.Sphere())
              dist = THREE.MathUtils.clamp(sphere.radius * 2.8, 95, 300)
            }
          }
          camGoal = {
            t: L.anchor.clone(),
            d: dist,
            p: THREE.MathUtils.clamp(sph.pol, 0.55, 1.15),
          }
        }
        prev.focusTick = state.focusTick
      }
      if (state.resetTick !== prev.resetTick) {
        camGoal = null   // 진행 중인 포커스 비행 취소
        sph.az = HOME.az; sph.pol = HOME.pol; sph.dist = HOME.dist
        target.set(HOME.tx, HOME.ty, HOME.tz)
        updateCam()
      }
      if (state.filter !== prev.filter || state.floor !== prev.floor) {
        applyVisibility()
        if (state.selected && state.filter !== 'all' && TERMS[state.selected].cat !== state.filter) {
          state.setSelected(null)
        }
      }
      if (state.flowState !== prev.flowState) {
        syncFlowUI()
        if (state.selected) applyFocus(state.selected)
      }
      if (state.selected !== prev.selected) {
        clearHoverOutline() // 선택 아웃라인과 중복 방지
        if (state.selected) {
          syncLabels()
          refreshSelectedLeader()
          const requestedId = state.selected
          requestAnimationFrame(() => {
            if (useAppStore.getState().selected !== requestedId) return
            applyFocus(requestedId)
            clearXray()
            applySelectionOutline(requestedId)
            refreshSelectedLeader()
          })
        } else {
          clearXray(); clearSelectionOutline(); restoreFocus()
          /* restoreFocus는 포커스가 감췄던 장식물·패킷을 되살리므로,
             층·계통 필터가 감춰야 할 것까지 다시 보이게 된다. 필터를 다시 건다 */
          applyVisibility()
          syncLabels(); refreshSelectedLeader()
        }
      }
      // 재진입(콜백 중 상태 변경) 대비: 스냅샷이 아닌 최신 상태로 prev 갱신
      const cur = useAppStore.getState()
      prev = { selected: cur.selected, filter: cur.filter, floor: cur.floor, flowState: cur.flowState, resetTick: cur.resetTick, labelsOn: cur.labelsOn, focusTick: cur.focusTick }
    })

    /* ── 렌더 루프 ── */
    const camDirH = new THREE.Vector3()
    let raf = 0
    function animate(ts) {
      raf = requestAnimationFrame(animate)
      /* 포커스 비행: 목표 지점·거리·각도로 부드럽게 수렴 */
      if (camGoal) {
        target.lerp(camGoal.t, 0.09)
        sph.dist += (camGoal.d - sph.dist) * 0.09
        sph.pol += (camGoal.p - sph.pol) * 0.09
        updateCam()
        if (target.distanceTo(camGoal.t) < 0.4 && Math.abs(sph.dist - camGoal.d) < 0.8) camGoal = null
      }
      /* 외벽 자동 페이드 — 층 아이솔레이션 시엔 벽을 얇은 유리처럼 (레퍼런스 렌더 무드) */
      const isoFloorNow = useAppStore.getState().floor
      const floorIso = isoFloorNow !== 'all'
      camDirH.subVectors(camera.position, target); camDirH.y = 0; camDirH.normalize()
      for (let i = 0; i < wallsFade.length; i++) {
        const wf = wallsFade[i]
        // 지하 1층 뷰에서는 지형 볼륨 전체를 반투명 유리로 (천장처럼 덮이는 것 방지)
        // 지형 볼륨: 카메라를 향한 면은 투명하게(지하 내부 클리어) —
        // 임계값 스위치 대신 연속 페이드라 각도 회전 시 팝핑이 없고,
        // 양면 렌더링 백드롭 덕에 관통 시 흰 쐐기도 생기지 않는다
        const terrFace = THREE.MathUtils.clamp(wf.n.dot(camDirH) / 0.4, 0, 1)
        let tgt = wf.m.userData._dimmed ? 0.06
          : wf.m.userData.terrain ? (isoFloorNow === 'b1' ? 0.12 : 0.5 - 0.42 * terrFace)
          : ((wf.n.dot(camDirH) > 0.18) ? 0.07 : (floorIso ? 0.26 : 0.95))
        /* 지형(흙) 볼륨은 B1~1층에 걸친 큰 반투명 덩어리라, 카메라를 돌리면
           반투명 정렬이 위층 바닥판보다 뒤로 넘어가며 흰색을 덮어씌운다.
           포커스 중에는 면을 지우고 윤곽선만 남긴다 */
        if (focusActive) tgt = wf.m.userData.terrain ? 0 : tgt * FOCUS_STRUCT_OP
        wf.m.material.transparent = true
        wf.m.material.opacity += (tgt - wf.m.material.opacity) * 0.18
        if (!wf.e.material.userData._ghost)
          /* 포커스 중: 외벽 윤곽선은 끄고 건물 외곽선(envelope)이 대신한다 —
             벽이 두께 있는 박스라 면마다 선이 생겨 모서리가 여러 줄로 겹친다.
             지형(대지) 외곽선만 연하게 남긴다 */
          wf.e.material.opacity = focusActive
            ? (wf.m.userData.terrain ? FOCUS_SOFT_EDGE : 0)
            : wf.m.material.opacity > 0.4 ? wf.e.material.userData.baseOp
            : (floorIso && !wf.m.userData._dimmed ? 0.3 : 0)
      }
      /* 상부 슬래브 페이드: 탑뷰 · 하부 장비 선택 · 층 필터 연동 */
      const selected = useAppStore.getState().selected
      const selZ = selected != null && anchorZ[selected] !== undefined ? anchorZ[selected] : Infinity
      const isoFloor = useAppStore.getState().floor
      for (let i = 0; i < slabs.length; i++) {
        const s = slabs[i]
        let tgt = s.baseOp
        if (s.m.userData._dimmed) tgt = 0.06
        else if (isoFloor !== 'all' && s.floor === isoFloor) tgt = 0.97  // 선택 층의 바닥판은 흰 플레이트로
        else if (selZ < s.zTop - 1) tgt = 0.08
        else if (s.floor === 'roof' && sph.pol < 0.62) tgt = 0.1
        if (focusActive) tgt = 0   // 층 구분은 focusFloor 한 겹이 맡는다
        s.m.material.transparent = true
        s.m.material.opacity += (tgt - s.m.material.opacity) * 0.15
        s.e.material.transparent = true
        if (!s.e.material.userData || !s.e.material.userData._ghost)
          /* 포커스 중 바닥판 테두리는 건물 외곽선과 겹쳐 두 줄로 보이므로 끈다 */
          s.e.material.opacity = focusActive ? 0 : (s.m.material.opacity > 0.4 ? 1 : 0)
        s.top.material.opacity = focusActive
          ? 0
          : Math.min(s.top.material.userData.baseOp, s.m.material.opacity)
      }
      /* 유체 패킷 */
      const tt = (ts || 0) * 0.00010
      for (let f = 0; f < flows.length; f++) {
        const F = flows[f]
        if (!F.enabled) continue
        for (let d = 0; d < F.dots.length; d++) {
          const u = ((tt + F.off + F.dots[d].userData.flowU + 1) % 1) * F.tot
          let seg = 1
          while (seg < F.lens.length && F.lens[seg] < u) seg++
          const a = F.vs[seg - 1], b = F.vs[Math.min(seg, F.vs.length - 1)]
          const t2 = (u - F.lens[seg - 1]) / Math.max(F.lens[seg] - F.lens[seg - 1], 0.001)
          F.dots[d].position.lerpVectors(a, b, Math.min(t2, 1))
        }
      }
      layoutLabels()
      renderer.render(scene, camera)
    }

    /* ── 리사이즈 ── */
    function resize() {
      const w = host.clientWidth, h = host.clientHeight
      if (!w || !h) return
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      leadersSvg.setAttribute('width', w); leadersSvg.setAttribute('height', h)
      leadersSvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h)
      selectedLeaderSvg.setAttribute('width', w); selectedLeaderSvg.setAttribute('height', h)
      selectedLeaderSvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h)
      labelsDirty = true
      markCameraMoving()
    }
    const ro = new ResizeObserver(resize)
    ro.observe(host)
    // 창 크기 변경 → 디자인 스케일 변동 → 픽셀비율만 갱신 (레이아웃 크기는 고정)
    const onWinResize = () => applyPixelRatio()
    window.addEventListener('resize', onWinResize)

    resize()
    updateCam()
    applyVisibility()
    animate(0)

    // 디버그 훅 (콘솔 진단용)
    window.__AIDC = { ctx, scene, useAppStore, applyVisibility }

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      unsubscribe()
      window.removeEventListener('resize', onWinResize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      renderer.dispose()
      labelsDiv.innerHTML = ''
      leadersSvg.innerHTML = ''
      selectedLeaderSvg.innerHTML = ''
    }
  }, [])

  return (
    <div ref={hostRef} className="viewport3d">
      <canvas className="gl" />
      <svg className="leaders" />
      <div className="labels" />
      <svg className="selected-leader" aria-hidden="true" />
      <div className="tip3d" role="tooltip" style={{ display: 'none' }} />
      <div className="scene-copyright">© 2026 SUNJIN Engineering &amp; Architecture. All rights reserved.</div>
    </div>
  )
}
