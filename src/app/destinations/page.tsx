import Link from 'next/link'
import Image from 'next/image'
import { destinations } from './data'

export default function DestinationsPage() {
  return (
    <main className="bg-gray-50">
      {/* HERO */}
      <section className="relative bg-linear-to-br from-red-700 via-red-600 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Explore Our Top Travel Destinations
          </h1>
          <p className="max-w-3xl mx-auto text-white/85 text-lg">
            Discover hand-picked destinations across the world.
            Whether you’re seeking adventure, luxury, or relaxation —
            we’ll craft the perfect journey for you.
          </p>
        </div>
      </section>

      {/* DESTINATION GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.6)]">
                  {dest.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 font-medium mb-2">
                  {dest.tagline}
                </p>
                <p className="text-sm text-gray-500">
                  {dest.highlight}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Plan Your Next Trip?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Let our travel experts design a customized itinerary
            based on your budget, dates, and travel goals.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-red-700 px-12 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Talk to a Travel Consultant →
          </Link>
        </div>
      </section>
    </main>
  )
}