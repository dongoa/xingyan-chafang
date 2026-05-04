// 订单-支付结果 · figma frame 79:3639
// 视觉：成功 hero 图 + sage 主卡（包厢/茶具/3月1日 + 茶点 + 实付 + 下单时间/编号）
// docx 章节十：下单成功 / 实付：229.9元 / 下单时间 3.1/8:00
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Phone } from 'lucide-react'

const SUCCESS_HERO = '/assets/figma/figma_img_62ab27d8.webp'
const ROOM_THUMB = '/assets/figma/figma_img_1b91f7c2.webp'
const SNACK_THUMB = '/assets/figma/figma_img_4560dd77.webp'
const COIN_ICON = '/assets/figma/figma_img_8f86d5a0.webp'

export default function OrderSuccess() {
  const nav = useNavigate()

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, height: 768 }}>
        {/* 顶部 sage bar 区域 */}
        <button
          onClick={() => nav('/home')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回首页"
        >
          <ChevronLeft size={20} color="#4a3526" />
        </button>
        <div className="h5-capsule absolute flex items-center" style={{
          left: 302, top: 3, width: 70, height: 34, padding: '0 7px',
          background: '#fffefe', borderRadius: 16,
        }}>
          <div className="flex items-center gap-[2px]" style={{ width: 24 }}>
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
            <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          </div>
          <div className="ml-2 rounded-full border-2" style={{ width: 18, height: 18, borderColor: '#4a3526' }}>
            <div className="rounded-full m-auto mt-[3px]" style={{ width: 6, height: 6, background: '#4a3526' }} />
          </div>
        </div>

        {/* 标题：下单成功 */}
        <div className="absolute" style={{
          left: 0, top: 40, width: 375, textAlign: 'center',
          fontFamily: 'var(--font-zh)', fontSize: 32, fontWeight: 700, lineHeight: '40px', color: '#000',
        }}>
          下单成功
        </div>

        {/* hero illustration 200×200 居中（figma 95,135→91）*/}
        <img
          src={SUCCESS_HERO}
          alt=""
          className="absolute"
          style={{ left: 95, top: 91, width: 200, height: 200, objectFit: 'contain' }}
          draggable={false}
        />

        {/* 主白卡（343×385 r=16, sage + cream overlay, figma y=360→316）*/}
        <div className="absolute" style={{
          left: 16, top: 316, width: 343, height: 385, borderRadius: 16,
          background: '#88a088',
          boxShadow: '0 4px 4px rgba(196,216,203,0.40), inset 0 -2px 0 rgba(255,255,255,0.30), inset 0 1px 1px rgba(255,255,255,0.50)',
        }} />
        <div className="absolute" style={{
          left: 16, top: 316, width: 343, height: 385, borderRadius: 16,
          background: 'rgba(142,210,186,0.40)',
        }} />

        {/* 店名 + 地址 + 时间 (figma y=381/419/445 → 337/375/401) */}
        <div className="absolute" style={{
          left: 41, top: 337,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, lineHeight: '32px', color: '#4a3526',
        }}>星衍茶坊中央店</div>
        <div className="absolute" style={{
          left: 41, top: 375,
          fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#4a3526',
        }}>台江区中央街2#105</div>
        <div className="absolute" style={{
          left: 41, top: 401,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#4a3526',
        }}>时间：00：01-00：00</div>
        {/* 电话圆 36×36 */}
        <div className="absolute flex items-center justify-center" style={{
          left: 293, top: 337, width: 36, height: 36, borderRadius: '50%',
          background: 'rgba(136,160,136,0.80)',
        }}>
          <Phone size={17} color="#fff" />
        </div>

        {/* 包厢条目 (y=441-505) */}
        <div className="absolute overflow-hidden" style={{
          left: 41, top: 441, width: 60, height: 60, borderRadius: 16,
        }}>
          <img src={ROOM_THUMB} alt="包厢" className="w-full h-full" style={{ objectFit: 'cover' }} draggable={false} />
        </div>
        <div className="absolute" style={{
          left: 110, top: 439,
          fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#6c4c35',
        }}>观鱼小筑</div>
        <div className="absolute" style={{
          left: 110, top: 466,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.70)',
        }}>臻品茶具</div>
        <div className="absolute" style={{
          left: 110, top: 483,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.70)',
        }}>3月1日 11：00-16：00</div>
        <img src={COIN_ICON} alt="" className="absolute" style={{ left: 292, top: 452, width: 8, height: 9 }} draggable={false} />
        <div className="absolute" style={{
          left: 301, top: 443,
          fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#4a3526',
        }}>180</div>
        <div className="absolute" style={{
          left: 313, top: 480,
          fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: 'rgba(108,76,53,0.70)',
        }}>x1</div>

        {/* 茶点条目 (y=519-545) */}
        <img src={SNACK_THUMB} alt="" className="absolute" style={{
          left: 41, top: 524, width: 60, height: 60, borderRadius: 16, objectFit: 'cover',
        }} draggable={false} />
        <div className="absolute" style={{
          left: 109, top: 519,
          fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#6c4c35',
        }}>松子</div>
        <div className="absolute" style={{
          left: 110, top: 545,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.70)',
        }}>一罐-150g</div>
        <img src={COIN_ICON} alt="" className="absolute" style={{ left: 292, top: 528, width: 8, height: 9 }} draggable={false} />
        <div className="absolute" style={{
          left: 300, top: 520,
          fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#4a3526',
        }}>49.9</div>
        <div className="absolute" style={{
          left: 313, top: 545,
          fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: 'rgba(108,76,53,0.70)',
        }}>x1</div>

        {/* 实付 + 229.9元 (y=590) */}
        <div className="absolute" style={{
          left: 227, top: 590,
          fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px', color: '#4a3526',
        }}>实付：</div>
        <div className="absolute" style={{
          left: 275, top: 590,
          fontFamily: 'var(--font-zh)', fontSize: 16, fontWeight: 600, lineHeight: '24px', color: '#4a3526',
        }}>229.9元</div>

        {/* 分隔线 (y=629) */}
        <div className="absolute" style={{
          left: 29, top: 629, width: 317, height: 1, background: 'rgba(108,76,53,0.20)',
        }} />

        {/* 下单时间 + 订单编号 */}
        <div className="absolute" style={{
          left: 40, top: 643,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.70)',
        }}>下单时间</div>
        <div className="absolute" style={{
          left: 195, top: 640,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#6c4c35',
        }}>2026-03-01  8：04：03</div>
        <div className="absolute" style={{
          left: 41, top: 670,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.70)',
        }}>订单编号</div>
        <div className="absolute" style={{
          left: 195, top: 665,
          fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#6c4c35',
        }}>1010112514617104315</div>
      </div>
    </div>
  )
}
