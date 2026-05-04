// 隐私设置 · P1 补齐页
// 用于承接会员中心里的「隐私设置」入口，后续可替换为 Figma 数据授权变体。
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ShieldCheck } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const ITEMS = [
  { key: 'profile', title: '公开头像与昵称', desc: '用于会员中心、订单和客服场景展示。' },
  { key: 'location', title: '门店位置服务', desc: '用于推荐附近门店和计算到店距离。' },
  { key: 'notice', title: '服务通知', desc: '接收预约、支付和积分变动提醒。' },
  { key: 'analysis', title: '体验优化数据', desc: '仅用于改进页面性能和常见问题统计。' },
] as const

export default function MemberPrivacy() {
  const nav = useNavigate()
  const [enabled, setEnabled] = useState<Record<string, boolean>>({
    profile: true,
    location: true,
    notice: true,
    analysis: false,
  })

  return (
    <div className="absolute inset-0 overflow-y-auto" style={{
      background: 'linear-gradient(180deg, #bed2ba 0%, #f7f4e5 56%, #ffffff 100%)',
    }}>
      <div className="relative" style={{ width: 375, paddingBottom: 32 }}>
        <button
          onClick={() => safeBack(nav, '/member')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 4, top: 5, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>
        <div className="absolute" style={{
          left: 0, top: 12, width: 375, textAlign: 'center',
          fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 600, color: '#4a3526',
        }}>
          隐私设置
        </div>

        <div className="absolute flex items-center justify-center" style={{
          left: 147, top: 74, width: 82, height: 82, borderRadius: '50%',
          background: 'rgba(255,255,255,0.7)', boxShadow: '0 10px 20px rgba(51,72,54,0.12)',
        }}>
          <ShieldCheck size={38} color="#6b8f71" strokeWidth={1.7} />
        </div>

        <div className="absolute text-center" style={{ left: 32, top: 176, width: 311 }}>
          <div style={{
            fontFamily: 'var(--font-zh)', fontSize: 22, fontWeight: 600, color: '#4a3526',
          }}>
            管理你的授权偏好
          </div>
          <div style={{
            marginTop: 8,
            fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '20px', color: '#6c4c35',
          }}>
            这些开关只影响演示原型里的授权状态，不会上传真实个人信息。
          </div>
        </div>

        <div className="absolute" style={{ left: 16, top: 260, width: 343 }}>
          {ITEMS.map((item, i) => {
            const checked = enabled[item.key]
            return (
              <div key={item.key} className="relative mb-3" style={{
                width: 343, minHeight: 92, borderRadius: 14, background: '#fffaf0',
                boxShadow: '0 4px 10px rgba(108,76,53,0.12)', padding: '17px 16px',
              }}>
                <div style={{
                  paddingRight: 72,
                  fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, color: '#4a3526',
                }}>
                  {item.title}
                </div>
                <div style={{
                  marginTop: 7, paddingRight: 72,
                  fontFamily: 'var(--font-zh)', fontSize: 12, lineHeight: '18px', color: '#6c4c35',
                }}>
                  {item.desc}
                </div>
                <button
                  onClick={() => setEnabled(prev => ({ ...prev, [item.key]: !checked }))}
                  className="absolute active:opacity-80"
                  style={{
                    right: 16, top: 28, width: 52, height: 30, borderRadius: 15,
                    background: checked ? '#6b8f71' : '#d8d0bd',
                    border: 'none', padding: 0, cursor: 'pointer',
                    transition: 'background 160ms ease',
                  }}
                  aria-label={`${item.title}${checked ? '已开启' : '已关闭'}`}
                >
                  <span style={{
                    position: 'absolute', top: 3, left: checked ? 25 : 3,
                    width: 24, height: 24, borderRadius: '50%', background: '#fff',
                    boxShadow: '0 1px 4px rgba(0,0,0,0.18)',
                    transition: 'left 160ms ease',
                  }} />
                </button>
                {i < ITEMS.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 16, right: 16, bottom: -7,
                    height: 1, background: 'rgba(108,76,53,0.08)',
                  }} />
                )}
              </div>
            )
          })}
        </div>

        <button
          onClick={() => nav('/member')}
          className="absolute flex items-center justify-center active:opacity-80"
          style={{
            left: 48, top: 664, width: 279, height: 48, borderRadius: 24,
            background: '#334836', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, color: '#fff',
          }}
        >
          保存设置
        </button>

        <div style={{ height: 736 }} />
      </div>
    </div>
  )
}
