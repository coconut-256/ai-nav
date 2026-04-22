# 可可耐特 AI 知识库（codefather / ai-nav）技术栈梳理

## 一、项目性质

一个纯静态文档站点，采用"文档即代码（Docs as Code）"模式：Markdown 源文件 → 静态 HTML → CDN 分发。

- 仓库地址：`coconut-256/ai-nav`
- 线上域名：<https://ai.nav.cn>

## 二、核心框架（2026 最新适配）

本项目已从 VuePress 1（Vue 2 生态，官方已废弃）迁移到 **VitePress**（Vue 团队官方维护、Vue 3 + Vite 的静态站点生成器）。

| 技术 | 版本 | 用途 |
| --- | --- | --- |
| VitePress | ^1.6.4 | 核心静态站点生成器，Vue 团队官方维护，取代 VuePress 1 |
| Vue.js | ^3.5 | 驱动主题组件（`.vue` SFC + `<script setup>` + Composition API） |
| Vite | ^5（VitePress 内置） | 构建与开发服务器，HMR ≈ 100ms |
| TypeScript | ^5.4 | 编写配置文件（config / navbar / sidebar）与主题 |
| Node.js | 20 LTS | 构建运行时（VitePress / Vite 构建环境建议使用 Node 20） |
| CSS 变量 + 原生 CSS | — | 主题样式（VitePress 推荐，替代 VuePress 的 Stylus） |
| Markdown | VitePress 内置 markdown-it | 内容主体，开启行号、frontmatter、代码组等 |

> 选型说明：Vue 团队已声明 VuePress 1 废弃、VuePress 2 由社区维护；Vue 官方文档本身已基于 VitePress。对于以 Markdown 为主的文档站，VitePress 提供更快的 DX、更精简的主题 API、以及与 Vite 生态完全一致的插件模型。

## 三、自定义主题（继承 VitePress 默认主题）

在 `.vitepress/theme/index.ts` 中通过 `extends: DefaultTheme` 继承并做局部覆盖：

- **Layout**：`Layout.vue`，通过 `DefaultTheme.Layout` 的插槽注入 `layout-top` / `layout-bottom` / `aside-outline-after` 等自定义区块
- **Components（全部用 Vue 3 `<script setup>` 重写）**：
  - `ExtraSidebar.vue`（右侧标签 / 友链面板，注入 `aside-outline-after` 插槽）
  - `Footer.vue`（版权、ICP、友链，注入 `layout-bottom` 插槽）
  - 顶部导航、下拉菜单、代码复制、返回顶部、搜索框等均直接复用 VitePress 默认主题（无需再自行实现）
- **Styles**：`styles/custom.css`（通过 VitePress CSS 变量覆盖主题色、字体、布局宽度）

## 四、VitePress 原生能力 + 外部插件

VitePress 与 VuePress 最大的不同：**没有独立插件系统**，所有扩展通过「Vite 插件 / Vue 组件 / 构建钩子（`transformHtml`、`buildEnd`）/ markdown-it 插件」完成。

### 由 VitePress 内置直接替换掉的旧插件

| 旧插件（VuePress 1） | VitePress 内置替代方案 |
| --- | --- |
| `@vuepress/plugin-back-to-top` | 默认主题自带返回顶部 |
| `vuepress-plugin-code-copy` | 默认主题自带代码块复制按钮 |
| `vuepress-plugin-sitemap` | `config.sitemap: { hostname }`（VitePress ≥ 1.2 内置） |
| `vuepress-plugin-seo` | `transformHead` 钩子 + frontmatter（内置） |
| `@vuepress/plugin-google-analytics` | `head` 配置直接注入 GTM 脚本 |

### 仍需要的外部包

| 包 | 作用 |
| --- | --- |
| `medium-zoom` | 图片点击放大（在 `theme/index.ts` 的 `enhanceApp` 里挂载） |
| `vitepress-plugin-rss` | 生成 RSS / Atom feed，替代 `vuepress-plugin-feed` |
| `markdown-it-image-lazy-loading` | 给 `<img>` 自动加 `loading="lazy"`，替代 `vuepress-plugin-img-lazy` |

### 通过 `head` 脚本注入的第三方能力

- **百度统计**（`hm.baidu.com`）
- **百度自动推送**（原 `vuepress-plugin-baidu-autopush`，改成一段内联 JS）
- **Google Tag Manager**（GTM-WVS9HM6W）
- **百度 / Bing 站长验证**：`baidu_verify_*.html` / `BingSiteAuth.xml` 放到根目录 `public/`

### 已移除 / 降级的能力

| 旧能力 | 处理方式 |
| --- | --- |
| `vuepress-plugin-tags`（文章标签） | 暂不启用；后续如需可用 frontmatter + 自定义动态路由（`useData()`）实现 |
| Algolia DocSearch | 占位保留在 `themeConfig.search`，待申请到 `appId/apiKey/indexName` 再启用；默认使用 VitePress 内置 local search（`search: { provider: 'local' }`） |

## 五、自定义构建脚本（原生 Node.js）

`.vitepress/scripts/` 继续使用 CommonJS：

| 脚本 | 作用 |
| --- | --- |
| `generateSidebar.js` | 扫描目录自动生成 VitePress 侧边栏配置（输出 `text/link/items` 结构） |
| `genReadme.js` | 自动生成 README 索引 |
| `getMdNumber.js` | 统计 Markdown 文件数量 |
| `formatMdContent.js` | 格式化 Markdown 内容 |
| `send-email.js` | 可选的部署通知脚本（当前默认流程未启用） |

## 六、CI/CD

### 1. Cloudflare Pages Git 集成 — 构建与部署

当前采用 Cloudflare Pages 的 Git 集成，由 Cloudflare 在检测到仓库更新后自动拉取、安装依赖并构建：

```
Git push
  → Cloudflare Pages 拉取仓库
  → npm install / npm ci
  → npm run docs:build
  → 发布 .vitepress/dist
```

推荐的 Cloudflare Pages 构建配置：

- Framework preset: `VitePress`
- Build command: `npm run docs:build`
- Build output directory: `.vitepress/dist`
- Node.js version: `20`

### 2. `sync-vibe-coding-course.yml` — 增量同步

（保持不变）

- 用 `git diff --diff-filter=A/M/D` 抽出新增 / 修改 / 删除文件列表
- 用 `jq` 构造 JSON（含 `repository` / `addedFileList` / `modifiedFileList` / `deletedFileList`）
- 通过 `curl` POST 到后端 `SYNC_AI_GUIDE_URL`，带 Bearer token 鉴权 → 同步到 AI 导航后端

## 七、部署与托管

| 组件 | 说明 |
| --- | --- |
| Cloudflare Pages | 静态资源托管目标（全球 CDN + 自动 HTTPS + 预览环境） |
| Git 集成 | 由 Cloudflare 直接连接 GitHub 仓库并自动构建发布 |
| Cloudflare 环境变量 | 如需扩展脚本或邮件通知，可在 Pages 项目中配置 |
| 自定义域名 | 在 Cloudflare Pages 控制台绑定并托管 DNS |
| nodemailer | 仓库内保留可选通知脚本，默认部署链路不调用 |

## 八、SEO / 统计 / 站长工具

- Google Analytics（GTM-WVS9HM6W）— 通过 `head` 注入
- 百度统计（`hm.baidu.com`）— 通过 `head` 注入
- 百度自动推送 — 通过 `head` 注入内联脚本
- 百度站长验证（`baidu_verify_codeva-hlChwhGcel.html`）
- Bing 站长验证（`BingSiteAuth.xml`）
- sitemap（VitePress 内置） + RSS feed（`vitepress-plugin-rss`） + SEO meta（`transformHead`）三件套

## 九、内容组织

Markdown 内容按业务分目录：

- `AI/`
- `产品服务/`
- `OpenClaw 保姆级教程/`
- `Vibe Coding 零基础教程/`
- `translations/`

图片放在 `image/` 与根目录 `public/`。

## 十、NPM 脚本一览（`package.json`）

| 命令 | 作用 |
| --- | --- |
| `npm run docs:dev` | 本地开发（`vitepress dev .`） |
| `npm run docs:build` | 生产构建到 `.vitepress/dist/`（`vitepress build .`） |
| `npm run docs:preview` | 本地预览构建产物（`vitepress preview .`） |
| `npm run generate:sidebar` | 自动生成侧边栏 |
| `npm run generate:readme` | 自动生成 README |
| `npm run getMdNumber` | 统计 MD 数量 |

## 总览一图

```
Markdown 源文件
      │
      ▼
自定义 Node 脚本（侧边栏 / README 自动生成）
      │
      ▼
VitePress 1.6 + TS 配置 + Vue 3 SFC 自定义主题 + Vite 生态插件
      │
      ▼
Cloudflare Pages（静态托管 + 全球 CDN） ──► ai.nav.cn
      │
      └─► GitHub Actions 增量同步（curl + jq）
```

技术选型整体偏轻：无后端、无数据库。相对旧版的改进：Vue 2 → Vue 3、Webpack → Vite、独立插件系统 → Vite 生态、Stylus → CSS 变量，构建更快、长期可维护性更好。
