import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '../../')
const IGNORE = new Set(['.vuepress', '.vitepress', 'node_modules', 'image', '.git', '.github'])

export function countMd (dir) {
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

if (import.meta.url === `file://${process.argv[1]}`) main()
