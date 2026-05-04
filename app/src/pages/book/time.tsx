// 预约-时间 · figma frame 79:371
// 视觉：顶部 sage 条 + 店铺信息 + 日期 6 天选择 + 主白卡（包厢预览 + 时间线 + 图例）
// docx 章节六内容已对照（25.00/小时、有预约/空闲中）。
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ChevronLeft, Phone } from 'lucide-react'
import { safeBack } from '../../utils/navigation'

const ROOM_THUMB = '/assets/figma/figma_img_1b91f7c2.webp' // 包厢预览（mask group）
const COIN_ICON = '/assets/figma/figma_img_8f86d5a0.webp'  // 钱币图标棕色版

const DAYS = [
  { date: '3.1', label: '今天' },
  { date: '3.2', label: '周一' },
  { date: '3.3', label: '周二' },
  { date: '3.4', label: '周三' },
  { date: '3.5', label: '周四' },
  { date: '3.6', label: '周五' },
]

const HOURS = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]

export default function BookTime() {
  const nav = useNavigate()
  const [dayIdx, setDayIdx] = useState(0)

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* 79:383 顶部 sage 条（135 高，从 y=0→0 起算，覆盖到 y=135）*/}
      <div
        className="absolute"
        style={{
          left: 0,
          top: 0,
          width: 375,
          height: 135,
          background: 'rgba(136,160,136,0.70)',
        }}
      />

      {/* chevron 返回 79:392 figma y=46→2 */}
      <button
        onClick={() => safeBack(nav, '/book/store')}
        className="absolute flex items-center justify-center active:opacity-70"
        style={{
          left: 0,
          top: 2,
          width: 40,
          height: 40,
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
        }}
        aria-label="返回"
      >
        <ChevronLeft size={20} color="#4a3526" />
      </button>

      {/* 顶部右上 more+disc 控件（79:384 figma y=52→8）*/}
      <div
        className="h5-capsule absolute flex items-center"
        style={{ left: 289, top: 8, width: 70, height: 34, padding: '0 7px',
          background: '#fffefe', borderRadius: 16,
        }}
      >
        <div className="flex items-center gap-[2px]" style={{ width: 24 }}>
          <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
          <span className="block rounded-full" style={{ width: 4, height: 4, background: '#4a3526' }} />
        </div>
        <div className="ml-2 rounded-full border-2" style={{ width: 18, height: 18, borderColor: '#4a3526' }}>
          <div className="rounded-full m-auto mt-[3px]" style={{ width: 6, height: 6, background: '#4a3526' }} />
        </div>
      </div>

      {/* 店铺名（79:399 figma y=94 → 50）*/}
      <div
        className="absolute"
        style={{ left: 23, top: 50, fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, lineHeight: '28px', color: '#4a3526' }}
      >
        星衍茶坊中央店
      </div>
      <div
        className="absolute"
        style={{ left: 23, top: 98, fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 300, lineHeight: '28px', color: '#6c4c35' }}
      >
        台江区中央街2#105
      </div>

      {/* 电话 ellipse（79:400 figma y=108 → 64）*/}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 300, top: 64, width: 48, height: 48, borderRadius: '50%', background: 'rgba(136,160,136,0.80)' }}
      >
        <Phone size={20} color="#fff" />
      </div>

      {/* 主白卡（79:394 figma y=203 → 159, w=339 h=334）*/}
      <div
        className="absolute"
        style={{
          left: 16,
          top: 159,
          width: 339,
          height: 334,
          borderRadius: 16,
          background: '#ffffff',
          boxShadow: [
            '0 4px 4px rgba(108,76,53,0.40)',
            '4px 4px 4px rgba(108,76,53,0.40)',
            'inset 0 -2px 0 rgba(255,255,255,0.30)',
            'inset 0 1px 1px rgba(255,255,255,0.50)',
            '-65px 140px 43px rgba(0,0,0,0.01)',
            '-42px 90px 40px rgba(0,0,0,0.06)',
            '-23px 51px 33px rgba(116,116,116,0.20)',
            '-10px 22px 25px rgba(61,61,61,0.34)',
          ].join(', '),
        }}
      />
      {/* cream overlay (79:397 rgba(239,229,195,0.40)) */}
      <div
        className="absolute"
        style={{ left: 16, top: 159, width: 339, height: 334, borderRadius: 16, background: 'rgba(239,229,195,0.40)' }}
      />

      {/* 日期 6 天选择（figma y=220-260 → 176-216）*/}
      {DAYS.map((d, i) => {
        const x = 24 + i * 56  // figma 24,80,136,192,248,304... 间距 56
        const active = i === dayIdx
        return (
          <button
            key={d.date}
            onClick={() => setDayIdx(i)}
            className="absolute active:opacity-70"
            style={{
              left: x,
              top: 176,
              width: 48,
              height: 48,
              borderRadius: 8,
              background: active ? 'rgba(136,160,136,0.40)' : 'transparent',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            <div style={{
              fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px',
              color: active ? '#ffffff' : '#6c4c35',
            }}>{d.date}</div>
            <div style={{
              fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: active ? 500 : 300, lineHeight: '24px',
              color: active ? '#ffffff' : '#4a3526',
            }}>{d.label}</div>
          </button>
        )
      })}

      {/* 包厢缩略（79:440 mask group 80×80 r=16 figma y=295 → 251）*/}
      <div
        className="absolute overflow-hidden"
        style={{ left: 29, top: 251, width: 80, height: 80, borderRadius: 16 }}
      >
        <img
          src={ROOM_THUMB}
          alt="包厢"
          className="w-full h-full"
          style={{ objectFit: 'cover' }}
          draggable={false}
        />
      </div>

      {/* 下单请联系（79:418 figma y=291 → 247）*/}
      <div
        className="absolute"
        style={{ left: 119, top: 247, fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, lineHeight: '28px', color: '#4a3526' }}
      >
        下单请联系
      </div>

      {/* 钱币图标 + 25.00/小时（79:416 + 79:417 figma y=348/356 → 304/312）*/}
      <img
        src={COIN_ICON}
        alt=""
        className="absolute"
        style={{ left: 123, top: 312, width: 8, height: 9 }}
        draggable={false}
      />
      <div
        className="absolute"
        style={{ left: 132, top: 304, fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '22px', color: '#6c4c35' }}
      >
        25.00/小时
      </div>

      {/* 预约 button（79:421 sage 40% rect + 79:422 text，figma y=310→266 / 322→278）*/}
      <button
        onClick={() => nav('/book/room')}
        className="absolute active:opacity-80"
        style={{
          left: 296,
          top: 266,
          width: 48,
          height: 48,
          borderRadius: 12,
          background: 'rgba(136,160,136,0.70)',
          border: 'none',
          fontFamily: 'var(--font-zh)',
          fontSize: 16,
          color: '#ffffff',
          cursor: 'pointer',
        }}
      >
        预约
      </button>

      {/* 时间轴底色（79:423 311×16 brown 40%, figma y=398→354）*/}
      <div
        className="absolute"
        style={{ left: 29, top: 354, width: 311, height: 16, background: 'rgba(108,76,53,0.40)', borderRadius: 4 }}
      />
      {/* 时间轴已预约段（79:424 30×16 brown 80%）*/}
      <div
        className="absolute"
        style={{ left: 29, top: 354, width: 30, height: 16, background: 'rgba(108,76,53,0.80)', borderRadius: 4 }}
      />

      {/* 小时刻度 0,2,4...24（figma y=418 → 374）*/}
      {HOURS.map((h, i) => {
        // 起点 x 按 figma 真实坐标
        const xs = [29, 56, 77, 98, 119, 139, 167, 192, 219, 245, 271, 298, 326]
        return (
          <div
            key={h}
            className="absolute"
            style={{
              left: xs[i],
              top: 374,
              fontFamily: 'var(--font-zh)',
              fontSize: 13,
              lineHeight: '18px',
              color: '#6c4c35',
            }}
          >
            {h}
          </div>
        )
      })}

      {/* 图例：有预约（深棕圆，79:438 figma y=465→421）+ 空闲中（浅棕圆，79:439）*/}
      <div
        className="absolute rounded-full"
        style={{ left: 32, top: 421, width: 16, height: 16, background: 'rgba(108,76,53,0.80)' }}
      />
      <div
        className="absolute"
        style={{ left: 51, top: 420, fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#4a3526' }}
      >
        有预约
      </div>
      <div
        className="absolute rounded-full"
        style={{ left: 111, top: 421, width: 16, height: 16, background: 'rgba(108,76,53,0.40)' }}
      />
      <div
        className="absolute"
        style={{ left: 132, top: 420, fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px', color: '#4a3526' }}
      >
        空闲中
      </div>
    </div>
  )
}
