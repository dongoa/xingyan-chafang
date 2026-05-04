// 商品数据（mall / 商城 / 商品详情共享）
// LESSONS.md 教训：商品/详情数据驱动，不要硬编码

export type Product = {
  id: string
  name: string
  category: 'tea' | 'fruit' | 'pastry' | 'package'
  hero: string             // 商品主图
  price: number
  priceLabel: string       // "卷后价" / "原价" 等
  desc?: string
  detailHeadline?: string  // 详情页副标
  detailDesc?: string      // 详情正文（docx 章节十三）
}

export const PRODUCTS: Product[] = [
  // 茶叶
  { id: 'tea_dahongpao', name: '大红袍武夷岩茶正宗乌龙茶',
    category: 'tea', hero: '/assets/figma/figma_img_a77c0a47.webp',
    price: 193, priceLabel: '卷后价' },
  { id: 'tea_puer', name: '云南普洱茶熟茶饼',
    category: 'tea', hero: '/assets/figma/figma_img_2959b5c6.webp',
    price: 158, priceLabel: '卷后价',
    detailHeadline: '温润养脾养胃 陈香独特越品越浓',
    detailDesc: '普洱茶主打温润醇厚的熟普，陈香浓郁独特，越品越浓，茶汤红浓透亮，口感绵柔无苦涩，温润养脾养胃，驱寒祛湿。搭配清甜无花果干，酸甜口感能中和普洱茶的醇厚，且无花果含丰富膳食纤维，搭配普洱茶能助消化。'
  },
  { id: 'tea_baihao', name: '白毫银针特级白茶',
    category: 'tea', hero: '/assets/figma/figma_img_a77c0a47.webp',
    price: 268, priceLabel: '卷后价' },
  { id: 'tea_longjing', name: '明前龙井茶 特级西湖龙井',
    category: 'tea', hero: '/assets/figma/figma_img_2959b5c6.webp',
    price: 320, priceLabel: '卷后价' },

  // 干果
  { id: 'fruit_songzi', name: '松子 大颗粒原味松子仁',
    category: 'fruit', hero: '/assets/figma/figma_img_4560dd77.webp',
    price: 49.9, priceLabel: '卷后价' },
  { id: 'fruit_walnut', name: '纸皮核桃 新疆原味干果',
    category: 'fruit', hero: '/assets/figma/figma_img_57826b0c.webp',
    price: 39.9, priceLabel: '卷后价' },
  { id: 'fruit_date', name: '红枣 和田玉枣礼盒装',
    category: 'fruit', hero: '/assets/figma/figma_img_051f3313.webp',
    price: 89.9, priceLabel: '卷后价' },
  { id: 'fruit_mix', name: '什锦坚果礼盒 8 种装',
    category: 'fruit', hero: '/assets/figma/figma_img_4560dd77.webp',
    price: 128, priceLabel: '卷后价' },

  // 糕点
  { id: 'pastry_lvdou', name: '绿豆糕 江南传统茶点',
    category: 'pastry', hero: '/assets/figma/figma_img_57826b0c.webp',
    price: 22.9, priceLabel: '卷后价' },
  { id: 'pastry_taohua', name: '桃花酥 节令茶点礼盒',
    category: 'pastry', hero: '/assets/figma/figma_img_4560dd77.webp',
    price: 29.9, priceLabel: '卷后价' },
  { id: 'pastry_gui',   name: '桂花糕 江南秋节糕点',
    category: 'pastry', hero: '/assets/figma/figma_img_051f3313.webp',
    price: 36.9, priceLabel: '卷后价' },
  { id: 'pastry_yuebing', name: '苏式月饼 中秋限定礼盒',
    category: 'pastry', hero: '/assets/figma/figma_img_57826b0c.webp',
    price: 158, priceLabel: '卷后价' },

  // 包装
  { id: 'package_giftbag', name: '中国风礼品袋竖版茶叶袋礼',
    category: 'package', hero: '/assets/figma/figma_img_2959b5c6.webp',
    price: 10.5, priceLabel: '卷后价' },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id)
}

export function getProductsByCategory(cat: Product['category']): Product[] {
  return PRODUCTS.filter(p => p.category === cat)
}
