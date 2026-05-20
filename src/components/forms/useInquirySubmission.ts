'use client'

import { useState } from 'react'

import { INQUIRY_API_PATH, type InquiryPayload } from '@/lib/inquiries'

export type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export function useInquirySubmission(successMessage = 'Your request has been sent successfully.') {
  const [status, setStatus] = useState<SubmissionStatus>('idle')
  const [message, setMessage] = useState('')

  const submitInquiry = async (payload: InquiryPayload) => {
    setStatus('submitting')
    setMessage('Sending your request...')

    try {
      const response = await fetch(INQUIRY_API_PATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
      setMessage(error instanceof Error ? error.message : 'Unable to send your request right now.')
      return false
    }
  }

  return {
    status,
    message,
    isSubmitting: status === 'submitting',
    submitInquiry,
  }
}
