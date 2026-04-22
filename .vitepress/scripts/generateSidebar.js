import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '../../')

const IGNORE = new Set(['.vuepress', '.vitepress', 'node_modules', 'image', '.git', '.github'])

function isMarkdownFile (name) {
  return name.endsWith('.md') && name.toLowerCase() !== 'readme.md'
}

function readDirSafe (dir) {
  try { return fs.readdirSync(dir, { withFileTypes: true }) } catch { return [] }
}

function extractTitle (absPath) {
  try {
    const content = fs.readFileSync(absPath, 'utf8')
    const m = content.match(/^#\s+(.+?)\s*$/m)
    if (m) return m[1].trim()
  } catch {}
  return path.basename(absPath, '.md')
}

// 递归生成 VitePress 侧边栏项：{ text, link } 或 { text, collapsed, items: [...] }
function buildGroup (absDir, relBase) {
  const entries = readDirSafe(absDir).filter(e => !e.name.startsWith('.') && !IGNORE.has(e.name))

  const files = entries
    .filter(e => e.isFile() && isMarkdownFile(e.name))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh'))
    .map(e => {
      const abs = path.join(absDir, e.name)
      const link = `${relBase}${e.name.replace(/\.md$/, '')}`
      return { text: extractTitle(abs), link }
    })

  const subDirs = entries
    .filter(e => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, 'zh'))
    .map(e => {
      const sub = path.join(absDir, e.name)
      const subRel = `${relBase}${e.name}/`
      return {
        text: e.name,
        collapsed: true,
        items: buildGroup(sub, subRel)
      }
    })

  const items = []
  // 目录下若存在 README.md，作为该组索引页（VitePress 以目录根路径解析 index/README）
  if (fs.existsSync(path.join(absDir, 'README.md'))) {
    items.push({ text: '概览', link: relBase })
  }
  items.push(...files)
  items.push(...subDirs)
  return items
}

export function generateSidebarConfig (dirName) {
  const absDir = path.join(ROOT, dirName)
  const relBase = `/${dirName}/`
  return [
    {
      text: dirName,
      collapsed: false,
      items: buildGroup(absDir, relBase)
    }
  ]
}

// 命令行入口：打印各目录侧边栏
if (import.meta.url === `file://${process.argv[1]}`) {
  const dirs = ['AI']
  const out = {}
  dirs.forEach(d => { out[`/${d}/`] = generateSidebarConfig(d) })
  console.log(JSON.stringify(out, null, 2))
}
