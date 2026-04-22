const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../')

const IGNORE = new Set(['.vuepress', 'node_modules', 'image', '.git', '.github', 'translations'])

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

function buildGroup (absDir, relBase) {
  const entries = readDirSafe(absDir).filter(e => !e.name.startsWith('.') && !IGNORE.has(e.name))

  const files = entries.filter(e => e.isFile() && isMarkdownFile(e.name))
    .sort((a, b) => a.name.localeCompare(b.name, 'zh'))
    .map(e => {
      const abs = path.join(absDir, e.name)
      const link = `${relBase}${e.name.replace(/\.md$/, '.html')}`
      return [link, extractTitle(abs)]
    })

  const subDirs = entries.filter(e => e.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, 'zh'))
    .map(e => {
      const sub = path.join(absDir, e.name)
      const subRel = `${relBase}${e.name}/`
      return {
        title: e.name,
        collapsable: true,
        children: buildGroup(sub, subRel)
      }
    })

  // 目录下若存在 README.md 作为组首页
  const hasReadme = fs.existsSync(path.join(absDir, 'README.md'))
  const children = []
  if (hasReadme) children.push(relBase)
  children.push(...files)
  children.push(...subDirs)
  return children
}

function generateSidebarConfig (dirName) {
  const absDir = path.join(ROOT, dirName)
  const relBase = `/${dirName}/`
  return [
    {
      title: dirName,
      collapsable: false,
      children: buildGroup(absDir, relBase)
    }
  ]
}

module.exports = { generateSidebarConfig }

// 命令行入口：打印各目录侧边栏
if (require.main === module) {
  const dirs = ['AI', '产品服务', 'OpenClaw 保姆级教程', 'Vibe Coding 零基础教程', 'translations']
  const out = {}
  dirs.forEach(d => { out[`/${d}/`] = generateSidebarConfig(d) })
  console.log(JSON.stringify(out, null, 2))
}
