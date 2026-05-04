// 会员等级与权益体系 · figma frame 79:1668
// 视觉：用户卡片（头像+用户名+等级标签）+ 5 等级横排 + 储值专区 + 生日权益 双卡
import { useNavigate } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const AVATAR = '/assets/figma/figma_img_f247170a.webp'
const DECO = '/assets/figma/figma_img_787ab1a3.webp'

const LEVELS = [
  { name: '初阶', color: '#bed2ba' },
  { name: '进阶', color: '#88a088' },
  { name: '资深', color: '#8c9b79' },
  { name: '灵感', color: '#748160' },
  { name: '宝藏茶客', color: '#334836' },
]

export default function MemberRights() {
  const nav = useNavigate()
  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        {/* 标题 */}
        <button
          onClick={() => safeBack(nav, '/member')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>
        <div className="absolute" style={{
          left: 36, top: 3,
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#000',
        }}>会员等级与权益体系</div>

        {/* 用户卡片（figma y=84→40, 343×195 r=16, cream 40%）*/}
        <div className="absolute" style={{
          left: 16, top: 40, width: 343, height: 195, borderRadius: 16,
          background: 'rgba(239,229,195,0.40)',
          boxShadow: '4px 4px 4px rgba(108,76,53,0.40)',
          overflow: 'hidden',
        }}>
          {/* 装饰花纹 */}
          <img src={DECO} alt="" className="absolute pointer-events-none"
            style={{ right: -10, top: 0, width: 183, height: 195, opacity: 0.4 }} draggable={false} />
        </div>

        {/* 头像 */}
        <div className="absolute overflow-hidden" style={{
          left: 43, top: 98, width: 68, height: 68, borderRadius: '50%', background: '#fff',
        }}>
          <img src={AVATAR} alt="头像" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
        </div>

        {/* 用户名 + 等级 */}
        <div className="absolute" style={{
          left: 133, top: 93,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>奇诺</div>
        <div className="absolute" style={{
          left: 134, top: 149,
          fontFamily: 'var(--font-zh)', fontSize: 15, color: '#6c4c35',
        }}>V5宝藏茶客</div>

        {/* 5 等级横排（figma y=344→300, ellipse 36×36）*/}
        <div className="absolute" style={{ left: 0, top: 318, width: 375, height: 1, background: '#dcdcdc' }} />
        {LEVELS.map((lv, i) => {
          const xs = [25, 88, 154, 220, 303]
          return (
            <div key={lv.name}>
              <div className="absolute rounded-full" style={{
                left: xs[i], top: 300, width: 36, height: 36, background: lv.color,
                boxShadow: '0 2px 4px rgba(0,0,0,0.10)',
              }} />
              <div className="absolute" style={{
                left: xs[i] + (lv.name.length === 4 ? -10 : 0),
                top: 346, width: lv.name.length === 4 ? 64 : 45,
                textAlign: 'center',
                fontFamily: 'var(--font-zh)', fontSize: 16, color: '#4a3526',
              }}>{lv.name}</div>
            </div>
          )
        })}

        {/* 储值专区 大卡（figma y=476→432, 148×279 sage 40%+cream）*/}
        <div className="absolute" style={{
          left: 25, top: 432, width: 148, height: 279, borderRadius: 16,
          background: '#88a088',
          boxShadow: '4px 4px 4px rgba(197,216,204,0.40)',
        }} />
        <div className="absolute" style={{
          left: 25, top: 432, width: 148, height: 279, borderRadius: 16,
          background: 'rgba(142,210,186,0.40)',
        }} />
        <div className="absolute" style={{
          left: 73, top: 540,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>储值专区</div>
        <div className="absolute" style={{
          left: 35, top: 580, width: 130,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '20px', color: '#6c4c35',
        }}>
          储值专享代金券<br/>充 200 送 20<br/>充 500 送 70
        </div>

        {/* 生日权益 大卡（figma y=476→432, x=199）*/}
        <div className="absolute" style={{
          left: 199, top: 432, width: 148, height: 279, borderRadius: 16,
          background: 'rgba(136,160,136,0.40)',
          boxShadow: '4px 4px 4px rgba(197,216,204,0.40)',
        }} />
        <div className="absolute" style={{
          left: 199, top: 432, width: 148, height: 279, borderRadius: 16,
          background: 'rgba(142,210,186,0.40)',
        }} />
        <div className="absolute" style={{
          left: 255, top: 540,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>生日权益</div>
        <div className="absolute" style={{
          left: 209, top: 580, width: 130,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '20px', color: '#6c4c35',
        }}>
          生日当月专属<br/>双倍积分回馈<br/>专属生日券
        </div>
      </div>
    </div>
  )
}
