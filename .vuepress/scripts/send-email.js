const nodemailer = require('nodemailer')

async function sendDeployMail () {
  const {
    EMAIL_HOST,
    EMAIL_PORT = '465',
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM,
    EMAIL_TO,
    SITE_URL = 'https://ai.nav.cn',
    GIT_SHA = '',
    GIT_REF = ''
  } = process.env

  const required = { EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EMAIL_FROM, EMAIL_TO }
  const missing = Object.entries(required).filter(([, v]) => !v).map(([k]) => k)
  if (missing.length) {
    console.warn(`[send-email] skipped — missing env: ${missing.join(', ')}`)
    return
  }

  const transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: Number(EMAIL_PORT),
    secure: Number(EMAIL_PORT) === 465,
    auth: { user: EMAIL_USER, pass: EMAIL_PASS }
  })

  const subject = `[ai-nav] deployed ${GIT_REF || ''} ${GIT_SHA.slice(0, 7)}`.trim()
  const html = `
    <h3>ai-nav 已部署到 Cloudflare Pages</h3>
    <ul>
      <li>站点: <a href="${SITE_URL}">${SITE_URL}</a></li>
      <li>提交: <code>${GIT_SHA}</code></li>
      <li>分支: <code>${GIT_REF}</code></li>
      <li>时间: ${new Date().toISOString()}</li>
    </ul>
  `

  await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO.split(',').map(s => s.trim()),
    subject,
    html
  })
  console.log('[send-email] deploy notification sent')
}

if (require.main === module) {
  sendDeployMail().catch(err => { console.error('[send-email] failed:', err); process.exit(1) })
}

module.exports = { sendDeployMail }
