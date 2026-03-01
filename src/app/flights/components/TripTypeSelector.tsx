'use client'

export type TripType = 'one-way' | 'round-trip' | 'multi-city'

type Props = {
  value: TripType
  onChange: (tripType: TripType) => void
}

const options: { label: string; value: TripType }[] = [
  { label: 'One Way', value: 'one-way' },
  { label: 'Round Trip', value: 'round-trip' },
  { label: 'Multi-City', value: 'multi-city' },
]

export default function TripTypeSelector({ value, onChange }: Props) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-700 mb-3">Trip Type</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
              value === option.value
                ? 'border-red-600 bg-red-600 text-white'
                : 'border-gray-200 text-gray-700 hover:border-red-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
