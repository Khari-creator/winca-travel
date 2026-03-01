'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react"
import { Send, CalendarDays, Mail, Phone, User, Globe } from "lucide-react"

type VisaFormData = {
  destination: string
  visaType: string
  travelDate: string
  fullName: string
  email: string
  phone: string
}

const visaDestinationCards = [
  {
    name: "United Kingdom",
    slug: "uk",
    description:
      "Tourist, business & student visas with guided application support.",
    image: "/visas/uk.jpg",
    accent: "from-blue-600 to-blue-400",
  },
  {
    name: "Schengen (Europe)",
    slug: "schengen",
    description:
      "Travel across multiple European countries with a single visa.",
    image: "/visas/schengen.jpg",
    accent: "from-indigo-600 to-purple-500",
  },
  {
    name: "United States",
    slug: "usa",
    description:
      "Professional assistance for B1/B2, student & work visas.",
    image: "/visas/usa.jpg",
    accent: "from-red-600 to-red-400",
  },
  {
    name: "Dubai (UAE)",
    slug: "dubai",
    description:
      "Fast tourist & business visa processing for Dubai travel.",
    image: "/visas/dubai.jpg",
    accent: "from-amber-500 to-orange-400",
  },
  {
    name: "Canada",
    slug: "canada",
    description:
      "Visitor, student & work visa application support.",
    image: "/visas/canada.jpg",
    accent: "from-rose-600 to-pink-500",
  },
  {
    name: "Australia",
    slug: "australia",
    description:
      "Guided applications for tourism, study & skilled visas.",
    image: "/visas/australia.jpg",
    accent: "from-teal-600 to-emerald-500",
  },
]

const destinations = [
  "United Kingdom",
  "Schengen (Europe)",
  "United States",
  "Dubai (UAE)",
  "Canada",
  "Australia",
  "South Africa",
]

const visaTypes = [
  "Tourist Visa",
  "Business Visa",
  "Transit Visa",
  "Conference Visa",
  "Student Visa",
  "Work Visa",
]

const formInputClassName = "w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-red-600 focus:ring-3 focus:ring-red-600/15"

export default function PopularVisaDestinationsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wide">
            Visa Destinations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Popular Visa Destinations
          </h2>
          <p className="text-gray-600">
            We assist travelers with visa applications for the world’s most
            visited destinations, ensuring a smooth and successful process.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visaDestinationCards.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-md">
                  {item.name}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <p className="text-sm text-gray-600 mb-6 grow">
                  {item.description}
                </p>

                <Link
                  href={`/visas/${item.slug}`}
                  className="inline-flex items-center justify-center text-sm font-semibold text-secondary border border-secondary rounded-md py-2 hover:bg-secondary hover:text-white transition"
                >
                  View Visa Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-24 mb-8 h-px bg-linear-to-r from-transparent via-gray-300 to-transparent" />

        <VisaInquiryForm />
      </div>


    </section>
  )
}

function VisaInquiryForm() {
  const [form, setForm] = useState<VisaFormData>({
    destination: "",
    visaType: "",
    travelDate: "",
    fullName: "",
    email: "",
    phone: "",
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Visa Request:", form)
  }

  return (
    <section className="relative mt-32">
      <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-red-700 via-red-600 to-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 text-white">
          <span className="inline-block mb-4 px-5 py-1.5 rounded-full bg-white/10 text-red-200 text-sm font-semibold">
            Visa Application
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Visa Application
          </h3>
          <p className="max-w-2xl mx-auto text-white/80">
            Submit your travel details and our visa consultants will guide you
            step by step through the application process.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 md:p-12 grid md:grid-cols-2 gap-6"
        >
          <FormField label="Destination Country" icon={<Globe size={18} />}>
            <select
              name="destination"
              value={form.destination}
              onChange={handleChange}
              required
              className={formInputClassName}
            >
              <option value="">Select destination</option>
              {destinations.map((destination) => (
                <option key={destination}>{destination}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Visa Type" icon={<Globe size={18} />}>
            <select
              name="visaType"
              value={form.visaType}
              onChange={handleChange}
              required
              className={formInputClassName}
            >
              <option value="">Select visa type</option>
              {visaTypes.map((visaType) => (
                <option key={visaType}>{visaType}</option>
              ))}
            </select>
          </FormField>

          <FormField label="Intended Travel Date" icon={<CalendarDays size={18} />}>
            <input
              type="date"
              name="travelDate"
              value={form.travelDate}
              onChange={handleChange}
              required
              className={formInputClassName}
            />
          </FormField>

          <FormField label="Full Name" icon={<User size={18} />}>
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={form.fullName}
              onChange={handleChange}
              required
              className={formInputClassName}
            />
          </FormField>

          <FormField label="Email Address" icon={<Mail size={18} />}>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              className={formInputClassName}
            />
          </FormField>

          <FormField label="Phone Number" icon={<Phone size={18} />}>
            <input
              type="tel"
              name="phone"
              placeholder="+254 7XX XXX XXX"
              value={form.phone}
              onChange={handleChange}
              required
              className={formInputClassName}
            />
          </FormField>

          <div className="md:col-span-2 mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-14 py-4 rounded-xl font-semibold shadow-xl transition"
            >
              Submit Visa Request
              <Send size={18} />
            </button>

            <p className="mt-4 text-sm text-gray-500">
              We’ll contact you within one business day.
            </p>
          </div>
        </form>
      </div>

    </section>
  )
}

function FormField({
  label,
  icon,
  children,
}: {
  label: string
  icon: ReactNode
  children: ReactNode
}) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-gray-800">
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
        <div className="pl-10">{children}</div>
      </div>
    </div>
  )
}