import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '../../')
const IGNORE = new Set(['.vuepress', '.vitepress', 'node_modules', 'image', '.git', '.github'])

export function walkMd (dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || IGNORE.has(e.name)) continue
    const abs = path.join(dir, e.name)
    if (e.isDirectory()) walkMd(abs, out)
    else if (e.name.endsWith('.md')) out.push(abs)
  }
  return out
}

export function format (content) {
  return content
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .split('\n').map(l => l.replace(/[\t ]+$/g, '')).join('\n')
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

if (import.meta.url === `file://${process.argv[1]}`) main()
