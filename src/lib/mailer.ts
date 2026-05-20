import nodemailer, { type Transporter } from 'nodemailer'

type MailConfig = {
  host: string
  port: number
  secure: boolean
  user: string
  pass: string
  from: string
  tlsServername?: string
  rejectUnauthorized: boolean
}

let cachedTransporter: Transporter | null = null
let cachedTransporterKey = ''

function getMailConfig(): MailConfig | null {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || '465')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.SMTP_FROM || user
  const secureValue = process.env.SMTP_SECURE
  const secure = secureValue ? secureValue.toLowerCase() === 'true' : port === 465
  const tlsServername = process.env.SMTP_TLS_SERVERNAME?.trim()
  const rejectUnauthorizedValue = process.env.SMTP_TLS_REJECT_UNAUTHORIZED
  const rejectUnauthorized = rejectUnauthorizedValue ? rejectUnauthorizedValue.toLowerCase() !== 'false' : true

  if (!host || !user || !pass || !from) {
    return null
  }

  return {
    host,
    port,
    secure,
    user,
    pass,
    from,
    tlsServername: tlsServername || undefined,
    rejectUnauthorized,
  }
}

function getTransporter(config: MailConfig) {
  const transporterKey = JSON.stringify(config)

  if (!cachedTransporter || cachedTransporterKey !== transporterKey) {
    cachedTransporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.user,
        pass: config.pass,
      },
      tls: {
        servername: config.tlsServername,
        rejectUnauthorized: config.rejectUnauthorized,
      },
    })
    cachedTransporterKey = transporterKey
  }

  return cachedTransporter
}

export async function sendInquiryEmail({
  to,
  subject,
  text,
  html,
  replyTo,
}: {
  to: string
  subject: string
  text: string
  html: string
  replyTo?: string
}) {
  const config = getMailConfig()

  if (!config) {
    throw new Error('SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM.')
  }

  const transporter = getTransporter(config)

  await transporter.sendMail({
    from: config.from,
    to,
    subject,
    text,
    html,
    replyTo,
  })
}
