// 商品详情页 · figma frame 79:3394
// 视觉：顶部 sage 条 + 商品大图 + 标题 + 价格 + 数量 + 产品参数 + 底部加购/立即购买
// docx 章节十三（普洱茶）作 fallback 描述
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, ShoppingCart, Plus, Minus } from 'lucide-react'
import { getProduct } from '../../data/products'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const COIN = '/assets/figma/figma_img_8f86d5a0.webp'
const HEADER_DECO = '/assets/figma/figma_img_a18d73e7.webp'

export default function ProductDetail() {
  const nav = useNavigate()
  const { id } = useParams<{ id: string }>()
  const product = getProduct(id || '') || {
    id: 'unknown', name: '商品详情', category: 'tea' as const,
    hero: '/assets/figma/figma_img_fe81e29a.webp',
    price: 50.5, priceLabel: '卷后价',
    detailHeadline: '温润养脾养胃 陈香独特越品越浓',
    detailDesc: '',
  }
  const [qty, setQty] = useState(1)
  const { message, showToast } = useToast()
  const inc = () => setQty(q => q + 1)
  const dec = () => setQty(q => Math.max(1, q - 1))

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 'calc(90px + env(safe-area-inset-bottom))' }}>
        {/* 顶部 sage 条（79:3399 0,0 + 79:3395 0,34 弧形）*/}
        <div className="absolute" style={{
          left: 0, top: 0, width: 375, height: 95, background: '#748b76',
        }} />
        <img src={HEADER_DECO} alt="" className="absolute pointer-events-none"
          style={{ right: -18, top: -19, width: 113, height: 80, opacity: 0.6 }} draggable={false} />

        <button
          onClick={() => safeBack(nav, `/mall/category/${product.category}`)}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#fff" />
        </button>
        <div className="absolute" style={{
          left: 0, top: 9, width: 375, textAlign: 'center',
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#fff',
        }}>
          {product.category === 'tea' ? '茶叶详情' : product.category === 'fruit' ? '干果详情' : product.category === 'pastry' ? '糕点详情' : '商品详情'}
        </div>
        <div className="h5-capsule absolute flex items-center" style={{
          left: 289, top: 7, width: 70, height: 34, padding: '0 7px',
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

        {/* 商品大图 (figma y=95→51, w=375 h=291)*/}
        <img
          src={product.hero}
          alt={product.name}
          className="absolute"
          style={{ left: 0, top: 51, width: 375, height: 291, objectFit: 'cover' }}
          draggable={false}
        />

        {/* 主白色区 (figma y=386→342) */}
        <div className="absolute" style={{
          left: 0, top: 342, width: 375, minHeight: 320, background: '#fcfaf3',
        }} />

        {/* 价格 + 单位 (figma y=401→357)*/}
        <div className="absolute flex items-baseline" style={{ left: 16, top: 357 }}>
          <span style={{
            fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#334836',
          }}>¥ {product.price}</span>
          <span style={{
            fontFamily: 'var(--font-zh)', fontSize: 16, color: '#748160', marginLeft: 8,
          }}>/{product.category === 'tea' ? '100g' : '500g'}</span>
        </div>

        {/* 数量控件（- 1 + figma y=406→362）*/}
        <div className="absolute flex items-center" style={{
          right: 16, top: 362, height: 28,
        }}>
          <button onClick={dec} className="flex items-center justify-center active:opacity-70"
            style={{ width: 28, height: 28, borderRadius: 4, background: '#f4f0e0', border: 'none', cursor: 'pointer' }}>
            <Minus size={14} color="#6c4c35" />
          </button>
          <div className="flex items-center justify-center" style={{
            width: 40, height: 21, marginLeft: 3, marginRight: 3,
            fontFamily: 'var(--font-zh)', fontSize: 16, color: '#6c4c35',
          }}>{qty}</div>
          <button onClick={inc} className="flex items-center justify-center active:opacity-70"
            style={{ width: 28, height: 28, borderRadius: 4, background: '#f4f0e0', border: 'none', cursor: 'pointer' }}>
            <Plus size={14} color="#6c4c35" />
          </button>
        </div>

        {/* 商品标题 (figma y=441→397) */}
        <div className="absolute" style={{
          left: 16, top: 397, width: 343,
          fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#4a3526',
        }}>{product.name}</div>

        {/* 产品参数标题 (figma y=517→473) */}
        <div className="absolute" style={{
          left: 16, top: 473,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#4a3526',
        }}>产品参数</div>

        {/* 参数 grid */}
        {[
          { label: '规格', value: product.category === 'tea' ? '100g/罐' : '500g/盒' },
          { label: '产地', value: '中国' },
          { label: '保质期', value: '18 个月' },
          { label: '包装', value: '礼盒装' },
        ].map((it, i) => {
          const col = i % 2
          const row = Math.floor(i / 2)
          return (
            <div key={it.label} className="absolute" style={{
              left: 16 + col * 178, top: 513 + row * 36,
              fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '20px', color: '#6c4c35',
            }}>
              <span style={{ color: 'rgba(108,76,53,0.6)', marginRight: 8 }}>{it.label}</span>
              <span>{it.value}</span>
            </div>
          )
        })}

        {/* 描述（如有） */}
        {product.detailHeadline && (
          <>
            <div className="absolute" style={{
              left: 16, top: 595,
              fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 500, color: '#4a3526',
            }}>{product.detailHeadline}</div>
            <div className="absolute" style={{
              left: 16, top: 625, width: 343,
              fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '20px', color: '#6c4c35',
            }}>{product.detailDesc}</div>
          </>
        )}

        {/* 底部固定栏 */}
        <div className="fixed left-0 bottom-0 w-full" style={{
          height: 'calc(75px + env(safe-area-inset-bottom))',
          paddingBottom: 'env(safe-area-inset-bottom)',
          boxSizing: 'border-box',
          background: '#fdfaf1',
          boxShadow: '0 -1px 5px rgba(239,213,168,0.50)',
          zIndex: 50,
        }}>
          <button
            onClick={() => showToast('加入购物车（演示）')}
            className="absolute flex items-center justify-center active:opacity-70"
            style={{
              left: 16, top: 13, width: 80, height: 50, borderRadius: 25,
              background: '#fdfaf1', border: '1px solid #e0d4b8', cursor: 'pointer',
            }}
            aria-label="加入购物车"
          >
            <ShoppingCart size={28} color="#4a3526" />
          </button>
          <button
            onClick={() => nav('/cart')}
            className="absolute flex items-center justify-center active:opacity-80"
            style={{
              left: 104, top: 13, width: 254, height: 50, borderRadius: 25,
              background: 'linear-gradient(90deg, #334836 0%, #69a0a1 100%)',
              border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'space-around',
            }}
          >
            <span style={{ fontSize: 16, fontWeight: 500 }}>加入购物车</span>
            <span style={{ width: 1, height: 24, background: 'rgba(255,255,255,0.4)' }} />
            <span style={{ fontSize: 16, fontWeight: 500 }}>立即购买</span>
          </button>
        </div>

        <img src={COIN} alt="" className="absolute" style={{ left: 1, top: 1, width: 1, height: 1, opacity: 0 }} />
      </div>
      <Toast message={message} />
    </div>
  )
}
