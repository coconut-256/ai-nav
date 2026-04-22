const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '../../')
const IGNORE = new Set(['.vuepress', 'node_modules', 'image', '.git', '.github'])

function countMd (dir) {
  let n = 0
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || IGNORE.has(e.name)) continue
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) n += countMd(abs)
    else if (e.name.endsWith('.md')) n += 1
  }
  return n
}

function main () {
  const total = countMd(ROOT)
  console.log(`Markdown files total: ${total}`)
  return total
}

if (require.main === module) main()

module.exports = { countMd }
