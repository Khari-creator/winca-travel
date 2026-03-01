import Image from 'next/image'
import Link from 'next/link'
import { categoryMeta, featuredTours } from './data'

const categoryCards = [
  { key: 'international', href: '/tours/international' },
  { key: 'local', href: '/tours/local' },
  { key: 'honeymoon', href: '/tours/honeymoon' },
  { key: 'group', href: '/tours/group' },
] as const

export default function ToursPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="relative overflow-hidden bg-linear-to-br from-red-700 via-red-600 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-white/10 text-red-200 text-sm font-semibold">
            Curated Tour Experiences
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Tours Built Around You</h1>
          <p className="max-w-3xl mx-auto text-white/85 text-lg mb-10">
            From global escapes to local adventures, we craft premium journeys with clear planning,
            reliable support, and unforgettable moments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-red-700 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Plan Your Tour
          </Link>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Tour Categories</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Choose the travel style that fits your goals, timeline, and budget.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {categoryCards.map(({ key, href }) => {
              const category = categoryMeta[key]

              return (
                <Link
                  key={key}
                  href={href}
                  className="group rounded-2xl bg-white border p-7 shadow-sm hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition">{category.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.short}</p>
                  <span className="inline-block mt-6 text-sm font-semibold text-red-600">Explore Category →</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Tours</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Hand-picked experiences designed for high impact and smooth travel execution.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredTours.map((tour) => (
              <article
                key={tour.slug}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-48">
                  <Image
                    src={tour.heroImage}
                    alt={tour.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{tour.title}</h3>
                  <ul className="text-sm text-gray-600 space-y-1 mb-5">
                    <li>{tour.location}</li>
                    <li>{tour.duration}</li>
                    <li className="font-semibold text-red-600">Quote on request</li>
                  </ul>
                  <Link
                    href={`/tours/${tour.category}/${tour.slug}`}
                    className="text-sm font-semibold text-red-600"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Book With Us</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Tailored Itineraries',
                copy: 'Every package is customized to your goals, budget, and travel pace.',
              },
              {
                title: 'Trusted Planning Team',
                copy: 'From visas to reservations, we coordinate logistics end-to-end.',
              },
              {
                title: 'Premium Support',
                copy: 'We stay available before, during, and after your trip for a stress-free journey.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Next Tour?</h2>
          <p className="text-white/90 mb-10">
            Tell us where you want to go, and we’ll design a premium, practical itinerary around your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-red-700 px-12 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Plan Your Tour
          </Link>
        </div>
      </section>
    </main>
  )
}
