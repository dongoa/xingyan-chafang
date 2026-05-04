// H5 自画的假 iPhone 状态栏。在嵌入微信小程序 web-view 后与小程序 shell
// 自带的状态栏+胶囊重复，且 PC 浏览器下 PhoneFrame 已提供手机外壳质感，
// 因此直接停用。保留文件以兼容旧 import。
export default function StatusBar(_props?: { time?: string }) {
  return null
}
