'use client'

import type { FormEvent, ReactNode } from 'react'
import Link from 'next/link'

import InquiryFeedback from '@/components/forms/InquiryFeedback'
import { useInquirySubmission } from '@/components/forms/useInquirySubmission'

const inputClassName =
  'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-red-600 focus:ring-3 focus:ring-red-600/15'

function getFieldValue(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

export default function HotelRequestForm() {
  const { status, message, isSubmitting, submitInquiry } = useInquirySubmission(
    'Your hotel request has been emailed to our team.'
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const success = await submitInquiry({
      inquiryType: 'hotel',
      sourcePage: '/hotels',
      subject: 'Hotel booking request',
      contactName: getFieldValue(formData, 'fullName'),
      contactEmail: getFieldValue(formData, 'email'),
      contactPhone: getFieldValue(formData, 'phone'),
      message: getFieldValue(formData, 'notes'),
      details: {
        Destination: getFieldValue(formData, 'destination'),
        'Check-in Date': getFieldValue(formData, 'checkIn'),
        'Check-out Date': getFieldValue(formData, 'checkOut'),
        Rooms: getFieldValue(formData, 'rooms'),
        Adults: getFieldValue(formData, 'adults'),
        Children: getFieldValue(formData, 'children'),
        'Accommodation Types': formData.getAll('accommodationType').map((value) => String(value)),
        Preferences: formData.getAll('preferences').map((value) => String(value)),
      },
    })

    if (success) {
      form.reset()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Stay Details</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Field label="Destination">
            <input
              name="destination"
              placeholder="City, country, or hotel area"
              required
              className={inputClassName}
              disabled={isSubmitting}
            />
          </Field>

          <Field label="Check-in Date">
            <input type="date" name="checkIn" required className={inputClassName} disabled={isSubmitting} />
          </Field>

          <Field label="Check-out Date">
            <input type="date" name="checkOut" required className={inputClassName} disabled={isSubmitting} />
          </Field>

          <Field label="Number of Rooms">
            <select name="rooms" className={inputClassName} defaultValue="1" disabled={isSubmitting}>
              <option value="1">1 Room</option>
              <option value="2">2 Rooms</option>
              <option value="3">3 Rooms</option>
              <option value="4">4+ Rooms</option>
            </select>
          </Field>

          <Field label="Adults">
            <select name="adults" className={inputClassName} defaultValue="2" disabled={isSubmitting}>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4+ Adults</option>
            </select>
          </Field>

          <Field label="Children">
            <select name="children" className={inputClassName} defaultValue="0" disabled={isSubmitting}>
              <option value="0">0 Children</option>
              <option value="1">1 Child</option>
              <option value="2">2 Children</option>
              <option value="3">3+ Children</option>
            </select>
          </Field>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Accommodation Type</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {['Budget', 'Standard', '4-Star', '5-Star', 'Apartment', 'Resort', 'Villa'].map((type) => (
            <label key={type} className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium">
              <input
                type="checkbox"
                name="accommodationType"
                value={type}
                className="h-4 w-4 rounded border-gray-300 text-red-600"
                disabled={isSubmitting}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {['Breakfast included', 'Near airport', 'City center', 'Sea view', 'Family friendly'].map((preference) => (
            <label
              key={preference}
              className="flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium"
            >
              <input
                type="checkbox"
                name="preferences"
                value={preference}
                className="h-4 w-4 rounded border-gray-300 text-red-600"
                disabled={isSubmitting}
              />
              {preference}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Your Contact Details</h3>
        <div className="grid md:grid-cols-2 gap-5">
          <Field label="Full Name">
            <input name="fullName" required className={inputClassName} disabled={isSubmitting} />
          </Field>

          <Field label="Email Address">
            <input type="email" name="email" required className={inputClassName} disabled={isSubmitting} />
          </Field>

          <Field label="Phone Number">
            <input name="phone" required className={inputClassName} disabled={isSubmitting} />
          </Field>

          <Field label="Special Requests">
            <textarea
              name="notes"
              rows={4}
              placeholder="Share your hotel area, budget, or room preferences."
              className={inputClassName}
              disabled={isSubmitting}
            />
          </Field>
        </div>
      </div>

      <div className="flex flex-wrap gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 text-white px-8 py-3.5 rounded-lg font-semibold transition"
        >
          {isSubmitting ? 'Sending...' : 'Find My Hotel'}
        </button>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-gray-300 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
        >
          Request a Quote
        </Link>
      </div>

      <InquiryFeedback status={status} message={message} />
    </form>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      {children}
    </div>
  )
}
