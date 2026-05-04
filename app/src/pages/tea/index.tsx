import { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import TabBar from '../../components/TabBar'

const AS = '/assets/figma/'
const CB = '/assets/coldbrew/'

function MiniCapsule() {
  return (
    <div
      className="h5-capsule absolute flex items-center"
      style={{
        left: 289, top: 7, width: 70, height: 34, padding: '0 7px',
        background: '#fffefe', borderRadius: 16, zIndex: 20,
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
  )
}

function BackButton({ color = '#4a3526', onClick }: { color?: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute flex items-center justify-center active:opacity-70"
      style={{
        left: 0, top: 2, width: 40, height: 40, border: 'none',
        background: 'transparent', cursor: 'pointer', zIndex: 20,
      }}
      aria-label="返回"
    >
      <ChevronLeft size={20} color={color} />
    </button>
  )
}

function Page({
  children,
  tabbar = false,
  bg = '#fff',
  minHeight = 768,
}: {
  children: React.ReactNode
  tabbar?: boolean
  bg?: string
  minHeight?: number
}) {
  return (
    <div className="absolute inset-0 overflow-y-auto overflow-x-hidden" style={{ background: bg }}>
      <div
        className="relative"
        style={{
          width: 375,
          minHeight,
          paddingBottom: tabbar ? 'calc(90px + env(safe-area-inset-bottom))' : 34,
        }}
      >
        {children}
      </div>
      {tabbar && <TabBar />}
    </div>
  )
}

const hubCards = [
  {
    path: '/seasons',
    title: '四季养生指南',
    sub: '顺时节饮好茶\n养身心好状态',
    icon: `${AS}figma_img_a4bc0ff6.png`,
    left: 28, top: 294, width: 152, height: 102,
  },
  {
    path: '/tea-history',
    title: '六大茶系',
    sub: '喝茶之余涨知识\n轻松变身懂茶\n小达人',
    icon: `${AS}figma_img_ca7f26e2.png`,
    left: 197, top: 294, width: 152, height: 102,
  },
  {
    path: '/cold-brew',
    title: '冷泡茶攻略',
    sub: '茶底创新搭配、清爽特调玩法，解锁茶的 N 种新潮喝法',
    icon: `${AS}figma_img_a0a806b2.png`,
    left: 28, top: 408, width: 321, height: 102,
  },
  {
    path: '/proverbs',
    title: '茶俗小知识',
    sub: '有趣的茶俗典故\n实用的饮茶礼仪',
    icon: `${AS}figma_img_41f59937.png`,
    left: 28, top: 522, width: 178, height: 88,
  },
  {
    path: '/tea-food',
    title: '茶食搭配',
    sub: '茶点相伴\n慢享时光',
    icon: `${AS}figma_img_69260fdf.png`,
    left: 222, top: 522, width: 126, height: 88,
  },
]

function TeaHub() {
  const nav = useNavigate()
  return (
    <Page tabbar minHeight={760} bg="#faf8f3">
      <img
        src={`${AS}figma_img_41d3f28d.png`}
        alt="茶文化"
        className="absolute"
        style={{ left: 0, top: 0, width: 375, height: 209, objectFit: 'cover' }}
        draggable={false}
      />
      <MiniCapsule />

      <div className="absolute" style={{
        left: 0, top: 240, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-en)', fontSize: 13, color: '#4a3526',
      }}>
        2026/3 MARCH
      </div>
      <div className="absolute" style={{
        left: 0, top: 265, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 13, color: 'rgba(74,53,38,0.60)',
      }}>
        点击即可查看模块消息
      </div>
      <span className="absolute rounded-full" style={{ left: 125, top: 247, width: 4, height: 4, background: '#4a3526' }} />
      <span className="absolute rounded-full" style={{ left: 244, top: 247, width: 4, height: 4, background: '#4a3526' }} />

      {hubCards.map(card => (
        <button
          key={card.path}
          onClick={() => nav(card.path)}
          className="absolute active:opacity-85"
          style={{
            left: card.left, top: card.top, width: card.width, height: card.height,
            border: 'none', borderRadius: 8, padding: 0, cursor: 'pointer',
            background: '#88a088', overflow: 'hidden',
            boxShadow: '0 4px 10px rgba(108,76,53,0.18)',
          }}
        >
          <div className="absolute" style={{
            left: 3, top: 2, right: 5, bottom: 4,
            borderRadius: 8, background: 'rgba(142,210,186,0.40)',
          }} />
          <div className="absolute text-left" style={{
            left: card.width > 200 ? 14 : 10, top: 12,
            fontFamily: 'var(--font-zh)', fontSize: card.width > 130 ? 16 : 15, lineHeight: '22px',
            color: '#4a3526', fontWeight: 500,
            whiteSpace: 'nowrap',
          }}>
            {card.title}
          </div>
          <div className="absolute text-left" style={{
            left: card.width > 200 ? 12 : 10, top: card.height > 90 ? 45 : 42,
            width: card.width > 200 ? 230 : card.width - 58,
            maxHeight: card.height > 90 ? 52 : 38,
            fontFamily: 'var(--font-zh)', fontSize: 12.5, lineHeight: '17px',
            color: 'rgba(108,76,53,0.82)',
            whiteSpace: 'pre-line',
            overflow: 'hidden',
          }}>
            {card.sub}
          </div>
          <div className="absolute rounded-full flex items-center justify-center" style={{
            right: card.width > 150 ? 13 : 8, top: card.height > 90 ? 37 : 42,
            width: 36, height: 36, background: '#fff',
          }}>
            <img src={card.icon} alt="" style={{ width: 27, height: 27, objectFit: 'contain' }} draggable={false} />
          </div>
        </button>
      ))}
    </Page>
  )
}

function TeaHistory() {
  const nav = useNavigate()
  const names = ['白茶', '普洱茶', '黑茶', '绿茶', '红茶']
  return (
    <Page bg="linear-gradient(180deg, #bed2ba 0%, #738f80 100%)" minHeight={768}>
      <BackButton onClick={() => nav('/tea-culture')} />
      <MiniCapsule />
      <div className="absolute" style={{
        left: 0, top: 6, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '32px',
        color: '#4a3526', fontWeight: 500,
      }}>
        六大茶系
      </div>
      <img src={`${AS}figma_img_7b026683.png`} alt="" className="absolute" style={{ left: -2, top: 125, width: 379, height: 189, objectFit: 'cover' }} draggable={false} />
      <img src={`${AS}figma_img_75c1ab54.png`} alt="" className="absolute" style={{ left: 217, top: 253, width: 197, height: 197, objectFit: 'cover' }} draggable={false} />
      {names.map((name, i) => {
        const xs = [46, 116, 198, 277, 348]
        const active = name === '普洱茶'
        return (
          <button
            key={name}
            className="absolute active:opacity-70"
            style={{
              left: xs[i], top: 68, width: 28, height: 92,
              border: 'none', background: 'transparent', padding: 0, cursor: 'pointer',
              fontFamily: 'var(--font-zh)', fontSize: 20, lineHeight: '24px',
              color: active ? '#6c4c35' : '#88a088', writingMode: 'vertical-rl',
            }}
          >
            {name}
          </button>
        )
      })}
      <div className="absolute" style={{ left: 16, top: 290, width: 343, height: 13, background: '#f4f4ef', borderRadius: 8 }} />
      <div className="absolute" style={{ left: 18, top: 292, width: 194, height: 9, background: '#977243', borderRadius: 8 }} />

      <div className="absolute overflow-hidden" style={{ left: 12, top: 330, width: 351, height: 398, borderRadius: 8 }}>
        <img src={`${AS}figma_img_f77c2d1a.png`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
      </div>
      <div className="absolute" style={{
        left: 0, top: 385, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '32px',
        color: '#4a3526', fontWeight: 500,
      }}>
        普洱茶
      </div>
      <div className="absolute" style={{
        left: 0, top: 421, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 16, color: '#4a3526',
      }}>
        温润养脾养胃
      </div>
      <div className="absolute" style={{
        left: 68, top: 500, width: 248,
        fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '21px',
        color: '#6c4c35',
      }}>
        普洱茶主打温润醇厚的熟普，陈香浓郁独特，越品越浓，茶汤红浓透亮，口感绵柔无苦涩。搭配清甜无花果干，酸甜口感能中和普洱茶的醇厚；再搭配松软椰香酥，绵密口感与茶香互补。
      </div>
      <button
        onClick={() => nav('/product/tea_puer')}
        className="absolute active:opacity-80"
        style={{
          left: 126, top: 652, width: 124, height: 36, borderRadius: 18,
          border: 'none', background: '#977243', color: '#fff', cursor: 'pointer',
          fontFamily: 'var(--font-zh)', fontSize: 14,
        }}
      >
        了解更多
      </button>
    </Page>
  )
}

const pairings = [
  {
    id: 'oolong-mung',
    tea: '乌龙茶',
    snack: '绿豆饼',
    teaImg: `${AS}figma_img_fe6ba1f3.png`,
    snackImg: `${AS}figma_img_a7988a07.png`,
    altSnackImg: `${AS}figma_img_46130a73.png`,
    text: '乌龙茶甘醇温润，自带清雅兰香与细腻回甘，茶汤入口顺滑，不苦不涩，既能解腻又能提香。绿豆饼外皮酥松，内馅绵密细腻，清甜不齁，豆香纯粹柔和。二者搭配相得益彰，绿豆饼的甜润刚好中和茶汤的微涩，乌龙的醇厚又能化解点心的腻感，一口酥软点心，一口清香茶汤，层次丰富，滋味平衡。',
  },
  {
    id: 'oolong-almond',
    tea: '乌龙茶',
    snack: '杏仁',
    teaImg: `${AS}figma_img_fe6ba1f3.png`,
    snackImg: `${AS}figma_img_46130a73.png`,
    altSnackImg: `${AS}figma_img_a7988a07.png`,
    text: '乌龙茶香气馥郁，兼具花香与岩韵，茶汤醇厚顺滑，回甘持久。杏仁香脆微甘，坚果香气浓郁，口感紧实有嚼劲，油脂温润却不腻口。乌龙茶的清爽回甘可以巧妙中和杏仁的油脂感，让整体滋味更轻盈；杏仁的醇厚香脆又能衬托茶汤的细腻层次。',
  },
  {
    id: 'black-cookie',
    tea: '红茶',
    snack: '曲奇',
    teaImg: `${AS}figma_img_42ad9aa2.png`,
    snackImg: `${AS}figma_img_388a8799.png`,
    altSnackImg: `${AS}figma_img_3ede82b8.png`,
    text: '红茶香气浓郁甜醇，茶汤温润顺滑，柔和不刺激，自带淡淡蜜香。曲奇酥松化渣，奶香浓郁，黄油香气醇厚。红茶的甘爽温润恰好平衡曲奇的甜腻与油脂感，曲奇的奶香又能衬托红茶的醇厚香气，适合悠闲下午茶和轻松小聚。',
  },
  {
    id: 'black-cranberry',
    tea: '红茶',
    snack: '蔓越莓干',
    teaImg: `${AS}figma_img_42ad9aa2.png`,
    snackImg: `${AS}figma_img_3ede82b8.png`,
    altSnackImg: `${AS}figma_img_388a8799.png`,
    text: '红茶汤色红亮温润，香气甜醇柔和，入口顺滑温暖。蔓越莓干酸甜适口，果肉柔韧有嚼劲，果香清新明亮。红茶的醇厚甜润与蔓越莓的酸甜相互呼应，甜香里带着清爽果酸，层次丰富，温暖又有活力。',
  },
  {
    id: 'green-osmanthus',
    tea: '绿茶',
    snack: '桂花糕',
    teaImg: `${AS}figma_img_da9c3951.png`,
    snackImg: `${AS}figma_img_038fc2d3.png`,
    altSnackImg: `${AS}figma_img_b9fcc468.png`,
    text: '绿茶鲜爽甘醇，香气清雅，入口微涩而后回甘。桂花糕软糯细腻，桂花香气浓郁清甜，甜度柔和雅致。绿茶的鲜爽与桂花糕的香甜相得益彰，茶汤的清冽可化解糕点甜腻，桂花的馥郁香气又能衬托绿茶清雅。',
  },
  {
    id: 'green-pine',
    tea: '绿茶',
    snack: '松子',
    teaImg: `${AS}figma_img_da9c3951.png`,
    snackImg: `${AS}figma_img_b9fcc468.png`,
    altSnackImg: `${AS}figma_img_038fc2d3.png`,
    text: '绿茶清新鲜爽，汤色嫩绿明亮，带有淡淡栗香与豆香。松子香脆饱满，油脂温润，坚果香气浓郁细腻。绿茶的鲜爽清冽能化解松子的油脂感，松子的温润香脆又能中和绿茶微涩，春日饮茶、闲时小聚都很合适。',
  },
  {
    id: 'white-apricot',
    tea: '白茶',
    snack: '杏干',
    teaImg: `${AS}figma_img_ca4a5c3d.png`,
    snackImg: `${AS}figma_img_de87f1d6.png`,
    altSnackImg: `${AS}figma_img_66392c57.png`,
    text: '白茶清淡鲜醇，茶汤柔和顺滑，香气清新淡雅，回甘清甜温润。杏干酸甜适中，果肉柔韧，果香浓郁。白茶的清润可以中和杏干的酸甜浓度，杏干的清新果香又能丰富白茶的淡雅滋味，酸甜与清甜交织，柔和不刺激。',
  },
  {
    id: 'white-dingsheng',
    tea: '白茶',
    snack: '定胜糕',
    teaImg: `${AS}figma_img_ca4a5c3d.png`,
    snackImg: `${AS}figma_img_66392c57.png`,
    altSnackImg: `${AS}figma_img_de87f1d6.png`,
    text: '白茶滋味清淡鲜爽，茶汤柔和温润，香气清雅平和。定胜糕软糯绵密，米香纯粹，淡淡甜香温润雅致。白茶的清鲜淡雅与定胜糕的柔和甜香契合，茶汤的清润可缓解糕点甜糯感，让入口更清爽不腻。',
  },
  {
    id: 'dark-peach',
    tea: '黑茶',
    snack: '桃酥',
    teaImg: `${AS}figma_img_d4948a7b.png`,
    snackImg: `${AS}figma_img_996241b5.png`,
    altSnackImg: `${AS}figma_img_d892f4ab.png`,
    text: '黑茶滋味醇厚绵柔，陈香浓郁，茶汤温润顺滑，擅长解腻去油。桃酥酥松香脆，甜度适中，带有谷物与油脂香气。黑茶的醇厚甘爽恰好中和桃酥的甜腻与油感，酥香与陈香交织，接地气又经典。',
  },
  {
    id: 'dark-walnut',
    tea: '黑茶',
    snack: '核桃仁',
    teaImg: `${AS}figma_img_d4948a7b.png`,
    snackImg: `${AS}figma_img_d892f4ab.png`,
    altSnackImg: `${AS}figma_img_996241b5.png`,
    text: '黑茶醇厚温润，茶汤绵密顺滑，陈香浓郁，暖胃解腻。核桃仁香脆饱满，油脂丰富，坚果香醇厚浓郁。黑茶的厚重醇香能化解核桃仁油腻感，坚果香又能平衡茶汤厚重，适合秋冬休闲小食。',
  },
  {
    id: 'puer-egg',
    tea: '普洱茶',
    snack: '蛋黄酥',
    teaImg: `${AS}figma_img_0b795752.png`,
    snackImg: `${AS}figma_img_f24d9f62.png`,
    altSnackImg: `${AS}figma_img_d1ea6d3a.png`,
    text: '普洱茶醇厚绵柔，陈香浓郁，茶汤温润顺滑，解腻能力突出。蛋黄酥外皮酥松，内馅绵密沙软，咸甜交织。普洱茶的醇厚甘爽能中和蛋黄酥的甜腻与油润，咸甜与醇厚交融，厚重与清爽平衡。',
  },
  {
    id: 'puer-hawthorn',
    tea: '普洱茶',
    snack: '山楂条',
    teaImg: `${AS}figma_img_0b795752.png`,
    snackImg: `${AS}figma_img_d1ea6d3a.png`,
    altSnackImg: `${AS}figma_img_f24d9f62.png`,
    text: '普洱茶醇厚温润，陈香浓郁，解腻消食效果出众。山楂条酸甜开胃，质地柔韧，果香清新。普洱茶可缓和山楂条的过酸口感，山楂的酸甜果香又能丰富茶汤厚重滋味，饭后饮用尤其合适。',
  },
] as const

function TeaFood() {
  const nav = useNavigate()
  const items = [
    ['oolong-mung', '乌龙茶', `${AS}figma_img_fe6ba1f3.png`, 44, 143, 44, 218],
    ['black-cookie', '红茶', `${AS}figma_img_42ad9aa2.png`, 149, 146, 149, 218],
    ['green-osmanthus', '绿茶', `${AS}figma_img_da9c3951.png`, 256, 135, 254, 218],
    ['white-apricot', '白茶', `${AS}figma_img_ca4a5c3d.png`, 45, 404, 44, 488],
    ['dark-peach', '黑茶', `${AS}figma_img_d4948a7b.png`, 150, 407, 149, 488],
    ['puer-egg', '普洱茶', `${AS}figma_img_0b795752.png`, 257, 407, 254, 488],
  ] as const
  return (
    <Page bg="#f6f7ef" minHeight={768}>
      <img src={`${AS}figma_img_633b0564.jpg`} alt="" className="absolute" style={{ left: 0, top: 0, width: 375, height: 734, objectFit: 'cover' }} draggable={false} />
      <BackButton onClick={() => nav('/tea-culture')} />
      <MiniCapsule />
      <div className="absolute" style={{
        left: 0, top: 34, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '28px',
        color: '#4a3526', fontWeight: 500,
      }}>
        茶食搭配
      </div>
      {items.map(([id, name, img, ix, iy, bx, by]) => (
        <div key={name}>
          <button
            onClick={() => nav(`/tea-food/${id}`)}
            className="absolute active:opacity-85"
            style={{
              left: bx - 10, top: by - 92, width: 92, height: 238,
              border: 'none', background: 'transparent', padding: 0,
              cursor: 'pointer', zIndex: 4,
            }}
            aria-label={`${name}搭配`}
          />
          <img src={img} alt="" className="absolute" style={{ left: ix, top: iy, width: 60, height: 68, objectFit: 'contain' }} draggable={false} />
          <div className="absolute flex items-center justify-center" style={{
            left: bx, top: by, width: 63, height: 136,
            background: 'rgba(255,251,242,0.72)',
            borderRadius: 16,
            boxShadow: '0 4px 12px rgba(108,76,53,0.12)',
            fontFamily: 'var(--font-zh)', fontSize: 20, color: '#4a3526',
            writingMode: 'vertical-rl',
          }}>
            {name}
          </div>
        </div>
      ))}
    </Page>
  )
}

function TeaFoodPairing({ id }: { id?: string }) {
  const nav = useNavigate()
  const current = pairings.find(item => item.id === id) || pairings[0]
  const related = pairings.filter(item => item.tea === current.tea)

  return (
    <Page bg="#f6f7ef" minHeight={1058}>
      <img src={`${AS}figma_img_633b0564.jpg`} alt="" className="absolute" style={{ left: 0, top: 0, width: 375, height: 980, objectFit: 'cover' }} draggable={false} />
      <BackButton onClick={() => nav('/tea-food')} />
      <MiniCapsule />
      <img src={current.teaImg} alt="" className="absolute" style={{ left: 93, top: 51, width: 172, height: 165, objectFit: 'contain' }} draggable={false} />
      <div className="absolute" style={{
        left: 0, top: 230, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 20, lineHeight: '28px',
        color: '#4a3526',
      }}>
        点击茶叶，查看搭配茶食
      </div>
      <div className="absolute flex items-center justify-center gap-5" style={{ left: 0, top: 318, width: 375, height: 126 }}>
        {related.map((item) => (
          <button
            key={item.id}
            onClick={() => nav(`/tea-food/${item.id}`)}
            className="active:opacity-80"
            style={{
              width: 145, height: 112, border: item.id === current.id ? '2px solid #977243' : 'none',
              borderRadius: 14, background: 'rgba(255,255,255,0.28)', cursor: 'pointer',
              padding: 0, position: 'relative',
            }}
          >
            <img src={item.snackImg} alt="" style={{ width: '100%', height: 86, objectFit: 'contain' }} draggable={false} />
            <span style={{
              position: 'absolute', left: 0, bottom: 5, width: '100%',
              fontFamily: 'var(--font-zh)', fontSize: 14, color: '#4a3526',
            }}>
              {item.snack}
            </span>
          </button>
        ))}
      </div>
      <div className="absolute" style={{
        left: 0, top: 454, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 20, lineHeight: '28px',
        color: '#4a3526',
      }}>
        点击茶食，查看搭配攻略
      </div>
      <div className="absolute" style={{
        left: 40, top: 510, width: 295, minHeight: 410,
        borderRadius: 18, background: 'rgba(255,251,242,0.72)',
        boxShadow: '0 6px 18px rgba(108,76,53,0.14)',
      }} />
      <div className="absolute" style={{
        left: 0, top: 535, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '32px',
        color: '#4a3526', fontWeight: 500,
      }}>
        {current.tea} × {current.snack}
      </div>
      <div className="absolute" style={{
        left: 70, top: 585, width: 240,
        fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '27px',
        color: '#6c4c35', textIndent: '2em',
      }}>
        {current.text}
      </div>
      <button
        onClick={() => nav('/tea-food')}
        className="absolute active:opacity-80"
        style={{
          left: 126, top: 938, width: 124, height: 36, borderRadius: 18,
          border: 'none', background: '#977243', color: '#fff',
          fontFamily: 'var(--font-zh)', fontSize: 14, cursor: 'pointer',
        }}
      >
        返回搭配
      </button>
    </Page>
  )
}

const seasons = {
  spring: {
    label: '春季',
    title: '春茶养阳・疏肝解腻',
    bg: '#f2f9f0',
    gridImage: `${AS}figma_img_2d08f481.jpg`,
    sections: [
      ['宜饮茶品', `${AS}figma_img_1da89883.jpg`, '鲜嫩绿茶：鲜爽清冽，清肝火；茉莉花茶：疏肝解郁，缓解情绪烦闷；金银花茶：清热降火，祛湿明目。'],
      ['养生搭配技巧', `${AS}figma_img_bf16a24f.jpg`, '绿茶/陈皮：理气祛湿，健脾和胃；茉莉花茶/薄荷叶：提神解困，清新口气；菊花茶/枸杞：清肝明目。'],
      ['饮茶贴士', `${AS}figma_img_9cd8526b.jpg`, '晨起淡绿茶或茉莉花茶，唤醒脾胃阳气；午后薄荷菊花茶提神解困；清明可饮龙井，鲜爽清润。'],
    ],
  },
  summer: {
    label: '夏季',
    title: '夏茶清心・解暑生津',
    bg: '#edf6f3',
    gridImage: `${AS}figma_img_ba6ac70f.jpg`,
    sections: [
      ['宜饮茶品', `${AS}figma_img_73b1f004.jpg`, '清甜白茶性凉不伤脾，清润降火；薄荷茶、荷叶茶清凉解暑，适合湿热天气；柠檬红茶解腻开胃。'],
      ['养生搭配技巧', `${AS}figma_img_e719fe8d.jpg`, '冷泡乌龙加柠檬片和蜂蜜，酸甜爽口；荷叶茶加冬瓜皮利水祛湿；白茶配菊花双重清热。'],
      ['饮茶贴士', `${AS}figma_img_7a97e698.jpg`, '最佳时间是 10 点到 16 点，避开正午高温，小口慢饮；夏至饮白牡丹，大暑饮冷泡铁观音。'],
    ],
  },
  autumn: {
    label: '秋季',
    title: '秋茶润肺・温润养阴',
    bg: '#f5f4eb',
    gridImage: `${AS}figma_img_24c5fb96.jpg`,
    sections: [
      ['宜饮茶品', `${AS}figma_img_b980f043.jpg`, '醇厚乌龙茶温润不燥，润肺和胃；桂花茶理气和胃；正山小种温养脾胃，适合体质偏凉人群。'],
      ['养生搭配技巧', `${AS}figma_img_48b0168e.jpg`, '乌龙茶加桂花可化解秋燥；雪梨百合茶加蜂蜜养阴润燥；红茶加枸杞红枣改善秋日乏力。'],
      ['饮茶贴士', `${AS}figma_img_b836b0e5.jpg`, '晨起一杯温茶，唤醒脾胃；饭后半小时饮茶，解腻促消化；立秋可饮桂花乌龙。'],
    ],
  },
  winter: {
    label: '冬季',
    title: '冬茶温阳・暖胃驱寒',
    bg: 'rgba(108,76,53,0.20)',
    gridImage: `${AS}figma_img_d7bc4d12.jpg`,
    sections: [
      ['宜饮茶品', `${AS}figma_img_7d4033d8.jpg`, '醇厚红茶性温驱寒；普洱熟茶、老白茶醇厚养胃；枸杞红茶和红枣红茶补气养血。'],
      ['养生搭配技巧', `${AS}figma_img_091120e8.jpg`, '红茶加红枣桂圆，适合冬日日常饮用；普洱熟茶加陈皮健脾和胃；姜枣茶加枸杞温润滋补。'],
      ['饮茶贴士', `${AS}figma_img_7b3973ec.jpg`, '9 点到 15 点饮茶可暖身提神；体寒者可将茶煮饮，温养效果更适合冬日；立冬宜饮普洱熟茶。'],
    ],
  },
} as const

function SeasonsHub() {
  const nav = useNavigate()
  const cards = [
    ['spring', 18, 73], ['summer', 196, 73],
    ['autumn', 18, 401], ['winter', 196, 401],
  ] as const
  return (
    <Page bg="#fff" minHeight={768}>
      <BackButton onClick={() => nav('/tea-culture')} />
      <MiniCapsule />
      <div className="absolute" style={{
        left: 37, top: 6, fontFamily: 'var(--font-zh)',
        fontSize: 20, lineHeight: '28px', color: '#000', fontWeight: 500,
      }}>
        四季养生指南
      </div>
      {cards.map(([key, left, top]) => {
        const s = seasons[key]
        return (
          <button
            key={key}
            onClick={() => nav(`/seasons/${key}`)}
            className="absolute active:opacity-85"
            style={{
              left, top, width: 162, height: 288,
              border: 'none', padding: 0, cursor: 'pointer',
              background: 'transparent', overflow: 'hidden',
            }}
          >
            <img src={s.gridImage} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
            <div className="absolute" style={{
              left: 0, top: 92, width: 162, textAlign: 'center',
              fontFamily: 'var(--font-zh)', fontSize: 32, lineHeight: '40px',
              color: '#4a3526', fontWeight: 500,
            }}>
              {s.label.replace('季', '  季')}
            </div>
          </button>
        )
      })}
    </Page>
  )
}

function SeasonDetail({ type }: { type: keyof typeof seasons }) {
  const nav = useNavigate()
  const data = seasons[type]
  return (
    <Page bg="#fff" minHeight={768}>
      <BackButton onClick={() => nav('/seasons')} />
      <MiniCapsule />
      <div className="absolute" style={{ left: 11, top: 40, width: 351, height: 686, background: data.bg }} />
      <div className="absolute" style={{
        left: 37, top: 6, fontFamily: 'var(--font-zh)', fontSize: 20,
        lineHeight: '28px', color: '#000', fontWeight: 500,
      }}>
        {data.label}
      </div>
      <div className="absolute" style={{
        left: 0, top: 49, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '32px',
        color: '#4a3526', fontWeight: 500,
      }}>
        {data.title}
      </div>
      {data.sections.map(([title, img, text], i) => {
        const top = [146, 348, 550][i]
        return (
          <div key={title}>
            <div className="absolute" style={{
              left: i === 0 ? 56 : i === 1 ? 41 : 61,
              top: top - 40,
              fontFamily: 'var(--font-zh)', fontSize: 16,
              lineHeight: '23px', color: '#6c4c35',
            }}>
              {title}
            </div>
            <div className="absolute" style={{
              left: i === 0 ? 33 : 29,
              top,
              width: 315,
              height: 145,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.22)',
            }} />
            <img src={img} alt="" className="absolute" style={{ left: 61, top: top + 23, width: 100, height: 100, objectFit: 'cover' }} draggable={false} />
            <div className="absolute" style={{
              left: 176, top: top + 26, width: 151,
              fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '18px',
              color: '#6c4c35',
            }}>
              {text}
            </div>
          </div>
        )
      })}
    </Page>
  )
}

const proverbText = '民国时期，潮汕澄海的老街里，有两家相邻的功夫茶铺，陈家和李家，祖辈都是做茶的老手艺人。陈家掌柜冲泡功夫茶的手法娴熟，李家掌柜擅长挑选优质单丛茶。两家为了客源互不相让，直到功夫茶大赛前，陈家祖传茶壶意外摔碎。李家掌柜虽争斗半生，仍主动送出自家老茶壶。比赛当天，陈家凭借精湛手艺顺利夺冠。赛后两家握手言和，并定下规矩：自家冲泡的功夫茶，必先敬邻里，再迎客人。这便是潮汕“敬邻茶”习俗的由来。'

function ProverbsList() {
  const nav = useNavigate()
  const stories = [
    ['潮汕“功夫茶”的和解', '故事一', `${AS}figma_img_c9a4b67e.jpg`, 276],
    ['西湖畔“换茶”的缘分', '故事二', `${AS}figma_img_6382dc7a.jpg`, 431],
    ['云南茶山“茶礼”救险', '故事三', `${AS}figma_img_30844220.jpg`, 586],
  ] as const
  return (
    <Page bg="#faf8f3" minHeight={768}>
      <img src={`${AS}figma_img_4430c850.jpg`} alt="" className="absolute" style={{ left: 0, top: 1, width: 375, height: 250, objectFit: 'cover' }} draggable={false} />
      <BackButton onClick={() => nav('/tea-culture')} />
      <MiniCapsule />
      <div className="absolute" style={{
        left: 0, top: 212, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '32px',
        color: '#4a3526', fontWeight: 500,
      }}>
        &lt;茶俗小知识&gt;
      </div>
      {stories.map(([title, tag, img, top], index) => (
        <div key={title} className="absolute" style={{
          left: 15, top, width: 343, height: 135,
          background: index === 0 ? 'rgba(136,160,136,0.60)' : index === 1 ? 'rgba(136,160,136,0.80)' : '#88a088',
          borderRadius: 6,
        }}>
          <img src={img} alt="" className="absolute" style={{ left: 28, top: index === 0 ? 14 : 18, width: 100, height: 100, objectFit: 'cover' }} draggable={false} />
          <div className="absolute" style={{
            left: 156, top: index === 0 ? 14 : 17,
            fontFamily: 'var(--font-zh)', fontSize: 16, color: '#fff', fontWeight: 500,
          }}>
            {title}
          </div>
          <span className="absolute" style={{
            left: 156, top: index === 0 ? 38 : 40, width: 56, height: 20,
            borderRadius: 3, background: '#f8fff3',
            fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '20px',
            color: 'rgba(108,76,53,0.70)', textAlign: 'center',
          }}>
            {tag}
          </span>
          <button
            onClick={() => nav('/proverbs/story')}
            className="absolute active:opacity-80"
            style={{
              right: 26, bottom: 21, width: 96, height: 36, borderRadius: 18,
              border: 'none', background: '#334836', cursor: 'pointer',
              color: '#fff', fontFamily: 'var(--font-zh)', fontSize: 15,
            }}
          >
            前往查看
          </button>
        </div>
      ))}
    </Page>
  )
}

function ProverbDetail() {
  const nav = useNavigate()
  return (
    <Page bg="#faf8f3" minHeight={984}>
      <img src={`${AS}figma_img_c9a4b67e.jpg`} alt="" className="absolute" style={{ left: 0, top: 0, width: 375, height: 297, objectFit: 'cover' }} draggable={false} />
      <BackButton color="#fff" onClick={() => nav('/proverbs')} />
      <MiniCapsule />
      <div className="absolute" style={{ left: 0, top: 249, width: 375, minHeight: 657, background: '#faf8f3' }} />
      <div className="absolute" style={{
        left: 22, top: 274, width: 331,
        fontFamily: 'var(--font-zh)', fontSize: 15, lineHeight: '27px',
        color: '#6c4c35', textIndent: '2em',
      }}>
        {proverbText}
      </div>
    </Page>
  )
}

type ColdBrewRecipe = {
  id: string
  title: string
  cardImg: string
  frames: string[]
  ingredients: { label: string; img: string }[]
  steps: { label: string; icon: string }[]
}

const coldBrewFrames = (index: number) => (
  [0, 1, 2, 3, 4].map(step => `${CB}recipe-${index}-step-${step}.webp`)
)

const greenTeaIcon = `${CB}ingredient-green-tea.webp`
const blackTeaIcon = `${CB}ingredient-black-tea.webp`
const coconutIcon = `${CB}ingredient-coconut.webp`
const jasmineJellyIcon = `${CB}ingredient-jasmine-jelly.webp`
const gardeniaJellyIcon = `${CB}ingredient-gardenia-jelly.webp`
const lemonIcon = `${CB}ingredient-lemon.webp`
const herbIcon = `${CB}ingredient-rosemary.webp`
const bobaIcon = `${CB}ingredient-boba.webp`
const roselleIcon = `${CB}ingredient-roselle.webp`
const rockSugarIcon = `${CB}ingredient-rock-sugar.webp`
const grapefruitJuiceIcon = `${CB}ingredient-grapefruit-juice.webp`
const grapefruitIcon = `${CB}ingredient-grapefruit.webp`
const osmanthusJellyIcon = `${CB}ingredient-osmanthus-jelly.webp`
const step = (label: string, icon: string) => ({ label, icon })

const recipes: ColdBrewRecipe[] = [
  {
    id: 'jasmine-coconut',
    title: '茉莉椰香奶绿',
    cardImg: `${CB}recipe-1.webp`,
    frames: coldBrewFrames(1),
    ingredients: [
      { label: '绿茶', img: greenTeaIcon },
      { label: '椰乳', img: coconutIcon },
      { label: '茉莉茶冻', img: jasmineJellyIcon },
      { label: '脆波波', img: bobaIcon },
    ],
    steps: [
      step('准备空杯', greenTeaIcon),
      step('冲泡绿茶', greenTeaIcon),
      step('调入椰乳', coconutIcon),
      step('加入茉莉茶冻', jasmineJellyIcon),
      step('点缀脆波波', bobaIcon),
    ],
  },
  {
    id: 'gardenia-lemon',
    title: '栀香柠檬绿',
    cardImg: `${CB}recipe-2.webp`,
    frames: coldBrewFrames(2),
    ingredients: [
      { label: '绿茶', img: greenTeaIcon },
      { label: '黄柠檬', img: lemonIcon },
      { label: '栀子茶冻', img: gardeniaJellyIcon },
      { label: '薄荷', img: herbIcon },
    ],
    steps: [
      step('准备空杯', greenTeaIcon),
      step('冲泡绿茶', greenTeaIcon),
      step('加入栀子茶冻', gardeniaJellyIcon),
      step('加入黄柠檬', lemonIcon),
      step('薄荷点缀', herbIcon),
    ],
  },
  {
    id: 'roselle-lemon',
    title: '洛神花柠檬红',
    cardImg: `${CB}recipe-3.webp`,
    frames: coldBrewFrames(3),
    ingredients: [
      { label: '红茶', img: blackTeaIcon },
      { label: '洛神花', img: roselleIcon },
      { label: '柠檬', img: lemonIcon },
      { label: '冰糖', img: rockSugarIcon },
    ],
    steps: [
      step('准备空杯', blackTeaIcon),
      step('冲泡红茶', blackTeaIcon),
      step('加入洛神花', roselleIcon),
      step('加入柠檬', lemonIcon),
      step('冰糖调味', rockSugarIcon),
    ],
  },
  {
    id: 'jasmine-grapefruit',
    title: '茉莉西柚冰萃绿',
    cardImg: `${CB}recipe-4.webp`,
    frames: coldBrewFrames(4),
    ingredients: [
      { label: '绿茶', img: greenTeaIcon },
      { label: '西柚汁', img: grapefruitJuiceIcon },
      { label: '西柚粒', img: grapefruitIcon },
      { label: '迷迭香', img: herbIcon },
    ],
    steps: [
      step('准备空杯', greenTeaIcon),
      step('冲泡绿茶', greenTeaIcon),
      step('调入西柚汁', grapefruitJuiceIcon),
      step('加入西柚粒', grapefruitIcon),
      step('迷迭香点缀', herbIcon),
    ],
  },
  {
    id: 'osmanthus-lemon',
    title: '桂花柠檬红',
    cardImg: `${CB}recipe-5.webp`,
    frames: coldBrewFrames(5),
    ingredients: [
      { label: '红茶', img: blackTeaIcon },
      { label: '桂花茶冻', img: osmanthusJellyIcon },
      { label: '柠檬', img: lemonIcon },
      { label: '冰糖', img: rockSugarIcon },
    ],
    steps: [
      step('准备空杯', blackTeaIcon),
      step('冲泡红茶', blackTeaIcon),
      step('加入桂花茶冻', osmanthusJellyIcon),
      step('加入柠檬', lemonIcon),
      step('冰糖调味', rockSugarIcon),
    ],
  },
]

function ColdBrewList() {
  const nav = useNavigate()
  return (
    <Page bg="#f7f6ed" minHeight={768}>
      <img src={`${AS}figma_img_633b0564.jpg`} alt="" className="absolute" style={{ left: 0, top: 0, width: 375, height: 734, objectFit: 'cover' }} draggable={false} />
      <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 207, background: '#faf8f3' }} />
      <img src={`${AS}figma_img_28e88769.jpg`} alt="" className="absolute" style={{ left: 122, top: 21, width: 130, height: 130, borderRadius: 10, objectFit: 'cover' }} draggable={false} />
      <BackButton onClick={() => nav('/tea-culture')} />
      <MiniCapsule />
      <div className="absolute" style={{
        left: 0, top: 165, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 24, lineHeight: '32px',
        color: '#000', fontWeight: 500,
      }}>
        &lt;冷泡茶攻略&gt;
      </div>
      {recipes.map((recipe, i) => {
        const top = 247 + i * 85
        const imageOnLeft = i % 2 === 0
        return (
          <button
            key={recipe.id}
            onClick={() => nav(`/cold-brew/${recipe.id}`)}
            className="absolute active:opacity-85"
            style={{
              left: 52, top, width: 271, height: 70,
              border: 'none', padding: 0, cursor: 'pointer',
              background: 'rgba(255,251,242,0.78)',
              borderRadius: 18, overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(108,76,53,0.12)',
            }}
          >
            <span style={{
              display: 'block',
              paddingTop: 21,
              paddingLeft: imageOnLeft ? 83 : 20,
              paddingRight: imageOnLeft ? 18 : 82,
              fontFamily: 'var(--font-zh)', fontSize: 20, lineHeight: '28px', color: '#4a3526',
              textAlign: 'left', whiteSpace: 'nowrap',
            }}>
              {recipe.title}
            </span>
            <img src={recipe.cardImg} alt="" className="absolute" style={{
              left: imageOnLeft ? 16 : 204, top: -11, width: 55, height: 92, objectFit: 'contain',
            }} draggable={false} />
          </button>
        )
      })}
    </Page>
  )
}

function ColdBrewDetail({ id }: { id?: string }) {
  const nav = useNavigate()
  const [stepIndex, setStepIndex] = useState(0)
  const recipe = recipes.find(item => item.id === id) || recipes[0]
  const lastStep = recipe.frames.length - 1
  const activeFrame = recipe.frames[Math.min(stepIndex, lastStep)]
  const activeStep = recipe.steps[Math.min(stepIndex, recipe.steps.length - 1)]
  const heroIngredient = stepIndex > 1 ? activeStep.icon : ''
  const goNext = () => setStepIndex(current => Math.min(current + 1, lastStep))
  const goBackStep = () => setStepIndex(current => Math.max(current - 1, 0))

  return (
    <Page bg="#fffbf2" minHeight={930}>
      <div className="absolute" style={{ left: 0, top: 0, width: 375, height: 44, background: '#bed2ba' }} />
      <BackButton onClick={() => nav('/cold-brew')} />
      <MiniCapsule />
      <div className="absolute" style={{
        left: 0, top: 8, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 20, lineHeight: '28px',
        color: '#4a3526', fontWeight: 500,
      }}>
        {recipe.title}
      </div>
      <button
        onClick={goNext}
        className="absolute active:opacity-90"
        style={{
          left: 16, top: 58, width: 343, height: 193, border: 'none',
          padding: 0, borderRadius: 16, overflow: 'hidden', cursor: 'pointer',
          background: '#f7f4e9', boxShadow: '0 4px 12px rgba(108,76,53,0.12)',
        }}
        aria-label="点击图片查看下一步教程"
      >
        <img src={activeFrame} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} draggable={false} />
        {heroIngredient && (
          <span
            aria-hidden="true"
            style={{
              position: 'absolute', left: 110, top: 3, width: 54, height: 54,
              pointerEvents: 'none', transform: 'rotate(-18deg)',
              filter: 'drop-shadow(0 5px 5px rgba(74,53,38,0.18))',
            }}
          >
            <img src={heroIngredient} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} draggable={false} />
          </span>
        )}
        <span style={{
          position: 'absolute', right: 10, bottom: 10,
          minWidth: 58, height: 24, padding: '0 10px', borderRadius: 12,
          background: 'rgba(74,53,38,0.72)', color: '#fff',
          fontFamily: 'var(--font-zh)', fontSize: 12, lineHeight: '24px',
        }}>
          {stepIndex + 1}/{recipe.frames.length}
        </span>
      </button>
      <div className="absolute" style={{
        left: 0, top: 267, width: 375, textAlign: 'center',
        fontFamily: 'var(--font-zh)', fontSize: 17, lineHeight: '24px',
        color: '#4a3526',
      }}>
        点击图片查看教程
      </div>
      <div className="absolute flex justify-center gap-2" style={{ left: 0, top: 300, width: 375 }}>
        {recipe.frames.map((_, i) => (
          <span
            key={i}
            className="block rounded-full"
            style={{
              width: i === stepIndex ? 18 : 7, height: 7,
              background: i === stepIndex ? '#88a088' : 'rgba(136,160,136,0.35)',
              transition: 'width 160ms ease',
            }}
          />
        ))}
      </div>
      <div className="absolute" style={{
        left: 18, top: 335, fontFamily: 'var(--font-zh)',
        fontSize: 24, color: '#4a3526', fontWeight: 500,
      }}>
        所需配料
      </div>
      {recipe.ingredients.map((item, i) => {
        const left = 18 + i * 86
        return (
          <div key={item.label} className="absolute" style={{
            left, top: 374, width: 74, height: 94,
            borderRadius: 14, background: 'rgba(255,255,255,0.64)',
            boxShadow: '0 2px 8px rgba(108,76,53,0.08)',
          }}>
            <img src={item.img} alt="" className="absolute" style={{ left: 13, top: 8, width: 48, height: 48, objectFit: 'contain' }} draggable={false} />
            <div className="absolute" style={{
              left: 2, bottom: 9, width: 70, textAlign: 'center',
              fontFamily: 'var(--font-zh)', fontSize: 13, lineHeight: '17px', color: '#4a3526',
            }}>
              {i + 1}.{item.label}
            </div>
          </div>
        )
      })}
      <div className="absolute" style={{
        left: 18, top: 502, fontFamily: 'var(--font-zh)',
        fontSize: 24, color: '#4a3526', fontWeight: 500,
      }}>
        操作步骤
      </div>
      {recipe.steps.map((item, i) => {
        const selected = i === stepIndex
        return (
          <button
            key={item.label}
            onClick={() => setStepIndex(i)}
            className="absolute active:opacity-80"
            style={{
              left: 28, top: 546 + i * 50, width: 320, height: 39,
              border: 'none', borderRadius: 19, padding: 0, cursor: 'pointer',
              background: selected ? 'rgba(136,160,136,0.24)' : 'rgba(255,255,255,0.46)',
            }}
          >
            <span style={{
              position: 'absolute', left: 12, top: 6, width: 27, height: 27,
              borderRadius: '50%', background: selected ? '#88a088' : 'rgba(136,160,136,0.32)',
              color: selected ? '#fff' : '#4a3526',
              fontFamily: 'var(--font-en)', fontSize: 14, lineHeight: '27px', textAlign: 'center',
            }}>
              {i + 1}
            </span>
            <div className="absolute" style={{
              left: 54, top: 7, width: 240, textAlign: 'left',
              fontFamily: 'var(--font-zh)', fontSize: 16, lineHeight: '24px',
              color: selected ? '#4a3526' : '#6c4c35',
            }}>
              {item.label}
            </div>
          </button>
        )
      })}
      <button
        onClick={goBackStep}
        disabled={stepIndex === 0}
        className="absolute active:opacity-80"
        style={{
          left: 36, top: 820, width: 92, height: 42, borderRadius: 21,
          border: '1px solid rgba(108,76,53,0.18)',
          background: stepIndex === 0 ? 'rgba(255,255,255,0.38)' : 'rgba(255,255,255,0.70)',
          color: stepIndex === 0 ? 'rgba(108,76,53,0.34)' : '#6c4c35',
          fontFamily: 'var(--font-zh)', fontSize: 16,
          cursor: stepIndex === 0 ? 'default' : 'pointer',
        }}
      >
        上一步
      </button>
      <button
        onClick={stepIndex === lastStep ? () => nav('/cold-brew') : goNext}
        className="absolute active:opacity-80"
        style={{
          left: 144, top: 820, width: 195, height: 42, borderRadius: 21,
          border: 'none', background: '#69a0a1', cursor: 'pointer',
          fontFamily: 'var(--font-zh)', fontSize: 20, color: '#fff',
        }}
      >
        {stepIndex === lastStep ? '完成' : '下一步'}
      </button>
    </Page>
  )
}

export default function TeaCulture() {
  const loc = useLocation()
  const params = useParams<{ season?: string; recipe?: string; pairing?: string }>()

  if (loc.pathname === '/tea-history') return <TeaHistory />
  if (loc.pathname === '/tea-food') return <TeaFood />
  if (loc.pathname.startsWith('/tea-food/')) return <TeaFoodPairing id={params.pairing} />
  if (loc.pathname === '/seasons') return <SeasonsHub />
  if (loc.pathname.startsWith('/seasons/')) {
    const season = params.season as keyof typeof seasons
    return <SeasonDetail type={seasons[season] ? season : 'spring'} />
  }
  if (loc.pathname === '/proverbs') return <ProverbsList />
  if (loc.pathname === '/proverbs/story') return <ProverbDetail />
  if (loc.pathname === '/cold-brew') return <ColdBrewList />
  if (loc.pathname.startsWith('/cold-brew/')) return <ColdBrewDetail id={params.recipe} />
  return <TeaHub />
}
