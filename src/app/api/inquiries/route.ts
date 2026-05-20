import { NextResponse } from 'next/server'

import {
  formatInquiryType,
  formatInquiryValue,
  getInquiryRecipientEmail,
  type InquiryFieldValue,
  type InquiryPayload,
} from '@/lib/inquiries'
import { sendInquiryEmail } from '@/lib/mailer'

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function normalizeFieldValue(value: unknown): InquiryFieldValue | undefined {
  if (typeof value === 'string') {
    return value.trim()
  }

  if (typeof value === 'number' || typeof value === 'boolean' || value === null) {
    return value
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean)
  }

  return undefined
}

function normalizeText(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function normalizePayload(payload: unknown): InquiryPayload | null {
  if (!isPlainObject(payload) || !isPlainObject(payload.details)) {
    return null
  }

  const details = Object.fromEntries(
    Object.entries(payload.details)
      .map(([key, value]) => [key.trim(), normalizeFieldValue(value)])
      .filter(([key, value]) => key && value !== undefined)
  ) as Record<string, InquiryFieldValue>

  return {
    inquiryType: normalizeText(payload.inquiryType),
    sourcePage: normalizeText(payload.sourcePage),
    subject: normalizeText(payload.subject),
    contactName: normalizeText(payload.contactName),
    contactEmail: normalizeText(payload.contactEmail),
    contactPhone: normalizeText(payload.contactPhone),
    message: normalizeText(payload.message),
    details,
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export async function POST(request: Request) {
  try {
    const rawPayload = await request.json()
    const payload = normalizePayload(rawPayload)

    if (!payload) {
      return NextResponse.json({ message: 'Invalid inquiry payload.' }, { status: 400 })
    }

    if (!payload.inquiryType || !payload.sourcePage || !payload.subject) {
      return NextResponse.json({ message: 'Missing required inquiry fields.' }, { status: 400 })
    }

    if (!payload.contactName && !payload.contactEmail && !payload.contactPhone) {
      return NextResponse.json({ message: 'Please include at least one contact detail.' }, { status: 400 })
    }

    if (payload.contactEmail && !isValidEmail(payload.contactEmail)) {
      return NextResponse.json({ message: 'Please provide a valid email address.' }, { status: 400 })
    }

    const submittedAt = new Date().toISOString()
    const senderLabel = payload.contactName || payload.contactEmail || payload.contactPhone || 'Website Visitor'
    const detailEntries = Object.entries(payload.details)
    const subject = `${payload.subject} - ${senderLabel}`

    const textLines = [
      `${formatInquiryType(payload.inquiryType)} inquiry`,
      '',
      `Submitted at: ${submittedAt}`,
      `Source page: ${payload.sourcePage}`,
      `Contact name: ${payload.contactName || 'Not provided'}`,
      `Contact email: ${payload.contactEmail || 'Not provided'}`,
      `Contact phone: ${payload.contactPhone || 'Not provided'}`,
    ]

    if (payload.message) {
      textLines.push('', 'Message:', payload.message)
    }

    if (detailEntries.length > 0) {
      textLines.push('', 'Details:')
      textLines.push(...detailEntries.map(([label, value]) => `- ${label}: ${formatInquiryValue(value)}`))
    }

    const detailRows = detailEntries
      .map(
        ([label, value]) =>
          `<tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;">${escapeHtml(label)}</td><td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(
            formatInquiryValue(value)
          )}</td></tr>`
      )
      .join('')

    const messageBlock = payload.message
      ? `<div style="margin-top:24px;"><h2 style="font-size:18px;margin:0 0 10px;">Message</h2><div style="padding:14px;border:1px solid #e5e7eb;border-radius:12px;background:#f8fafc;white-space:pre-wrap;">${escapeHtml(
          payload.message
        )}</div></div>`
      : ''

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;">
        <h1 style="margin-bottom:8px;">${escapeHtml(formatInquiryType(payload.inquiryType))} Inquiry</h1>
        <p style="margin:0 0 24px;">A new website inquiry was submitted on ${escapeHtml(submittedAt)}.</p>
        <table style="border-collapse:collapse;width:100%;max-width:760px;">
          <tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;">Source page</td><td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(
            payload.sourcePage
          )}</td></tr>
          <tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;">Contact name</td><td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(
            payload.contactName || 'Not provided'
          )}</td></tr>
          <tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;">Contact email</td><td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(
            payload.contactEmail || 'Not provided'
          )}</td></tr>
          <tr><td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:600;">Contact phone</td><td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(
            payload.contactPhone || 'Not provided'
          )}</td></tr>
          ${detailRows}
        </table>
        ${messageBlock}
      </div>
    `

    await sendInquiryEmail({
      to: getInquiryRecipientEmail(),
      subject,
      text: textLines.join('\n'),
      html,
      replyTo: payload.contactEmail || undefined,
    })

    return NextResponse.json({ message: 'Your request has been sent successfully.' })
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : 'Something went wrong while sending your request. Please try again.'

    return NextResponse.json({ message }, { status: 500 })
  }
}
