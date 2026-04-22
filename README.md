---
home: true
heroText: 可可耐特 AI 知识库
tagline: AI · 编程 · 产品 · 教程 —— 开源共建的中文知识库
actionText: 开始阅读 →
actionLink: /AI/
features:
  - title: 内容分明
    details: AI、产品、Vibe Coding、OpenClaw 四大主题，结构清晰易于导航。
  - title: 开源共建
    details: 仓库托管在 GitHub，任何人都可以通过 PR 修正与补充内容。
  - title: 极速静态
    details: VitePress + Vue 3 + Cloudflare Pages，全球 CDN 秒开。
footer: © coconut-256 · MIT Licensed · https://ai.nav.cn
---

## 快速开始（开发者）

```bash
# 需要 Node 20
npm install

npm run docs:dev      # 本地开发
npm run docs:build    # 生产构建
npm run docs:preview  # 预览 .vitepress/dist/
```

## NPM 脚本一览

| 命令 | 作用 |
| --- | --- |
| `npm run docs:dev` | 本地开发服务器 |
| `npm run docs:build` | 构建到 `.vitepress/dist/` |
| `npm run docs:preview` | 预览构建产物 |
| `npm run generate:sidebar` | 扫描目录生成侧边栏 |
| `npm run generate:readme` | 自动生成各目录 README 索引 |
| `npm run getMdNumber` | 统计 Markdown 文件数量 |
| `npm run format:md` | 批量格式化 Markdown |

## 仓库结构

```
.
├── AI/                         # AI 相关文章
├── 产品服务/                    # 产品与服务介绍
├── OpenClaw 保姆级教程/          # OpenClaw 教程
├── Vibe Coding 零基础教程/       # Vibe Coding 零基础教程
├── translations/               # 译文
├── image/                      # 图片资源
├── .vitepress/
│   ├── config.ts               # 主配置
│   ├── navbar.ts / sidebar.ts  # 顶栏 / 侧栏
│   ├── theme/                  # 自定义主题
│   ├── scripts/                # Node 构建脚本
│   └── public/                 # favicon、robots、站长验证
└── .github/workflows/          # 后端增量同步
```

## 部署

- **托管**：Cloudflare Pages（项目名 `ai-nav`）
- **方式**：Cloudflare Pages Git 集成
- **Cloudflare 构建配置**：
  - Build command: `npm run docs:build`
  - Build output directory: `.vitepress/dist`
  - Node.js version: `20`
- **必需 Secrets**：
  - GitHub Actions 仅保留后端同步：`SYNC_AI_GUIDE_URL` / `SYNC_AI_GUIDE_TOKEN`

推送到 `main` 分支后，Cloudflare Pages 会自动构建并发布站点。

---

MIT © coconut-256
