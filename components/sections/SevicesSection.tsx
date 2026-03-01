import Link from "next/link"
import {
  PenTool,
  Plane,
  Hotel,
  Map,
  FileText,
  FileCheck,
  Send,
  Stamp,
  CheckCircle,
} from "lucide-react"

const services = [
  {
    icon: PenTool,
    title: "Visa Application Services",
    description:
      "Expert assistance for tourist, business, student, and work visas. We guide you through documentation, submission, and approvals with accuracy and care.",
    href: "/visas",
    fix: true,
  },
  {
    icon: Plane,
    title: "Flight Ticket Booking",
    description:
      "Affordable and flexible flight bookings for local and international destinations with trusted airline partners.",
    href: "/flights",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "Secure hotel bookings worldwide, tailored to your travel budget and comfort preferences.",
    href: "/hotels",
  },
  {
    icon: Map,
    title: "Local & International Tours",
    description:
      "Carefully curated tour packages offering memorable experiences and seamless travel planning.",
    href: "/tours",
  },
  {
    icon: FileText,
    title: "E-Citizen & Documentation",
    description:
      "Fast and reliable processing of passports, permits, certificates, and government e-services.",
    href: "/e-citizen",
  },
]

const visaSteps = [
  {
    icon: FileCheck,
    title: "Assessment & Consultation",
    description:
      "We review your travel purpose and eligibility to recommend the most suitable visa option.",
  },
  {
    icon: PenTool,
    title: "Document Preparation",
    description:
      "Our experts guide you through accurate document preparation to avoid delays or rejection.",
  },
  {
    icon: Send,
    title: "Application Submission",
    description:
      "We submit your application correctly and track its progress with the relevant authorities.",
  },
  {
    icon: Stamp,
    title: "Visa Approval & Guidance",
    description:
      "Once approved, we advise you on next steps including travel readiness and compliance.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Complete Travel & Visa Solutions
          </h2>
          <p className="text-gray-600">
            From visa processing to travel planning, we deliver professional,
            stress-free services designed to support your journey from start to finish.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition flex flex-col"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-secondary/15 to-secondary/5 ring-1 ring-secondary/20 flex items-center justify-center">
                  <service.icon
                    size={28}
                    className={`text-secondary ${
                      service.fix ? "-translate-y-px" : ""
                    }`}
                  />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed grow">
                {service.description}
              </p>

              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-red-600 transition"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        {/* Visa Process */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">
              Visa Process
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mt-3 mb-4">
              How Our Visa Process Works
            </h3>
            <p className="text-gray-600">
              A clear, guided process designed to give you confidence and clarity at every stage.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {visaSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold text-sm shadow">
                  {index + 1}
                </div>

                <div className="mb-6 w-14 h-14 rounded-full bg-red-600/10 text-red-600 flex items-center justify-center">
                  <step.icon size={26} />
                </div>

                <h4 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Visa Application?
          </h3>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            Speak with our consultants today and begin your journey with confidence and clarity.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 px-8 py-3 rounded-md text-sm font-semibold hover:bg-red-700 transition"
          >
            Get Expert Assistance
            <CheckCircle size={16} />
          </Link>
        </div>

      </div>
    </section>
  )
}