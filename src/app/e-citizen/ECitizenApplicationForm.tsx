'use client'

import type { FormEvent, ReactNode } from 'react'

import InquiryFeedback from '@/components/forms/InquiryFeedback'
import { useInquirySubmission } from '@/components/forms/useInquirySubmission'

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-red-600 focus:ring-3 focus:ring-red-600/15'

type ServiceOption = {
  title: string
}

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export default function ECitizenApplicationForm({ services }: { services: ServiceOption[] }) {
  const { status, message, isSubmitting, submitInquiry } = useInquirySubmission(
    'Your e-citizen request has been emailed to our team.'
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const success = await submitInquiry({
      inquiryType: 'e-citizen',
      sourcePage: '/e-citizen',
      subject: 'E-citizen support request',
      contactName: getFieldValue(formData, 'name'),
      contactEmail: getFieldValue(formData, 'email'),
      contactPhone: getFieldValue(formData, 'phone'),
      message: getFieldValue(formData, 'message'),
      details: {
        'Service Needed': getFieldValue(formData, 'service'),
      },
    })

    if (success) {
      form.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border bg-gray-50 p-6 md:p-8 space-y-4">
      <Field label="Full Name">
        <input name="name" required className={inputClassName} disabled={isSubmitting} />
      </Field>

      <Field label="Phone Number">
        <input name="phone" required className={inputClassName} disabled={isSubmitting} />
      </Field>

      <Field label="Email Address">
        <input type="email" name="email" className={inputClassName} disabled={isSubmitting} />
      </Field>

      <Field label="Service Needed">
        <select name="service" required className={inputClassName} defaultValue="" disabled={isSubmitting}>
          <option value="">Select service</option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us your request details and deadlines."
          className={inputClassName}
          disabled={isSubmitting}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 text-white px-8 py-3 rounded-lg font-semibold transition"
      >
        {isSubmitting ? 'Sending...' : 'Submit Request'}
      </button>

      <InquiryFeedback status={status} message={message} />
    </form>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-gray-700 mb-2">{label}</span>
      {children}
    </label>
  )
}
