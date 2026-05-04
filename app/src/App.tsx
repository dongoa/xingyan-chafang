import { Routes, Route, Link, Navigate } from 'react-router-dom'
import PhoneFrame from './components/PhoneFrame'
import Home from './pages/home/index'
import Agree from './pages/agree/index'
import Login from './pages/login/index'
import TeaCulture from './pages/tea/index'
import BookStore from './pages/book/store'
import BookTime from './pages/book/time'
import BookRoom from './pages/book/room'
import BookTeaware from './pages/book/teaware'
import OrderPay from './pages/order/pay'
import OrderSuccess from './pages/order/success'
import WalletTopup from './pages/wallet/topup'
import Mall from './pages/mall/index'
import MallCategory from './pages/mall/category'
import ProductDetail from './pages/mall/detail'
import Cart from './pages/mall/cart'
import MallPackage from './pages/mall/package'
import Member from './pages/member/index'
import MemberRights from './pages/member/rights'
import MemberProfile from './pages/member/profile'
import MemberOrders from './pages/member/orders'
import MemberPrivacy from './pages/member/privacy'
import Points from './pages/points/index'
import ServiceChat from './pages/service/index'
import DataAuth from './pages/auth/index'
import OrderList from './pages/order/list'
import { FigmaFrameIndex, FigmaFrameRoute } from './pages/figma/FigmaFramePage'

// Phase 0 占位首页：列出 P0 10 页路由 + 状态，Phase 1 起逐页替换。
function Placeholder({ title, frameId }: { title: string; frameId: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
      <div className="text-xs text-zinc-400">frame {frameId}</div>
      <div className="text-2xl font-medium text-zinc-800">{title}</div>
      <div className="mt-4 text-xs text-zinc-400">⏳ 待 extractor 生成</div>
      <Link to="/" className="mt-8 text-xs text-emerald-600 underline">← 回脚手架首页</Link>
    </div>
  )
}

function ScaffoldHome() {
  const p0: Array<[string, string, string]> = [
    ['/agree',          '同意条款',        '79:1961'],
    ['/login',          '登录信息页',      '79:2820'],
    ['/home',           '首页',            '79:234'],
    ['/book/store',     '预约-店铺地址',   '79:316'],
    ['/book/time',      '预约-时间',       '79:371'],
    ['/book/room',      '预约-包厢选择',   '79:443'],
    ['/book/teaware',   '预约-茶具选择',   '79:2447'],
    ['/order/pay',      '订单-支付',       '79:591'],
    ['/order/success',  '订单-支付结果',   '79:3639'],
    ['/wallet/topup',   '商城-会员充值',   '79:542'],
  ]
  return (
    <div className="absolute inset-0 overflow-y-auto bg-white p-5">
      <h1 className="text-lg font-medium text-zinc-800 mb-1">星衍茶坊 · 脚手架</h1>
      <p className="text-xs text-zinc-500 mb-5">开发索引。正式入口已经切到 /agree。</p>
      {/* SVG 验证：4 个 figma 拉下来的 VECTOR 节点渲染效果 */}
      <div className="mb-5 rounded-md border border-emerald-200 bg-emerald-50 p-3">
        <div className="text-xs text-emerald-700 mb-2">SVG 渲染验证（VECTOR → figma /v1/images svg）：</div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-center">
            <img src="/assets/svg/79_260.svg" alt="phone icon" style={{ width: 28, height: 28 }} />
            <span className="text-[10px] text-zinc-500 mt-1">79:260</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/svg/79_267.svg" alt="phone icon 2" style={{ width: 28, height: 28 }} />
            <span className="text-[10px] text-zinc-500 mt-1">79:267</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/svg/I79_305-7758_12533.svg" alt="user icon" style={{ width: 28, height: 28 }} />
            <span className="text-[10px] text-zinc-500 mt-1">User</span>
          </div>
          <div className="flex flex-col items-center">
            <img src="/assets/svg/79_244.svg" alt="banner deco" style={{ width: 64, height: 28 }} />
            <span className="text-[10px] text-zinc-500 mt-1">Banner</span>
          </div>
        </div>
      </div>
      <ul className="space-y-2">
        <li>
          <Link
            to="/figma"
            className="flex items-center justify-between rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm hover:bg-emerald-100 active:bg-emerald-100"
          >
            <span className="text-emerald-800">Figma 全页面覆盖</span>
            <span className="text-xs text-emerald-500">68 frames</span>
          </Link>
        </li>
        {p0.map(([path, name, fid]) => (
          <li key={path}>
            <Link
              to={path}
              className="flex items-center justify-between rounded-md border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 active:bg-zinc-100"
            >
              <span className="text-zinc-800">{name}</span>
              <span className="text-xs text-zinc-400">{fid}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-xs text-zinc-400">
        端口 5176 · wx 嵌入: <code>{String(document.documentElement.dataset.wxWebview === 'true')}</code>
      </p>
    </div>
  )
}

export default function App() {
  return (
    <PhoneFrame>
      <Routes>
        <Route path="/"               element={<Navigate to="/agree" replace />} />
        <Route path="/scaffold"       element={<ScaffoldHome />} />
        <Route path="/figma"          element={<FigmaFrameIndex />} />
        <Route path="/figma/:safeId"  element={<FigmaFrameRoute />} />
        <Route path="/agree"          element={<Agree />} />
        <Route path="/login"          element={<Login />} />
        <Route path="/home"           element={<Home />} />
        <Route path="/tea-culture"    element={<TeaCulture />} />
        <Route path="/tea-history"    element={<TeaCulture />} />
        <Route path="/tea-food"       element={<TeaCulture />} />
        <Route path="/tea-food/:pairing" element={<TeaCulture />} />
        <Route path="/seasons"        element={<TeaCulture />} />
        <Route path="/seasons/:season" element={<TeaCulture />} />
        <Route path="/proverbs"       element={<TeaCulture />} />
        <Route path="/proverbs/story" element={<TeaCulture />} />
        <Route path="/cold-brew"      element={<TeaCulture />} />
        <Route path="/cold-brew/:recipe" element={<TeaCulture />} />
        <Route path="/book/store"     element={<BookStore />} />
        <Route path="/book/time"      element={<BookTime />} />
        <Route path="/book/room"      element={<BookRoom />} />
        <Route path="/book/teaware"   element={<BookTeaware />} />
        <Route path="/order/pay"      element={<OrderPay />} />
        <Route path="/order/success"  element={<OrderSuccess />} />
        <Route path="/mall"           element={<Mall />} />
        <Route path="/mall/category/:cat" element={<MallCategory />} />
        <Route path="/product/:id"    element={<ProductDetail />} />
        <Route path="/cart"           element={<Cart />} />
        <Route path="/mall/package"   element={<MallPackage />} />
        <Route path="/member"         element={<Member />} />
        <Route path="/member/rights"  element={<MemberRights />} />
        <Route path="/member/profile" element={<MemberProfile />} />
        <Route path="/member/orders"  element={<MemberOrders />} />
        <Route path="/member/privacy" element={<MemberPrivacy />} />
        <Route path="/points/detail"  element={<Points />} />
        <Route path="/points/redeem"  element={<Points />} />
        <Route path="/points/around"  element={<Points />} />
        <Route path="/points/cash"    element={<Points />} />
        <Route path="/service"        element={<ServiceChat />} />
        <Route path="/auth"           element={<DataAuth />} />
        <Route path="/order/list"     element={<OrderList />} />
        <Route path="/order/review"   element={<OrderList />} />
        <Route path="/wallet/topup"   element={<WalletTopup />} />
        <Route path="*"               element={<Navigate to="/agree" replace />} />
      </Routes>
    </PhoneFrame>
  )
}
