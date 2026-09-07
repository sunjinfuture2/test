import { useEffect, useRef, useState } from 'react'
import { useAppStore } from '../store/useAppStore.js'

const MODE_LABEL = { multi: '복층', single: '단층' }

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
              </span>
            )}
          </span>
        </h1>
      </div>
      <div className="h-meta">AIDC · INFRASTRUCTURE</div>
    </header>
  )
}
