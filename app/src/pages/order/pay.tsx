// 订单-支付 · figma frame 79:591
// 视觉：顶部 sage 大块 + 店铺信息白卡 + sage 主体（包厢图 + 搭配小点 3 件 + 总价/提交）
// docx 章节九：订单详情 + 搭配小点价 49.9/22.9/29.9 + 总价 229.9
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, Plus } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const ROOM_THUMB = '/assets/figma/figma_img_1b91f7c2.webp'
const COIN_ICON = '/assets/figma/figma_img_8f86d5a0.webp'

const SNACKS = [
  { id: 's1', img: '/assets/figma/figma_img_4560dd77.webp', price: 49.9 },
  { id: 's2', img: '/assets/figma/figma_img_57826b0c.webp', price: 22.9 },
  { id: 's3', img: '/assets/figma/figma_img_051f3313.webp', price: 29.9 },
]

export default function OrderPay() {
  const nav = useNavigate()
  const [counts, setCounts] = useState<Record<string, number>>({ s1: 1, s2: 0, s3: 0 })
  // 总价：套餐底价 180（演示）+ 搭配小点
  const snacksTotal = SNACKS.reduce((sum, s) => sum + s.price * (counts[s.id] || 0), 0)
  const total = 180 + snacksTotal
  const totalText = total.toFixed(1)

  const inc = (id: string) => setCounts(c => ({ ...c, [id]: (c[id] || 0) + 1 }))

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* 顶部 sage 大块（79:604, 0,44→0, 375×192）*/}
      <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 192, background: '#748b76', zIndex: 0 }} />

      {/* 主 sage 区放在底层，白卡和内容浮在上面，避免遮挡门店卡 */}
      <div className="absolute" style={{ left: 0, top: 178, width: 375, height: 634, background: '#88a088', zIndex: 0 }} />
      <div className="absolute" style={{ left: 0, top: 178, width: 375, height: 634, background: 'rgba(142,210,186,0.40)', zIndex: 0 }} />

      {/* 店铺白卡（79:610 343×177 r=28 figma y=94→50）*/}
      <div className="absolute" style={{
        left: 16, top: 50, width: 343, height: 165, borderRadius: 28,
        background: '#fffbf2',
        boxShadow: '0 4px 8px rgba(94,82,56,0.18)',
        zIndex: 2,
      }}>
        <div className="absolute" style={{
          left: 27, top: 30,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, lineHeight: '28px', color: '#4a3526',
        }}>
          星衍茶坊中央店
        </div>
        <div className="absolute" style={{
          left: 23, top: 88,
          fontFamily: 'var(--font-zh)', fontSize: 17, fontWeight: 400, lineHeight: '24px', color: '#6c4c35',
        }}>
          台江区中央街2#105
        </div>
        <div className="absolute" style={{
          left: 23, top: 126,
          fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 500, lineHeight: '22px', color: '#4a3526',
        }}>
          时间：00：01-00：00
        </div>
      </div>

      {/* chevron 返回 */}
      <button
        onClick={() => safeBack(nav, '/cart')}
        className="absolute flex items-center justify-center active:opacity-70"
        style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer', zIndex: 3 }}
        aria-label="返回"
      >
        <ChevronLeft size={20} color="#fff" />
      </button>

      {/* 顶部右上 more+disc */}
      <div className="h5-capsule absolute flex items-center" style={{
        left: 295, top: 6, width: 70, height: 34, padding: '0 7px',
        background: '#fffefe', borderRadius: 16, zIndex: 3,
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

      {/* 包厢图（79:616 mask 160×160 figma y=297→253）*/}
      <div className="absolute overflow-hidden" style={{
        left: 16, top: 238, width: 150, height: 150, borderRadius: 16, zIndex: 1,
      }}>
        <img src={ROOM_THUMB} alt="包厢" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
      </div>

      {/* 包厢/茶具/日期信息 */}
      <div className="absolute" style={{
        left: 181, top: 239, zIndex: 1,
        fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
      }}>观鱼小筑</div>
      <div className="absolute" style={{
        left: 181, top: 285, zIndex: 1,
        fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 300, lineHeight: '28px', color: '#4a3526',
      }}>臻品茶具</div>
      <div className="absolute" style={{
        left: 182, top: 331, zIndex: 1,
        fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#4a3526',
      }}>3月1日</div>
      <div className="absolute" style={{
        left: 181, top: 371, zIndex: 1,
        fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#4a3526',
      }}>11：00-16：00</div>
      <div className="absolute" style={{ left: 162, top: 412, width: 197, height: 1, background: 'rgba(108,76,53,0.20)', zIndex: 1 }} />

      {/* 搭配小点 标题（79:613 figma y=475→431）*/}
      <div className="absolute" style={{
        left: 16, top: 406, zIndex: 1,
        fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
      }}>搭配小点</div>

      {/* 3 个搭配小点 */}
      {SNACKS.map((snack, i) => {
        const xs = [16, 137, 256]
        const cardX = xs[i]
        const cnt = counts[snack.id] || 0
        return (
          <div key={snack.id}>
            <div className="absolute" style={{
              left: cardX, top: 444, width: 82, height: 116, borderRadius: 10,
              background: '#ffffff', zIndex: 1,
            }} />
            <img
              src={snack.img}
              alt=""
              className="absolute"
              style={{ left: cardX + 2, top: 448, width: 78, height: 78, borderRadius: 8, objectFit: 'cover', zIndex: 1 }}
              draggable={false}
            />
            <img
              src={COIN_ICON}
              alt=""
              className="absolute"
              style={{ left: cardX + 3, top: 535, width: 8, height: 9, zIndex: 1 }}
              draggable={false}
            />
            <div className="absolute" style={{
              left: cardX + 13, top: 528, zIndex: 1,
              fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#4a3526',
            }}>{snack.price}</div>
            <button
              onClick={() => inc(snack.id)}
              className="absolute flex items-center justify-center active:opacity-70"
              style={{
                left: cardX + 58, top: 526, width: 22, height: 22, borderRadius: '50%',
                background: 'rgba(239,229,195,0.90)', border: 'none', cursor: 'pointer', zIndex: 2,
              }}
              aria-label="加 1"
            >
              <Plus size={14} color="#4a3526" strokeWidth={2.5} />
            </button>
            {cnt > 0 && i === 0 && (
              <div className="absolute" style={{
                left: cardX + 77, top: 524, zIndex: 2,
                fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 500, color: '#4a3526',
              }}>{cnt}</div>
            )}
          </div>
        )
      })}

      <button
        onClick={() => nav('/order/success')}
        className="absolute active:opacity-80"
        style={{
          left: 24, top: 616, width: 327, height: 82, borderRadius: 48,
          background: '#4f6a56', border: 'none',
          boxShadow: '0 8px 18px rgba(51,72,54,0.25)',
          cursor: 'pointer', zIndex: 2,
        }}
      >
        <span className="absolute" style={{
          left: 24, top: 26,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#ffffff',
        }}>总价：</span>
        <span className="absolute" style={{
          left: 92, top: 27,
          fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 500, color: '#ffffff',
        }}>{totalText}元</span>
        <span className="absolute" style={{
          right: 32, top: 26,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#ffffff',
        }}>提交订单</span>
      </button>
    </div>
  )
}
