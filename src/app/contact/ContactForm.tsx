'use client'

import type { FormEvent } from 'react'

import InquiryFeedback from '@/components/forms/InquiryFeedback'
import { useInquirySubmission } from '@/components/forms/useInquirySubmission'

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-red-600 focus:ring-3 focus:ring-red-600/15'

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export default function ContactForm() {
  const { status, message, isSubmitting, submitInquiry } = useInquirySubmission(
    'Thanks for reaching out. Your message has been emailed to our team.'
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const success = await submitInquiry({
      inquiryType: 'contact',
      sourcePage: '/contact',
      subject: 'Website contact message',
      contactName: getFieldValue(formData, 'name'),
      contactEmail: getFieldValue(formData, 'email'),
      contactPhone: getFieldValue(formData, 'phone'),
      message: getFieldValue(formData, 'message'),
      details: {},
    })

    if (success) {
      form.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
        <input type="text" name="name" required className={inputClassName} disabled={isSubmitting} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
        <input type="email" name="email" required className={inputClassName} disabled={isSubmitting} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
        <input type="tel" name="phone" className={inputClassName} disabled={isSubmitting} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
        <textarea name="message" rows={5} required className={inputClassName} disabled={isSubmitting} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 text-white px-8 py-3 rounded-lg font-semibold transition"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>

      <InquiryFeedback status={status} message={message} />
    </form>
  )
}
