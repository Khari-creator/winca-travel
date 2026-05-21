'use client'

import { useState } from 'react'

import { INQUIRY_API_PATH, type InquiryPayload } from '@/lib/inquiries'

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'
const INQUIRY_REQUEST_TIMEOUT_MS = 15000

export function useInquirySubmission(successMessage = 'Your request has been sent successfully.') {
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [message, setMessage] = useState('')

  const submitInquiry = async (payload: InquiryPayload) => {
    setStatus('submitting')
    setMessage('Sending your request...')

    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), INQUIRY_REQUEST_TIMEOUT_MS)

    try {
      const response = await fetch(INQUIRY_API_PATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })

      const result = (await response.json().catch(() => null)) as { message?: string } | null

      if (!response.ok) {
        throw new Error(result?.message || 'Unable to send your request right now.')
      }

      setStatus('success')
      setMessage(result?.message || successMessage)
      return true
    } catch (error) {
      setStatus('error')
      if (error instanceof Error && error.name === 'AbortError') {
        setMessage('The request took too long. Please try again in a moment.')
      } else {
        setMessage(error instanceof Error ? error.message : 'Unable to send your request right now.')
      }
      return false
    } finally {
      clearTimeout(timeoutId)
    }
  }

  return {
    status,
    message,
    isSubmitting: status === 'submitting',
    submitInquiry,
  }
}
