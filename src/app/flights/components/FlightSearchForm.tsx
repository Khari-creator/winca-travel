'use client'

import { useMemo, useState } from 'react'
import { CalendarDays, Plane, PlaneLanding, PlaneTakeoff, Wallet } from 'lucide-react'

import InquiryFeedback from '@/components/forms/InquiryFeedback'
import { useInquirySubmission } from '@/components/forms/useInquirySubmission'

import PassengerSelector from './PassengerSelector'
import TripTypeSelector, { type TripType } from './TripTypeSelector'

const fieldInputClassName =
  'w-full border border-gray-200 rounded-xl px-3.5 py-3 outline-none transition bg-white text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:ring-3 focus:ring-red-600/15'

type PassengerState = {
  adults: number
  children: number
  infants: number
}

function createInitialPassengers(): PassengerState {
  return {
    adults: 1,
    children: 0,
    infants: 0,
  }
}

function createInitialMultiCityLegs() {
  return [
    { from: '', to: '', date: '' },
    { from: '', to: '', date: '' },
  ]
}

export default function FlightSearchForm() {
  const [tripType, setTripType] = useState<TripType>('round-trip')
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [cabinClass, setCabinClass] = useState('Economy')
  const [flexibleDates, setFlexibleDates] = useState(false)
  const [directOnly, setDirectOnly] = useState(false)
  const [preferredAirline, setPreferredAirline] = useState('')
  const [budgetRange, setBudgetRange] = useState('')
  const [multiCityLegs, setMultiCityLegs] = useState(createInitialMultiCityLegs)
  const [passengers, setPassengers] = useState<PassengerState>(createInitialPassengers)
  const [travelerName, setTravelerName] = useState('')
  const [travelerEmail, setTravelerEmail] = useState('')
  const [travelerPhone, setTravelerPhone] = useState('')
  const [travelNotes, setTravelNotes] = useState('')
  const { status, message, isSubmitting, submitInquiry } = useInquirySubmission(
    'Your flight request has been emailed to our booking team.'
  )

  const summary = useMemo(() => {
    const total = passengers.adults + passengers.children + passengers.infants
    return `${tripType.replace('-', ' ')} • ${total} traveler(s) • ${cabinClass}`
  }, [tripType, passengers, cabinClass])

  const canAddLeg = multiCityLegs.length < 4

  const handleMultiCityLegChange = (index: number, key: 'from' | 'to' | 'date', value: string) => {
    setMultiCityLegs((previous) =>
      previous.map((leg, legIndex) => (legIndex === index ? { ...leg, [key]: value } : leg))
    )
  }

  const addLeg = () => {
    if (!canAddLeg || isSubmitting) {
      return
    }

    setMultiCityLegs((previous) => [...previous, { from: '', to: '', date: '' }])
  }

  const removeLeg = (index: number) => {
    if (multiCityLegs.length <= 2 || isSubmitting) {
      return
    }

    setMultiCityLegs((previous) => previous.filter((_, legIndex) => legIndex !== index))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const itinerary =
      tripType === 'multi-city'
        ? multiCityLegs.map((leg, index) => `Leg ${index + 1}: ${leg.from} to ${leg.to} on ${leg.date}`)
        : [
            `From: ${from}`,
            `To: ${to}`,
            `Departure date: ${departureDate}`,
            tripType === 'round-trip' ? `Return date: ${returnDate}` : 'Return date: Not applicable',
          ]

    const success = await submitInquiry({
      inquiryType: 'flight',
      sourcePage: '/flights',
      subject: 'Flight booking request',
      contactName: travelerName,
      contactEmail: travelerEmail,
      contactPhone: travelerPhone,
      message: travelNotes,
      details: {
        'Trip Type': tripType,
        Summary: summary,
        Itinerary: itinerary,
        'Cabin Class': cabinClass,
        'Preferred Airline': preferredAirline || null,
        'Budget Range': budgetRange || null,
        'Flexible Dates': flexibleDates,
        'Direct Flights Only': directOnly,
        Adults: passengers.adults,
        Children: passengers.children,
        Infants: passengers.infants,
      },
    })

    if (success) {
      setTripType('round-trip')
      setFrom('')
      setTo('')
      setDepartureDate('')
      setReturnDate('')
      setCabinClass('Economy')
      setFlexibleDates(false)
      setDirectOnly(false)
      setPreferredAirline('')
      setBudgetRange('')
      setMultiCityLegs(createInitialMultiCityLegs())
      setPassengers(createInitialPassengers())
      setTravelerName('')
      setTravelerEmail('')
      setTravelerPhone('')
      setTravelNotes('')
    }
  }

  return (
    <div className="rounded-2xl border bg-white shadow-xl p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Search Flights</h2>
        <span className="text-sm text-gray-500">{summary}</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <TripTypeSelector value={tripType} onChange={setTripType} />

        {tripType === 'multi-city' ? (
          <div className="space-y-4">
            {multiCityLegs.map((leg, index) => (
              <div key={index} className="rounded-xl border border-gray-200 p-4 grid md:grid-cols-4 gap-4">
                <Field label="From" icon={<PlaneTakeoff size={16} />}>
                  <input
                    value={leg.from}
                    onChange={(event) => handleMultiCityLegChange(index, 'from', event.target.value)}
                    placeholder="City or airport"
                    className={fieldInputClassName}
                    required
                    disabled={isSubmitting}
                  />
                </Field>

                <Field label="To" icon={<PlaneLanding size={16} />}>
                  <input
                    value={leg.to}
                    onChange={(event) => handleMultiCityLegChange(index, 'to', event.target.value)}
                    placeholder="City or airport"
                    className={fieldInputClassName}
                    required
                    disabled={isSubmitting}
                  />
                </Field>

                <Field label="Departure Date" icon={<CalendarDays size={16} />}>
                  <input
                    type="date"
                    value={leg.date}
                    onChange={(event) => handleMultiCityLegChange(index, 'date', event.target.value)}
                    className={fieldInputClassName}
                    required
                    disabled={isSubmitting}
                  />
                </Field>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => removeLeg(index)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold hover:border-red-300 disabled:opacity-50"
                    disabled={multiCityLegs.length <= 2 || isSubmitting}
                  >
                    Remove Leg
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addLeg}
              disabled={!canAddLeg || isSubmitting}
              className="rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-semibold hover:border-red-300 disabled:opacity-50"
            >
              Add Another Leg
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Field label="From" icon={<PlaneTakeoff size={16} />}>
              <input
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                placeholder="City or airport"
                className={fieldInputClassName}
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="To" icon={<PlaneLanding size={16} />}>
              <input
                value={to}
                onChange={(event) => setTo(event.target.value)}
                placeholder="City or airport"
                className={fieldInputClassName}
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="Departure Date" icon={<CalendarDays size={16} />}>
              <input
                type="date"
                value={departureDate}
                onChange={(event) => setDepartureDate(event.target.value)}
                className={fieldInputClassName}
                required
                disabled={isSubmitting}
              />
            </Field>

            <Field label="Return Date" icon={<CalendarDays size={16} />}>
              <input
                type="date"
                value={returnDate}
                onChange={(event) => setReturnDate(event.target.value)}
                className={fieldInputClassName}
                disabled={tripType === 'one-way' || isSubmitting}
                required={tripType === 'round-trip'}
              />
            </Field>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Field label="Cabin Class" icon={<Plane size={16} />}>
            <select
              value={cabinClass}
              onChange={(event) => setCabinClass(event.target.value)}
              className={fieldInputClassName}
              disabled={isSubmitting}
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </Field>

          <Field label="Preferred Airline" icon={<Plane size={16} />}>
            <input
              value={preferredAirline}
              onChange={(event) => setPreferredAirline(event.target.value)}
              placeholder="e.g. Emirates"
              className={fieldInputClassName}
              disabled={isSubmitting}
            />
          </Field>

          <Field label="Budget Range" icon={<Wallet size={16} />}>
            <select
              value={budgetRange}
              onChange={(event) => setBudgetRange(event.target.value)}
              className={fieldInputClassName}
              disabled={isSubmitting}
            >
              <option value="">Any budget</option>
              <option value="value">Value-friendly</option>
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
              <option value="luxury">Luxury</option>
            </select>
          </Field>
        </div>

        <PassengerSelector value={passengers} onChange={setPassengers} />

        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Full Name" icon={<Plane size={16} />}>
            <input
              value={travelerName}
              onChange={(event) => setTravelerName(event.target.value)}
              placeholder="John Doe"
              className={fieldInputClassName}
              required
              disabled={isSubmitting}
            />
          </Field>

          <Field label="Email Address" icon={<Plane size={16} />}>
            <input
              type="email"
              value={travelerEmail}
              onChange={(event) => setTravelerEmail(event.target.value)}
              placeholder="you@example.com"
              className={fieldInputClassName}
              required
              disabled={isSubmitting}
            />
          </Field>

          <Field label="Phone Number" icon={<Plane size={16} />}>
            <input
              value={travelerPhone}
              onChange={(event) => setTravelerPhone(event.target.value)}
              placeholder="+254 7XX XXX XXX"
              className={fieldInputClassName}
              required
              disabled={isSubmitting}
            />
          </Field>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Travel Notes</label>
            <textarea
              value={travelNotes}
              onChange={(event) => setTravelNotes(event.target.value)}
              rows={4}
              placeholder="Share your baggage, stopover, or timing preferences."
              className={fieldInputClassName}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={flexibleDates}
              onChange={(event) => setFlexibleDates(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              disabled={isSubmitting}
            />
            Flexible dates
          </label>

          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={directOnly}
              onChange={(event) => setDirectOnly(event.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
              disabled={isSubmitting}
            />
            Direct flights only
          </label>
        </div>

        <div className="space-y-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 text-white px-10 py-3.5 rounded-lg font-semibold transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Flight Request'}
          </button>

          <InquiryFeedback status={status} message={message} />
        </div>
      </form>
    </div>
  )
}

function Field({ label, icon, children }: { label: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</span>
        <div className="pl-8">{children}</div>
      </div>
    </div>
  )
}
