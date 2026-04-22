const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../')
const IGNORE = new Set(['.vuepress', 'node_modules', 'image', '.git', '.github'])

function walkMd (dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || IGNORE.has(e.name)) continue
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) walkMd(abs, out)
    else if (e.name.endsWith('.md')) out.push(abs)
  }
  return out
}

function format (content) {
  return content
    // CRLF → LF
    .replace(/\r\n/g, '\n')
    // 合并 3+ 连续空行为 2 个
    .replace(/\n{3,}/g, '\n\n')
    // 去除行尾空白
    .split('\n').map(l => l.replace(/[\t ]+$/g, '')).join('\n')
    // 文件末尾一个换行
    .replace(/\n*$/, '\n')
}

function main () {
  const files = walkMd(ROOT)
  let changed = 0
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8')
    const out = format(src)
    if (out !== src) {
      fs.writeFileSync(f, out, 'utf8')
      changed += 1
    }
  }
  console.log(`Formatted ${changed}/${files.length} markdown files`)
}

if (require.main === module) main()

module.exports = { format, walkMd }
