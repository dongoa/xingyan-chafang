// 积分系列 4 页：明细 / 兑换记录 / 周边 / 积分抵现
// 共用顶部 sage 信息条 + 切 tab 内容
import { useNavigate, useLocation } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import { Toast, useToast } from '../../components/Toast'
import { safeBack } from '../../utils/navigation'

const COIN = '/assets/figma/figma_img_8f86d5a0.webp'

const TABS = [
  { key: 'detail', label: '积分明细', path: '/points/detail' },
  { key: 'redeem', label: '兑换记录', path: '/points/redeem' },
  { key: 'around', label: '积分商城', path: '/points/around' },
  { key: 'cash',   label: '积分抵现', path: '/points/cash' },
]

const POINT_DETAILS = [
  { date: '11月25日 10：05', label: '消费增加', delta: '+168', bg: 'rgba(136,160,136,0.20)' },
  { date: '12月10日 14：23', label: '消费增加', delta: '+579', bg: 'rgba(136,160,136,0.40)' },
  { date: '2月18日 09：32', label: '消费增加', delta: '+842', bg: 'rgba(136,160,136,0.60)' },
  { date: '4月3日  11：25', label: '积分兑换', delta: '-1300', bg: 'rgba(136,160,136,0.80)' },
  { date: '6月1日  10：05', label: '积分兑换', delta: '-700',  bg: '#88a088' },
]

const REDEEM = [
  { name: '10元抵现卷', date: '4月3日 11：25', cost: '-1300', img: '/assets/figma/figma_img_8f86d5a0.webp' },
  { name: '5元抵现卷', date: '6月1日 10：05', cost: '-700', img: '/assets/figma/figma_img_8f86d5a0.webp' },
  { name: '茶具周边礼盒', date: '7月12日 16：30', cost: '-2500', img: '/assets/figma/figma_img_a77c0a47.webp' },
]

const AROUND_GOODS = [
  { name: '专属茶具套装', cost: 3500, img: '/assets/figma/figma_img_2b0bb9bd.webp' },
  { name: '限量茶礼盒', cost: 2200, img: '/assets/figma/figma_img_4560dd77.webp' },
  { name: '会员专享代金券', cost: 800, img: '/assets/figma/figma_img_8f86d5a0.webp' },
  { name: '茶文化书籍', cost: 1500, img: '/assets/figma/figma_img_82ee933f.webp' },
]

export default function Points() {
  const nav = useNavigate()
  const loc = useLocation()
  const cur = TABS.find(t => loc.pathname === t.path) || TABS[0]
  const { message, showToast } = useToast()

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      <div className="relative" style={{ width: 375, paddingBottom: 24 }}>
        {/* 顶部 sage 信息条（180 高）*/}
        <div className="absolute" style={{
          left: 0, top: 0, width: 375, height: 226, background: '#88a088',
        }} />
        <div className="absolute" style={{
          left: 0, top: 0, width: 375, height: 226, background: 'rgba(142,210,186,0.40)',
        }} />

        <button
          onClick={() => safeBack(nav, '/member')}
          className="absolute flex items-center justify-center active:opacity-70"
          style={{ left: 0, top: 0, width: 40, height: 40, background: 'transparent', border: 'none', cursor: 'pointer' }}
          aria-label="返回"
        >
          <ChevronLeft size={20} color="#fff" />
        </button>
        <div className="absolute" style={{
          left: 0, top: 6, width: 375, textAlign: 'center',
          fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 600, color: '#fff',
        }}>会员积分</div>

        {/* 总积分大数字 */}
        <div className="absolute text-center" style={{ left: 0, top: 60, width: 375 }}>
          <div style={{ fontFamily: 'var(--font-zh)', fontSize: 13, color: '#fff', opacity: 0.85 }}>当前可用积分</div>
          <div style={{ marginTop: 8, fontFamily: 'var(--font-zh)', fontSize: 56, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
            8,420
          </div>
          <div style={{ marginTop: 12, fontFamily: 'var(--font-zh)', fontSize: 13, color: 'rgba(255,255,255,0.85)' }}>
            积分有效期至 2027-12-31
          </div>
        </div>

        {/* 4 tab */}
        <div className="absolute flex" style={{ left: 0, top: 234, width: 375, height: 50 }}>
          {TABS.map(t => {
            const isAct = t.key === cur.key
            return (
              <button
                key={t.key}
                onClick={() => nav(t.path)}
                className="active:opacity-80"
                style={{
                  flex: 1, height: 50,
                  background: isAct ? '#fff' : 'rgba(255,255,255,0.50)',
                  color: '#4a3526', border: 'none',
                  fontFamily: 'var(--font-zh)', fontSize: 14, fontWeight: isAct ? 600 : 400,
                  cursor: 'pointer',
                  borderBottom: isAct ? '2px solid #88a088' : 'none',
                }}
              >
                {t.label}
              </button>
            )
          })}
        </div>

        {/* 内容区 */}
        <div className="absolute" style={{ left: 0, top: 284, width: 375 }}>
          {cur.key === 'detail' && POINT_DETAILS.map((d, i) => (
            <div key={i} className="relative" style={{ height: 80, background: d.bg, padding: '20px 19px' }}>
              <div style={{
                fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 500, color: '#4a3526',
              }}>{d.label}</div>
              <div style={{
                marginTop: 4, fontFamily: 'var(--font-zh)', fontSize: 15, color: '#6c4c35',
              }}>{d.date}</div>
              <div className="absolute" style={{
                right: 19, top: 18,
                fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#4a3526',
              }}>{d.delta}</div>
            </div>
          ))}

          {cur.key === 'redeem' && REDEEM.map((r, i) => (
            <div key={i} className="relative mx-4 my-3" style={{
              height: 130, borderRadius: 16,
              background: 'rgba(142,210,186,0.40)',
              boxShadow: '4px 4px 4px rgba(205,217,206,0.50)',
              padding: 16,
            }}>
              <img src={r.img} alt="" className="absolute"
                style={{ left: 12, top: 12, width: 100, height: 100, borderRadius: 16, objectFit: 'cover' }} draggable={false} />
              <div className="absolute" style={{
                left: 130, top: 28,
                fontFamily: 'var(--font-zh)', fontSize: 20, fontWeight: 500, color: '#4a3526',
              }}>{r.name}</div>
              <div className="absolute" style={{
                left: 130, top: 75,
                fontFamily: 'var(--font-zh)', fontSize: 15, color: '#6c4c35',
              }}>{r.date}</div>
              <div className="absolute text-right" style={{
                right: 16, top: 28,
              }}>
                <div style={{ fontFamily: 'var(--font-zh)', fontSize: 13, color: '#6c4c35' }}>抵扣</div>
                <div style={{ marginTop: 4, fontFamily: 'var(--font-zh)', fontSize: 18, fontWeight: 600, color: '#4a3526' }}>{r.cost}</div>
              </div>
            </div>
          ))}

          {cur.key === 'around' && (
            <div className="grid grid-cols-2 gap-3 px-4 pt-3">
              {AROUND_GOODS.map((g, i) => (
                <div key={i} className="relative" style={{
                  borderRadius: 16, background: '#fff', overflow: 'hidden',
                  boxShadow: '0 4px 4px rgba(108,76,53,0.15)',
                }}>
                  <img
                    src={g.img}
                    alt={g.name}
                    style={{
                      width: '100%',
                      height: 140,
                      objectFit: g.img.endsWith('.png') ? 'contain' : 'cover',
                      background: '#eef3e7',
                    }}
                    draggable={false}
                  />
                  <div className="p-2">
                    <div style={{
                      fontFamily: 'var(--font-zh)', fontSize: 14, color: '#4a3526',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>{g.name}</div>
                    <div className="flex items-center mt-1">
                      <img src={COIN} alt="" style={{ width: 8, height: 9 }} draggable={false} />
                      <span style={{ marginLeft: 4, fontFamily: 'var(--font-zh)', fontSize: 14, fontWeight: 600, color: '#4a3526' }}>{g.cost}</span>
                      <span style={{ marginLeft: 4, fontFamily: 'var(--font-zh)', fontSize: 12, color: '#6c4c35' }}>积分</span>
                    </div>
                    <button onClick={() => showToast(`兑换 ${g.name}（演示）`)}
                      className="mt-2 w-full active:opacity-80"
                      style={{
                        height: 32, borderRadius: 16, background: '#88a088', border: 'none', color: '#fff',
                        fontFamily: 'var(--font-zh)', fontSize: 13, cursor: 'pointer',
                      }}>立即兑换</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cur.key === 'cash' && (
            <div className="px-4 pt-4">
              {[
                { rate: 100, value: '1元', desc: '日常消费可用' },
                { rate: 500, value: '5元', desc: '满 50 元可用' },
                { rate: 1000, value: '10元', desc: '满 100 元可用' },
                { rate: 2500, value: '30元', desc: '茶室预约专享' },
              ].map((c, i) => (
                <div key={i} className="relative my-3 p-4 flex items-center" style={{
                  borderRadius: 12, background: 'rgba(142,210,186,0.40)', height: 90,
                }}>
                  <div className="flex-1">
                    <div style={{ fontFamily: 'var(--font-zh)', fontSize: 24, fontWeight: 600, color: '#4a3526' }}>{c.value}抵现</div>
                    <div style={{ marginTop: 6, fontFamily: 'var(--font-zh)', fontSize: 13, color: '#6c4c35' }}>{c.desc}</div>
                  </div>
                  <button onClick={() => showToast(`兑换 ${c.value} 抵现券（演示）`)}
                    className="active:opacity-80"
                    style={{
                      width: 80, height: 36, borderRadius: 18, background: '#334836', border: 'none', color: '#fff',
                      fontFamily: 'var(--font-zh)', fontSize: 13, cursor: 'pointer',
                    }}>{c.rate} 积分</button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ height: 800 }} />
      </div>
      <Toast message={message} />
    </div>
  )
}
