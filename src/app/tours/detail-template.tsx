import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getTourByCategoryAndSlug, type TourCategory } from './data'

type Props = {
  category: TourCategory
  slug: string
}

export default function DetailTemplate({ category, slug }: Props) {
  const tour = getTourByCategoryAndSlug(category, slug)

  if (!tour) return notFound()

  return (
    <main className="bg-white text-gray-800">
      <section className="relative h-[72vh] overflow-hidden">
        <Image src={tour.heroImage} alt={tour.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 text-red-200 text-sm font-semibold capitalize">
              {tour.category} Tour
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-5">{tour.title}</h1>
            <p className="text-white/90 text-lg mb-8">{tour.location}</p>
            <span className="inline-flex items-center bg-red-600 px-6 py-3 rounded-lg font-semibold text-lg">
              Quote on request
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { label: 'Duration', value: tour.duration },
            { label: 'Destination', value: tour.location },
            { label: 'Category', value: `${tour.category.charAt(0).toUpperCase()}${tour.category.slice(1)}` },
          ].map((fact) => (
            <div key={fact.label} className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500 mb-2">{fact.label}</p>
              <p className="text-lg font-semibold">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-14">
            <div>
              <h2 className="text-3xl font-bold mb-5">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{tour.overview}</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {tour.highlights.map((item) => (
                  <div key={item} className="rounded-xl border bg-gray-50 p-5 font-medium">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Day-by-Day Itinerary</h2>
              <div className="relative border-l-2 border-red-200 ml-3 space-y-8">
                {tour.itinerary.map((stop) => (
                  <div key={stop.day} className="ml-6 relative">
                    <span className="absolute -left-8.5 top-1 w-4 h-4 rounded-full bg-red-600" />
                    <p className="text-sm font-semibold text-red-600 mb-1">{stop.day}</p>
                    <h3 className="text-xl font-semibold mb-2">{stop.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{stop.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border p-6 bg-white">
                <h3 className="text-2xl font-bold mb-5">What’s Included</h3>
                <ul className="space-y-3 text-gray-700">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-red-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border p-6 bg-white">
                <h3 className="text-2xl font-bold mb-5">What’s Excluded</h3>
                <ul className="space-y-3 text-gray-700">
                  {tour.excludes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-red-600 font-bold">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8">Image Gallery</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
                {tour.gallery.map((image, idx) => (
                  <div key={`${tour.slug}-${idx}`} className="relative h-48 rounded-xl overflow-hidden border">
                    <Image src={image} alt={`${tour.title} image ${idx + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border bg-gray-50 p-8" id="tour-inquiry-form">
              <h2 className="text-3xl font-bold mb-3">Tour Inquiry</h2>
              <p className="text-gray-600 mb-8">Send your details and we’ll help you customize this package.</p>

              <form action="/contact" method="get" className="grid md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Selected Tour</label>
                  <input
                    name="tour"
                    defaultValue={tour.title}
                    readOnly
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input name="name" required className="w-full rounded-lg border border-gray-200 px-4 py-3" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full rounded-lg border border-gray-200 px-4 py-3" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number</label>
                  <input name="phone" required className="w-full rounded-lg border border-gray-200 px-4 py-3" />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Preferred Travel Date</label>
                  <input type="date" name="travelDate" required className="w-full rounded-lg border border-gray-200 px-4 py-3" />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us your traveler count, preferred hotel level, and budget range."
                    className="w-full rounded-lg border border-gray-200 px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold mb-3">Custom Quote Available</h3>
              <p className="text-gray-600 mb-6">{tour.duration} • {tour.location}</p>

              <div className="space-y-3">
                <a
                  href="#tour-inquiry-form"
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Inquire Now
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center border border-gray-300 hover:border-red-600 px-6 py-3 rounded-lg font-semibold transition"
                >
                  Talk to Consultant
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}
