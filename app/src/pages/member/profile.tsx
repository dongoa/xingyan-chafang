// 个人资料 · figma frame 79:1719
// 视觉：cream 大卡 + 头像 + 用户名/手机号/生日 3 行 + 保存按钮
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const AVATAR = '/assets/figma/figma_img_f247170a.webp'
const DECO = '/assets/figma/figma_img_787ab1a3.webp'

export default function MemberProfile() {
  const nav = useNavigate()
  const [name, setName] = useState('奇诺')
  const [phone, setPhone] = useState('15706969902')
  const [birthday, setBirthday] = useState('1999.4.09')
  const { message, showToast } = useToast()

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
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
          left: 31, top: 6,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#000',
        }}>个人资料</div>

        {/* 主大卡（figma y=146→102, 331×604）*/}
        <div className="absolute overflow-hidden" style={{
          left: 22, top: 102, width: 331, height: 604, borderRadius: 16,
          background: 'rgba(239,229,195,0.20)',
          boxShadow: '4px 0 4px rgba(108,76,53,0.40)',
        }}>
          <img src={DECO} alt="" className="absolute pointer-events-none"
            style={{ left: -22, top: 165, width: 213, height: 377, opacity: 0.3 }} draggable={false} />
        </div>

        {/* 头像 88×88 (figma y=95→51) */}
        <div className="absolute overflow-hidden" style={{
          left: 144, top: 51, width: 88, height: 88, borderRadius: '50%', background: '#fff',
          boxShadow: '0 4px 4px rgba(0,0,0,0.10)',
        }}>
          <img src={AVATAR} alt="头像" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
        </div>

        {/* 3 行表单 */}
        {[
          { label: '用户名', value: name, set: setName, top: 226 },
          { label: '手机号', value: phone, set: setPhone, top: 336 },
          { label: '生日',   value: birthday, set: setBirthday, top: 443 },
        ].map(row => (
          <div key={row.label}>
            <div className="absolute" style={{
              left: 45, top: row.top,
              fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
            }}>{row.label}</div>
            <input
              type="text"
              value={row.value}
              onChange={e => row.set(e.target.value)}
              className="absolute bg-transparent outline-none border-none text-right"
              style={{
                right: 45, top: row.top + 4, width: 200, height: 28,
                fontFamily: 'var(--font-zh)', fontSize: 20, color: '#6c4c35',
              }}
            />
            <div className="absolute" style={{
              left: 45, top: row.top + 50, width: 285, height: 1, background: 'rgba(108,76,53,0.20)',
            }} />
          </div>
        ))}

        {/* 保存按钮 */}
        <button
          onClick={() => showToast('保存成功（演示）')}
          className="absolute flex items-center justify-center active:opacity-80"
          style={{
            left: 60, top: 584, width: 255, height: 61, borderRadius: 30,
            background: '#bed2ba', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-zh)', fontSize: 32, fontWeight: 700, color: '#4a3526',
            boxShadow: '0 4px 4px rgba(108,76,53,0.20)',
          }}
        >
          保存
        </button>

        <div style={{ height: 720 }} />
      </div>
      <Toast message={message} />
    </div>
  )
}
