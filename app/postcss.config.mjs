// Tailwind v4 wraps all utilities + theme inside @layer blocks. iOS 微信
// web-view（iOS < 15.4 的 WebKit）不支持 CSS @layer，会静默丢弃 @layer{...}
// 里的所有规则，导致小程序里页面完全没有样式。
//
// @csstools/postcss-cascade-layers 是官方 PostCSS polyfill，在构建期把
// @layer 展开为普通 CSS 规则（通过调整 selector specificity 保留级联顺序），
// 现代浏览器里视觉一致，同时兼容老 WebView。
//
// 方案出处：/Users/dongao/Desktop/nofinish/ball/apps/h5-web/postcss.config.mjs
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    '@csstools/postcss-cascade-layers': {},
    autoprefixer: {},
  },
}
