// 我的订单 · figma frame 79:1755
// 视觉：sage 渐变 + 茶室预约订单卡 + 商城订单卡
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const ROOM_THUMB = '/assets/figma/figma_img_1b91f7c2.webp'
const SNACK_THUMB = '/assets/figma/figma_img_4560dd77.webp'
const PASTRY_THUMB = '/assets/figma/figma_img_57826b0c.webp'
const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

export default function MemberOrders() {
  const nav = useNavigate()
  const { message, showToast } = useToast()
  return (
    <div className="absolute inset-0 overflow-y-auto" style={{
      background: 'linear-gradient(180deg, #bed2ba 0%, #d1decf 50%, #e7ece7 100%)',
    }}>
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        <button
          onClick={() => safeBack(nav, '/member')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>
        <div className="absolute" style={{
          left: 37, top: 6,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#000',
        }}>我的订单</div>

        {/* 茶室预约 标题 */}
        <div className="absolute" style={{
          left: 18, top: 72,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>茶室预约</div>

        {/* 茶室订单卡（figma y=167→123, 342×233）*/}
        <div className="absolute" style={{
          left: 18, top: 123, width: 342, height: 233, borderRadius: 16,
          background: '#fdfaf1',
          boxShadow: '0 4px 4px rgba(197,216,203,0.40), 4px 4px 4px rgba(108,76,53,0.40)',
        }} />
        {/* 包厢图 105×105 */}
        <div className="absolute overflow-hidden" style={{
          left: 31, top: 133, width: 105, height: 105, borderRadius: 16,
        }}>
          <img src={ROOM_THUMB} alt="" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
        </div>
        <div className="absolute" style={{
          left: 141, top: 133,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#4a3526',
        }}>观鱼小筑</div>
        <div className="absolute" style={{
          left: 142, top: 172,
          fontFamily: 'var(--font-zh)', fontSize: 16, color: 'rgba(74,53,38,0.80)',
        }}>臻品茶具</div>
        <div className="absolute" style={{
          left: 297, top: 174,
          fontFamily: 'var(--font-zh)', fontSize: 16, color: '#4a3526',
        }}>3月1日</div>
        <div className="absolute" style={{
          left: 142, top: 205,
          fontFamily: 'var(--font-zh)', fontSize: 13, color: '#4a3526',
        }}>11：00-16：00</div>
        <img src={COIN} alt="" className="absolute" style={{ left: 313, top: 214, width: 8, height: 9 }} draggable={false} />
        <div className="absolute" style={{
          left: 320, top: 205,
          fontFamily: 'var(--font-zh)', fontSize: 16, color: '#4a3526',
        }}>180</div>

        {/* 分隔线 */}
        <div className="absolute" style={{ left: 30, top: 244, width: 317, height: 1, background: 'rgba(108,76,53,0.20)' }} />

        {/* 配套小点 */}
        <img src={SNACK_THUMB} alt="" className="absolute"
          style={{ left: 31, top: 249, width: 60, height: 60, borderRadius: 16, objectFit: 'cover' }} draggable={false} />
        <div className="absolute" style={{
          left: 141, top: 264,
          fontFamily: 'var(--font-zh)', fontSize: 16, color: '#4a3526',
        }}>松子</div>
        <img src={COIN} alt="" className="absolute" style={{ left: 310, top: 274, width: 8, height: 9 }} draggable={false} />
        <div className="absolute" style={{
          left: 318, top: 266,
          fontFamily: 'var(--font-zh)', fontSize: 15, color: '#4a3526',
        }}>49.9</div>

        <div className="absolute" style={{
          left: 142, top: 322,
          fontFamily: 'var(--font-zh)', fontSize: 13, color: '#4a3526',
        }}>实付款</div>
        <div className="absolute" style={{
          left: 289, top: 318,
          fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, color: '#4a3526',
        }}>229.9元</div>

        {/* 商城订单 标题 */}
        <div className="absolute" style={{
          left: 15, top: 388,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>商城订单</div>

        {/* 商城订单卡（figma y=479→435, 343×187）*/}
        <div className="absolute" style={{
          left: 16, top: 435, width: 343, height: 187, borderRadius: 16,
          background: '#fdfaf1',
          boxShadow: '0 4px 4px rgba(197,216,203,0.40), 4px 4px 4px rgba(108,76,53,0.40)',
        }} />
        <img src={PASTRY_THUMB} alt="" className="absolute"
          style={{ left: 31, top: 446, width: 105, height: 105, borderRadius: 16, objectFit: 'cover' }} draggable={false} />
        <div className="absolute" style={{
          left: 154, top: 443,
          fontFamily: 'var(--font-zh)', fontSize: 15, color: '#4a3526',
        }}>江南特产桂花糕…</div>
        <img src={COIN} alt="" className="absolute" style={{ left: 301, top: 454, width: 8, height: 9 }} draggable={false} />
        <div className="absolute" style={{
          left: 309, top: 446,
          fontFamily: 'var(--font-zh)', fontSize: 15, color: '#4a3526',
        }}>49.90</div>
        <div className="absolute" style={{
          left: 331, top: 471,
          fontFamily: 'var(--font-zh)', fontSize: 15, color: '#6c4c35',
        }}>x1</div>
        <div className="absolute" style={{
          left: 154, top: 472,
          fontFamily: 'var(--font-zh)', fontSize: 15, color: 'rgba(108,76,53,0.70)',
        }}>六块-90g</div>
        <div className="absolute" style={{
          left: 307, top: 551,
          fontFamily: 'var(--font-zh)', fontSize: 15, fontWeight: 600, color: '#4a3526',
        }}>49.90</div>

        {/* 3 个底部按钮 */}
        {[
          { label: '申请售后', left: 138 },
          { label: '再买一单', left: 212 },
          { label: '查看物流', left: 283 },
        ].map(b => (
          <button
            key={b.label}
            onClick={() => showToast(`${b.label}（演示）`)}
            className="absolute flex items-center justify-center active:opacity-80"
            style={{
              left: b.left, top: 582, width: 65, height: 30, borderRadius: 24,
              background: '#334836', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff',
            }}
          >
            {b.label}
          </button>
        ))}

        <div style={{ height: 720 }} />
      </div>
      <Toast message={message} />
    </div>
  )
}
