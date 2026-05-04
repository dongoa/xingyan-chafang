// 预约-店铺地址 · figma frame 79:316
// 视觉：顶部地图（本地图 11774bca）+ 2 张店铺卡（sage 平面圆角卡）
// docx 章节五内容已对照。第一张「星衍茶坊中央店」可点击进 /book/time。
import { useNavigate } from 'react-router-dom'
import { Phone } from 'lucide-react'

const MAP_BG = '/assets/figma/figma_img_11774bca.webp'

// 79:329 / 79:336 店铺卡。小程序里去掉重投影和底部暗条，避免贴近安全区时显脏。
function StoreCard({
  top, name, addr, hours, dist, onClick, addrTop, hoursTop, distRight = 287,
}: {
  top: number
  name: string
  addr: string
  hours: string
  dist: string
  onClick?: () => void
  addrTop: number
  hoursTop: number
  distRight?: number
}) {
  return (
    <div
      onClick={onClick}
      className={onClick ? 'absolute active:opacity-90' : 'absolute'}
      style={{
        left: 16,
        top,
        width: 343,
        height: 154,
        borderRadius: 16,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {/* 79:331 sage 主色底 */}
      <div
        className="absolute"
        style={{
          inset: 0,
          background: '#88a088',
          borderRadius: 16,
          boxShadow: 'none',
          border: '1px solid rgba(255,255,255,0.32)',
        }}
      />
      {/* 79:332 半透明 sage 高光层：铺满整卡，避免底部形成暗条 */}
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 343,
          height: 154,
          borderRadius: 16,
          background: 'rgba(142,210,186,0.28)',
        }}
      />
      {/* 文字 */}
      <div
        className="absolute"
        style={{
          left: 24,
          top: 21,
          fontFamily: 'var(--font-zh)',
          fontSize: 24,
          fontWeight: 500,
          lineHeight: '32px',
          color: '#4a3526',
        }}
      >
        {name}
      </div>
      <div
        className="absolute"
        style={{
          left: 24,
          top: addrTop,
          fontFamily: 'var(--font-zh)',
          fontSize: 20,
          fontWeight: 500,
          lineHeight: '28px',
          color: '#6c4c35',
        }}
      >
        {addr}
      </div>
      <div
        className="absolute"
        style={{
          left: 24,
          top: hoursTop,
          fontFamily: 'var(--font-zh)',
          fontSize: 20,
          fontWeight: 300,
          lineHeight: '28px',
          color: '#6c4c35',
        }}
      >
        {hours}
      </div>
      {/* 距离 */}
      <div
        className="absolute"
        style={{
          left: distRight,
          top: 16,
          fontFamily: 'var(--font-zh)',
          fontSize: 15,
          color: '#4a3526',
        }}
      >
        {dist}
      </div>
      {/* 圆形电话按钮（79:346 / 79:359）*/}
      <div
        className="absolute flex items-center justify-center"
        style={{
          right: 16,
          top: 40,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: 'rgba(136,160,136,0.80)',
        }}
      >
        <Phone size={20} color="#fff" strokeWidth={2} />
      </div>
    </div>
  )
}

export default function BookStore() {
  const nav = useNavigate()

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      {/* 顶部白条避开 wx 状态栏（图从 figma y=45 → 1） */}
      <div className="relative" style={{ width: 375, height: 768 }}>
        {/* 地图（79:363 IMAGE 11774bca, 374×352, figma y=45 → 1）*/}
        <img
          src={MAP_BG}
          alt="地图"
          className="absolute"
          style={{ left: 1, top: 1, width: 374, height: 352, objectFit: 'cover' }}
          draggable={false}
        />

        {/* 顶部右上控件 79:364 group：定位 70×34 at 289,51→7（y=51-44）*/}
        <div
          className="h5-capsule absolute flex items-center"
          style={{ left: 289, top: 7, width: 70, height: 34, padding: '0 7px',
            background: '#fffefe', borderRadius: 16,
          }}
        >
          {/* more-horizontal icon 简化为 3 个圆点 */}
          <div className="flex items-center gap-[2px]" style={{ width: 24 }}>
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          </div>
          {/* disc icon 简化为圆环 */}
          <div className="ml-2 rounded-full border-2" style={{ width: 18, height: 18, borderColor: '#4a3526' }}>
            <div className="rounded-full m-auto mt-[3px]" style={{ width: 6, height: 6, background: '#4a3526' }} />
          </div>
        </div>

        {/* 第一张：星衍茶坊中央店（79:329 figma y=414 → 370）*/}
        <StoreCard
          top={370}
          name="星衍茶坊中央店"
          addr="台江区中央街2#105"
          hours="营业时间：00：01-00：00"
          dist="1.25km"
          addrTop={77}
          hoursTop={110}
          onClick={() => nav('/book/time')}
        />

        {/* 第二张：深圳万科店（装修中）（79:336 figma y=593 → 549）*/}
        <StoreCard
          top={549}
          name="深圳万科店（装修中）"
          addr="地址暂无"
          hours="营业时间：00：01-00：00"
          dist="99km"
          addrTop={79}
          hoursTop={112}
        />
      </div>
    </div>
  )
}
