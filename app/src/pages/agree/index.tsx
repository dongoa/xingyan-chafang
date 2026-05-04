// 同意条款 · figma frame 79:1961
//
// 视觉来源：直接读 figma-export/full.json，纯 CSS + 1 张本地原图（logo）。
// 不依赖 figma image API（token 已撞付费墙）。
//
// 节点对照：
//   79:1962 主背景渐变（cream → white → sage）
//   79:1980 主白卡（343×479，4 重 drop shadow）
//   79:1977 圆形 logo（imageRef f247170a）
//   79:1981/1988 左右按钮装饰（sage 圆角 + 绿阴影）
//   79:1995 温馨提示
//   79:1998 协议正文（雪月阁/茉莉奶白 → 星衍茶坊）
import { useNavigate } from 'react-router-dom'
import { safeBack } from '../../utils/navigation'

const LOGO = '/assets/figma/figma_img_f247170a.webp'

const TEXT_COLOR = '#4a3526'      // r74 g53 b38 ≈ rgb(0.291,0.208,0.148)*255
const TEXT_COLOR_BODY = '#6c4c35' // r108 g76 b53 ≈ rgb(0.424,0.298,0.208)*255
const SAGE = '#beD2BA'             // 实际 rgb(190,210,186) → 16 进制 #BED2BA
const SAGE_DEEP = '#88A088'        // 按钮阴影色

const CARD_SHADOW = [
  '-4px -4px 4px 1px rgba(108,76,53,0.4)',
  '0px 4px 4px 0px rgba(108,76,53,0.4)',
  '4px 4px 4px 0px rgba(108,76,53,0.4)',
  '0px 4px 4px 0px rgba(108,76,53,0.4)',
].join(', ')

// 协议正文（替换 雪月阁/茉莉奶白 → 星衍茶坊）
const AGREEMENT_TEXT = `我们依据相关法律法规制定了《星衍茶坊用户协议》和《星衍茶坊隐私协议》（以下统称"协议"），请您在使用我们的产品前仔细阅读并充分理解相关条款，以充分了解您的权利与义务。
根据《常见类型移动互联网应用程序必要个人信息范围规定》，星衍茶坊小程序属于网上购物类，基本功能为"购买商品（餐饮产品）"，必要个人信息：
1.注册用户移动电话号码；
2.收货人姓名（名称）、收货地址、收货人联系电话；
3.支付时间、支付金额、支付渠道。
我们严格遵循最小必要原则，仅在法律规定的必要信息范围及实现餐饮点单、配送、支付等核心业务相关联的个人信息范围内处理您的个人信息。您可以通过《星衍茶坊隐私协议》详细了解我们处理个人信息的具体情况，以及您所享有的查询、更正、删除等相关权利。
如您是未成年人，请您和您的监护人共同仔细阅读本提示及相关协议，并在征得监护人授权同意的前提下使用我们的服务或向我们提供个人信息。
您同意《星衍茶坊隐私协议》仅代表您已了解小程序提供的功能及功能运行所需的必要个人信息，不代表您已同意我们收集非必要个人信息；对于非必要个人信息（如地理位置信息、头像昵称等），我们会根据您使用特定功能（如附近门店查询、个性化推荐）的场景，单独征求您的授权同意。`

export default function Agree() {
  const nav = useNavigate()

  // figma frame 顶部 44px 是假状态栏（不渲染），所有 y 减 44
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 主背景渐变（79:1962）：填满可视区，纯 CSS */}
      <div
        className="absolute"
        style={{
          inset: 0,
          background: `linear-gradient(180deg,
            rgba(239,229,195,0.4) 0%,
            #ffffff 49.5%,
            ${SAGE} 100%)`,
        }}
      />

      {/* 圆形 logo（79:1977 mask group → image f247170a，figma y=69 → 25）*/}
      <img
        src={LOGO}
        alt="星衍茶坊"
        className="absolute"
        style={{
          left: 151,
          top: 25,
          width: 76,
          height: 76,
          borderRadius: '50%',
          objectFit: 'cover',
        }}
        draggable={false}
      />

      {/* 温馨提示 标题（79:1995，figma y=160 → 116）*/}
      <div
        className="absolute"
        style={{
          left: 0,
          top: 116,
          width: 375,
          textAlign: 'center',
          fontFamily: 'var(--font-zh)',
          fontSize: 32,
          fontWeight: 700,
          lineHeight: '40px',
          color: TEXT_COLOR,
        }}
      >
        温馨提示
      </div>

      {/* 主白卡（79:1980，figma y=208 → 164） + 协议正文（79:1998）*/}
      <div
        className="absolute"
        style={{
          left: 16,
          top: 164,
          width: 343,
          height: 479,
          background: '#ffffff',
          borderRadius: 16,
          boxShadow: CARD_SHADOW,
        }}
      >
        <div
          className="overflow-y-auto"
          style={{
            position: 'absolute',
            inset: 0,
            padding: '20px 19px',
            fontFamily: 'var(--font-zh)',
            fontSize: 13,
            lineHeight: '18px',
            color: TEXT_COLOR_BODY,
            whiteSpace: 'pre-wrap',
          }}
        >
          {AGREEMENT_TEXT}
        </div>
      </div>

      {/* 左按钮：拒绝并退出（79:1981 + 79:1996，figma y=704 → 660）*/}
      <button
        onClick={() => {
          // wx web-view 内无法直接关闭小程序，但可以通过 postMessage 让外壳处理
          // 当前演示用安全后退兜底
          safeBack(nav, '/agree')
        }}
        className="absolute active:opacity-70"
        style={{
          left: 19,
          top: 660,
          width: 148,
          height: 60,
          borderRadius: 30,
          background: SAGE,
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          boxShadow: `0px 4px 4px 0px ${SAGE_DEEP}cc`,
          fontFamily: 'var(--font-zh)',
          fontSize: 24,
          fontWeight: 500,
          color: TEXT_COLOR,
        }}
      >
        拒绝并退出
      </button>

      {/* 右按钮：同意（79:1988 + 79:1997，figma y=704 → 660）*/}
      <button
        onClick={() => nav('/login')}
        className="absolute active:opacity-70"
        style={{
          left: 192,
          top: 660,
          width: 148,
          height: 60,
          borderRadius: 30,
          background: SAGE,
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          boxShadow: `0px 4px 4px 0px ${SAGE_DEEP}cc`,
          fontFamily: 'var(--font-zh)',
          fontSize: 24,
          fontWeight: 500,
          color: TEXT_COLOR_BODY,
        }}
      >
        同意
      </button>
    </div>
  )
}
