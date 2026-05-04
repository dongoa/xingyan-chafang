// 商城-会员充值 · figma frame 79:542
// 视觉：3 行充值套餐（200/300/500）+ 特别说明
// docx 章节十一：充值文案完整对照
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

const PLANS = [
  { amount: 200, title: '充200送<20元>', desc: '5元代金卷（储值专享）2张',  rowBg: 'rgba(136,160,136,0.60)', amtBg: 'transparent', btnBg: '#88a088' },
  { amount: 300, title: '充300送<45元>', desc: '10元代金卷（储值专享）2张', rowBg: 'rgba(136,160,136,0.80)', amtBg: '#88a088',     btnBg: '#88a088' },
  { amount: 500, title: '充200送<70元>', desc: '10元代金卷（储值专享）5张', rowBg: 'rgba(190,210,186,0.80)', amtBg: '#bed2ba',     btnBg: '#bed2ba' },
]

const NOTE = `1.每种券不与其他券重叠使用，每单仅限用一种优惠形式；
2. 储值余额和所赠优惠券不支持团餐订单、不可提现；
3.如需使用储值赠券后退款，退款时将根据剩余本金扣除赠券优惠抵扣的金额后退款；

开票说明：储值订单支持开票，开具类型为预付卡类；使用储值消费的订单储值部分不支持开票。`

export default function WalletTopup() {
  const nav = useNavigate()
  const { message, showToast } = useToast()
  const onBuy = (amt: number) => showToast(`购买 ${amt} 元套餐（演示流程）`)

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        {/* chevron back */}
        <button
          onClick={() => safeBack(nav, '/member')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>
        {/* 顶部右上 controls */}
        <div className="h5-capsule absolute flex items-center" style={{
          left: 302, top: 6, width: 70, height: 34, padding: '0 7px',
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

        {/* 标题：充值（79:566 figma y=52→8）*/}
        <div className="absolute" style={{
          left: 32, top: 8,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, lineHeight: '28px', color: '#000',
        }}>充值</div>

        {/* 主区域 343×453 r=16 阴影（79:562 figma y=90→46）*/}
        <div className="absolute" style={{
          left: 16, top: 46, width: 343, height: 453, borderRadius: 16,
          boxShadow: '0 4px 4px rgba(136,160,136,0.50)',
          overflow: 'hidden',
        }} />

        {/* 3 行套餐 */}
        {PLANS.map((p, i) => {
          // figma row top: 90 / 249 / 408 → 46 / 205 / 364 (代码 y)
          const rowTop = 46 + i * 159
          return (
            <div key={p.amount}>
              {/* 行底色 */}
              <div className="absolute" style={{
                left: 16, top: rowTop, width: 343, height: 135,
                background: p.rowBg,
                borderTopLeftRadius: i === 0 ? 16 : 0,
                borderTopRightRadius: i === 0 ? 16 : 0,
                borderBottomLeftRadius: i === PLANS.length - 1 ? 16 : 0,
                borderBottomRightRadius: i === PLANS.length - 1 ? 16 : 0,
              }} />
              {/* 金额 + 钱币 (左) */}
              {p.amtBg !== 'transparent' && (
                <div className="absolute" style={{
                  left: 22, top: rowTop + 38, width: 108, height: 56, borderRadius: 16, background: p.amtBg,
                }} />
              )}
              <img src={COIN} alt="" className="absolute" style={{
                left: 38, top: rowTop + 56, width: 23, height: 25,
              }} draggable={false} />
              <div className="absolute" style={{
                left: 62, top: rowTop + 47,
                fontFamily: 'var(--font-zh)', fontSize: 32, fontWeight: 700, lineHeight: '40px', color: '#4a3526',
              }}>{p.amount}</div>
              {/* 副标题 */}
              <div className="absolute" style={{
                left: 140, top: rowTop + 17,
                fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
              }}>{p.title}</div>
              {/* 描述 */}
              <div className="absolute" style={{
                left: 140, top: rowTop + 59,
                fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#6c4c35',
              }}>{p.desc}</div>
              {/* 购买按钮 */}
              <button
                onClick={() => onBuy(p.amount)}
                className="absolute flex items-center justify-center active:opacity-80"
                style={{
                  left: 290, top: rowTop + 94, width: 68, height: 36, borderRadius: 64,
                  background: p.btnBg, border: 'none',
                  fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#ffffff',
                  cursor: 'pointer',
                }}
              >
                购买
              </button>
            </div>
          )
        })}

        {/* 特别说明 标题（figma y=565→521）*/}
        <div className="absolute" style={{
          left: 37, top: 521,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
        }}>特别说明</div>
        {/* ! icon */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: 17, top: 530, width: 16, height: 16, borderRadius: '50%', border: '1px solid #6c4c35' }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: '#6c4c35', lineHeight: 1 }}>!</span>
        </div>

        {/* 说明正文 */}
        <div className="absolute" style={{
          left: 17, top: 558, width: 343,
          fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#6c4c35',
          whiteSpace: 'pre-wrap',
        }}>
          {NOTE}
        </div>

        {/* 占位高度 */}
        <div style={{ height: 800 }} />
      </div>
      <Toast message={message} />
    </div>
  )
}
