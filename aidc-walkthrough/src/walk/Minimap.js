/**
 * 미니맵 — 지금 층의 평면과 내 위치·시선.
 *
 * 별도의 평면도 데이터를 두지 않는다. 이미 걸어 다니는 데 쓰는 충돌
 * 상자를 그대로 위에서 내려다본 것이 곧 이 층의 평면이다. 데이터를
 * 두 벌 두면 도면이 바뀔 때 한쪽만 갱신되어 어긋난다.
 *
 * 층 평면은 층이 바뀔 때 한 번만 오프스크린 캔버스에 굽고, 매 프레임은
 * 그 그림을 얹고 화살표만 다시 그린다. 상자가 수천 개라 매 프레임
 * 다시 그리면 미니맵 하나가 프레임을 다 먹는다.
 */

const PAD = 3            // 평면 바깥 여백 (m)
const WALL = '#8c949e'
const EQUIP = '#4a5460'
const BG = 'rgba(255, 255, 255, 0.92)'

export class Minimap {
  /**
   * @param {Array} colliders buildWorld가 만든 수평 AABB 목록
   * @param {number} w 미니맵 픽셀 폭
   */
  constructor(colliders, w = 208) {
    this.colliders = colliders

    /* 창은 모든 층을 합친 범위로 한 번 정한다 — 층마다 다시 맞추면
       층을 오갈 때 지도가 확대·축소되어 방향 감각이 끊긴다 */
    let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity
    for (const b of colliders) {
      if (b.x0 < x0) x0 = b.x0
      if (b.x1 > x1) x1 = b.x1
      if (b.z0 < z0) z0 = b.z0
      if (b.z1 > z1) z1 = b.z1
    }
    this.x0 = x0 - PAD; this.z0 = z0 - PAD
    const spanX = (x1 - x0) + PAD * 2
    const spanZ = (z1 - z0) + PAD * 2
    this.k = w / spanX
    this.w = w
    this.h = Math.round(spanZ * this.k)

    this.baked = new Map()   // floor → HTMLCanvasElement
  }

  /** 월드 x/z → 미니맵 픽셀 */
  px(x) { return (x - this.x0) * this.k }
  pz(z) { return (z - this.z0) * this.k }

  _bake(floor) {
    const c = document.createElement('canvas')
    c.width = this.w; c.height = this.h
    const g = c.getContext('2d')

    /* 장비를 먼저, 벽을 나중에 — 벽 선이 장비에 덮이면 방의 경계가
       사라져서 어디가 복도인지 읽히지 않는다 */
    for (const pass of [false, true]) {
      g.fillStyle = pass ? WALL : EQUIP
      for (const b of this.colliders) {
        if (b.floor !== floor || !!b.wall !== pass) continue
        const x = this.px(b.x0), y = this.pz(b.z0)
        /* 얇은 벽도 1 px은 남는다 — 반올림으로 사라지면 방이 뚫려 보인다 */
        g.fillRect(x, y, Math.max(1, (b.x1 - b.x0) * this.k), Math.max(1, (b.z1 - b.z0) * this.k))
      }
    }
    this.baked.set(floor, c)
    return c
  }

  /**
   * @param {CanvasRenderingContext2D} g 미니맵 캔버스의 2D 컨텍스트
   * @param {string} floor 지금 층
   * @param {number} x 월드 x
   * @param {number} z 월드 z
   * @param {number} yaw 카메라 yaw (three 기준: 0이면 -Z를 본다)
   */
  draw(g, floor, x, z, yaw) {
    g.clearRect(0, 0, this.w, this.h)
    g.fillStyle = BG
    g.fillRect(0, 0, this.w, this.h)
    g.drawImage(this.baked.get(floor) || this._bake(floor), 0, 0)

    /* 내 위치 — 화살표가 시선을 가리킨다. yaw 0 = -Z = 화면 위 */
    const cx = this.px(x), cy = this.pz(z)
    g.save()
    g.translate(cx, cy)
    g.rotate(-yaw)
    g.beginPath()
    g.moveTo(0, -7)
    g.lineTo(4.6, 5.2)
    g.lineTo(0, 2.6)
    g.lineTo(-4.6, 5.2)
    g.closePath()
    g.fillStyle = '#e0115f'
    g.fill()
    g.strokeStyle = '#fff'
    g.lineWidth = 1.2
    g.stroke()
    g.restore()
  }
}
