'use client'

import type { FormEvent } from 'react'

import InquiryFeedback from '@/components/forms/InquiryFeedback'
import { useInquirySubmission } from '@/components/forms/useInquirySubmission'

const inputClassName =
  'w-full rounded-lg border border-gray-200 px-4 py-3 bg-white text-gray-900 outline-none transition focus:border-red-600 focus:ring-3 focus:ring-red-600/15'

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export default function TourInquiryForm({
  sourcePage,
  tourTitle,
}: {
  sourcePage: string
  tourTitle: string
}) {
  const { status, message, isSubmitting, submitInquiry } = useInquirySubmission(
    'Your tour inquiry has been emailed to our team.'
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const success = await submitInquiry({
      inquiryType: 'tour',
      sourcePage,
      subject: `Tour inquiry for ${tourTitle}`,
      contactName: getFieldValue(formData, 'name'),
      contactEmail: getFieldValue(formData, 'email'),
      contactPhone: getFieldValue(formData, 'phone'),
      message: getFieldValue(formData, 'message'),
      details: {
        Tour: tourTitle,
        'Preferred Travel Date': getFieldValue(formData, 'travelDate'),
      },
    })

    if (success) {
      form.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-2">Selected Tour</label>
        <input value={tourTitle} readOnly className={`${inputClassName} text-gray-600`} />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Full Name</label>
        <input name="name" required className={inputClassName} disabled={isSubmitting} />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Email Address</label>
        <input type="email" name="email" required className={inputClassName} disabled={isSubmitting} />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Phone Number</label>
        <input name="phone" required className={inputClassName} disabled={isSubmitting} />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">Preferred Travel Date</label>
        <input type="date" name="travelDate" required className={inputClassName} disabled={isSubmitting} />
      </div>

      <div className="md:col-span-2">
        <label className="block text-sm font-semibold mb-2">Message</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us your traveler count, preferred hotel level, and budget range."
          className={inputClassName}
          disabled={isSubmitting}
        />
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 text-white px-8 py-3 rounded-lg font-semibold transition"
        >
          {isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </button>
      </div>

      <div className="md:col-span-2">
        <InquiryFeedback status={status} message={message} />
      </div>
    </form>
  )
}
