import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// `embed=wx` 是浏览器/Playwright 用来模拟小程序原生顶部遮挡的测试模式。
// 真实微信小程序 web-view 本身已经位于原生导航栏下方，只隐藏 H5 自画胶囊，
// 不能再额外整体下移 88px，否则会在页面顶部出现大块空白。
if (typeof window !== 'undefined') {
  const ua = navigator.userAgent || ''
  const params = new URLSearchParams(window.location.search)
  const testWxEmbed = params.get('embed') === 'wx'
  const inWxWebView =
    testWxEmbed ||
    /MicroMessenger/i.test(ua) ||
    /miniProgram|miniprogram/i.test(ua) ||
    // @ts-ignore
    (typeof window.__wxjs_environment !== 'undefined' && window.__wxjs_environment === 'miniprogram')

  if (testWxEmbed) {
    document.documentElement.setAttribute('data-embed', 'wx')
  }
  if (inWxWebView) {
    document.documentElement.setAttribute('data-wx-webview', 'true')
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/chafang">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
