import { useMemo } from 'react'
import { ctx } from '../scene/helpers.js'
import { PLAN_SHAPES, PLAN_BOUNDS } from '../scene/buildFacility.js'
import { TERMS, CATS, FLOORS } from '../data/terms.js'
import { useAppStore } from '../store/useAppStore.js'

/**
 * 설계도 — 층별(B1·1F·2F·PH) 평면 배치도.
 *
 * 3D 씬을 빌드할 때 수집한 용어별·층별 장비 중심(ctx.floorPlan)을 도면 좌표
 * 그대로 평면에 찍는다. 어느 장비가 어느 층 어느 위치에 있는지 보기 위한
 * 뷰이며, 이름표를 누르면 해당 층 3D로 이동한다.
 *
 * 도면이 세로로 길고 패널은 가로로 넓으므로, 이름표는 3D 뷰와 같은 방식으로
 * 도면 좌우 여백에 세로로 늘어놓고 리더라인으로 실제 위치와 잇는다.
 */

const ORDER = ['b1', 'f1', 'f2', 'roof']

/* 이름표 배치 상수 — SVG 사용자 단위(= 도면 m) 기준 */
const LINE_H = 6.4        // 이름표 세로 간격
const VB_ASPECT = 2.0     // 패널 가로:세로 — 도면 좌우에 이름표 여백을 확보
const GUTTER = 4          // 도면 외곽과 이름표 사이 간격

const B = PLAN_BOUNDS
const PLAN_W = B.x1 - B.x0
const PLAN_H = B.y1 - B.y0
const VB_W = Math.max(PLAN_W, PLAN_H * VB_ASPECT)
const VB_X = B.x0 - (VB_W - PLAN_W) / 2
const VIEW_BOX = `${VB_X} ${B.y0} ${VB_W} ${PLAN_H}`
const MID_X = (B.x0 + B.x1) / 2

/** 한쪽 열의 이름표를 겹치지 않게 세로로 배분 (아래로 밀고, 넘치면 위로 되밀기) */
function stack(items) {
  const n = items.length
  if (!n) return []
  const sorted = [...items].sort((a, b) => a.y - b.y)
  const ys = sorted.map((it) => it.y)
  for (let i = 1; i < n; i++) if (ys[i] < ys[i - 1] + LINE_H) ys[i] = ys[i - 1] + LINE_H
  const over = ys[n - 1] - B.y1
  if (over > 0) {
    for (let i = 0; i < n; i++) ys[i] -= over
    for (let i = n - 2; i >= 0; i--) if (ys[i] > ys[i + 1] - LINE_H) ys[i] = ys[i + 1] - LINE_H
  }
  return sorted.map((it, i) => ({ ...it, labelY: Math.max(B.y0 + 3, ys[i]) }))
}

function layout(items) {
  const withName = items.map((it) => ({
    ...it,
    name: TERMS[it.term] ? TERMS[it.term].name : it.term,
  }))
  const left = stack(withName.filter((it) => it.x < MID_X)).map((it) => ({
    ...it, side: 'L', labelX: B.x0 - GUTTER,
  }))
  const right = stack(withName.filter((it) => it.x >= MID_X)).map((it) => ({
    ...it, side: 'R', labelX: B.x1 + GUTTER,
  }))
  return [...left, ...right]
}

function FloorPanel({ floor, items, zoomed, onZoom, onPick }) {
  const laid = useMemo(() => layout(items), [items])

  return (
    <section className={`bp-panel${zoomed ? ' zoomed' : ''}`}>
      <header className="bp-panel-head">
        <span className="bp-floor">{FLOORS[floor]}</span>
        <span className="bp-count">장비 {items.length}종</span>
        <button
          type="button"
          className="bp-zoom"
          onClick={() => onZoom(zoomed ? null : floor)}
        >
          {zoomed ? '↩ 전체 층' : '⤢ 크게'}
        </button>
      </header>
      <svg
        className="bp-svg" viewBox={VIEW_BOX} preserveAspectRatio="xMidYMid meet"
        role="img" aria-label={`${FLOORS[floor]} 평면 배치도`}
      >
        {PLAN_SHAPES[floor].map((r, i) => (
          <rect
            key={i} x={r.x} y={r.y} width={r.w} height={r.d}
            className={`bp-rect${r.dashed ? ' dashed' : ''}`}
          />
        ))}
        {PLAN_SHAPES[floor].map((r, i) =>
          r.dashed ? null : (
            <text key={`n${i}`} className="bp-zone" x={r.x + 2} y={r.y + 6}>{r.name}</text>
          ),
        )}
        {laid.map((it) => {
          const t = TERMS[it.term]
          const color = t ? CATS[t.cat].color : '#30353C'
          const tipX = it.side === 'L' ? it.labelX - 1 : it.labelX + 1
          return (
            <g
              key={it.term} className="bp-item" role="button" tabIndex={0}
              onClick={() => onPick(it.term, floor)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onPick(it.term, floor) }}
            >
              <line className="bp-tie" x1={tipX} y1={it.labelY} x2={it.x} y2={it.y} />
              <circle className="bp-dot" cx={it.x} cy={it.y} r={1.7} fill={color} />
              <text
                className="bp-name" x={it.labelX} y={it.labelY}
                textAnchor={it.side === 'L' ? 'end' : 'start'}
              >
                <tspan className="bp-bullet" fill={color}>■ </tspan>
                {it.name}
                {it.pipeOnly && <tspan className="bp-sub"> (배관)</tspan>}
              </text>
            </g>
          )
        })}
      </svg>
    </section>
  )
}

export default function Blueprint() {
  const zoom = useAppStore((s) => s.blueprintZoom)
  const setZoom = useAppStore((s) => s.setBlueprintZoom)
  const close = useAppStore((s) => s.closeBlueprint)
  const openFromBlueprint = useAppStore((s) => s.openFromBlueprint)

  const plan = ctx.floorPlan
  const floors = zoom ? [zoom] : ORDER

  return (
    <div className="blueprint">
      <div className="bp-bar">
        <span className="bp-title">설계도 · 층별 장비 배치</span>
        <span className="bp-hint">장비 이름을 누르면 해당 층 3D로 이동합니다</span>
        <span className="bp-legend">
          {Object.entries(CATS).map(([key, c]) => (
            <span key={key} className="bp-leg">
              <i style={{ background: c.color }} />
              {c.label}
            </span>
          ))}
        </span>
        <button type="button" className="bp-close" onClick={close}>닫기 ✕</button>
      </div>
      {plan ? (
        <div className={`bp-grid${zoom ? ' single' : ''}`}>
          {floors.map((f) => (
            <FloorPanel
              key={f}
              floor={f}
              items={plan[f] || []}
              zoomed={!!zoom}
              onZoom={setZoom}
              onPick={openFromBlueprint}
            />
          ))}
        </div>
      ) : (
        <div className="bp-empty">3D 모델을 불러오는 중입니다…</div>
      )}
    </div>
  )
}
