// 会员中心 · figma frame 92:446
// 视觉：sage 渐变 + 头像/用户名/会员等级 + 活动 banner + 6 个功能入口 + 联系客服
import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import TabBar from '../../components/TabBar'
import { Toast, useToast } from '../../components/Toast'

const AVATAR = '/assets/figma/figma_img_f247170a.webp'
const ACTIVITY_BANNER = '/assets/figma/figma_img_82ee933f.webp'

const ICONS = {
  profile: '/assets/figma/figma_img_ecfa3f84.webp',
  rights:  '/assets/figma/figma_img_96fefeb7.webp',
  topup:   '/assets/figma/figma_img_c7595451.webp',
  privacy: '/assets/figma/figma_img_a3939a97.webp',
  orders:  '/assets/figma/figma_img_8007fef6.webp',
  service: '/assets/figma/figma_img_2c48677c.webp',
}

const ENTRIES = [
  { key: 'profile', label: '个人信息', icon: ICONS.profile, path: '/member/profile' },
  { key: 'rights',  label: '会员权益', icon: ICONS.rights,  path: '/member/rights' },
  { key: 'topup',   label: '余额充值', icon: ICONS.topup,   path: '/wallet/topup' },
  { key: 'orders',  label: '我的订单', icon: ICONS.orders,  path: '/member/orders' },
  { key: 'points',  label: '会员积分', icon: '★',           path: '/points/detail' },
  { key: 'privacy', label: '隐私设置', icon: ICONS.privacy, path: '/member/privacy' },
]

export default function Member() {
  const nav = useNavigate()
  const { message, showToast } = useToast()
  return (
    <div className="absolute inset-0 overflow-y-auto" style={{
      background: 'linear-gradient(180deg, #bed2ba 0%, #d1decf 50%, #e7ece7 100%)',
    }}>
      <div className="relative" style={{ width: 375, paddingBottom: 'calc(90px + env(safe-area-inset-bottom))' }}>
        {/* 顶部标题 */}
        <div className="absolute" style={{
          left: 0, top: 8, width: 375, textAlign: 'center',
          fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 600, color: '#333',
        }}>
          会员中心
        </div>

        {/* 头像 75×75 (figma y=98→54) */}
        <div className="absolute overflow-hidden" style={{
          left: 16, top: 54, width: 75, height: 75, borderRadius: '50%', background: '#fff',
        }}>
          <img src={AVATAR} alt="头像" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
        </div>

        {/* 用户名 + 等级标签 (figma y=104/140→60/96) */}
        <div className="absolute" style={{
          left: 107, top: 60,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#333',
        }}>茶茶</div>
        <button
          onClick={() => nav('/member/rights')}
          className="absolute flex items-center justify-center active:opacity-80"
          style={{
            left: 107, top: 99, width: 82, height: 19, borderRadius: 10,
            background: '#88a088', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff',
          }}
        >
          初阶茶客
        </button>

        {/* 活动 banner（figma y=193→149, 343×74）*/}
        <div className="absolute overflow-hidden" style={{
          left: 16, top: 149, width: 343, height: 74, borderRadius: 12,
          background: '#77c3c1',
        }}>
          <img src={ACTIVITY_BANNER} alt="" className="absolute"
            style={{ right: 0, top: 0, width: 202, height: 77, objectFit: 'cover' }} draggable={false} />
          <div className="absolute" style={{
            left: 17, top: 14,
            fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, color: '#fff',
          }}>活动中心</div>
          <div className="absolute" style={{
            left: 17, top: 42,
            fontFamily: 'var(--font-zh)', fontSize: 12, color: '#fff',
          }}>精彩非遗活动等你参与</div>
          <button
            onClick={() => showToast('活动中心（演示）')}
            className="absolute flex items-center justify-center active:opacity-80"
            style={{
              right: 16, top: 21, width: 78, height: 33, borderRadius: 16.5,
              background: '#fdfaf1', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-zh)', fontSize: 13, fontWeight: 500, color: '#333',
            }}
          >
            进入查看
          </button>
        </div>

        {/* 6 入口 grid（3 列 × 2 行，figma y=279→235, h=194）*/}
        <div className="absolute" style={{
          left: 16, top: 235, width: 343, height: 194, borderRadius: 14,
          background: '#fdfaf1',
          boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
        }} />
        {ENTRIES.map((e, i) => {
          const col = i % 3
          const row = Math.floor(i / 3)
          const left = 16 + col * 86
          const top = 235 + row * 89
          return (
            <button
              key={e.key}
              onClick={() => nav(e.path)}
              className="absolute flex flex-col items-center active:opacity-70"
              style={{
                left, top, width: 86, height: 80,
                background: 'transparent', border: 'none', cursor: 'pointer',
              }}
            >
              <div className="flex items-center justify-center" style={{
                width: 38, height: 38, marginTop: 12,
              }}>
                {typeof e.icon === 'string' && e.icon.length > 1 ? (
                  <img src={e.icon} alt={e.label} style={{ width: 36, height: 36, objectFit: 'contain' }} draggable={false} />
                ) : (
                  <span style={{ fontSize: 28, color: '#88a088' }}>{e.icon}</span>
                )}
              </div>
              <div style={{
                marginTop: 6,
                fontFamily: 'var(--font-zh)', fontSize: 15, color: '#4a3526',
              }}>{e.label}</div>
            </button>
          )
        })}

        {/* 联系客服 一行（figma y=484→440, 343×52）*/}
        <button
          onClick={() => nav('/service')}
          className="absolute flex items-center active:opacity-70"
          style={{
            left: 16, top: 440, width: 343, height: 52, borderRadius: 12,
            background: '#fdfaf1',
            boxShadow: '0 4px 4px rgba(0,0,0,0.25)',
            border: 'none', cursor: 'pointer', padding: '0 16px',
          }}
        >
          <img src={ICONS.service} alt="客服" style={{ width: 21, height: 25 }} draggable={false} />
          <span style={{
            marginLeft: 16,
            fontFamily: 'var(--font-zh)', fontSize: 14, color: '#333',
          }}>联系客服</span>
          <span style={{ flex: 1 }} />
          <ChevronRight size={16} color="#666" />
        </button>

        <div style={{ height: 600 }} />
      </div>
      <TabBar />
      <Toast message={message} />
    </div>
  )
}
