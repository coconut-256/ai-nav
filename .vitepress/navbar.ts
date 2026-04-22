import type { DefaultTheme } from 'vitepress'

export const navbar: DefaultTheme.NavItem[] = [
  { text: '首页', link: '/' },
  { text: 'AI', link: '/AI/' },
  {
    text: '教程',
    items: [
      { text: 'Vibe Coding 零基础教程', link: '/Vibe Coding 零基础教程/' },
      { text: 'OpenClaw 保姆级教程', link: '/OpenClaw 保姆级教程/' }
    ]
  },
  { text: '产品服务', link: '/产品服务/' },
  { text: '红皮书', link: '/红皮书/Claude_Code_完全教程指南' },
  { text: '译文', link: '/translations/' },
  { text: 'GitHub', link: 'https://github.com/coconut-256/ai-nav' }
]
