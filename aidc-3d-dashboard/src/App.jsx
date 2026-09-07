import { useEffect, useRef } from 'react'
import Header from './components/Header.jsx'
import Toolbar from './components/Toolbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import FloorNav from './components/FloorNav.jsx'
import Viewport from './components/Viewport.jsx'
import { useAppStore } from './store/useAppStore.js'
import singleHtml from './single/aidc-single.html?raw'

/* 단층 원본과 동일한 고정 디자인 캔버스 (창에 맞춰 축소·중앙 정렬) */
const DESIGN_W = 1908
const DESIGN_H = 928

/**
 * 화면 크기로 레이아웃 모드를 고른다.
 *  - 데스크톱은 지금까지의 고정 캔버스 축소 방식을 그대로 쓴다.
 *  - 캔버스가 크게 줄어드는 창(작은 노트북·태블릿)에서는 축소 대신 창을 채운다.
 *    같은 화면에 담기는 글자가 커지고, 3D 뷰가 실제 화면 비율을 쓰게 된다.
 *  - 휴대폰 폭에서는 좌측 패널을 하단 시트로 내린다.
 */
function pickLayout(w, h) {
  if (w < 700) return 'phone'
  if (w >= 1500 && h >= 780) return 'canvas'
  return 'compact'
}

export default function App() {
  const mode = useAppStore((s) => s.mode)
  const setMode = useAppStore((s) => s.setMode)
  const layout = useAppStore((s) => s.layout)
  const setLayout = useAppStore((s) => s.setLayout)
  const shellRef = useRef(null)

  /* 레이아웃 모드 판정 — 창 크기가 바뀔 때마다 다시 고른다 */
  useEffect(() => {
    const pick = () => setLayout(pickLayout(window.innerWidth, window.innerHeight))
    pick()
    window.addEventListener('resize', pick)
    window.addEventListener('orientationchange', pick)
    return () => {
      window.removeEventListener('resize', pick)
      window.removeEventListener('orientationchange', pick)
    }
  }, [setLayout])

  /* canvas 모드에서만 1908×928 캔버스를 min(w/1908, h/928) 배율로 축소한다.
     유동 모드에서는 셸이 창을 그대로 채우므로 배율이 1이다. */
  useEffect(() => {
    const el = shellRef.current
    if (!el) return
    if (layout !== 'canvas') {
      window.__designScale = 1
      el.style.transform = ''
      el.style.left = ''
      el.style.top = ''
      return
    }
    const apply = () => {
      const s = Math.max(0.1, Math.min(window.innerWidth / DESIGN_W, window.innerHeight / DESIGN_H))
      window.__designScale = s
      el.style.transform = `scale(${s})`
      el.style.left = (window.innerWidth - DESIGN_W * s) / 2 + 'px'
      el.style.top = (window.innerHeight - DESIGN_H * s) / 2 + 'px'
    }
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [mode, layout])

  /* 단층(원본 HTML) 쪽 드롭다운에서 '복층' 선택 → 메시지로 복귀 */
  useEffect(() => {
    const onMessage = (e) => {
      if (e.data && e.data.aidcMode === 'multi') setMode('multi')
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [setMode])

  /* 단층 모드: 업로드된 원본 코드를 수정 없이 그대로 전체 화면 iframe으로 구동 */
  if (mode === 'single') {
    return <iframe className="single-frame" title="인터랙티브 인프라 용어사전 · 단층" srcDoc={singleHtml} />
  }

  return (
    <div className={`app-shell lay-${layout}`} ref={shellRef}>
      <Header />
      <div className="wrap">
        <Sidebar />
        <main className="stage">
          <Toolbar />
          <Viewport />
          {/* 휴대폰: 층 내비는 시트와 함께 내려가지 않도록 뷰포트 아래에 따로 둔다 */}
          {layout === 'phone' && <FloorNav className="floor-nav-phone" />}
        </main>
      </div>
    </div>
  )
}
