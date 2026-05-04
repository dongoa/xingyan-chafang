// 商城首页 · figma frame 79:1416
// 视觉：顶 banner 大图 + 4 入口（分类/订单中心/商品包装/购物车）+ 推荐商品 2 列
import { useNavigate } from 'react-router-dom'
import TabBar from '../../components/TabBar'
import { PRODUCTS, getProductsByCategory } from '../../data/products'

const BANNER = '/assets/figma/figma_img_74daff05.webp'
const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

const ENTRIES: Array<{ label: string; path: string; pos: 'tl' | 'tr' | 'bl' | 'br' }> = [
  { label: '商品分类', path: '/mall/category/tea',  pos: 'tl' },
  { label: '订单中心', path: '/order/list',         pos: 'tr' },
  { label: '商品包装', path: '/mall/package',       pos: 'bl' },
  { label: '购物车',   path: '/cart',               pos: 'br' },
]

const POS_MAP = {
  tl: { left: 16, top: 230 },
  tr: { left: 187, top: 230 },
  bl: { left: 16, top: 322 },
  br: { left: 187, top: 322 },
}

export default function Mall() {
  const nav = useNavigate()
  const featured = [PRODUCTS[0], PRODUCTS[12]] // 大红袍 + 礼品袋（首页推荐 2 件）

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 'calc(90px + env(safe-area-inset-bottom))' }}>
        {/* 顶 banner */}
        <img
          src={BANNER}
          alt="商城套组大降价"
          className="absolute pointer-events-none"
          style={{ left: -6, top: 0, width: 390, height: 219, objectFit: 'cover' }}
          draggable={false}
        />
        {/* banner 文字 */}
        <div className="absolute" style={{
          left: 16, top: 186,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, lineHeight: '28px', color: '#ffffff',
          textShadow: '0 1px 4px rgba(0,0,0,0.4)',
        }}>
          商城套组大降价啦！
        </div>
        {/* 轮播指示器 */}
        <div className="absolute flex items-center gap-1" style={{ right: 16, top: 200 }}>
          <span className="block rounded-full" style={{ width: 8, height: 8, background: '#ffffff' }} />
          <span className="block rounded-full" style={{ width: 5, height: 5, background: 'rgba(255,255,255,0.6)' }} />
          <span className="block rounded-full" style={{ width: 5, height: 5, background: 'rgba(255,255,255,0.6)' }} />
        </div>

        {/* 主区底色（白→sage 渐变 r=16 figma y=260→216）*/}
        <div className="absolute" style={{
          left: 1, top: 216, width: 374, height: 600, borderRadius: 16,
          background: 'linear-gradient(180deg, #ffffff 0%, #bed2ba 100%)',
          boxShadow: '0 -2px 4px rgba(0,0,0,0.25)',
        }} />

        {/* 4 个 sage pill 入口 */}
        {ENTRIES.map(e => {
          const p = POS_MAP[e.pos]
          return (
            <button
              key={e.label}
              onClick={() => nav(e.path)}
              className="absolute flex items-center justify-center active:opacity-80"
              style={{
                left: p.left, top: p.top, width: 172, height: 60, borderRadius: 30,
                background: '#bed2ba', border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 4px rgba(108,76,53,0.20), inset 0 -1px 0 rgba(255,255,255,0.50)',
                fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#ffffff',
              }}
            >
              {e.label}
            </button>
          )
        })}

        {/* 推荐商品 标题（figma y=455→411）*/}
        <div className="absolute" style={{
          left: 17, top: 411,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
        }}>
          推荐商品
        </div>

        {/* 2 列推荐 */}
        {featured.map((p, i) => {
          const left = i === 0 ? 17 : 196
          return (
            <button
              key={p.id}
              onClick={() => nav(`/product/${p.id}`)}
              className="absolute active:opacity-80"
              style={{
                left, top: 468, width: 163, height: 192, borderRadius: 16,
                background: '#ffffff', border: 'none', cursor: 'pointer', padding: 0,
                boxShadow: '0 10px 10px rgba(64,101,57,0.25)',
              }}
            >
              <img
                src={p.hero}
                alt={p.name}
                className="absolute"
                style={{
                  left: 0, top: 0, width: 163, height: 130, borderRadius: 15,
                  objectFit: 'cover',
                }}
                draggable={false}
              />
              <div className="absolute text-left" style={{
                left: 8, top: 138, width: 147,
                fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#6c4c35',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{p.name}</div>
              <img src={COIN} alt="" className="absolute" style={{ left: 10, top: 173, width: 8, height: 9 }} draggable={false} />
              <div className="absolute" style={{
                left: 18, top: 165,
                fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#4a3526', fontWeight: 600,
              }}>{p.price}</div>
              <div className="absolute" style={{
                left: 60, top: 168,
                fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#d9b48f',
              }}>{p.priceLabel}</div>
            </button>
          )
        })}

        {/* 占位让推荐有滚动空间 */}
        <div style={{ height: 720 }} />
      </div>
      <TabBar />
    </div>
  )
}

// 让 lint 不报 unused import
void getProductsByCategory
