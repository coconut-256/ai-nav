# 可可耐特 AI 知识库（codefather / ai-nav）技术栈梳理

## 一、项目性质

一个纯静态文档站点，采用"文档即代码（Docs as Code）"模式：Markdown 源文件 → 静态 HTML → CDN 分发。

- 仓库地址：`coconut-256/ai-nav`
- 线上域名：<https://ai.nav.cn>

## 二、核心框架

| 技术 | 版本 | 用途 |
| --- | --- | --- |
| VuePress | ^1.9.10 | 核心静态站点生成器，基于 Vue 2 生态 |
| Vue.js 2 | VuePress 1 自带 | 驱动主题组件（`.vue` 单文件组件） |
| TypeScript | 通过 ts-node | 编写配置文件（config / navbar / sidebar） |
| Node.js | 16 | 构建运行时（见 `deploy.yml:18`） |
| Stylus | `.styl` | 主题样式编写（`wrapper.styl`） |
| Markdown | VuePress 内置 markdown-it | 内容主体，开启了行号与 h2-h6 抽取 |

## 三、自定义主题（继承默认主题）

在 `.vuepress/theme/index.js` 中通过 `extend: '@vuepress/theme-default'` 继承默认主题并做覆盖：

- **Layouts**：`Layout.vue`
- **Components（10 个 Vue 组件）**：
  - `Navbar.vue` / `NavLinks.vue` / `DropdownLink.vue`
  - `Page.vue` / `PageSidebarToc.vue` / `PageSidebarTocLink.vue`
  - `ExtraSidebar.vue`（右侧边栏，额外扩展）
  - `Footer.vue`
  - `AlgoliaSearchBox.vue`（预留 Algolia 搜索）
  - `DropdownTransition.vue`
- **Styles**：`wrapper.styl`（响应式布局）
- **Util**：`util/index.js`

## 四、VuePress 插件（共 11 个）

### 官方插件（devDependencies）

| 插件 | 作用 |
| --- | --- |
| `@vuepress/plugin-back-to-top` | 返回顶部按钮 |
| `@vuepress/plugin-medium-zoom` | 图片点击放大 |
| `@vuepress/plugin-google-analytics` | GA 统计（GTM-WVS9HM6W） |

### 社区插件

| 插件 | 作用 |
| --- | --- |
| `vuepress-plugin-seo` | 自动生成 SEO meta/og 标签 |
| `vuepress-plugin-sitemap` | 生成 sitemap.xml |
| `vuepress-plugin-feed` | 生成 RSS / Atom / JSON feed |
| `vuepress-plugin-tags` | 文章标签系统 |
| `vuepress-plugin-baidu-autopush` | 百度搜索自动推送收录 |
| `vuepress-plugin-code-copy` | 代码块一键复制（提示"代码已复制"） |
| `vuepress-plugin-img-lazy` | 图片懒加载 |

## 五、自定义构建脚本（原生 Node.js）

`.vuepress/scripts/` 全部用 CommonJS 编写：

| 脚本 | 作用 |
| --- | --- |
| `generateSidebar.js` | 扫描目录，自动生成侧边栏配置（递归处理目录） |
| `genReadme.js` | 自动生成 README 索引 |
| `getMdNumber.js` | 统计 Markdown 文件数量 |
| `formatMdContent.js` | 格式化 Markdown 内容 |
| `send-email.js` | 部署完成邮件通知（用 nodemailer） |

## 六、CI/CD（GitHub Actions）

### 1. `deploy.yml` — 构建与部署

流水线：

```
actions/checkout@v3
  → setup-node@v3 (Node 16)
  → npm install
  → actions/cache@v3（缓存 ~/.npm）
  → npm run docs:build
  → cloudflare/wrangler-action@v3（wrangler pages deploy .vuepress/dist）
  → nodemailer 发邮件
```

### 2. `sync-vibe-coding-course.yml` — 增量同步

- 用 `git diff --diff-filter=A/M/D` 抽出新增 / 修改 / 删除文件列表
- 用 `jq` 构造 JSON（含 `repository` / `addedFileList` / `modifiedFileList` / `deletedFileList`）
- 通过 `curl` POST 到后端 `SYNC_AI_GUIDE_URL`，带 Bearer token 鉴权 → 同步到 AI 导航后端

## 七、部署与托管

| 组件 | 说明 |
| --- | --- |
| Cloudflare Pages | 静态资源托管目标（全球 CDN + 自动 HTTPS + 预览环境） |
| wrangler（官方 CLI） | 通过 `wrangler pages deploy .vuepress/dist --project-name=<project>` 推送构建产物 |
| GitHub Secrets | `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` / `EMAIL_*` |
| 自定义域名 | 在 Cloudflare Pages 控制台绑定并托管 DNS |
| nodemailer | 部署成功邮件通知 |

## 八、SEO / 统计 / 站长工具

- Google Analytics（GTM-WVS9HM6W）
- 百度统计（`config.ts:44-52` 内嵌 `hm.baidu.com` 脚本）
- 百度自动推送（插件）
- 百度站长验证（`baidu_verify_codeva-hlChwhGcel.html`）
- Bing 站长验证（`BingSiteAuth.xml`）
- sitemap + RSS feed + SEO meta 三件套

## 九、内容组织

Markdown 内容按业务分目录：

- `AI/`
- `产品服务/`
- `OpenClaw 保姆级教程/`
- `Vibe Coding 零基础教程/`
- `translations/`

图片放在 `image/` 与 `.vuepress/public/`。

## 十、NPM 脚本一览（`package.json:4-12`）

| 命令 | 作用 |
| --- | --- |
| `npm run docs:dev` | 本地开发 |
| `npm run docs:build` | 生产构建到 `.vuepress/dist/` |
| `npm run generate:sidebar` | 自动生成侧边栏 |
| `npm run generate:readme` | 自动生成 README |
| `npm run getMdNumber` | 统计 MD 数量 |
| `npm run serve` | 本地预览 `dist/`（用 `serve`） |

## 总览一图

```
Markdown 源文件
      │
      ▼
自定义 Node 脚本（侧边栏 / README 自动生成）
      │
      ▼
VuePress 1.9 + TS 配置 + 自定义 Vue 主题 + 11 个插件
      │
      ▼
GitHub Actions（Node 16 + wrangler-action）
      │
      ▼
Cloudflare Pages（静态托管 + 全球 CDN） ──► ai.nav.cn
      │
      └─► nodemailer 邮件通知 + 后端增量同步（curl + jq）
```

技术选型整体偏轻：无后端、无数据库、无框架升级负担，完全依赖静态站 + Cloudflare Pages + Actions 实现低成本内容站运营。
