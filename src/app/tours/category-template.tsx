import Image from 'next/image'
import Link from 'next/link'
import { categoryMeta, getToursByCategory, type TourCategory } from './data'

type Props = {
  category: TourCategory
}

export default function CategoryTemplate({ category }: Props) {
  const meta = categoryMeta[category]
  const tours = getToursByCategory(category)

  return (
    <main className="bg-white text-gray-800">
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image src={meta.heroImage} alt={meta.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-white/15 text-red-200 text-sm font-semibold">
            {meta.title}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">{meta.title}</h1>
          <p className="max-w-3xl mx-auto text-white/90 text-lg">{meta.short}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Who This Category Is For</h2>
          <p className="text-gray-600 leading-relaxed">{meta.audience}</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Available Tours</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <article
                key={tour.slug}
                className="overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
              >
                <div className="relative h-52">
                  <Image src={tour.heroImage} alt={tour.title} fill className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{tour.title}</h3>
                  <ul className="space-y-1 text-sm text-gray-600 mb-5">
                    <li>Duration: {tour.duration}</li>
                    <li>Location: {tour.location}</li>
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

      <section className="py-20 bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Itinerary?</h2>
          <p className="text-white/90 mb-10">
            Tell us your dates, travel style, and budget — we’ll build a tailored package for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-red-700 px-12 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Plan My Custom Tour
          </Link>
        </div>
      </section>
    </main>
  )
}
