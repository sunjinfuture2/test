import { create } from 'zustand'

/**
 * Shared state between the React UI (header/toolbar/sidebar) and the
 * imperative three.js viewport. Mirrors the reference implementation's
 * globals: activeFilter, activeFloor, flowState/flowOn, selected.
 */
export const useAppStore = create((set) => ({
  /**
   * 모델 모드: multi(복층·React 앱) | single(단층·원본 HTML을 iframe으로 그대로 실행).
   * 단층 코드는 수정 없이 원본 그대로 구동된다.
   */
  mode: 'multi',
  setMode: (mode) => set((s) => (s.mode === mode ? {} : { mode })),

  /** 계통 필터: all | cooling | power | it | mgmt */
  filter: 'all',
  setFilter: (filter) => set({ filter }),

  /** 층 필터: all | b1 | f1 | f2 | roof
   *  층을 고르면 그 층에 집중하는 것이므로 장비 선택은 함께 해제한다 */
  floor: 'all',
  setFloor: (floor) => set({ floor, selected: null, focusId: null }),

  /** Flow 표시 상태 (레퍼런스와 동일한 5계통) */
  flowState: { condensate: true, chilled: true, heat: true, tcs: true, power: true },
  toggleFlow: (key) =>
    set((s) => ({ flowState: { ...s.flowState, [key]: !s.flowState[key] } })),
  flowOn: true,
  toggleFlowMaster: () =>
    set((s) => {
      const on = !s.flowOn
      const flowState = { ...s.flowState }
      Object.keys(flowState).forEach((k) => (flowState[k] = on))
      return { flowOn: on, flowState }
    }),

  /** 선택된 용어 id (null = 선택 없음)
   *  selectTick — 같은 장비를 다시 골라도 휴대폰 시트를 다시 올리기 위한 카운터 */
  selected: null,
  selectTick: 0,
  setSelected: (selected) => set((s) => ({ selected, selectTick: s.selectTick + 1 })),

  /**
   * 사이드바에서 부품을 클릭했을 때: 선택 + 카메라 줌인.
   * 층 필터는 건드리지 않는다 — 층은 아래 층 버튼으로만 바꾼다.
   * (3D 라벨/모델 클릭은 setSelected만 — 카메라는 움직이지 않음)
   */
  focusId: null,
  focusTick: 0,
  requestFocus: (id) =>
    set((s) => ({
      selected: id,
      selectTick: s.selectTick + 1,
      focusId: id,
      focusTick: s.focusTick + 1,
    })),

  /** 화면 크기에 따른 레이아웃 모드
   *  canvas  — 고정 1908×928 디자인 캔버스를 창에 맞춰 축소 (데스크톱)
   *  compact — 창을 그대로 채우는 유동 레이아웃 (작은 노트북 · 태블릿)
   *  phone   — 유동 + 좌측 패널을 하단 시트로 (휴대폰) */
  layout: 'canvas',
  setLayout: (layout) => set((s) => (s.layout === layout ? {} : { layout })),

  /** 휴대폰 하단 시트: null(닫힘) | 'detail'(선택 장비 설명) | 'list'(검색·용어 목록) */
  sheet: null,
  setSheet: (sheet) => set({ sheet }),

  /** 장비 라벨(리더라인 포함) 표시 여부 */
  labelsOn: true,
  toggleLabels: () => set((s) => ({ labelsOn: !s.labelsOn })),

  /** 카메라 리셋 트리거 — 시점 초기화 + 선택 해제 + 층 필터 '전체' 복귀 */
  resetTick: 0,
  requestReset: () =>
    set((s) => ({ resetTick: s.resetTick + 1, selected: null, floor: 'all' })),

  /** 사이드바 검색어 */
  query: '',
  setQuery: (query) => set({ query }),
}))
