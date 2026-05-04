import { Link, useParams } from 'react-router-dom'
import type { CSSProperties } from 'react'
import frames from '../../data/figmaFrames.generated'

type RawNode = {
  id: string
  t: string
  x: number
  y: number
  w: number
  h: number
  text?: string
  src?: string
  fit?: 'cover' | 'contain'
  bg?: string
  border?: string
  radius?: number | string
  shadow?: string
  fontSize?: number
  fontWeight?: number
  lineHeight?: number
  color?: string
  textAlign?: 'center' | 'right'
}

type RawFrame = {
  id: string
  safeId: string
  name: string
  size: string
  w: number
  h: number
  nodes: readonly RawNode[]
}

const allFrames = frames as unknown as readonly RawFrame[]

function nodeStyle(node: RawNode): CSSProperties {
  return {
    position: 'absolute',
    left: node.x,
    top: node.y,
    width: node.w,
    height: node.h,
    background: node.bg,
    border: node.border,
    borderRadius: node.radius,
    boxShadow: node.shadow,
    pointerEvents: 'none',
  }
}

function textStyle(node: RawNode): CSSProperties {
  return {
    ...nodeStyle(node),
    fontFamily: 'var(--font-zh)',
    fontSize: node.fontSize,
    fontWeight: node.fontWeight,
    lineHeight: node.lineHeight ? `${node.lineHeight}px` : undefined,
    color: node.color,
    textAlign: node.textAlign,
    whiteSpace: 'pre-wrap',
    overflow: 'hidden',
  }
}

export function FigmaFrame({ frame }: { frame: RawFrame }) {
  return (
    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden bg-white" data-figma-frame="true">
      <div
        className="relative mx-auto overflow-hidden bg-white"
        style={{ width: frame.w, minHeight: frame.h }}
      >
        {frame.nodes.map((node, index) => {
          if (node.text) {
            return (
              <span key={`${node.id}-${index}`} style={textStyle(node)}>
                {node.text}
              </span>
            )
          }
          if (node.src) {
            return (
              <img
                key={`${node.id}-${index}`}
                src={node.src}
                alt=""
                draggable={false}
                style={{
                  ...nodeStyle(node),
                  objectFit: node.fit || 'cover',
                }}
              />
            )
          }
          return <div key={`${node.id}-${index}`} style={nodeStyle(node)} />
        })}
      </div>
    </div>
  )
}

export function FigmaFrameRoute() {
  const { safeId } = useParams<{ safeId: string }>()
  const frame = allFrames.find((item) => item.safeId === safeId || item.id === safeId)

  if (!frame) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white p-6 text-center">
        <div className="text-xl font-semibold text-[#4a3526]">未找到 Figma 页面</div>
        <div className="text-sm text-[#6c4c35]">{safeId}</div>
        <Link to="/figma" className="text-sm text-[#6b8f71] underline">查看全部页面</Link>
      </div>
    )
  }

  return <FigmaFrame frame={frame} />
}

export function FigmaFrameIndex() {
  return (
    <div className="absolute inset-0 overflow-y-auto bg-[#fcfaf3]">
      <div className="relative mx-auto px-4 py-5" style={{ width: 375, minHeight: 812 }}>
        <div className="mb-1 text-xl font-semibold text-[#4a3526]">Figma 全页面</div>
        <div className="mb-4 text-xs leading-5 text-[#6c4c35]">
          共 {allFrames.length} 个页面级 frame。此列表用于微信 WebView 覆盖验收。
        </div>
        <div className="space-y-2 pb-8">
          {allFrames.map((frame, index) => (
            <Link
              key={frame.id}
              to={`/figma/${frame.safeId}`}
              className="flex items-center justify-between rounded-xl bg-white px-3 py-3 shadow-sm active:opacity-70"
            >
              <span>
                <span className="mr-2 text-xs text-[#88a088]">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-sm font-medium text-[#4a3526]">{frame.name}</span>
              </span>
              <span className="text-xs text-[#a0917f]">{frame.id}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export { allFrames }
