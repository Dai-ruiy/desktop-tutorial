# 投资观察

静态网站由 GitHub Pages 托管，行业报告和加密持仓报告的固定路径保持不变。持仓数据通过浏览器本地解密；不要将密钥或解密后的持仓内容提交到仓库。

## UI 开发

使用 Node.js 22.12 或更新版本，运行 `npm ci`、`npm run check`、`npm run build`，将生成的 `assets-ui` 和源码一起提交。导航及股票排序使用官方 shadcn/ui 的 Base UI 组件；现有报告负责数据和分析逻辑。UI 不会连接第三方服务。

报告生成器重新生成 `h/index.html` 或 `mobile-holdings.html` 后，在仓库根目录运行 `node scripts/attach-ui.mjs`，将本站 UI 资源及所需的本站 CSP 权限重新附加到报告。该脚本不会修改密文或内联解密代码。发布前验证首次解锁、固定网址、排序和个股切换。
