// 商品包装 · figma frame 79:2009
// 视觉：顶部 sage hero（左右切换 + 大图）+ 礼盒 2 列 + 礼袋 2 列
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

const HEROS = [
  '/assets/figma/figma_img_4a0541e4.webp',
  '/assets/figma/figma_img_2959b5c6.webp',
  '/assets/figma/figma_img_659150fa.webp',
]

const GIFT_BOXES = [
  { name: '2026新款方形小号一两茶', price: '5.4', img: '/assets/figma/figma_img_ba7deb38.webp' },
  { name: '一斤密封储茶罐红茶绿茶通', price: '4.39', img: '/assets/figma/figma_img_659150fa.webp' },
]
const GIFT_BAGS = [
  { name: '古风礼品袋吉祥文字礼物袋', price: '2.66', img: '/assets/figma/figma_img_f8b0a51a.webp' },
  { name: '中国风礼品袋竖版茶叶袋礼', price: '10.5', img: '/assets/figma/figma_img_2959b5c6.webp' },
]

function PkgCard({ name, price, img, left, top }: { name: string; price: string; img: string; left: number; top: number }) {
  return (
    <div className="absolute" style={{
      left, top, width: 163, height: 193, borderRadius: 16,
      background: '#ffffff', boxShadow: '0 4px 4px rgba(92,109,94,0.50)',
    }}>
      <img src={img} alt={name} className="absolute"
        style={{ left: 0, top: 0, width: 163, height: 130, borderRadius: 15, objectFit: 'cover' }} draggable={false} />
      <div className="absolute" style={{
        left: 6, top: 134, width: 158,
        fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#6c4c35',
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>{name}</div>
      <img src={COIN} alt="" className="absolute" style={{ left: 9, top: 178, width: 8, height: 9 }} draggable={false} />
      <div className="absolute" style={{
        left: 18, top: 169,
        fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#4a3526', fontWeight: 600,
      }}>{price}</div>
      <div className="absolute" style={{
        left: 56, top: 172,
        fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: 'rgba(108,76,53,0.70)',
      }}>卷后价</div>
    </div>
  )
}

export default function MallPackage() {
  const nav = useNavigate()
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx(i => (i - 1 + HEROS.length) % HEROS.length)
  const next = () => setIdx(i => (i + 1) % HEROS.length)

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        {/* 顶部 sage 区 0,44→0 (skip 状态栏后) */}
        <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 191, background: 'rgba(136,160,136,0.60)' }} />

        <button
          onClick={() => safeBack(nav, '/mall')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#fff" />
        </button>

        {/* 左右切换大箭头 */}
        <button onClick={prev} className="absolute flex items-center justify-center active:opacity-70" style={{
          left: 40, top: 78, width: 36, height: 36, borderRadius: '50%',
          background: '#88a088', border: 'none', cursor: 'pointer',
        }} aria-label="上一张">
          <ChevronsLeft size={24} color="#fff" />
        </button>
        <button onClick={next} className="absolute flex items-center justify-center active:opacity-70" style={{
          left: 284, top: 78, width: 36, height: 36, borderRadius: '50%',
          background: '#88a088', border: 'none', cursor: 'pointer',
        }} aria-label="下一张">
          <ChevronsRight size={24} color="#fff" />
        </button>

        {/* 中间大图 */}
        <img
          src={HEROS[idx]}
          alt=""
          className="absolute"
          style={{ left: 118, top: 26, width: 140, height: 140, borderRadius: 16, objectFit: 'cover' }}
          draggable={false}
        />

        <div className="h5-capsule absolute flex items-center" style={{
          left: 289, top: 7, width: 70, height: 34, padding: '0 7px',
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

        {/* 主区底色 */}
        <div className="absolute" style={{ left: 0, top: 191, width: 375, minHeight: 600, background: 'rgba(136,160,136,0.20)' }} />

        {/* 礼盒 标题 (figma y=251→207) */}
        <div className="absolute" style={{
          left: 17, top: 207,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>礼盒</div>

        {/* 礼盒 2 列 (figma y=305→261) */}
        {GIFT_BOXES.map((g, i) => (
          <PkgCard key={g.name} name={g.name} price={g.price} img={g.img} left={i === 0 ? 18 : 195} top={261} />
        ))}

        {/* 分隔线 (figma y=521→477) */}
        <div className="absolute" style={{ left: 0, top: 477, width: 375, height: 1, background: 'rgba(0,0,0,0.10)' }} />

        {/* 礼袋 标题 (figma y=531→487) */}
        <div className="absolute" style={{
          left: 16, top: 487,
          fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
        }}>礼袋</div>

        {/* 礼袋 2 列 (figma y=563→519) */}
        {GIFT_BAGS.map((g, i) => (
          <PkgCard key={g.name} name={g.name} price={g.price} img={g.img} left={i === 0 ? 17 : 195} top={519} />
        ))}

        <div style={{ height: 760 }} />
      </div>
    </div>
  )
}
