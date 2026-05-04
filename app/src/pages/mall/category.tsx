// 商城分类 · figma frame 79:2903 (茶叶) / 79:2982 (干果) / 79:3062 (糕点)
// 视觉：顶 sage 弧形条 + 3 tab 切换 + 商品瀑布流（cream 渐变背景）
// 数据驱动：path /mall/category/:cat → 渲染对应 PRODUCTS 列表
import { useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft, ShoppingCart } from 'lucide-react'
import { getProductsByCategory, type Product } from '../../data/products'

const HEADER_DECO = '/assets/figma/figma_img_a18d73e7.webp'  // 右上花纹
const BG_DECO = '/assets/figma/figma_img_787ab1a3.webp'      // 主区底纹
const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

const CATS: Array<{ key: 'tea'|'fruit'|'pastry'; label: string }> = [
  { key: 'tea', label: '茶叶' },
  { key: 'fruit', label: '干果' },
  { key: 'pastry', label: '糕点' },
]

function ProductCard({ p, top, left, cardH, imgH }: { p: Product; top: number; left: number; cardH: number; imgH: number }) {
  const nav = useNavigate()
  const sold = `已售${Math.floor(Math.random() * 99 + 1)}件`
  return (
    <button
      onClick={() => nav(`/product/${p.id}`)}
      className="absolute active:opacity-80 text-left"
      style={{
        left, top, width: 164, height: cardH, borderRadius: 16,
        background: '#ffffff', border: 'none', cursor: 'pointer', padding: 0,
        boxShadow: '0 10px 10px rgba(108,76,53,0.25)',
      }}
    >
      <img src={p.hero} alt={p.name} className="absolute"
        style={{ left: 0, top: 0, width: 164, height: imgH, borderRadius: 8, objectFit: 'cover' }}
        draggable={false} />
      <div className="absolute" style={{
        left: 8, top: imgH + 13, width: 148,
        fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#4a3526',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{p.name}</div>
      <img src={COIN} alt="" className="absolute" style={{ left: 9, top: imgH + 47, width: 8, height: 9 }} draggable={false} />
      <div className="absolute" style={{
        left: 17, top: imgH + 39,
        fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#4a3526', fontWeight: 600,
      }}>{p.price}</div>
      <div className="absolute" style={{
        left: 53, top: imgH + 42,
        fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.40)',
      }}>{sold}</div>
      <div
        className="absolute flex items-center justify-center"
        style={{
          right: 6, top: imgH + 41, width: 24, height: 24, borderRadius: '50%',
          background: '#4a3526',
        }}
      >
        <ShoppingCart size={13} color="#fff" />
      </div>
    </button>
  )
}

export default function MallCategory() {
  const nav = useNavigate()
  const { cat } = useParams<{ cat: 'tea'|'fruit'|'pastry' }>()
  const active = cat && CATS.find(c => c.key === cat) ? cat : 'tea'
  const products = getProductsByCategory(active as Product['category'])

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        {/* 顶 sage 弧形条（79:2904 0,28→0, 375×101，简化为矩形 + bottom radius）*/}
        <div className="absolute" style={{
          left: 0, top: 0, width: 375, height: 85,
          background: '#748b76',
          borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
        }} />
        {/* 右上装饰花纹 */}
        <img
          src={HEADER_DECO}
          alt=""
          className="absolute pointer-events-none"
          style={{ right: -25, top: -13, width: 104, height: 112, opacity: 0.6 }}
          draggable={false}
        />

        {/* chevron */}
        <button
          onClick={() => nav('/mall')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#fff" />
        </button>

        {/* 标题：商品分类 */}
        <div className="absolute" style={{
          left: 0, top: 6, width: 375, textAlign: 'center',
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#fff',
        }}>
          商品分类
        </div>

        {/* 3 tab 切换 (figma y=94→50, 每 tab 124w) */}
        <div className="absolute flex" style={{ left: 0, top: 50, width: 372, height: 35 }}>
          {CATS.map(c => {
            const isAct = c.key === active
            return (
              <button
                key={c.key}
                onClick={() => nav(`/mall/category/${c.key}`)}
                className="active:opacity-80"
                style={{
                  flex: 1,
                  height: 35,
                  background: isAct ? '#fff' : 'rgba(255,255,255,0.30)',
                  color: isAct ? '#4a3526' : '#fff',
                  border: 'none',
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                  fontFamily: 'var(--font-zh)',
                  fontSize: 14,
                  fontWeight: isAct ? 600 : 400,
                  cursor: 'pointer',
                }}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        {/* 主区底色 */}
        <div className="absolute" style={{
          left: 0, top: 85, width: 375, minHeight: 720,
          background: 'linear-gradient(180deg, rgba(190,210,186,0.60), rgba(209,222,207,0.60), rgba(231,236,231,0.60))',
        }} />
        <div className="absolute" style={{
          left: 0, top: 85, width: 375, minHeight: 720,
          background: 'rgba(239,230,208,0.40)',
        }} />
        {/* 主区底纹 */}
        <img
          src={BG_DECO}
          alt=""
          className="absolute pointer-events-none"
          style={{ left: 0, top: 200, width: 375, height: 600, opacity: 0.22 }}
          draggable={false}
        />

        {/* 商品瀑布流（2 列）*/}
        {products.map((p, i) => {
          const col = i % 2
          const row = Math.floor(i / 2)
          const left = col === 0 ? 15 : 196
          const top = 100 + row * 220
          return (
            <ProductCard
              key={p.id}
              p={p}
              top={top}
              left={left}
              cardH={194}
              imgH={130}
            />
          )
        })}

        {/* 占位高度 */}
        <div style={{ height: 100 + Math.ceil(products.length / 2) * 220 + 40 }} />
      </div>
    </div>
  )
}
