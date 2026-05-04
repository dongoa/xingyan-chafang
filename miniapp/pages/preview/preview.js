Page({
  data: {
    url: ''
  },

  onLoad() {
    // 加时间戳防 web-view 缓存。本机 H5 的地址，演示前确保 `cd h5-graduation/app && npm run dev` 已启动。
    // 端口 5176 固定，避开其他本地项目。
    const url = 'http://127.0.0.1:5176/agree?t=' + Date.now()
    this.setData({ url })
    console.log('[preview] 页面 onLoad，加载 H5：', url)
  },

  onWebviewLoad(e) {
    console.log('[preview] web-view 加载完成', e && e.detail)
  },

  onError(e) {
    console.error('[preview] web-view 加载失败：', e.detail)
    wx.showModal({
      title: 'H5 加载失败',
      content:
        '请确认：\n1) 已执行 cd app && npm run dev\n2) 开发者工具"详情 > 本地设置"已勾选"不校验合法域名"\n3) 个人主体小程序无法使用 web-view，需企业主体',
      showCancel: false
    })
  },

  onMessage(e) {
    console.log('[preview] H5 向小程序发送消息：', e.detail)
  }
})
