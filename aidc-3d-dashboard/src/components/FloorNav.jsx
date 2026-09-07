import { Fragment } from 'react'
import { useAppStore } from '../store/useAppStore.js'
import { FLOORS } from '../data/terms.js'

/**
 * 층 선택 내비 (B1 · 1F · 2F · PH).
 *
 * 데스크톱에서는 좌측 패널 하단에, 휴대폰에서는 뷰포트 아래에 따로 놓인다.
 * 하단 시트는 통째로 화면 밖으로 내려가므로, 패널 안에 둔 것을 그대로 쓰면
 * 시트를 닫는 순간 층 버튼도 같이 사라진다. 그래서 두 자리에 각각 렌더하고
 * 레이아웃 모드에 맞는 쪽만 CSS로 보인다.
 */
export default function FloorNav({ className = '', divided = false }) {
  const floor = useAppStore((s) => s.floor)
  const setFloor = useAppStore((s) => s.setFloor)

  return (
    <nav className={`floor-nav${divided ? ' divided' : ''} ${className}`.trim()} aria-label="층 선택">
      {Object.entries(FLOORS).map(([key, label], i) => (
        <Fragment key={key}>
          {i > 0 && <span className="floor-sep" aria-hidden="true" />}
          <button
            className={`floor-btn${floor === key ? ' on' : ''}`}
            aria-pressed={floor === key}
            onClick={() => setFloor(floor === key ? 'all' : key)}
          >
            {label}
          </button>
        </Fragment>
      ))}
    </nav>
  )
}
