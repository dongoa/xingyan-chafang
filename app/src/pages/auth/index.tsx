// 数据授权 · figma frame 90:362 / 91:418
// 视觉：背景大图 + 模态卡片（logo + 手机号一键登录 + 暂时跳过 + 权限说明）
import { useNavigate } from 'react-router-dom'

const BG = '/assets/figma/figma_img_45c9691f.webp'
const LOGO = '/assets/figma/figma_img_f247170a.webp'

export default function DataAuth() {
  const nav = useNavigate()
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* 背景图 */}
      <img src={BG} alt="" className="auth-bg-shot absolute"
        style={{ inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
      {/* 半透明遮罩 */}
      <div className="absolute" style={{ inset: 0, background: 'rgba(0,0,0,0.30)' }} />

      {/* 模态卡（figma y=314→270, 343×340）*/}
      <div className="absolute" style={{
        left: 16, top: 270, width: 343, height: 340, borderRadius: 16,
        background: '#f8f4e6',
      }}>
        {/* logo 圆 52×52 居中靠上（figma y=326→26 in card）*/}
        <div className="absolute overflow-hidden" style={{
          left: 140, top: 12, width: 52, height: 52, borderRadius: '50%', background: '#fff',
        }}>
          <img src={LOGO} alt="logo" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
        </div>

        {/* 手机号一键登录按钮 sage(391-314=77→top in card 77) */}
        <button
          onClick={() => nav('/login')}
          className="absolute flex items-center justify-center active:opacity-80"
          style={{
            left: 68, top: 77, width: 205, height: 60, borderRadius: 30,
            background: '#6b8f71', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 4px rgba(136,160,136,0.40)',
            fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#fff',
          }}
        >
          手机号一键登录
        </button>

        {/* 暂时跳过 浅 sage 按钮（466-314=152 → top in card 152）*/}
        <button
          onClick={() => nav('/home')}
          className="absolute flex items-center justify-center active:opacity-80"
          style={{
            left: 68, top: 152, width: 205, height: 60, borderRadius: 30,
            background: '#bed2ba', border: 'none', cursor: 'pointer',
            boxShadow: '0 4px 4px rgba(136,160,136,0.40)',
            fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#fff',
          }}
        >
          暂时跳过
        </button>

        {/* 申请获得以下权限（539-314=225）*/}
        <div className="absolute" style={{
          left: 42, top: 225,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#4a3526',
        }}>申请获得以下权限</div>
        <div className="absolute" style={{
          left: 42, top: 255,
          fontFamily: 'var(--font-zh)', fontSize: 16, color: '#6c4c35',
        }}>获得你的公开信息（昵称、头像）</div>

        {/* 协议条款（598-314=284）*/}
        <div className="absolute" style={{
          left: 14, top: 284, width: 313,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#000',
          textAlign: 'center',
        }}>
          允许我们在必要场景下，合理使用您的个人信息，<br/>
          且您已阅读并同意 <button
            onClick={() => nav('/agree')}
            style={{ background: 'transparent', border: 'none', padding: 0, cursor: 'pointer', color: '#6a7a5a', fontFamily: 'inherit', fontSize: 'inherit' }}
          >
            《星衍茶坊隐私协议》
          </button>
        </div>
      </div>
    </div>
  )
}
