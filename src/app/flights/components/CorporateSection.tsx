import Link from 'next/link'

export default function CorporateSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-2xl border bg-white p-10 md:p-14 shadow-sm grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-700">
              Corporate Travel
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flight Booking for Teams & Business Travelers
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We support recurring business travel with itinerary planning, preferred-airline handling,
              and responsive support for schedule changes.
            </p>
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="rounded-xl border border-gray-200 p-4">Dedicated account support</div>
            <div className="rounded-xl border border-gray-200 p-4">Flexible booking options</div>
            <div className="rounded-xl border border-gray-200 p-4">Group and conference travel coordination</div>

            <Link
              href="/contact"
              className="inline-flex mt-2 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
            >
              Talk to Corporate Desk
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
