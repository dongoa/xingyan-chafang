// 茶馆首页（手写版） · figma frame 79:234
//
// 设计原则：放弃 extractor 把 figma 节点拆成 30+ absolute div 的做法，
// 改成「整块视觉 = 1 张 figma 渲染图 + 几行文字浮上去」。
// 视觉准确度 ↑↑（避开字叠 / 假英文 / 复杂渐变 bug），代码可读性 ↑。
//
// 数据：3 张块图（拉自 figma /v1/images）+ TabBar 4 个 SVG（v2 extractor 已下载）
import { useNavigate } from 'react-router-dom'
import TabBar from '../../components/TabBar'

const PHOTOS = {
  banner: '/assets/blocks/home_banner.webp',           // 完整 banner（figma 79:253 渲染原图，含全部装饰文字）
  bookCardBg: '/assets/blocks/home_book_card_bg2.webp', // 预约/订单 大卡（节点 79:252，无 effect 凸出）
  userCardBg: '/assets/blocks/home_user_card_bg2.webp', // 用户卡（节点 79:239，无 effect 凸出）
  avatar: '/assets/blocks/home_avatar.webp',           // 圆形头像 mask group（节点 79:302）
  bookIcon: '/assets/blocks/home_book_icon.webp',      // 预约卡左下茶壶图标（79:310）
  orderIcon: '/assets/blocks/home_order_icon.webp',    // 订单卡右下票图标（79:315）
  walletIcon: '/assets/blocks/home_wallet_icon.webp',  // 用户卡右侧钱包图标（79:308）
}

function Banner() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 249 }}>
      <img
        src={PHOTOS.banner}
        alt="星衍茶坊"
        className="w-full h-full object-cover"
        draggable={false}
      />
      {/* 轮播分页指示器 ··· (3 个圆点，第三个高亮) */}
      <div className="absolute right-3 bottom-3 flex items-center gap-1">
        <span className="block rounded-full" style={{ width: 4, height: 4, background: 'rgba(74,53,38,0.4)' }} />
        <span className="block rounded-full" style={{ width: 4, height: 4, background: 'rgba(74,53,38,0.4)' }} />
        <span className="block rounded-full" style={{ width: 6, height: 6, background: '#4a3526' }} />
      </div>
    </div>
  )
}

function BookOrderCard() {
  const nav = useNavigate()
  return (
    <div className="relative mx-4 mt-3 overflow-hidden rounded-2xl" style={{ height: 215 }}>
      <img
        src={PHOTOS.bookCardBg}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'fill' }}
        draggable={false}
      />
      {/* 左：预约 */}
      <button
        onClick={() => nav('/book/store')}
        className="absolute active:opacity-70"
        style={{
          left: 0, top: 0, width: '50%', height: '100%',
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
        }}
        aria-label="预约"
      >
        <div className="absolute" style={{ left: 32, top: 36 }}>
          <span style={{
            fontFamily: 'var(--font-zh)', fontSize: 32, fontWeight: 700,
            color: '#4a3526', whiteSpace: 'nowrap',
          }}>
            预 约
          </span>
        </div>
        <div className="absolute" style={{ left: 16, top: 90 }}>
          <span style={{
            fontFamily: 'var(--font-zh)', fontSize: 14, fontWeight: 300,
            color: '#4a3526', whiteSpace: 'nowrap',
          }}>
            提前预约免排队
          </span>
        </div>
      </button>
      {/* 右：订单 */}
      <button
        onClick={() => nav('/order/pay')}
        className="absolute active:opacity-70"
        style={{
          left: '50%', top: 0, width: '50%', height: '100%',
          background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
        }}
        aria-label="订单"
      >
        <div className="absolute" style={{ left: 32, top: 36 }}>
          <span style={{
            fontFamily: 'var(--font-zh)', fontSize: 32, fontWeight: 700,
            color: '#4a3526', whiteSpace: 'nowrap',
          }}>
            订 单
          </span>
        </div>
        <div className="absolute" style={{ left: 16, top: 90 }}>
          <span style={{
            fontFamily: 'var(--font-zh)', fontSize: 14, fontWeight: 300,
            color: '#4a3526', whiteSpace: 'nowrap',
          }}>
            看看上次买了啥
          </span>
        </div>
      </button>
      {/* 预约卡左下茶壶图标 */}
      <img
        src={PHOTOS.bookIcon}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: 47, top: 138, width: 56, height: 40 }}
        draggable={false}
      />
      {/* 订单卡右下订单票图标 */}
      <img
        src={PHOTOS.orderIcon}
        alt=""
        className="absolute pointer-events-none"
        style={{ left: 231, top: 124, width: 34, height: 60 }}
        draggable={false}
      />
    </div>
  )
}

function UserCard() {
  const nav = useNavigate()
  return (
    <div className="relative mx-4 mt-3 overflow-hidden rounded-2xl" style={{ height: 147 }}>
      <img
        src={PHOTOS.userCardBg}
        alt=""
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: 'fill' }}
        draggable={false}
      />
      {/* 头像（figma 79:302 mask group 已经是圆形，直接用） */}
      <img
        src={PHOTOS.avatar}
        alt="头像"
        className="absolute"
        style={{ left: 32, top: 46, width: 56, height: 56, borderRadius: '50%' }}
        draggable={false}
      />
      {/* 用户名 */}
      <div className="absolute" style={{ left: 88, top: 50 }}>
        <span style={{
          fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 500,
          color: '#4a3526', whiteSpace: 'nowrap',
        }}>
          用户941110
        </span>
      </div>
      {/* 初阶茶客 标签 */}
      <button
        onClick={() => nav('/wallet/topup')}
        className="absolute active:opacity-70"
        style={{
          left: 88, top: 76, padding: '4px 12px', borderRadius: 12,
          background: '#becab7', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{ fontFamily: 'var(--font-zh)', fontSize: 12, color: '#fff', whiteSpace: 'nowrap' }}>
          初阶茶客
        </span>
      </button>
      {/* 钱包图标（右侧 余额/充值 旁的钱包图） */}
      <img
        src={PHOTOS.walletIcon}
        alt=""
        className="absolute pointer-events-none"
        style={{ right: 100, top: 50, width: 44, height: 32 }}
        draggable={false}
      />
      {/* 余额/充值 入口（右） */}
      <button
        onClick={() => nav('/wallet/topup')}
        className="absolute active:opacity-70"
        style={{
          right: 20, top: 60, padding: 0, background: 'transparent', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 500, color: '#4a3526',
          whiteSpace: 'nowrap',
        }}>
          余额/充值
        </span>
      </button>
    </div>
  )
}

export default function Home() {
  return (
    <div className="absolute inset-0 overflow-y-auto bg-[#fefae3]">
      <div className="relative mx-auto" style={{ width: 375, paddingBottom: 'calc(90px + env(safe-area-inset-bottom))' }}>
        <Banner />
        <BookOrderCard />
        <UserCard />
      </div>
      <TabBar />
    </div>
  )
}
