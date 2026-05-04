// 购物车 · figma frame 79:2065
// 视觉：sage 浅底 + 商品列表（勾选 + 图 + 名 + 规格 + 价 + 数量） + 底部结算栏
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, Check } from 'lucide-react'
import { PRODUCTS } from '../../data/products'
import { safeBack } from '../../utils/navigation'

const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

type CartItem = { product: typeof PRODUCTS[number]; spec: string; qty: number }

export default function Cart() {
  const nav = useNavigate()
  // 演示数据：3 个示例商品（来自 figma 设计）
  const [items, setItems] = useState<CartItem[]>([
    { product: PRODUCTS[0], spec: '180g(30g*6罐)', qty: 1 },
    { product: { ...PRODUCTS[12], name: '2026新款方形小号一两茶罐', price: 5.4 }, spec: '黑色-矮款', qty: 1 },
    { product: { ...PRODUCTS[12], id: 'pkg2', name: '一斤密封储茶罐红茶绿茶', price: 4.39 }, spec: '拾春-绿色（单罐）', qty: 1 },
  ])
  const [checked, setChecked] = useState<boolean[]>([true, false, false])

  const toggle = (i: number) => setChecked(c => c.map((v, j) => j === i ? !v : v))
  const allChecked = checked.every(Boolean)
  const toggleAll = () => setChecked(checked.map(() => !allChecked))
  const total = items.reduce((s, it, i) => s + (checked[i] ? it.product.price * it.qty : 0), 0)
  const totalText = total.toFixed(total === Math.floor(total) ? 0 : 2)
  const checkedCount = checked.filter(Boolean).length

  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ background: 'rgba(190,210,186,0.60)' }}>
      <div className="relative" style={{ width: 375, paddingBottom: 'calc(90px + env(safe-area-inset-bottom))' }}>
        {/* 顶部白条 */}
        <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 44, background: '#fff' }} />
        <button
          onClick={() => safeBack(nav, '/mall')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>
        <div className="absolute" style={{
          left: 37, top: 6,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#000',
        }}>购物车</div>
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

        {/* 商品列表 */}
        {items.map((item, i) => {
          const top = 90 + i * 130
          const isChecked = checked[i]
          return (
            <div key={item.product.id + i}>
              {/* 选择圆 */}
              <button
                onClick={() => toggle(i)}
                className="absolute flex items-center justify-center active:opacity-70"
                style={{
                  left: 16, top, width: 24, height: 24, borderRadius: '50%',
                  background: isChecked ? '#88a088' : '#fff',
                  border: 'none', cursor: 'pointer',
                }}
                aria-label="选择"
              >
                {isChecked && <Check size={14} color="#fff" strokeWidth={3} />}
              </button>
              {/* 图 */}
              <div className="absolute overflow-hidden" style={{
                left: 48, top: top - 33, width: 90, height: 90, borderRadius: 16,
              }}>
                <img src={item.product.hero} alt={item.product.name} className="w-full h-full"
                  style={{ objectFit: 'cover' }} draggable={false} />
              </div>
              {/* 名称 */}
              <div className="absolute" style={{
                left: 142, top: top - 34, width: 171,
                fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#4a3526',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>{item.product.name}</div>
              {/* 规格 */}
              <div className="absolute" style={{
                left: 142, top: top - 9,
                fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: 'rgba(108,76,53,0.70)',
              }}>{item.spec}</div>
              {/* 价格 */}
              <img src={COIN} alt="" className="absolute" style={{
                left: 142, top: top + 38, width: 12, height: 13,
              }} draggable={false} />
              <div className="absolute" style={{
                left: 154, top: top + 26,
                fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
              }}>{item.product.price}</div>
              {/* x数量 */}
              <div className="absolute" style={{
                right: 16, top: top - 33, width: 24, height: 24,
                background: '#fff', borderRadius: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-zh)', fontSize: 15, color: '#6c4c35',
              }}>x{item.qty}</div>
            </div>
          )
        })}

        <div style={{ height: 90 + items.length * 130 + 80 }} />

        {/* 底部结算栏（fixed）*/}
        <div className="fixed left-0 bottom-0 w-full" style={{
          height: 'calc(76px + env(safe-area-inset-bottom))',
          padding: '12px 16px env(safe-area-inset-bottom)',
          boxSizing: 'border-box',
          background: 'rgba(51,72,54,0.92)',
          boxShadow: '0 -2px 8px rgba(51,72,54,0.22)',
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
        }}>
          <button
            onClick={toggleAll}
            className="flex items-center active:opacity-70"
            style={{
              width: 82, height: 44, flex: '0 0 82px',
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: 0,
            }}
            aria-label="全选"
          >
            <div className="flex items-center justify-center" style={{
              width: 24, height: 24, borderRadius: '50%',
              background: allChecked ? '#88a088' : '#fff',
            }}>
              {allChecked && <Check size={14} color="#fff" strokeWidth={3} />}
            </div>
            <span style={{ marginLeft: 10, fontFamily: 'var(--font-zh)', fontSize: 15, color: '#fff', whiteSpace: 'nowrap' }}>全选</span>
          </button>
          <div className="flex items-baseline justify-end" style={{
            flex: '1 1 auto',
            minWidth: 0,
            marginRight: 10,
            color: '#fff',
            whiteSpace: 'nowrap',
          }}>
            <span style={{ fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 600 }}>合计：</span>
            <img src={COIN} alt="" style={{ width: 10, height: 11, marginLeft: 4 }} draggable={false} />
            <span style={{
              fontFamily: 'var(--font-zh)',
              fontSize: totalText.length > 5 ? 20 : 23,
              fontWeight: 600,
              marginLeft: 3,
              lineHeight: '30px',
            }}>{totalText}</span>
          </div>
          <button
            onClick={() => nav('/order/pay')}
            className="flex items-center justify-center active:opacity-80"
            style={{
              width: 92, height: 44, borderRadius: 24, flex: '0 0 92px',
              background: '#334836', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-zh)', fontSize: 15, fontWeight: 600, color: '#fff',
              padding: 0,
              whiteSpace: 'nowrap',
            }}
          >
            结算({checkedCount})
          </button>
        </div>
      </div>
    </div>
  )
}
