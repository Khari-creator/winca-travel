'use client'

import { Minus, Plus, Users } from 'lucide-react'

type PassengerState = {
  adults: number
  children: number
  infants: number
}

type Props = {
  value: PassengerState
  onChange: (value: PassengerState) => void
}

type PassengerKey = keyof PassengerState

export default function PassengerSelector({ value, onChange }: Props) {
  const updateCount = (key: PassengerKey, delta: number) => {
    const minimum = key === 'adults' ? 1 : 0
    const nextValue = Math.max(minimum, value[key] + delta)
    onChange({ ...value, [key]: nextValue })
  }

  const totalPassengers = value.adults + value.children + value.infants

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center gap-2 mb-4">
        <Users size={18} className="text-red-600" />
        <p className="text-sm font-semibold text-gray-700">Passengers ({totalPassengers})</p>
      </div>

      <div className="space-y-4">
        {([
          { key: 'adults', label: 'Adults' },
          { key: 'children', label: 'Children' },
          { key: 'infants', label: 'Infants' },
        ] as { key: PassengerKey; label: string }[]).map((item) => (
          <div key={item.key} className="flex items-center justify-between">
            <span className="text-sm text-gray-700">{item.label}</span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => updateCount(item.key, -1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:border-red-300"
                aria-label={`Decrease ${item.label}`}
              >
                <Minus size={14} />
              </button>

              <span className="w-6 text-center text-sm font-semibold">{value[item.key]}</span>

              <button
                type="button"
                onClick={() => updateCount(item.key, 1)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-gray-700 hover:border-red-300"
                aria-label={`Increase ${item.label}`}
              >
                <Plus size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
