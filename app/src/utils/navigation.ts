import type { NavigateFunction } from 'react-router-dom'

export function safeBack(navigate: NavigateFunction, fallback: string) {
  const historyState = typeof window !== 'undefined' ? window.history.state : null
  const idx = typeof historyState?.idx === 'number' ? historyState.idx : 0

  if (idx > 0) {
    navigate(-1)
    return
  }

  navigate(fallback, { replace: true })
}
