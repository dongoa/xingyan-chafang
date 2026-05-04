// 全局 TabBar（首页 / 茶文化 / 商城 / 会员中心）
// 设计来源：figma 79:1433（商城页底栏）
import { useNavigate, useLocation } from 'react-router-dom'

const ICONS = {
  home: '/assets/blocks/tab_home_icon.webp',
  tea:  '/assets/blocks/tab_tea_icon.webp',
  mall: '/assets/svg/I79_306-7758_12239.svg',
  user: '/assets/svg/I79_305-7758_12533.svg',
}

const TABS: Array<{ label: string; path: string; icon: string; w: number; h: number; matchPaths?: string[] }> = [
  { label: '首页',     path: '/home',        icon: ICONS.home, w: 26, h: 26 },
  { label: '茶文化',   path: '/tea-culture', icon: ICONS.tea,  w: 18, h: 26, matchPaths: ['/tea-culture','/tea-history','/tea-food','/proverbs','/seasons','/cold-brew'] },
  { label: '商城',     path: '/mall',        icon: ICONS.mall, w: 21, h: 23, matchPaths: ['/mall','/cart','/order'] },
  { label: '会员中心', path: '/member',      icon: ICONS.user, w: 19, h: 21, matchPaths: ['/member','/wallet','/points'] },
]

export default function TabBar() {
  const nav = useNavigate()
  const loc = useLocation()
  const cur = loc.pathname

  function isActive(t: typeof TABS[number]) {
    if (cur === t.path) return true
    return (t.matchPaths || []).some(p => cur === p || cur.startsWith(p + '/'))
  }

  return (
    <div
      className="fixed left-0 bottom-0 w-full bg-[#faf8f3]"
      style={{
        height: 'calc(70px + env(safe-area-inset-bottom))',
        paddingBottom: 'env(safe-area-inset-bottom)',
        boxSizing: 'border-box',
        boxShadow: '0 -1px 0 #ccb791, 0 -1px 5px rgba(239,213,168,0.50)',
        borderTopLeftRadius: 16, borderTopRightRadius: 16,
        zIndex: 50,
      }}
    >
      <div className="flex items-center justify-around" style={{ height: 70 }}>
        {TABS.map(t => {
          const active = isActive(t)
          return (
            <button
              key={t.label}
              onClick={() => nav(t.path)}
              className="flex flex-col items-center active:opacity-60"
              style={{
                width: 72,
                height: 58,
                background: 'transparent',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  width: 36,
                  height: 34,
                  borderRadius: '50%',
                  background: active ? 'rgba(190,202,183,0.55)' : 'transparent',
                }}
              >
                <img
                  src={t.icon}
                  alt=""
                  style={{
                    width: t.w,
                    height: t.h,
                    objectFit: 'contain',
                    filter: active ? 'none' : 'opacity(0.48)',
                  }}
                  draggable={false}
                />
              </span>
              <span style={{
                marginTop: 2,
                fontFamily: 'var(--font-zh)', fontSize: 12, lineHeight: '16px',
                color: active ? '#4a3526' : '#a0917f',
                fontWeight: active ? 500 : 400,
                whiteSpace: 'nowrap',
              }}>
                {t.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
