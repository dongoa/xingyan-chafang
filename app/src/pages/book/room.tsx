// 预约-包厢选择 · figma frame 79:443
// 视觉：sage 渐变 + 标题 + 3 张包厢卡（边框装饰图 + 包厢实景 + 标签 + 价格 + 圆形预约钮）
// docx 章节七：观鱼小筑 18元/30分钟 / 松风轩 28元/30分钟 / 青萝阁 48元/30分钟
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const FRAME_DECO = '/assets/figma/figma_img_88d63687.webp'
const ROOMS = [
  {
    name: '观鱼小筑',
    thumb: '/assets/figma/figma_img_1b91f7c2.webp',
    tags: ['空调', '小包'],
    price: '18元/30分钟',
    cardTop: 97,    // figma y=141 -44 (card bg 79:466 is at 16,141)
  },
  {
    name: '松风轩',
    thumb: '/assets/figma/figma_img_0dc77fd5.webp',
    tags: ['空调', '中包'],
    price: '28元/30分钟',
    cardTop: 309,   // figma y=353 -44
  },
  {
    name: '青萝阁',
    thumb: '/assets/figma/figma_img_4e0a5bc5.webp',
    tags: ['空调', '大包'],
    price: '48元/30分钟',
    cardTop: 499,   // figma y=543 -44
  },
]

function RoomCard({ top, name, thumb, tags, price, onSelect }: {
  top: number; name: string; thumb: string; tags: string[]; price: string;
  onSelect: () => void
}) {
  return (
    <div className="absolute" style={{ left: 16, top, width: 343, height: 193 }}>
      {/* 白卡 343×193 r=16 + drop shadow（79:465/466/467）*/}
      <div className="absolute" style={{
        inset: 0, borderRadius: 16, background: '#ffffff',
        boxShadow: '4px 4px 4px rgba(0,0,0,0.25)',
      }} />
      {/* 边框装饰图 88d63687（79:475/534/541，120×119, x 相对卡片 30-16=14, y 相对 141-141=0）*/}
      <img
        src={FRAME_DECO}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: 14, top: 0, width: 120, height: 119 }}
        draggable={false}
      />
      {/* 包厢实景缩略（mask group, 92×91 at 相对 29,14）*/}
      <div className="absolute overflow-hidden" style={{ left: 29, top: 14, width: 92, height: 91 }}>
        <img src={thumb} alt={name} className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
      </div>
      {/* 名称 */}
      <div className="absolute" style={{
        left: 149, top: 0,
        fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
      }}>
        {name}
      </div>
      {/* 标签：空调 / 小包/中包/大包 (sage pill) */}
      {tags.map((t, i) => (
        <div
          key={t}
          className="absolute flex items-center justify-center"
          style={{
            left: 149 + i * 57,
            top: 60,
            width: 54,
            height: 32,
            borderRadius: 16,
            background: '#6b8f71',
            fontFamily: 'var(--font-zh)',
            fontSize: 13,
            color: '#ffffff',
          }}
        >
          {t}
        </div>
      ))}
      {/* 价格 */}
      <div className="absolute" style={{
        left: 155, top: 96,
        fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#6c4c35',
      }}>
        {price}
      </div>
      {/* 圆形预约按钮（79:468/492/512）50×50 sage 80% */}
      <button
        onClick={onSelect}
        className="absolute flex items-center justify-center active:opacity-80"
        style={{
          right: 14,
          top: 64,
          width: 50,
          height: 50,
          borderRadius: 12,
          background: 'rgba(136,160,136,0.80)',
          border: 'none',
          fontFamily: 'var(--font-zh)',
          fontSize: 16,
          color: '#ffffff',
          cursor: 'pointer',
        }}
      >
        预约
      </button>
    </div>
  )
}

export default function BookRoom() {
  const nav = useNavigate()

  return (
    <div className="absolute inset-0 overflow-y-auto">
      {/* sage 渐变全屏 */}
      <div
        className="absolute"
        style={{
          inset: 0,
          minHeight: 812,
          background: 'linear-gradient(180deg, #faf8f3 0%, rgba(136,160,136,0.80) 100%)',
        }}
      />
      <div className="relative" style={{ width: 375, height: 812 }}>
        {/* chevron 返回 */}
        <button
          onClick={() => safeBack(nav, '/book/time')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{
            left: 3, top: 2, width: 40, height: 40,
            background: 'transparent', border: 'none', cursor: 'pointer',
          }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>

        {/* 顶部右上 more+disc 控件（79:460 figma y=52→8）*/}
        <div
          className="h5-capsule absolute flex items-center"
          style={{ left: 302, top: 8, width: 70, height: 34, padding: '0 7px',
            background: '#fffefe', borderRadius: 16,
          }}
        >
          <div className="flex items-center gap-[2px]" style={{ width: 24 }}>
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          </div>
          <div className="ml-2 rounded-full border-2" style={{ width: 18, height: 18, borderColor: '#4a3526' }}>
            <div className="rounded-full m-auto mt-[3px]" style={{ width: 6, height: 6, background: '#4a3526' }} />
          </div>
        </div>

        {/* 标题：包厢选择（79:533 figma y=51→7, 20px Bold）*/}
        <div className="absolute" style={{
          left: 40, top: 7,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#000',
        }}>
          包厢选择
        </div>

        {/* 3 张包厢卡 */}
        {ROOMS.map((r) => (
          <RoomCard
            key={r.name}
            top={r.cardTop}
            name={r.name}
            thumb={r.thumb}
            tags={r.tags}
            price={r.price}
            onSelect={() => nav(`/book/teaware?room=${encodeURIComponent(r.name)}`)}
          />
        ))}
      </div>
    </div>
  )
}
