import { DEFAULT_CONTACT_EMAIL } from './company'

export type InquiryFieldValue = string | string[] | number | boolean | null

export type InquiryPayload = {
  inquiryType: string
  sourcePage: string
  subject: string
  contactName?: string
  contactEmail?: string
  contactPhone?: string
  message?: string
  details: Record<string, InquiryFieldValue>
}

export const INQUIRY_API_PATH = '/api/inquiries'

export function getInquiryRecipientEmail() {
  return process.env.CONTACT_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL
}

export function formatInquiryType(value: string) {
  return value
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (match) => match.toUpperCase())
}

export function formatInquiryValue(value: InquiryFieldValue) {
  if (Array.isArray(value)) {
    return value.length > 0 ? value.join(', ') : 'None selected'
  }

  if (value === true) {
    return 'Yes'
  }

  if (value === false) {
    return 'No'
  }

  if (value === null || value === '') {
    return 'Not provided'
  }

  return String(value)
}
