import { ChevronLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import type { ReactNode } from 'react'
import { safeBack } from '../utils/navigation'

type Props = {
  title: string
  right?: ReactNode
  titleColor?: string
  backFallback?: string
}

export default function NavBar({ title, right, titleColor = '#1E1E1E', backFallback = '/home' }: Props) {
  const nav = useNavigate()
  return (
    <div className="absolute top-11 left-0 w-full h-11 flex items-center justify-center z-20">
      <button
        aria-label="返回"
        onClick={() => safeBack(nav, backFallback)}
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center active:opacity-60"
      >
        <ChevronLeft size={22} strokeWidth={2.2} color={titleColor} />
      </button>
      <div
        className="text-center"
        style={{
          fontFamily: 'var(--font-zh)',
          fontSize: 20,
          lineHeight: '30px',
          color: titleColor,
          fontWeight: 400,
        }}
      >
        {title}
      </div>
      {right && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">{right}</div>
      )}
    </div>
  )
}
