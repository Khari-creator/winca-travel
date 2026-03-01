'use client'

import { useMemo, useState } from 'react'
import { CalendarDays, PlaneTakeoff, PlaneLanding, Wallet, Plane } from 'lucide-react'
import TripTypeSelector, { type TripType } from './TripTypeSelector'
import PassengerSelector from './PassengerSelector'

const fieldInputClassName =
  'w-full border border-gray-200 rounded-xl px-3.5 py-3 outline-none transition bg-white text-gray-900 placeholder:text-gray-400 focus:border-red-600 focus:ring-3 focus:ring-red-600/15'

type PassengerState = {
  adults: number
  children: number
  infants: number
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
  const [multiCityLegs, setMultiCityLegs] = useState([
    { from: '', to: '', date: '' },
    { from: '', to: '', date: '' },
  ])
  const [passengers, setPassengers] = useState<PassengerState>({
    adults: 1,
    children: 0,
    infants: 0,
  })

  const summary = useMemo(() => {
    const total = passengers.adults + passengers.children + passengers.infants
    return `${tripType.replace('-', ' ')} • ${total} traveler(s) • ${cabinClass}`
  }, [tripType, passengers, cabinClass])

  const canAddLeg = multiCityLegs.length < 4

  const handleMultiCityLegChange = (index: number, key: 'from' | 'to' | 'date', value: string) => {
    setMultiCityLegs((prev) => prev.map((leg, legIndex) => (legIndex === index ? { ...leg, [key]: value } : leg)))
  }

  const addLeg = () => {
    if (!canAddLeg) return
    setMultiCityLegs((prev) => [...prev, { from: '', to: '', date: '' }])
  }

  const removeLeg = (index: number) => {
    if (multiCityLegs.length <= 2) return
    setMultiCityLegs((prev) => prev.filter((_, legIndex) => legIndex !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
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
                    onChange={(e) => handleMultiCityLegChange(index, 'from', e.target.value)}
                    placeholder="City or airport"
                    className={fieldInputClassName}
                    required
                  />
                </Field>

                <Field label="To" icon={<PlaneLanding size={16} />}>
                  <input
                    value={leg.to}
                    onChange={(e) => handleMultiCityLegChange(index, 'to', e.target.value)}
                    placeholder="City or airport"
                    className={fieldInputClassName}
                    required
                  />
                </Field>

                <Field label="Departure Date" icon={<CalendarDays size={16} />}>
                  <input
                    type="date"
                    value={leg.date}
                    onChange={(e) => handleMultiCityLegChange(index, 'date', e.target.value)}
                    className={fieldInputClassName}
                    required
                  />
                </Field>

                <div className="flex items-end">
                  <button
                    type="button"
                    onClick={() => removeLeg(index)}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm font-semibold hover:border-red-300 disabled:opacity-50"
                    disabled={multiCityLegs.length <= 2}
                  >
                    Remove Leg
                  </button>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={addLeg}
              disabled={!canAddLeg}
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
                onChange={(e) => setFrom(e.target.value)}
                placeholder="City or airport"
                className={fieldInputClassName}
                required
              />
            </Field>

            <Field label="To" icon={<PlaneLanding size={16} />}>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                placeholder="City or airport"
                className={fieldInputClassName}
                required
              />
            </Field>

            <Field label="Departure Date" icon={<CalendarDays size={16} />}>
              <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                className={fieldInputClassName}
                required
              />
            </Field>

            <Field label="Return Date" icon={<CalendarDays size={16} />}>
              <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                className={fieldInputClassName}
                disabled={tripType === 'one-way'}
                required={tripType === 'round-trip'}
              />
            </Field>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Field label="Cabin Class" icon={<Plane size={16} />}>
            <select
              value={cabinClass}
              onChange={(e) => setCabinClass(e.target.value)}
              className={fieldInputClassName}
            >
              <option>Economy</option>
              <option>Business</option>
              <option>First</option>
            </select>
          </Field>

          <Field label="Preferred Airline" icon={<Plane size={16} />}>
            <input
              value={preferredAirline}
              onChange={(e) => setPreferredAirline(e.target.value)}
              placeholder="e.g. Emirates"
              className={fieldInputClassName}
            />
          </Field>

          <Field label="Budget Range" icon={<Wallet size={16} />}>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className={fieldInputClassName}
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

        <div className="flex flex-wrap items-center gap-6">
          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={flexibleDates}
              onChange={(e) => setFlexibleDates(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            Flexible dates
          </label>

          <label className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              checked={directOnly}
              onChange={(e) => setDirectOnly(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500"
            />
            Direct flights only
          </label>
        </div>

        <button
          type="submit"
          className="w-full md:w-auto inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-10 py-3.5 rounded-lg font-semibold transition"
        >
          Search Flights
        </button>
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
