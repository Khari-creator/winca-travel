import Link from 'next/link'

import HotelRequestForm from './HotelRequestForm'

const featuredDestinations = [
  {
    name: 'Thailand',
    tour: '/tours/international/thailand-full-package-explorer',
    visa: '/visas/thailand',
    destination: '/destinations/thailand',
  },
  {
    name: 'Dubai',
    tour: '/tours/international/dubai-city-break',
    visa: '/visas/dubai',
    destination: '/destinations/dubai',
  },
  {
    name: 'Singapore',
    tour: '/tours/international/singapore-full-package-discovery',
    visa: '/visas/singapore',
    destination: '/destinations/singapore',
  },
  {
    name: 'South Africa',
    tour: '/tours/international/south-africa-full-package-adventure',
    visa: '/visas/south-africa',
    destination: '/destinations/south-africa',
  },
  {
    name: 'Kenya',
    tour: '/tours/local/kenya-safari-explorer',
    visa: '/visas',
    destination: '/destinations/kenya',
  },
]

const hotelCategories = [
  {
    title: 'Luxury Hotels',
    description: 'Premium 5-star city and resort properties with elevated comfort, concierge support, and premium amenities.',
  },
  {
    title: 'Business Hotels',
    description: 'Work-ready stays near commercial hubs with fast Wi-Fi, meeting facilities, and flexible check-in options.',
  },
  {
    title: 'Budget Stays',
    description: 'Value-driven accommodation that keeps quality and convenience while optimizing travel spend.',
  },
  {
    title: 'Resorts & Beach Hotels',
    description: 'Leisure-focused properties ideal for relaxation, family holidays, and couple getaways.',
  },
  {
    title: 'Serviced Apartments',
    description: 'Extended-stay options with apartment-style comfort, kitchen facilities, and flexible room layouts.',
  },
]

export default function HotelsPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/10 text-red-200">
            Hotel Booking
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Book Premium Hotels Worldwide with Exclusive Rates
          </h1>

          <p className="max-w-3xl text-white/85 text-lg leading-relaxed mb-10">
            Find the right stay for every trip — luxury, budget, corporate stays, and holiday resorts with trusted booking support.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#hotel-search"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Find My Hotel
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/40 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Request a Quote
            </Link>
            <Link
              href="#corporate-accommodation"
              className="inline-flex items-center justify-center border border-white/40 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Corporate Booking
            </Link>
          </div>
        </div>
      </section>

      <section id="hotel-search" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border bg-white p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Hotel Search / Request</h2>
            <p className="text-gray-600 mb-8">
              Share your stay requirements and we’ll curate high-fit options with the right price, location, and comfort level.
            </p>

            <HotelRequestForm />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Destinations</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Connect your hotel booking with tours, visa support, and destination planning.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {featuredDestinations.map((destination) => (
              <article key={destination.name} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-4">{destination.name}</h3>
                <div className="space-y-2 text-sm">
                  <Link href={destination.tour} className="block text-red-600 font-semibold">Tour Package →</Link>
                  <Link href={destination.visa} className="block text-gray-700 hover:text-red-600">Visa Page →</Link>
                  <Link href={destination.destination} className="block text-gray-700 hover:text-red-600">Destination Page →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hotel Categories</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelCategories.map((category) => (
              <article key={category.title} className="rounded-2xl border bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 leading-relaxed">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="corporate-accommodation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border bg-gray-50 p-10 md:p-12 grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Corporate Accommodation</h2>
              <p className="text-gray-600 leading-relaxed">
                Structured booking support for business travel, long stays, and team accommodation with negotiated rates and centralized coordination.
              </p>
            </div>

            <div className="space-y-3 text-gray-700">
              <div className="rounded-lg border border-gray-200 bg-white px-4 py-3">Corporate negotiated rates</div>
              <div className="rounded-lg border border-gray-200 bg-white px-4 py-3">Centralized traveler management</div>
              <div className="rounded-lg border border-gray-200 bg-white px-4 py-3">Flexible stay changes and support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Bundle Offers</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hotel + Flight Bundle</h3>
              <p className="text-gray-600 mb-4">Optimize spend and simplify planning with one coordinated package.</p>
              <Link href="/flights" className="text-red-600 font-semibold">Explore Flight Options →</Link>
            </article>

            <article className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hotel + Tour Bundle</h3>
              <p className="text-gray-600 mb-4">Combine accommodation with curated experiences and guided activities.</p>
              <Link href="/tours" className="text-red-600 font-semibold">View Tour Packages →</Link>
            </article>

            <article className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Hotel + Visa Support</h3>
              <p className="text-gray-600 mb-4">Travel-ready packages that align your stay with your visa process timeline.</p>
              <Link href="/visas" className="text-red-600 font-semibold">See Visa Services →</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="py-24 bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Lock in the Right Stay?</h2>
          <p className="text-white/90 mb-10">
            Tell us your destination, preferences, and travel dates — we’ll return hotel options that match your style and budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#hotel-search"
              className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Find My Hotel
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/40 px-8 py-3.5 rounded-lg font-semibold hover:border-white transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

