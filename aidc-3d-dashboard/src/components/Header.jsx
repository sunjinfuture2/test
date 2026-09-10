import { useEffect, useRef, useState } from 'react'
import { useAppStore } from '../store/useAppStore.js'

const MODE_LABEL = { multi: '복층', single: '단층' }

/* 1인칭 워크스루 — 같은 도면을 실측 스케일로 세운 별도 앱(/aidc-walkthrough).
   씬을 통째로 갈아끼우는 대신 링크로 넘긴다. 포인터 락·충돌 격자·전용
   조명을 쓰는 앱이라 이 대시보드와 한 페이지에 얹으면 서로 방해한다.
   <a>로 두는 덕에 Ctrl/⌘ 클릭이면 새 탭으로 열린다.

   대시보드는 /3d/, 워크스루는 /walk/에 배포되므로 상대 경로로 잇는다 —
   절대 URL로 박으면 저장소 이름이나 호스트가 바뀔 때 같이 깨진다. */
const WALK_URL = '../walk/'

export default function Header() {
  const mode = useAppStore((s) => s.mode)
  const setMode = useAppStore((s) => s.setMode)
  const sheet = useAppStore((s) => s.sheet)
  const setSheet = useAppStore((s) => s.setSheet)
  const [open, setOpen] = useState(false)
  const ddRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => {
      if (ddRef.current && !ddRef.current.contains(e.target)) setOpen(false)
    }
    window.addEventListener('mousedown', close)
    return () => window.removeEventListener('mousedown', close)
  }, [open])

  return (
    <header className="top-header">
      {/* 휴대폰 전용 — 검색·용어 목록 시트 열기 */}
      <button
        type="button"
        className="sheet-open"
        aria-label="용어 목록 열기"
        aria-expanded={sheet === 'list'}
        onClick={() => setSheet(sheet === 'list' ? null : 'list')}
      >
        <span /><span /><span />
      </button>
      <div className="h-title">
        <h1>
          <span className="h-long">AI Data Center 인터랙티브 </span>인프라 용어사전 :{' '}
          <span className="mode-dd" ref={ddRef}>
            <button
              className="mode-current"
              aria-haspopup="listbox"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {MODE_LABEL[mode]}<span className="mode-caret">▼</span>
            </button>
            {open && (
              <span className="mode-menu" role="listbox">
                {Object.entries(MODE_LABEL).map(([key, label]) => (
                  <button
                    key={key}
                    role="option"
                    aria-selected={mode === key}
                    className={`mode-item${mode === key ? ' on' : ''}`}
                    onClick={() => { setMode(key); setOpen(false) }}
                  >
                    {label}
                  </button>
                ))}
                <a className="mode-item mode-link" href={WALK_URL} onClick={() => setOpen(false)}>
                  내부 둘러보기
                </a>
              </span>
            )}
          </span>
        </h1>
      </div>
      <div className="h-meta">AIDC · INFRASTRUCTURE</div>
    </header>
  )
}
