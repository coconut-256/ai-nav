import { defineConfig } from 'vitepress'
import mdImgLazy from 'markdown-it-image-lazy-loading'
import { RssPlugin } from 'vitepress-plugin-rss'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

const SITE_URL = 'https://ai.nav.cn'
const SITE_TITLE = '可可耐特 AI 知识库'
const SITE_DESC = '汇聚 AI、编程、产品、教程的可可耐特开源知识库'

export default defineConfig({
  title: SITE_TITLE,
  description: SITE_DESC,
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,
  outDir: '.vitepress/dist',
  srcExclude: ['CLAUDE.md', 'README.md', '**/node_modules/**'],

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'keywords', content: 'AI,可可耐特,knowledge,navigation,Vibe Coding,OpenClaw' }],
    ['meta', { name: 'author', content: 'coconut-256' }],
    ['meta', { property: 'og:site_name', content: SITE_TITLE }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: SITE_URL }],

    // Google Tag Manager
    [
      'script',
      {},
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WVS9HM6W');`
    ],

    // 百度统计
    [
      'script',
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?PLACEHOLDER";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    ],

    // 百度自动推送（取代 vuepress-plugin-baidu-autopush）
    [
      'script',
      {},
      `(function(){
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        bp.src = curProtocol === 'https'
          ? 'https://zz.bdstatic.com/linksubmit/push.js'
          : 'http://push.zhanzhang.baidu.com/push.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(bp, s);
      })();`
    ]
  ],

  // sitemap（VitePress 内置，替代 vuepress-plugin-sitemap）
  sitemap: {
    hostname: SITE_URL
  },

  markdown: {
    lineNumbers: true,
    image: { lazyLoading: true },
    config: (md) => {
      md.use(mdImgLazy)
    }
  },

  // SEO meta 注入（取代 vuepress-plugin-seo）
  transformHead: ({ pageData, siteConfig }) => {
    const fm = pageData.frontmatter || {}
    const title = fm.title || pageData.title || siteConfig.site.title
    const desc = fm.description || pageData.description || siteConfig.site.description
    const url = SITE_URL + '/' + pageData.relativePath.replace(/\.md$/, '.html')
    const frontmatterImage = typeof fm.image === 'string'
      ? fm.image
      : typeof fm.image === 'object' && fm.image && 'src' in fm.image && typeof fm.image.src === 'string'
        ? fm.image.src
        : undefined
    const image = frontmatterImage
      ? /^https?:\/\//.test(frontmatterImage)
        ? frontmatterImage
        : SITE_URL + frontmatterImage
      : undefined

    const tags: [string, Record<string, string>][] = [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: desc }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: desc }]
    ]
    if (image) {
      tags.push(['meta', { property: 'og:image', content: image }])
      tags.push(['meta', { name: 'twitter:image', content: image }])
    }
    return tags
  },

  // RSS（取代 vuepress-plugin-feed）
  vite: {
    plugins: [
      RssPlugin({
        title: SITE_TITLE,
        baseUrl: SITE_URL,
        copyright: `© ${new Date().getFullYear()} 可可耐特（coconut-256）`,
        description: SITE_DESC,
        language: 'zh-CN',
        author: {
          name: 'coconut-256',
          email: 'crazymage165@gmail.com',
          link: SITE_URL
        },
        filename: 'feed.rss',
        log: true,
        filter: (post) => {
          const p = post.url || ''
          return p.startsWith('/AI/')
        }
      })
    ]
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: SITE_TITLE,
    nav: navbar,
    sidebar,
    outline: { level: [2, 6], label: '大纲' },
    lastUpdated: { text: '上次更新' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/coconut-256/ai-nav' }
    ],

    editLink: {
      pattern: 'https://github.com/coconut-256/ai-nav/edit/main/:path',
      text: '在 GitHub 上编辑此页'
    },

    // 默认使用本地搜索；申请到 Algolia 后可替换为 provider: 'algolia'
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
          }
        }
      }
    },

    docFooter: { prev: '上一篇', next: '下一篇' },
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单'
    // 本项目自定义 footer 通过 theme/Layout.vue 的 layout-bottom 插槽渲染，
    // 不再使用 themeConfig.footer，避免首页（无侧边栏）重复显示版权。
  }
})
