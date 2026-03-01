import Link from "next/link"
import {
  ShieldCheck,
  Briefcase,
  Clock,
  Headset,
} from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Trusted & Reliable Process",
    description:
      "We follow verified procedures and embassy guidelines to ensure every application is handled accurately and professionally.",
  },
  {
    icon: Briefcase,
    title: "Experienced Visa Consultants",
    description:
      "Our team understands visa requirements across multiple countries and provides clear guidance at every stage of your application.",
  },
  {
    icon: Clock,
    title: "Fast & Efficient Handling",
    description:
      "We minimize delays by preparing documents correctly from the start, saving you time and unnecessary stress.",
  },
  {
    icon: Headset,
    title: "Personalized Client Support",
    description:
      "You receive one-on-one assistance tailored to your travel purpose, destination, and timeline.",
  },
]

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Your Trusted Travel & Visa Partner
          </h2>
          <p className="text-gray-600">
            We combine expertise, transparency, and personalized service to
            deliver smooth visa processing and reliable travel solutions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition relative overflow-hidden"
            >
              {/* Red Accent Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600" />

              {/* Icon */}
              <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-red-600/10 text-red-600 group-hover:bg-red-600 group-hover:text-white transition">
                <item.icon size={26} />
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 bg-primary rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Travel with Confidence?
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Let our experts guide you through the visa and travel process with
            clarity, professionalism, and care.
          </p>

          <Link
            href="/contact"
            className="inline-flex bg-red-600 px-8 py-3 rounded-md text-sm font-semibold hover:bg-red-700 transition"
          >
            Talk to Our Experts
          </Link>
        </div>

      </div>
    </section>
  )
}