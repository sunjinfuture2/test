import * as THREE from 'three'

/**
 * 1인칭 이동 컨트롤러.
 *
 * 조작은 일반 FPS와 같다 — WASD 이동 + 마우스 시선(포인터 락) + Shift 달리기.
 * 다만 아래 몇 가지는 "게임 조작"과 "사람이 걷는 느낌"을 가르는 지점이라
 * 기본값을 신중히 잡았다:
 *   - 즉시 최고속도가 되지 않는다 (가속 22 m/s², 감속 30 m/s²)
 *   - 대각선 입력을 정규화한다 (안 하면 대각선이 1.41배 빨라져 바로 티가 난다)
 *   - 벽에 부딪히면 멈추지 않고 미끄러진다 (축을 나눠 밀어본다)
 *   - 카메라 롤은 언제나 0, 피치는 ±80°로 제한
 */

const EYE = 1.65            // 눈높이 (m)
const RADIUS = 0.32         // 몸통 반지름 (m) — 0.8 m 문틀을 통과할 수 있어야 한다
const STEP_UP = 0.28        // 이 높이까지는 그냥 올라간다
const ACCEL = 22
const DECEL = 30
const PITCH_LIMIT = THREE.MathUtils.degToRad(80)

/* 걷기 속도 프리셋 (m/s) — 사람 보통 걸음이 1.4.
   위쪽 둘은 걷는 속도가 아니라 이동 수단이다. 건물이 한 변 100 m라
   보통 걸음으로 끝까지 가면 70초가 걸린다 — 둘러보려는 사람에게는
   너무 길다. 질주(12 m/s)는 Shift와 겹치면 25 m/s로, 100 m 축을 4초에
   지난다. 이 속도에서는 벽을 뚫지 않도록 이동을 잘게 나눠야 한다 */
export const SPEED_PRESETS = [
  { id: 'stroll', label: '천천히', walk: 0.9 },
  { id: 'normal', label: '보통', walk: 1.4 },
  { id: 'brisk', label: '빠르게', walk: 2.6 },
  { id: 'fast', label: '아주 빠르게', walk: 5 },
  { id: 'dash', label: '질주', walk: 12 },
]
export const SPRINT_MULT = 2.1

/* 처음 들어오면 질주로 시작한다 — 건물이 워낙 넓어서 보통 걸음으로는
   첫인상이 "넓다"가 아니라 "안 나아간다"가 된다 */
export const DEFAULT_SPEED_IDX = 4

/* 한 번에 이 거리 이상은 밀지 않는다 — 벽 두께(약 0.3 m)보다 작게 잡아야
   빠른 속도에서 벽을 통과하지 않는다 */
const MAX_STEP = 0.12

/* 마우스 감도 — 기본값과 [ ] 로 오가는 범위 */
export const SENS_DEFAULT = 0.0022
export const SENS_MIN = 0.0005
export const SENS_MAX = 0.009
const SENS_RATIO = 1.22

export class Controller {
  constructor(camera, domElement) {
    this.camera = camera
    this.dom = domElement

    this.pos = new THREE.Vector3(0, EYE, 0)
    this.vel = new THREE.Vector3()
    this.yaw = 0
    this.pitch = 0
    this.floorY = 0
    this.eyeTarget = EYE
    this.eyeCurrent = EYE

    this.walkSpeed = SPEED_PRESETS[DEFAULT_SPEED_IDX].walk
    this.mouseSensitivity = SENS_DEFAULT
    this.locked = false
    this.enabled = true

    this.keys = new Set()
    this.grid = null            // CollisionGrid
    this.moving = false
    this.bobPhase = 0
    this.headBob = true

    this._onKeyDown = this._onKeyDown.bind(this)
    this._onKeyUp = this._onKeyUp.bind(this)
    this._onMouseMove = this._onMouseMove.bind(this)
    this._onLockChange = this._onLockChange.bind(this)
  }

  attach() {
    window.addEventListener('keydown', this._onKeyDown)
    window.addEventListener('keyup', this._onKeyUp)
    document.addEventListener('mousemove', this._onMouseMove)
    document.addEventListener('pointerlockchange', this._onLockChange)
  }

  detach() {
    window.removeEventListener('keydown', this._onKeyDown)
    window.removeEventListener('keyup', this._onKeyUp)
    document.removeEventListener('mousemove', this._onMouseMove)
    document.removeEventListener('pointerlockchange', this._onLockChange)
  }

  requestLock() {
    if (this.dom.requestPointerLock) this.dom.requestPointerLock()
  }

  /** 마우스 감도를 한 칸 올리거나(+1) 내린다(-1). 새 감도를 돌려준다 */
  stepSensitivity(dir) {
    const next = this.mouseSensitivity * (dir > 0 ? SENS_RATIO : 1 / SENS_RATIO)
    this.mouseSensitivity = Math.max(SENS_MIN, Math.min(SENS_MAX, next))
    return this.mouseSensitivity
  }

  _onLockChange() {
    this.locked = document.pointerLockElement === this.dom
    if (!this.locked) this.keys.clear()   // 락이 풀리면 키가 눌린 채로 남지 않게
    if (this.onLockChange) this.onLockChange(this.locked)
  }

  _onKeyDown(e) {
    if (!this.enabled) return
    /* 브라우저 기본 스크롤을 막되, 조합키(새로고침 등)는 살려 둔다 */
    if (!e.ctrlKey && !e.metaKey && !e.altKey) {
      if (MOVE_CODES.has(e.code) || e.code === 'Space') e.preventDefault()
    }
    this.keys.add(e.code)
    if (this.onKeyDown) this.onKeyDown(e)
  }

  _onKeyUp(e) { this.keys.delete(e.code) }

  _onMouseMove(e) {
    if (!this.locked || !this.enabled) return
    this.yaw -= e.movementX * this.mouseSensitivity
    this.pitch -= e.movementY * this.mouseSensitivity
    this.pitch = Math.max(-PITCH_LIMIT, Math.min(PITCH_LIMIT, this.pitch))
  }

  /** 도면 좌표(월드 x/z)와 층 바닥 높이로 순간 배치 */
  placeAt(x, z, floorY, yaw) {
    this.pos.set(x, floorY + EYE, z)
    this.floorY = floorY
    this.eyeCurrent = this.eyeTarget = EYE
    this.vel.set(0, 0, 0)
    if (yaw !== undefined) this.yaw = yaw
    this.pitch = 0
    this.syncCamera()
  }

  syncCamera() {
    this.camera.position.copy(this.pos)
    this.camera.rotation.set(0, 0, 0, 'YXZ')
    this.camera.rotation.y = this.yaw
    this.camera.rotation.x = this.pitch
  }

  update(dt) {
    if (!this.enabled) return
    /* 탭 전환 후 복귀 시 dt가 몇 초로 튀어 순간이동하는 것을 막는다 */
    dt = Math.min(dt, 0.05)

    const k = this.keys
    let fwd = 0, side = 0
    if (k.has('KeyW') || k.has('ArrowUp')) fwd += 1
    if (k.has('KeyS') || k.has('ArrowDown')) fwd -= 1
    if (k.has('KeyD') || k.has('ArrowRight')) side += 1
    if (k.has('KeyA') || k.has('ArrowLeft')) side -= 1

    /* 대각선 정규화 — 이걸 빠뜨리면 대각선이 1.41배 빨라진다 */
    const len = Math.hypot(fwd, side)
    if (len > 1) { fwd /= len; side /= len }

    const sprint = k.has('ShiftLeft') || k.has('ShiftRight')
    const target = this.walkSpeed * (sprint ? SPRINT_MULT : 1)

    const sin = Math.sin(this.yaw), cos = Math.cos(this.yaw)
    /* yaw 0 = -Z 방향을 본다 (three 기본) */
    const wantX = (-sin * fwd + cos * side) * target
    const wantZ = (-cos * fwd - sin * side) * target

    const rate = (Math.abs(wantX) + Math.abs(wantZ)) > 0.001 ? ACCEL : DECEL
    this.vel.x = approach(this.vel.x, wantX, rate * dt)
    this.vel.z = approach(this.vel.z, wantZ, rate * dt)

    const speed = Math.hypot(this.vel.x, this.vel.z)
    this.moving = speed > 0.05

    if (speed > 0.0001) {
      const dx = this.vel.x * dt, dz = this.vel.z * dt
      if (this.grid) {
        /* 질주 속도(25 m/s)에서 한 프레임 변위는 1 m가 넘는다. 한 번에
           밀면 얇은 벽을 그냥 지나치므로 MAX_STEP 이하로 쪼갠다 */
        const n = Math.max(1, Math.ceil(Math.hypot(dx, dz) / MAX_STEP))
        const sx = dx / n, sz = dz / n
        for (let i = 0; i < n; i++) {
          this.grid.move(this.pos, sx, sz, RADIUS, this.floorY + STEP_UP)
        }
      } else { this.pos.x += dx; this.pos.z += dz }
    }

    /* 눈높이 — 바닥 높이가 바뀌면 뚝 끊기지 않게 따라간다 */
    this.eyeTarget = this.floorY + EYE
    this.eyeCurrent += (this.eyeTarget - this.eyeCurrent) * Math.min(1, dt / 0.12)
    let y = this.eyeCurrent

    /* 헤드밥 — 진폭 1.1 cm. 이보다 크면 즉시 게임처럼 보인다 */
    if (this.headBob) {
      if (this.moving) this.bobPhase += dt * (speed / 1.4) * 5.8
      const amp = this.headBob ? Math.min(0.011, 0.011 * (speed / 1.4)) : 0
      y += Math.sin(this.bobPhase) * amp
      if (!this.moving) this.bobPhase += (0 - (this.bobPhase % (Math.PI * 2))) * dt * 3
    }

    this.pos.y = y
    this.syncCamera()
  }
}

const MOVE_CODES = new Set([
  'KeyW', 'KeyA', 'KeyS', 'KeyD',
  'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
])

function approach(cur, target, step) {
  if (cur < target) return Math.min(cur + step, target)
  if (cur > target) return Math.max(cur - step, target)
  return cur
}
