import type { DefaultTheme } from 'vitepress'
import { generateSidebarConfig } from './scripts/generateSidebar.js'

export const sidebar: DefaultTheme.Sidebar = {
  '/AI/': generateSidebarConfig('AI'),
  '/产品服务/': generateSidebarConfig('产品服务'),
  '/OpenClaw 保姆级教程/': generateSidebarConfig('OpenClaw 保姆级教程'),
  '/Vibe Coding 零基础教程/': generateSidebarConfig('Vibe Coding 零基础教程'),
  '/translations/': generateSidebarConfig('translations'),
  '/红皮书/': generateSidebarConfig('红皮书')
}
