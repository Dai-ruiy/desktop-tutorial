// Attach the locally built UI to regenerated report HTML without touching its ciphertext or inline script.
import { readFileSync, writeFileSync } from 'node:fs'
for (const [file, prefix] of [['index.html', './assets-ui/'], ['h/index.html', '../assets-ui/'], ['mobile-holdings.html', './assets-ui/']]) {
  let text = readFileSync(file, 'utf8')
  const split = text.indexOf('</head>')
  if (split < 0) throw new Error(`${file}: missing head`)
  let head = text.slice(0, split), body = text.slice(split)
  if (!head.includes('assets-ui/ui.js')) {
    head = head.replace("style-src 'unsafe-inline'", "style-src 'self' 'unsafe-inline'").replace('script-src ', "script-src 'self' ")
    head += `<link rel="stylesheet" href="${prefix}ui.css?v=20261117-6">\n<script type="module" src="${prefix}ui.js?v=20261117-6"></script>\n`
    writeFileSync(file, head + body)
  }
}
