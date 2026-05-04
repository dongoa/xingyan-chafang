# 星衍茶坊 H5 + 微信小程序交付包

## 内容

- `app/`: H5 源码、运行配置和已压缩的必要静态资源。
- `miniapp/`: 微信小程序 WebView 外壳。

已排除 `node_modules`、`dist`、测试报告、Figma 缓存、开发脚本和本机私有配置。

## 本地运行

```bash
cd app
npm install
npm run dev
```

H5 默认启动在 `http://127.0.0.1:5176/agree`。

然后用微信开发者工具导入 `miniapp/` 目录，勾选「不校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书」，点击编译即可检查小程序 WebView 效果。

## 构建 H5

```bash
cd app
npm run build
```

构建结果会生成在 `app/dist/`。
