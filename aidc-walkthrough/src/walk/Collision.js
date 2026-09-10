/**
 * 수평 AABB 충돌 — 2 m 격자 공간 해시.
 *
 * 물리 엔진을 쓰지 않는 이유: 필요한 건 "벽을 통과하지 않고, 부딪히면
 * 미끄러진다" 하나뿐인데 rapier/cannon을 넣으면 번들이 수백 KB 늘고
 * 캐릭터 컨트롤러 튜닝에 시간이 더 든다.
 *
 * 핵심은 축을 나눠 미는 것이다. x와 z를 한 번에 검사하면 벽에 닿는 순간
 * 딱 멈춰서 즉시 "충돌 버그" 같은 느낌이 나지만, x만 밀어보고 다음에 z만
 * 밀어보면 벽을 따라 자연스럽게 미끄러진다.
 */

const CELL = 2

export class CollisionGrid {
  constructor(boxes) {
    this.boxes = boxes
    this.cells = new Map()
    for (let i = 0; i < boxes.length; i++) {
      const b = boxes[i]
      const cx0 = Math.floor(b.x0 / CELL), cx1 = Math.floor(b.x1 / CELL)
      const cz0 = Math.floor(b.z0 / CELL), cz1 = Math.floor(b.z1 / CELL)
      for (let cx = cx0; cx <= cx1; cx++) {
        for (let cz = cz0; cz <= cz1; cz++) {
          const key = cx + ',' + cz
          let arr = this.cells.get(key)
          if (!arr) { arr = []; this.cells.set(key, arr) }
          arr.push(i)
        }
      }
    }
  }

  /** 반지름 r의 원이 (x,z)에서 어떤 상자와 겹치는가 */
  hits(x, z, r, headY, feetY) {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL)
    const seen = this._seen || (this._seen = new Set())
    seen.clear()
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const arr = this.cells.get((cx + dx) + ',' + (cz + dz))
        if (!arr) continue
        for (let i = 0; i < arr.length; i++) {
          const idx = arr[i]
          if (seen.has(idx)) continue
          seen.add(idx)
          const b = this.boxes[idx]
          /* 수직으로 겹치지 않으면 통과 — 머리 위 배관, 발밑 케이블 받침 */
          if (b.y1 <= feetY || b.y0 >= headY) continue
          const nx = Math.max(b.x0, Math.min(x, b.x1))
          const nz = Math.max(b.z0, Math.min(z, b.z1))
          const ddx = x - nx, ddz = z - nz
          if (ddx * ddx + ddz * ddz < r * r) return true
        }
      }
    }
    return false
  }

  /**
   * pos를 (dx, dz)만큼 밀되 막히면 그 축만 취소한다.
   * @param stepTop 이 높이 아래의 상자는 밟고 넘어간다 (턱·받침대)
   */
  move(pos, dx, dz, r, stepTop) {
    const headY = pos.y + 0.2
    const feetY = stepTop
    if (dx !== 0 && !this.hits(pos.x + dx, pos.z, r, headY, feetY)) pos.x += dx
    if (dz !== 0 && !this.hits(pos.x, pos.z + dz, r, headY, feetY)) pos.z += dz
  }

  /** 스폰 지점이 벽 안이면 주변에서 빈 곳을 찾는다 */
  findFree(x, z, r, headY, feetY) {
    if (!this.hits(x, z, r, headY, feetY)) return [x, z]
    for (let ring = 1; ring <= 12; ring++) {
      const step = ring * 0.8
      for (let a = 0; a < 12; a++) {
        const ang = (a / 12) * Math.PI * 2
        const tx = x + Math.cos(ang) * step
        const tz = z + Math.sin(ang) * step
        if (!this.hits(tx, tz, r, headY, feetY)) return [tx, tz]
      }
    }
    return [x, z]
  }
}
