import FlightSearchForm from './components/FlightSearchForm'
import CorporateSection from './components/CorporateSection'

export default function FlightsPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="relative overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <div className="max-w-3xl mb-10">
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/10 text-red-200">
              Flight Booking
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">
              Find Better Flights, Faster
            </h1>
            <p className="text-white/85 text-lg leading-relaxed">
              Compare one-way, round-trip, and multi-city options with flexible controls for passengers,
              cabin, airline preference, and budget.
            </p>
          </div>

          <FlightSearchForm />
        </div>
      </section>

      <CorporateSection />
    </main>
  )
}
