// 客服 · figma frame 79:3217
// 视觉：sage 渐变 + 客服头像 + 时间标记 + 2 条对话气泡（含 FAQ 列表）+ 底部输入框
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, Send, Star, X } from 'lucide-react'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const SERVICE_AVATAR = '/assets/figma/figma_img_a346367b.webp'
const DECO = '/assets/figma/figma_img_787ab1a3.webp'

const FAQ = [
  '门店预约与到店流程。',
  '自助点单与支付说明。',
  '订单查询与退款规则。',
  '联系门店。',
  '发票开具。',
  '设备使用与常见问题。',
  '会员开通与积分兑换。',
  '设备使用与常见问题。',
]

export default function ServiceChat() {
  const nav = useNavigate()
  const [input, setInput] = useState('')
  const { message, showToast } = useToast()

  return (
    <div className="absolute inset-0 overflow-y-auto" style={{
      background: 'linear-gradient(180deg, #bed2ba 0%, #d1decf 50%, #e7ece7 100%)',
    }}>
      <div className="relative" style={{ width: 375, paddingBottom: 'calc(90px + env(safe-area-inset-bottom))' }}>
        <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 44, background: '#748b76' }} />

        <button
          onClick={() => safeBack(nav, '/member')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 3, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#fff" />
        </button>
        <div className="absolute" style={{
          left: 37, top: 6,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#fff',
        }}>客服</div>

        {/* 装饰花纹 */}
        <img src={DECO} alt="" className="absolute pointer-events-none"
          style={{ left: -20, top: 51, width: 472, height: 622, opacity: 0.15 }} draggable={false} />

        {/* 时间气泡 */}
        <div className="absolute flex items-center justify-center" style={{
          left: 147, top: 48, width: 81, height: 26, borderRadius: 8,
          background: '#e3e3e3', padding: '4px 8px',
        }}>
          <Star size={13} color="#1e1e1e" />
          <span className="ml-1" style={{ fontFamily: 'var(--font-zh)', fontSize: 13, color: '#1e1e1e' }}>今天23:25</span>
          <X size={13} color="#1e1e1e" className="ml-1" />
        </div>

        {/* 客服头像 1 */}
        <img src={SERVICE_AVATAR} alt="客服" className="absolute"
          style={{ left: 11, top: 89, width: 47, height: 47, borderRadius: '50%' }} draggable={false} />

        {/* 第一条气泡：欢迎语 */}
        <div className="absolute" style={{
          left: 66, top: 84, width: 184, padding: 14, borderRadius: 8,
          background: '#fff',
          boxShadow: '0 1px 4px rgba(12,12,13,0.10)',
        }}>
          <div className="text-center" style={{
            fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, color: '#4a3526',
          }}>以茶为引，以星为伴。</div>
          <div className="text-center" style={{
            marginTop: 4,
            fontFamily: 'var(--font-zh)', fontSize: 14, color: '#6c4c35',
          }}>感谢您使用星衍茶坊。</div>
        </div>

        {/* 客服头像 2 */}
        <img src={SERVICE_AVATAR} alt="客服" className="absolute"
          style={{ left: 10, top: 247, width: 47, height: 47, borderRadius: '50%' }} draggable={false} />

        {/* 第二条气泡：FAQ 列表 */}
        <div className="absolute" style={{
          left: 66, top: 168, width: 184, padding: 16, borderRadius: 8,
          background: '#fff',
          boxShadow: '0 1px 4px rgba(12,12,13,0.10)',
        }}>
          <div className="text-center" style={{
            fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, color: '#4a3526',
          }}>以茶为引，以星为伴。</div>
          <div className="text-center my-2" style={{
            fontFamily: 'var(--font-zh)', fontSize: 13, color: '#6c4c35',
          }}>猜你想问</div>
          <div style={{ borderTop: '1px solid rgba(108,76,53,0.20)' }} />
          {FAQ.map((q, i) => (
            <button
              key={i}
              onClick={() => showToast(`咨询：${q}（演示）`)}
              className="w-full flex items-center mt-2 active:opacity-70"
              style={{
                background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
                fontFamily: 'var(--font-zh)', fontSize: 13, color: '#4a3526', textAlign: 'left',
              }}
            >
              <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
              <span className="ml-2">{q}</span>
            </button>
          ))}
        </div>

        {/* 底部输入栏 */}
        <div className="fixed left-0 bottom-0 w-full" style={{
          height: 'calc(74px + env(safe-area-inset-bottom))',
          paddingBottom: 'env(safe-area-inset-bottom)',
          boxSizing: 'border-box',
          background: '#faf8f3',
          boxShadow: '0 -1px 0 #ccb791, 0 -1px 5px rgba(239,213,168,0.50)',
          zIndex: 50,
        }}>
          <div className="absolute flex items-center" style={{
            left: 19, top: 8, width: 291, height: 61, borderRadius: 16,
            background: 'rgba(255,255,255,0.7)', padding: '0 16px',
          }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="输入消息…"
              className="w-full bg-transparent outline-none border-none"
              style={{
                fontFamily: 'var(--font-zh)', fontSize: 13, color: '#4a3526',
              }}
            />
          </div>
          <button
            onClick={() => { if (input.trim()) { showToast(`发送：${input}（演示）`); setInput('') } }}
            className="absolute flex items-center justify-center active:opacity-70"
            style={{
              right: 17, top: 28, width: 24, height: 22, borderRadius: '50%',
              background: '#4a3526', border: 'none', cursor: 'pointer',
            }}
            aria-label="发送"
          >
            <Send size={12} color="#fff" />
          </button>
        </div>
      </div>
      <Toast message={message} />
    </div>
  )
}
