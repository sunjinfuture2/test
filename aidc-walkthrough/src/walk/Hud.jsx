import { SPEED_PRESETS, SENS_DEFAULT } from './Controller.js'

/**
 * 워크스루 HUD — 최소주의.
 *
 * 체력바·나침반 같은 게임 요소는 넣지 않는다. 화면에 남는 것은 지금 몇
 * 층인지, 건물 어디에 있는지, 무엇을 보고 있는지, 어떻게 움직이는지다.
 */
export default function Hud({
  ready, locked, gateOpen, floorLabel, speedIdx, sens, fps,
  aimed, aimedTerm, openTerm, cats, spawns, mapRef, mapSize,
  onStart, onGateClose, onHelp, onSpeed, onSens, onGoto, onClose,
}) {
  /* 감도는 기본값 대비 백분율로 보여 준다 — 0.0022 rad/px 같은 숫자는
     읽어도 지금이 빠른지 느린지 알 수 없다 */
  const sensPct = Math.round((sens / SENS_DEFAULT) * 100)

  return (
    <div className="hud">
      {/* 시작 오버레이 — 포인터 락은 사용자 제스처에서만 걸 수 있다 */}
      {ready && gateOpen && (
        <div className="gate">
          <div className="gate-card">
            <button className="gate-x" onClick={onGateClose} aria-label="닫기">×</button>
            <div className="gate-title">AI 데이터센터 내부 둘러보기</div>
            <div className="gate-sub">충주 데이터센터 · 실측 도면 기반</div>

            <button className="gate-go" onClick={onStart}>화면을 클릭해 시작</button>

            <div className="gate-keys">
              <div><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd><span>이동</span></div>
              <div><kbd>마우스</kbd><span>둘러보기</span></div>
              <div><kbd>Shift</kbd><span>달리기</span></div>
              <div><kbd>Space</kbd><span>장비 설명</span></div>
              <div><kbd>1</kbd>–<kbd>{SPEED_PRESETS.length}</kbd><span>이동 속도</span></div>
              <div><kbd>[</kbd><kbd>]</kbd><span>마우스 감도</span></div>
              <div><kbd>PgUp</kbd><kbd>PgDn</kbd><span>층 이동</span></div>
              <div><kbd>Esc</kbd><span>창 닫기</span></div>
            </div>

            <div className="gate-spawn">
              <span className="gate-spawn-label">시작 위치</span>
              {spawns.map((s) => (
                <button key={s.id} onClick={() => onGoto(s.id)}>{s.label}</button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 상단 바 */}
      <div className="top">
        <span className="floor">{floorLabel}</span>
        <span className="sep" />
        <span className="speed">
          {SPEED_PRESETS.map((p, i) => (
            <button
              key={p.id}
              className={i === speedIdx ? 'on' : ''}
              onClick={() => onSpeed(i)}
              title={`${p.walk} m/s · 숫자 ${i + 1}`}
            >
              {p.label}
            </button>
          ))}
        </span>
        <span className="sep" />
        <span className="sens" title="마우스 감도 — [ 느리게 · ] 빠르게">
          <button onClick={() => onSens(-1)} aria-label="감도 낮추기">[</button>
          <em>감도 {sensPct}%</em>
          <button onClick={() => onSens(1)} aria-label="감도 높이기">]</button>
        </span>
        <span className="fps">{fps} fps</span>
        <button className="help" onClick={onHelp} aria-label="조작 도움말">?</button>
      </div>

      {/* 미니맵 — 지금 층 평면과 내 위치·시선 */}
      <div className="map" style={{ width: mapSize.w, height: mapSize.h }}>
        <canvas ref={mapRef} width={mapSize.w} height={mapSize.h} />
        <span className="map-floor">{floorLabel}</span>
      </div>

      {/* 카드를 닫았는데 시선 조작이 꺼져 있을 때 — 큰 오버레이 대신 알약 하나 */}
      {ready && !gateOpen && !locked && (
        <div className="resume">화면을 클릭하면 시선 조작이 켜집니다</div>
      )}

      {/* 조준 힌트 — 크로스헤어는 그리지 않는다 (게임 느낌의 가장 큰 원인) */}
      {locked && aimed && !openTerm && (
        <div className="aim" style={{ '--cat': cats[aimedTerm.cat].color }}>
          <div className="aim-name">{aimedTerm.name}</div>
          <div className="aim-key"><kbd>Space</kbd> 설명 보기</div>
        </div>
      )}

      {/* 설명 패널 */}
      {openTerm && (
        <div className="panel" style={{ '--cat': cats[openTerm.cat].color }}>
          <button className="panel-x" onClick={onClose} aria-label="닫기">×</button>
          <div className="panel-head">
            <div className="panel-name">{openTerm.name}</div>
            <div className="panel-en">{openTerm.en}</div>
          </div>
          <p className="panel-desc">{openTerm.desc}</p>
          <ul className="panel-facts">
            {openTerm.facts.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <div className="panel-foot">
            <kbd>Space</kbd> 닫고 계속 걷기 · <kbd>Esc</kbd> 닫기
          </div>
        </div>
      )}
    </div>
  )
}
