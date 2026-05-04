import type { CSSProperties, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Disc, MoreHorizontal } from 'lucide-react'
import { safeBack } from '../utils/navigation'

type PageShellProps = {
  height: number
  children: ReactNode
  scroll?: boolean
  background?: string
  className?: string
  canvasClassName?: string
  style?: CSSProperties
  canvasStyle?: CSSProperties
}

export function FigmaCanvas({
  height,
  children,
  className = '',
  style,
}: {
  height: number
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`figma-canvas relative mx-auto ${className}`}
      style={{ width: 375, height, ...style }}
    >
      {children}
    </div>
  )
}

export function PageShell({
  height,
  children,
  scroll = true,
  background = '#fff',
  className = '',
  canvasClassName = '',
  style,
  canvasStyle,
}: PageShellProps) {
  return (
    <div
      className={`figma-page-shell absolute inset-0 overflow-x-hidden ${className}`}
      style={{ background, overflowY: scroll ? 'auto' : 'hidden', ...style }}
    >
      <FigmaCanvas height={height} className={canvasClassName} style={canvasStyle}>
        {children}
      </FigmaCanvas>
    </div>
  )
}

type CapsuleProps = {
  left?: number
  top?: number
  zIndex?: number
  radius?: number
  opacity?: number
}

export function FigmaCapsule({
  left = 278,
  top = 53,
  zIndex = 20,
  radius = 32,
  opacity = 0.2,
}: CapsuleProps) {
  return (
    <>
      <div
        className="h5-capsule absolute pointer-events-none"
        style={{
          left,
          top,
          width: 79,
          height: 26,
          background: '#becab7',
          opacity,
          borderRadius: radius,
          zIndex,
        }}
      />
      <MoreHorizontal
        className="h5-capsule absolute pointer-events-none"
        size={20}
        color="#000"
        style={{ left: left + 12, top: top + 3, zIndex }}
      />
      <Disc
        className="h5-capsule absolute pointer-events-none"
        size={18}
        color="#000"
        style={{ left: left + 52, top: top + 4, zIndex }}
      />
    </>
  )
}

type FigmaNavBarProps = {
  title?: ReactNode
  showBack?: boolean
  onBack?: () => void
  titleColor?: string
  titleLeft?: number
  titleTop?: number
  titleWidth?: number
  titleCenter?: boolean
  titleFontSize?: number
  backLeft?: number
  backTop?: number
  backSize?: number
  backLabel?: string
  backFallback?: string
  zIndex?: number
  background?: string
  backgroundTop?: number
  backgroundHeight?: number
  capsule?: boolean
  capsuleLeft?: number
  capsuleTop?: number
  capsuleRadius?: number
  capsuleOpacity?: number
}

export function FigmaNavBar({
  title,
  showBack = true,
  onBack,
  titleColor = '#1e1e1e',
  titleLeft = 187.5,
  titleTop = 51,
  titleWidth,
  titleCenter = true,
  titleFontSize = 20,
  backLeft = 11,
  backTop = 54,
  backSize = 20,
  backLabel = '返回',
  backFallback = '/home',
  zIndex = 20,
  background = '#fff',
  backgroundTop = 44,
  backgroundHeight = 44,
  capsule = true,
  capsuleLeft = 278,
  capsuleTop = 53,
  capsuleRadius = 32,
  capsuleOpacity = 0.2,
}: FigmaNavBarProps) {
  const nav = useNavigate()
  const titleStyle: CSSProperties = {
    left: titleLeft,
    top: titleTop,
    transform: titleCenter ? 'translateX(-50%)' : undefined,
    width: titleWidth,
    fontFamily: 'var(--font-zh)',
    fontSize: titleFontSize,
    color: titleColor,
    textAlign: titleCenter ? 'center' : undefined,
    whiteSpace: 'nowrap',
    zIndex,
  }

  return (
    <>
      <div
        className="absolute"
        style={{
          left: 0,
          top: backgroundTop,
          width: 375,
          height: backgroundHeight,
          background,
          zIndex: zIndex - 1,
        }}
      />
      {showBack && (
        <button
          onClick={onBack ?? (() => safeBack(nav, backFallback))}
          className="absolute active:opacity-60"
          style={{
            left: backLeft,
            top: backTop,
            width: backSize,
            height: backSize,
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            zIndex: zIndex + 10,
          }}
          aria-label={backLabel}
        >
          <ChevronLeft size={backSize} color={titleColor} />
        </button>
      )}
      {title && (
        <span className="absolute" style={titleStyle}>
          {title}
        </span>
      )}
      {capsule && (
        <FigmaCapsule
          left={capsuleLeft}
          top={capsuleTop}
          radius={capsuleRadius}
          opacity={capsuleOpacity}
          zIndex={zIndex}
        />
      )}
    </>
  )
}
