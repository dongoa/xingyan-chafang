import { useCallback, useEffect, useRef, useState } from 'react'

export function useToast(duration = 1600) {
  const [message, setMessage] = useState('')
  const timer = useRef<number | undefined>(undefined)

  const showToast = useCallback((nextMessage: string) => {
    setMessage(nextMessage)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setMessage(''), duration)
  }, [duration])

  useEffect(() => {
    return () => window.clearTimeout(timer.current)
  }, [])

  return { message, showToast }
}

export function Toast({ message }: { message: string }) {
  if (!message) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 'calc(92px + env(safe-area-inset-bottom))',
        transform: 'translateX(-50%)',
        zIndex: 100,
        maxWidth: 295,
        minHeight: 40,
        padding: '10px 16px',
        borderRadius: 20,
        background: 'rgba(51,72,54,0.94)',
        color: '#fff',
        fontFamily: 'var(--font-zh)',
        fontSize: 13,
        lineHeight: '20px',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(51,72,54,0.28)',
        pointerEvents: 'none',
      }}
    >
      {message}
    </div>
  )
}
