import Link from 'next/link'

const values = [
  'Integrity',
  'Efficiency',
  'Transparency',
  'Client-first approach',
  'Professional excellence',
]

const serviceEcosystem = [
  {
    title: 'Visa Processing',
    description: 'Professional guidance for documentation, submission readiness, and application tracking support.',
    href: '/visas',
  },
  {
    title: 'Flight Booking',
    description: 'Structured booking support for one-way, round-trip, and multi-city travel with practical options.',
    href: '/flights',
  },
  {
    title: 'Hotel Reservations',
    description: 'Accommodation planning based on budget, comfort level, and travel purpose.',
    href: '/hotels',
  },
  {
    title: 'International & Local Tours',
    description: 'Curated itineraries that combine experience quality, logistics, and value.',
    href: '/tours',
  },
  {
    title: 'E-Citizen Assistance',
    description: 'Step-by-step facilitation for sensitive government-related applications and follow-up support.',
    href: '/e-citizen',
  },
]

const differentiators = [
  'End-to-end travel management',
  'Personalized support per client profile',
  'Fast response times and practical guidance',
  'Experienced consultants across travel and documentation',
  'Corporate-ready services for teams and businesses',
  'Transparent service fee communication',
]

const credentials = [
  { label: 'Experience Focus', value: 'Specialized support across visas, travel, and documentation workflows' },
  { label: 'Coverage', value: 'Support for local, regional, and international travel requirements' },
  { label: 'Client Approach', value: 'Guided from inquiry to completion with clear status communication' },
  { label: 'Business Practice', value: 'Independent facilitation model with transparent service boundaries' },
  { label: 'Office Presence', value: 'Nairobi, Kenya with direct phone and email support channels' },
  { label: 'Operational Standard', value: 'Process-driven delivery centered on accuracy and accountability' },
]

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <section className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-28">
          <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-white/10 text-red-200">
            About Winca Travel
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trusted Travel & Documentation Partner
          </h1>

          <p className="max-w-3xl text-white/85 text-lg leading-relaxed mb-10">
            We handle visas, flights, tours, hotels, and e-citizen services through one coordinated support system.
            Our team simplifies complex processes with reliable guidance, practical execution, and strong client focus.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Start Your Journey
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-white/40 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              Contact Us
            </Link>
            <Link
              href="#what-we-do"
              className="inline-flex items-center justify-center border border-white/40 hover:border-red-300 px-8 py-3.5 rounded-lg font-semibold transition"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-5">
              We started this company after repeatedly seeing travelers and applicants lose time, money,
              and confidence because critical steps were unclear or poorly handled.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5">
              In the market, people often juggle multiple providers for visas, bookings, accommodation,
              and documentation support — creating confusion, delays, and inconsistent communication.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our response was to build one professional support system that is clear, accountable,
              and practical from the first inquiry to final delivery.
            </p>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-8">
            <h3 className="text-2xl font-bold mb-4">What We Stand For</h3>
            <p className="text-gray-700 leading-relaxed">
              We prioritize clarity over confusion, process over guesswork, and long-term trust over quick transactions.
              Every client case is handled with structure, timely updates, and service professionalism.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mission, Vision & Values</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            <article className="rounded-2xl border bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold mb-3">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Deliver dependable daily support in travel and documentation by combining accurate processing,
                practical planning, and responsive client communication.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold mb-3">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Become the most trusted integrated support partner for travel and citizen-services facilitation
                across the region and beyond.
              </p>
            </article>

            <article className="rounded-2xl border bg-white p-7 shadow-sm">
              <h3 className="text-2xl font-semibold mb-3">Core Values</h3>
              <ul className="space-y-2 text-gray-700">
                {values.map((value) => (
                  <li key={value} className="flex gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Clients do not need multiple providers. We offer an integrated service ecosystem that keeps all key travel
            and documentation requirements aligned under one support team.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceEcosystem.map((service) => (
              <article key={service.title} className="rounded-2xl border bg-gray-50 p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{service.description}</p>
                <Link href={service.href} className="text-red-600 font-semibold text-sm">
                  Explore Service →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item} className="rounded-2xl border bg-white p-6 shadow-sm">
                <p className="text-gray-800 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Experience & Credentials</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We are a growing company with strong professional standards, process discipline, and a service model built
            to perform reliably in high-trust client scenarios.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {credentials.map((item) => (
              <article key={item.label} className="rounded-2xl border bg-gray-50 p-6">
                <h3 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-2">{item.label}</h3>
                <p className="text-gray-700 leading-relaxed">{item.value}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl bg-linear-to-r from-red-600 to-red-700 text-white p-8 md:p-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Let’s Build Your Next Journey With Confidence</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Whether you are planning travel, handling documentation, or managing corporate movement,
              we are ready to support you with clear and professional execution.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-red-700 px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
