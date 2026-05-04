// 订单中心 · figma frame 79:1499 (待取货) / 79:3142 (待评价)
// 视觉：顶部 sage 条 + 2 tab + 商品订单卡（sage 卡 + 缩略图 + 名称 + 规格 + 价 + 标签 + 操作按钮）
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

const TABS = [
  { key: 'pickup', label: '待取货', path: '/order/list' },
  { key: 'review', label: '待评价', path: '/order/review' },
]

const PICKUP_ORDERS = [
  { name: '手剥开口松子大颗粒款新疆原味', spec: '180g(30g*6罐）', price: '193.00', img: '/assets/figma/figma_img_d0843062.webp' },
  { name: '茶叶礼盒 春茶尝鲜组合装', spec: '300g(60g*5袋)', price: '288.00', img: '/assets/figma/figma_img_a77c0a47.webp' },
]

const REVIEW_ORDERS = [
  { name: '手剥开口松子大颗粒款新疆原味', spec: '一罐-150g', price: '49.90', img: '/assets/figma/figma_img_4560dd77.webp' },
  { name: '红枣礼盒 和田玉枣', spec: '一盒-500g', price: '89.90', img: '/assets/figma/figma_img_051f3313.webp' },
]

function OrderCard({
  top, name, spec, price, img, isReview, onAction,
}: {
  top: number; name: string; spec: string; price: string; img: string; isReview: boolean
  onAction: (message: string) => void
}) {
  return (
    <div className="absolute" style={{
      left: 12, top, width: 343, height: 203, borderRadius: 16,
      background: '#88a088',
      boxShadow: '4px 4px 4px #c5d8cb',
    }}>
      <div className="absolute" style={{
        inset: 0, borderRadius: 16, background: 'rgba(142,210,186,0.40)',
      }} />
      {/* 缩略图 105×105 (figma 26,207 → top in card 19) */}
      <img src={img} alt={name} className="absolute"
        style={{ left: 14, top: 19, width: 105, height: 105, borderRadius: 16, objectFit: 'cover' }} draggable={false} />
      {/* 名称 */}
      <div className="absolute" style={{
        left: 137, top: 16, width: 150,
        fontFamily: 'var(--font-zh)', fontSize: 15, color: '#4a3526',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{name}</div>
      {/* 价格行右上 */}
      <img src={COIN} alt="" className="absolute" style={{ left: 284, top: 27, width: 8, height: 9 }} draggable={false} />
      <div className="absolute" style={{
        left: 292, top: 19,
        fontFamily: 'var(--font-zh)', fontSize: 15, color: '#4a3526',
      }}>{price}</div>
      <div className="absolute" style={{
        left: 314, top: 44,
        fontFamily: 'var(--font-zh)', fontSize: 15, color: '#6c4c35',
      }}>x1</div>
      {/* 规格 */}
      <div className="absolute" style={{
        left: 137, top: 45,
        fontFamily: 'var(--font-zh)', fontSize: 15, color: 'rgba(108,76,53,0.70)',
      }}>{spec}</div>
      {/* 7天无理由退货 标签 */}
      <div className="absolute flex items-center" style={{
        left: 136, top: 74, height: 20, padding: '0 8px',
        background: '#f8fff3', borderRadius: 4,
      }}>
        <span style={{ fontFamily: 'var(--font-zh)', fontSize: 13, color: 'rgba(108,76,53,0.70)' }}>7天无理由退货</span>
      </div>
      {/* 实付款 */}
      <div className="absolute" style={{
        left: 242, top: 127,
        fontFamily: 'var(--font-zh)', fontSize: 13, color: '#4a3526',
      }}>实付款</div>
      <img src={COIN} alt="" className="absolute" style={{ left: 284, top: 132, width: 8, height: 9 }} draggable={false} />
      <div className="absolute" style={{
        left: 292, top: 124,
        fontFamily: 'var(--font-zh)', fontSize: 15, fontWeight: 600, color: '#4a3526',
      }}>{price}</div>
      {/* 更多 标签 */}
      <div className="absolute flex items-center justify-center" style={{
        left: 14, top: 131, width: 60, height: 20, borderRadius: 12,
        background: 'rgba(74,53,38,0.40)',
      }}>
        <span style={{ fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff' }}>更多</span>
      </div>
      {/* 底部按钮 */}
      <div className="absolute flex gap-2" style={{ right: 12, bottom: 14 }}>
        {isReview ? (
          <>
            <button onClick={() => onAction('再买一单（演示）')} className="active:opacity-80" style={{
              width: 65, height: 30, borderRadius: 24, background: '#334836', border: 'none',
              fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff', cursor: 'pointer',
            }}>再买一单</button>
            <button onClick={() => onAction('去评价（演示）')} className="active:opacity-80" style={{
              width: 65, height: 30, borderRadius: 24, background: '#334836', border: 'none',
              fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff', cursor: 'pointer',
            }}>去评价</button>
          </>
        ) : (
          <button onClick={() => onAction('查看物流（演示）')} className="active:opacity-80" style={{
            width: 65, height: 30, borderRadius: 24, background: '#334836', border: 'none',
            fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff', cursor: 'pointer',
          }}>查看物流</button>
        )}
      </div>
    </div>
  )
}

export default function OrderList() {
  const nav = useNavigate()
  const loc = useLocation()
  const isReview = loc.pathname.endsWith('/review')
  const orders = isReview ? REVIEW_ORDERS : PICKUP_ORDERS
  const { message, showToast } = useToast()

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        {/* 顶部 sage */}
        <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 44, background: '#748b76' }} />

        <button
          onClick={() => safeBack(nav, '/mall')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#fff" />
        </button>
        <div className="absolute" style={{
          left: 37, top: 6,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#fff',
        }}>订单中心</div>

        {/* 2 tab */}
        <div className="absolute flex" style={{ left: 0, top: 60, width: 375 }}>
          {TABS.map(t => {
            const isAct = (isReview && t.key === 'review') || (!isReview && t.key === 'pickup')
            return (
              <button
                key={t.key}
                onClick={() => nav(t.path)}
                className="active:opacity-80"
                style={{
                  flex: 1, height: 40,
                  background: 'transparent', border: 'none',
                  fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500,
                  color: isAct ? '#4a3526' : '#6c4c35',
                  borderBottom: isAct ? '2px solid #88a088' : 'none',
                  cursor: 'pointer',
                }}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* 订单列表 */}
        {orders.map((o, i) => (
          <OrderCard key={i} top={144 + i * 215} {...o} isReview={isReview} onAction={showToast} />
        ))}

        <div style={{ height: 144 + orders.length * 215 + 40 }} />
      </div>
      <Toast message={message} />
    </div>
  )
}
