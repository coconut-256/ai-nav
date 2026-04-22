import { resolve } from 'path'
import { navbar } from './navbar'
import { sidebar } from './sidebar'

const SITE_URL = 'https://ai.nav.cn'
const SITE_TITLE = '可可耐特 AI 知识库'
const SITE_DESC = '汇聚 AI、编程、产品、教程的可可耐特开源知识库'

module.exports = {
  title: SITE_TITLE,
  description: SITE_DESC,
  base: '/',
  host: '0.0.0.0',
  port: 8080,
  dest: '.vuepress/dist',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
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
    ]
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6']
  },

  theme: resolve(__dirname, './theme'),

  themeConfig: {
    logo: '/logo.png',
    nav: navbar,
    sidebar: sidebar,
    sidebarDepth: 2,
    lastUpdated: '上次更新',
    smoothScroll: true,
    repo: 'coconut-256/ai-nav',
    repoLabel: 'GitHub',
    docsRepo: 'coconut-256/ai-nav',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',

    algolia: {
      // Algolia 搜索占位，待接入后填充 appId / apiKey / indexName
      appId: '',
      apiKey: '',
      indexName: ''
    },

    footer: {
      copyright: `© ${new Date().getFullYear()} 可可耐特（coconut-256）`,
      icp: '',
      links: [
        { text: 'GitHub', href: 'https://github.com/coconut-256/ai-nav' },
        { text: 'RSS', href: '/feed.xml' }
      ]
    }
  },

  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    [
      '@vuepress/google-analytics',
      { ga: 'GTM-WVS9HM6W' }
    ],
    [
      'seo',
      {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author || 'coconut-256',
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => 'article',
        url: (_, $site, path) => (($site.themeConfig.domain || SITE_URL) + path),
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || SITE_URL) + $page.frontmatter.image)
      }
    ],
    [
      'sitemap',
      { hostname: SITE_URL }
    ],
    [
      'feed',
      {
        canonical_base: SITE_URL,
        posts_directories: ['/AI/', '/Vibe Coding 零基础教程/'],
        count: 50
      }
    ],
    ['tags'],
    ['vuepress-plugin-baidu-autopush'],
    [
      'vuepress-plugin-code-copy',
      {
        align: 'top',
        color: '#27b1ff',
        backgroundTransition: true,
        successText: '代码已复制'
      }
    ],
    ['img-lazy']
  ]
}
