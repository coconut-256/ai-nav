import type { DefaultTheme } from 'vitepress'
import { generateSidebarConfig } from './scripts/generateSidebar.js'

export const sidebar: DefaultTheme.Sidebar = {
  '/AI/': generateSidebarConfig('AI')
}
