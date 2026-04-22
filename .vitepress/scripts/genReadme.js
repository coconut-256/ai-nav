import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '../../')
const IGNORE = new Set(['.vuepress', '.vitepress', 'node_modules', 'image', '.git', '.github'])

export function walk (dir) {
  const items = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || IGNORE.has(e.name)) continue
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) items.push({ type: 'dir', name: e.name, children: walk(abs) })
    else if (e.name.endsWith('.md') && e.name.toLowerCase() !== 'readme.md') items.push({ type: 'file', name: e.name })
  }
  return items.sort((a, b) => (a.type === b.type ? a.name.localeCompare(b.name, 'zh') : a.type === 'dir' ? -1 : 1))
}

export function render (items, depth = 0, base = '') {
  const lines = []
  const indent = '  '.repeat(depth)
  for (const it of items) {
    if (it.type === 'dir') {
      lines.push(`${indent}- **${it.name}/**`)
      lines.push(...render(it.children, depth + 1, `${base}${it.name}/`))
    } else {
      const linkPath = `${base}${it.name}`
      const title = path.basename(it.name, '.md')
      lines.push(`${indent}- [${title}](${linkPath})`)
    }
  }
  return lines
}

export function genForDir (absDir, dirName) {
  const tree = walk(absDir)
  const body = render(tree).join('\n')
  const header = `# ${dirName}\n\n> 本索引由 \`npm run generate:readme\` 自动生成，请勿手工编辑。\n\n`
  fs.writeFileSync(path.join(absDir, 'README.md'), header + body + '\n', 'utf8')
  console.log(`✓ generated ${path.join(dirName, 'README.md')}`)
}

function main () {
  const roots = ['AI', '产品服务', 'OpenClaw 保姆级教程', 'Vibe Coding 零基础教程', 'translations']
  for (const r of roots) {
    const abs = path.join(ROOT, r)
    if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) genForDir(abs, r)
  }
}

if (import.meta.url === `file://${process.argv[1]}`) main()
