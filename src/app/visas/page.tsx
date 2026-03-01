import Link from "next/link"
import { visaCountries } from "@/data/visaCountries"

export default function VisaServicesPage() {
  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <span className="inline-block mb-5 px-5 py-1 rounded-full bg-red-600/20 text-red-400 text-sm font-semibold tracking-wide">
            Visa & Travel Experts
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Global Visa Processing <br />
            <span className="text-red-500">Made Simple</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-300 mb-10">
            We provide professional visa assistance for tourism, business,
            and international travel with high success rates.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#destinations"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-semibold transition"
            >
              Explore Destinations
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 hover:border-red-500 px-8 py-4 rounded-md font-semibold transition"
            >
              Speak to a Consultant
            </Link>
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS ================= */}
      <section id="destinations" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Visa Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your destination and view visa requirements,
              processing timelines, and application guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {Object.entries(visaCountries).map(([slug, country]) => (
              <Link
                key={slug}
                href={`/visas/${slug}`}
                className="group relative bg-white rounded-2xl p-8 border shadow-sm hover:shadow-xl transition"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-red-500 scale-x-0 group-hover:scale-x-100 transition origin-left rounded-t-2xl" />

                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition">
                  {country.name} Visa
                </h3>

                <p className="text-gray-600 mb-6">
                  {country.tagline}
                </p>

                <span className="text-sm font-semibold text-red-600">
                  View Requirements →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISA TYPES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Visa Types We Handle
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Tourist Visa",
              "Business Visa",
              "Transit Visa",
              "Conference Visa",
              "Student Visa",
              "Work Visa",
              "Family Visa",
              "Medical Visa",
            ].map((type) => (
              <div
                key={type}
                className="relative p-8 rounded-xl border hover:border-red-500 transition"
              >
                <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full" />
                <h3 className="font-semibold text-lg">{type}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Visa Application Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              "Consultation & Assessment",
              "Document Preparation",
              "Application Submission",
              "Decision & Collection",
            ].map((step, index) => (
              <div
                key={step}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition text-center"
              >
                <div className="w-12 h-12 mx-auto mb-5 flex items-center justify-center rounded-full bg-red-600 text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Why Travelers Trust Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "High visa approval success rate",
              "Up-to-date embassy requirements",
              "Personalized application support",
              "Fast & transparent processing",
              "Experienced visa consultants",
              "Trusted travel partner",
            ].map((item) => (
              <div
                key={item}
                className="p-8 border-l-4 border-red-500 bg-gray-50 rounded-lg"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-linear-to-r from-red-600 to-red-700 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Visa Journey Today
          </h2>

          <p className="text-white/90 mb-10">
            Let our experts handle your visa process while you plan
            your travels with confidence.
          </p>

          <Link
            href="/contact"
            className="bg-white text-red-600 px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            Apply with Confidence
          </Link>
        </div>
      </section>

    </main>
  )
}