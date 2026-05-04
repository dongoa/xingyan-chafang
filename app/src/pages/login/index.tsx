// 登录信息页 · figma frame 79:2820
//
// 数据：1 张本地装饰底图（imageRef a18d73e7）+ 纯 CSS。
// 视觉：账密表单登录（手机号 + 密码 + 登录按钮）+ 忘记密码/立即注册 +
// 其他登录方式（微信/QQ）+ 协议同意。
//
// docx 章节三内容已对照。「暂时跳过」figma 没画，按 figma 1:1。
// 登录按钮 → /home（演示）。其他链接（忘记/注册/微信/QQ）演示用 alert。
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Smartphone, Lock } from 'lucide-react'
import { Toast, useToast } from '../../components/Toast'

const BG_DECO = '/assets/figma/figma_img_a18d73e7.webp' // 79:2828 顶部大装饰

export default function Login() {
  const nav = useNavigate()
  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')
  const { message, showToast } = useToast()
  const demoAlert = (msg: string) => showToast(`${msg}（演示流程）`)

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 主背景渐变（79:2821: bed2ba → d1decf → e7ece7，纵向）*/}
      <div
        className="absolute"
        style={{
          inset: 0,
          background: 'linear-gradient(180deg, #bed2ba 0%, #d1decf 50%, #e7ece7 100%)',
        }}
      />

      {/* 顶部装饰大图（79:2828 路径，340×340）*/}
      <img
        src={BG_DECO}
        alt=""
        className="absolute pointer-events-none"
        style={{
          left: 18,
          top: -73,
          width: 340,
          height: 340,
          objectFit: 'contain',
          opacity: 0.95,
        }}
        draggable={false}
      />

      {/* 标题：登录（79:2902，figma y=122 → 78）*/}
      <div
        className="absolute"
        style={{
          left: 27,
          top: 78,
          width: 64,
          fontFamily: 'var(--font-zh)',
          fontSize: 32,
          fontWeight: 400,
          lineHeight: '48px',
          color: '#4a3526',
        }}
      >
        登录
      </div>

      {/* 输入框组（79:2829 编组，figma y=237→193，h=116）*/}
      {/* 手机号（79:2832 icon + 79:2850 placeholder + 79:2852 separator）*/}
      <div className="absolute flex items-center" style={{ left: 27, top: 207, width: 327, height: 20 }}>
        <Smartphone size={20} strokeWidth={1.5} color="#6c4c35" />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="请输入手机号码"
          maxLength={11}
          className="flex-1 ml-3 bg-transparent outline-none border-none"
          style={{
            fontFamily: 'var(--font-zh)',
            fontSize: 13,
            color: '#4a3526',
          }}
        />
      </div>
      <div className="absolute" style={{ left: 27, top: 235, width: 322, height: 1, background: '#dae0cb' }} />

      {/* 密码（79:2841 icon + 79:2851 placeholder + 79:2853 separator）*/}
      <div className="absolute flex items-center" style={{ left: 27, top: 275, width: 327, height: 20 }}>
        <Lock size={20} strokeWidth={1.5} color="#6c4c35" />
        <input
          type="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          placeholder="请输入密码"
          className="flex-1 ml-3 bg-transparent outline-none border-none"
          style={{
            fontFamily: 'var(--font-zh)',
            fontSize: 13,
            color: '#4a3526',
          }}
        />
      </div>
      <div className="absolute" style={{ left: 27, top: 308, width: 322, height: 1, background: '#dae0cb' }} />

      {/* 登录按钮（79:2854 BUTTON 327×48 r24 #88a088 + 79:2856 TEXT #fff fs20）*/}
      <button
        onClick={() => nav('/home')}
        className="absolute active:opacity-80"
        style={{
          left: 27,
          top: 351,
          width: 327,
          height: 48,
          borderRadius: 24,
          background: '#88a088',
          border: 'none',
          fontFamily: 'var(--font-zh)',
          fontSize: 20,
          fontWeight: 500,
          lineHeight: '28px',
          color: '#ffffff',
          cursor: 'pointer',
        }}
      >
        登录
      </button>

      {/* 忘记密码？ 立即注册（79:2861 + 79:2864）*/}
      <button
        onClick={() => demoAlert('忘记密码')}
        className="absolute active:opacity-60"
        style={{
          left: 26,
          top: 415,
          padding: 0,
          background: 'transparent',
          border: 'none',
          fontFamily: 'var(--font-zh)',
          fontSize: 13,
          color: '#6c4c35',
          cursor: 'pointer',
        }}
      >
        忘记密码？
      </button>
      <button
        onClick={() => demoAlert('立即注册')}
        className="absolute active:opacity-60"
        style={{
          left: 297,
          top: 415,
          padding: 0,
          background: 'transparent',
          border: 'none',
          fontFamily: 'var(--font-zh)',
          fontSize: 13,
          color: '#6a7a5a',
          cursor: 'pointer',
        }}
      >
        立即注册
      </button>

      {/* 其他登录方式（79:2865 区，figma y=586→542）*/}
      {/* 左 separator 79:2869: 27,601→557 width 114 */}
      <div className="absolute" style={{ left: 27, top: 557, width: 114, height: 1, background: '#bed2ba' }} />
      {/* 文字 79:2872: 152,590→546 */}
      <div
        className="absolute"
        style={{
          left: 152,
          top: 546,
          fontFamily: 'var(--font-zh)',
          fontSize: 13,
          color: '#4a3526',
        }}
      >
        其他登录方式
      </div>
      {/* 右 separator 79:2873: 240,601→557 */}
      <div className="absolute" style={{ left: 240, top: 557, width: 114, height: 1, background: '#bed2ba' }} />

      {/* 微信圆按钮（79:2877 VECTOR + 79:2878 微信 group，48×48 #748b76）*/}
      <button
        onClick={() => demoAlert('微信登录')}
        className="absolute active:opacity-70 flex items-center justify-center"
        style={{
          left: 126,
          top: 583,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#748b76',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="微信登录"
      >
        <span style={{ fontSize: 22, color: '#fff' }}>💬</span>
      </button>
      {/* QQ 圆按钮（79:2888 VECTOR + 79:2889 QQ group）*/}
      <button
        onClick={() => demoAlert('QQ 登录')}
        className="absolute active:opacity-70 flex items-center justify-center"
        style={{
          left: 206,
          top: 583,
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: '#748b76',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="QQ 登录"
      >
        <span style={{ fontSize: 18, color: '#fff', fontWeight: 700 }}>QQ</span>
      </button>

      {/* 协议同意（79:2892 区，figma y=706→662）*/}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 27,
          top: 662,
          width: 327,
          height: 16,
          fontFamily: 'var(--font-zh)',
          fontSize: 12,
          lineHeight: '16px',
        }}
      >
        <span style={{ color: '#6c4c35' }}>登录即表示同意 </span>
        <button
          onClick={() => demoAlert('用户协议')}
          style={{ color: '#6a7a5a', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          用户协议
        </button>
        <span style={{ color: '#6c4c35' }}> 和 </span>
        <button
          onClick={() => demoAlert('隐私政策')}
          style={{ color: '#6a7a5a', background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
        >
          隐私政策
        </button>
      </div>
      <Toast message={message} />
    </div>
  )
}
