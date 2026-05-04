// 预约-茶具选择 · figma frame 79:2447
// 视觉：sage 渐变 + 标题 + 中央诗文卡（竖排 4 列繁体风文）+ 添加按钮 + 底部 3 套茶具切换
// docx 章节八：素瓷雅器承茶汤，莹白温润载古韵，将东方雅致藏于一，盏清瓷之中
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const TEAWARES = [
  { id: 'qingya',  name: '清雅茶具', img: '/assets/figma/figma_img_f0563ff0.webp' },
  { id: 'zhenpin', name: '臻品茶具', img: '/assets/figma/figma_img_2b0bb9bd.webp' },
  { id: 'yuexiang',name: '悦享茶具', img: '/assets/figma/figma_img_035e3756.webp' },
]

const POEM_LINES = [
  '素瓷雅器承茶汤，',
  '莹白温润载古韵，',
  '将东方雅致藏于一',
  '盏清瓷之中。',
]

const FRAME_DECO_LARGE = '/assets/figma/figma_img_88d63687.webp'  // 边框 5 大
const FRAME_DECO_SMALL = '/assets/figma/figma_img_362ba969.webp'  // 边框 4 小（tab 用）

export default function BookTeaware() {
  const nav = useNavigate()
  const [selected, setSelected] = useState('zhenpin')  // 默认臻品茶具
  const cur = TEAWARES.find(t => t.id === selected)!

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* sage 渐变全屏（79:2448）*/}
      <div className="absolute" style={{
        inset: 0,
        background: 'linear-gradient(180deg, #faf8f3 0%, rgba(136,160,136,0.80) 100%)',
        boxShadow: '0 -2px 4px rgba(0,0,0,0.25)',
      }} />

      {/* chevron 返回 */}
      <button
        onClick={() => safeBack(nav, '/book/room')}
        className="absolute flex items-center justify-center active:opacity-70"
        style={{ left: 3, top: 2, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
        aria-label="返回"
      >
        <ChevronLeft size={20} color="#4a3526" />
      </button>

      {/* 顶部右上 more+disc 控件 */}
      <div className="h5-capsule absolute flex items-center" style={{
        left: 302, top: 8, width: 70, height: 34, padding: '0 7px',
        background: '#fffefe', borderRadius: 16,
      }}>
        <div className="flex items-center gap-[2px]" style={{ width: 24 }}>
          <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
        </div>
        <div className="ml-2 rounded-full border-2" style={{ width: 18, height: 18, borderColor: '#4a3526' }}>
          <div className="rounded-full m-auto mt-[3px]" style={{ width: 6, height: 6, background: '#4a3526' }} />
        </div>
      </div>

      {/* 标题：茶具选择（79:2484，figma y=93→49）*/}
      <div className="absolute" style={{
        left: 134, top: 49,
        fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
      }}>
        茶具选择
      </div>

      {/* 中央诗文卡（79:2469 248×429 r=8 figma y=159→115）*/}
      <div className="absolute" style={{
        left: 65, top: 115, width: 248, height: 429, borderRadius: 8,
        background: '#f7f4e5',
      }} />

      {/* 4 列竖排诗文，从右到左 */}
      {POEM_LINES.map((line, i) => {
        // figma x: 193, 161, 129, 97 → 列宽 32, 从右往左
        const x = 193 - i * 32
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: x,
              top: 160,
              writingMode: 'vertical-rl',
              fontFamily: 'var(--font-zh)',
              fontSize: 16,
              lineHeight: '24px',
              color: '#6c4c35',
              letterSpacing: 0,
            }}
          >
            {line}
          </div>
        )
      })}

      {/* 右侧装饰花纹（79:2480 sage VECTOR 路径）+ "臻品茶具" 竖文（79:2483）*/}
      <div className="absolute" style={{
        left: 232, top: 160, width: 49, height: 166,
        background: '#bed2ba', clipPath: 'polygon(50% 0%, 100% 10%, 90% 90%, 50% 100%, 10% 90%, 0% 10%)',
      }} />
      <div
        className="absolute"
        style={{
          left: 247, top: 186,
          writingMode: 'vertical-rl',
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#4a3526',
          letterSpacing: 4,
        }}
      >
        {cur.name}
      </div>

      {/* 茶具大图（79:2485, figma 106,436→392）— 显示当前选中的茶具 */}
      <img
        src={cur.img}
        alt={cur.name}
        className="absolute"
        style={{ left: 106, top: 392, width: 165, height: 90, objectFit: 'contain' }}
        draggable={false}
      />

      {/* 添加按钮装饰框 + 内圆角 + "添加"（79:2486+87+88, figma y=557→513 / 566→522 / 580→536）*/}
      <img
        src={FRAME_DECO_LARGE}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: 147, top: 513, width: 70, height: 70 }}
        draggable={false}
      />
      <button
        onClick={() => nav(`/order/pay?room=&teaware=${encodeURIComponent(cur.name)}`)}
        className="absolute flex items-center justify-center active:opacity-80"
        style={{
          left: 156, top: 522, width: 53, height: 53,
          background: '#bed2ba', borderRadius: 8, border: 'none',
          fontFamily: 'var(--font-zh)', fontSize: 16, color: '#4a3526', cursor: 'pointer',
        }}
      >
        添加
      </button>

      {/* 底部 3 套茶具切换 tab（figma y=651-700 → 607-656）*/}
      {TEAWARES.map((t, i) => {
        const xs = [9, 132, 257]
        const active = t.id === selected
        return (
          <button
            key={t.id}
            onClick={() => setSelected(t.id)}
            className="absolute active:opacity-70"
            style={{
              left: xs[i],
              top: 602,
              width: 116,
              height: 84,
              background: 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <img
              src={FRAME_DECO_SMALL}
              alt=""
              className="absolute pointer-events-none"
              style={{ left: 5, top: 0, width: 92, height: 42, opacity: active ? 1 : 0 }}
              draggable={false}
            />
            <div className="absolute" style={{
              left: 0, top: 54, width: 116, textAlign: 'center',
              fontFamily: 'var(--font-zh)', fontSize: 13, color: '#4a3526',
            }}>
              {t.name}
            </div>
            <img
              src={t.img}
              alt=""
              className="absolute pointer-events-none"
              style={{ left: 28, top: 4, width: 60, height: 46, objectFit: 'contain' }}
              draggable={false}
            />
          </button>
        )
      })}
    </div>
  )
}
