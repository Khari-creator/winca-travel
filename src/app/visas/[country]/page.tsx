import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { visaCountries } from "@/data/visaCountries"

const globalVisaTypes = [
  "Tourist Visa",
  "Business Visa",
  "Transit Visa",
  "Conference Visa",
  "Student Visa",
  "Work Visa",
  "Family Visa",
  "Medical Visa",
] as const

function getVisaTypeDetails(type: string, countryName: string) {
  const lowerType = type.toLowerCase()

  if (lowerType.includes("tourist")) {
    return {
      overview: `Best for holidays, family visits, and short leisure trips to ${countryName}.`,
      bestFor: "Travelers planning sightseeing, vacations, or visiting relatives.",
      commonUse: "Hotels, return flights, and proof of funds are typically reviewed.",
    }
  }

  if (lowerType.includes("business")) {
    return {
      overview: `Designed for meetings, trade visits, and professional events in ${countryName}.`,
      bestFor: "Business owners, employees, and delegates attending formal engagements.",
      commonUse: "Invitation letters, company details, and trip purpose documentation are important.",
    }
  }

  if (lowerType.includes("transit")) {
    return {
      overview: `For travelers passing through ${countryName} en route to another destination.`,
      bestFor: "Passengers with connecting flights and short stopovers.",
      commonUse: "Confirmed onward travel and timing between connections are key checks.",
    }
  }

  if (lowerType.includes("conference")) {
    return {
      overview: `Suitable for conferences, seminars, and official professional gatherings in ${countryName}.`,
      bestFor: "Attendees, speakers, and delegates for organized events.",
      commonUse: "Event registration, invitation proof, and sponsor details strengthen applications.",
    }
  }

  if (lowerType.includes("student")) {
    return {
      overview: `Ideal for academic programs and training opportunities in ${countryName}.`,
      bestFor: "Applicants with admission letters from approved institutions.",
      commonUse: "Admission confirmation and financial support records are commonly required.",
    }
  }

  if (lowerType.includes("work")) {
    return {
      overview: `Intended for employment-based travel and approved job placements in ${countryName}.`,
      bestFor: "Professionals relocating temporarily or long-term for work.",
      commonUse: "Employment contracts and sponsor documentation are generally reviewed.",
    }
  }

  if (lowerType.includes("family") || lowerType.includes("dependent") || lowerType.includes("spouse")) {
    return {
      overview: `For reunification and family-linked travel applications to ${countryName}.`,
      bestFor: "Spouses, children, and dependents joining or visiting family members.",
      commonUse: "Relationship evidence, sponsor status, and financial support records are commonly required.",
    }
  }

  if (lowerType.includes("medical") || lowerType.includes("treatment")) {
    return {
      overview: `Used for medical consultations, treatment, and specialized healthcare visits in ${countryName}.`,
      bestFor: "Applicants traveling for planned treatment, procedures, or follow-up care.",
      commonUse: "Medical appointment letters, treatment plans, and proof of payment or sponsorship are often reviewed.",
    }
  }

  if (lowerType.includes("visit") || lowerType.includes("visitor")) {
    return {
      overview: `A short-stay visitor category for approved personal travel to ${countryName}.`,
      bestFor: "Individuals visiting friends or relatives with defined travel dates.",
      commonUse: "Host information, invitation details, and return travel plans are typically assessed.",
    }
  }

  return {
    overview: `A dedicated ${type.toLowerCase()} pathway for approved travel to ${countryName}.`,
    bestFor: "Applicants with a clear travel purpose and complete documentation.",
    commonUse: "Final requirements vary by embassy and applicant profile.",
  }
}

interface PageProps {
  params: Promise<{
    country: keyof typeof visaCountries
  }>
}

export default async function CountryVisaPage({ params }: PageProps) {
  const { country } = await params
  const data = visaCountries[country]

  if (!data) return notFound()

  const showcasedTypes: string[] = Array.from(new Set(data.visaTypes as readonly string[]))
  const additionalTypes = globalVisaTypes.filter((type) => !showcasedTypes.includes(type))

  return (
    <main className="bg-white text-gray-800">

      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] flex items-center overflow-hidden">
        <Image
          src={data.heroImage}
          alt={data.name}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <span className="inline-block mb-4 px-4 py-1 bg-red-600/20 text-red-400 text-sm font-semibold rounded-full">
            {data.name} Visa Services
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {data.name} Visa <br />
            <span className="text-red-500">Made Easy</span>
          </h1>

          <p className="max-w-2xl text-lg text-gray-200 mb-8">
            {data.tagline}
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-semibold transition"
            >
              Apply Now
            </Link>

            <Link
              href="/visas"
              className="border border-white/30 hover:border-red-500 px-8 py-4 rounded-md font-semibold transition"
            >
              Back to Visas
            </Link>
          </div>
        </div>
      </section>

      {/* ================= VISA TYPES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Visa Types Available
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Each visa type serves a specific travel purpose. Review the details below to understand who it is for,
            what it is commonly used for, and how we support your application.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {showcasedTypes.map((type, index) => {
              const details = getVisaTypeDetails(type, data.name)

              return (
              <div
                key={type}
                className="p-8 rounded-2xl border bg-gray-50/60 hover:bg-white hover:border-red-400 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700 text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="text-xs font-medium text-gray-500">Avg. processing: {data.processingTime}</span>
                </div>

                <h3 className="font-semibold text-xl text-gray-900 mb-3">{type}</h3>
                <p className="text-sm text-gray-700 mb-5 leading-relaxed">{details.overview}</p>

                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold text-gray-900">Best for:</span> {details.bestFor}
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">What is reviewed:</span> {details.commonUse}
                  </div>
                </div>
              </div>
              )
            })}
          </div>

          {additionalTypes.length > 0 && (
            <>
              <h3 className="text-2xl font-bold mt-16 mb-4 text-center">Other Visa Categories We Also Assess</h3>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
                These options are commonly supported depending on your profile, destination rules, and documentation.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {additionalTypes.map((type) => {
                  const details = getVisaTypeDetails(type, data.name)

                  return (
                    <div
                      key={type}
                      className="p-6 rounded-xl border bg-white hover:border-red-300 hover:shadow-md transition"
                    >
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{type}</h4>
                      <p className="text-sm text-gray-700 leading-relaxed">{details.overview}</p>
                    </div>
                  )
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* ================= REQUIREMENTS ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Requirements & Documents
            </h2>
            <ul className="space-y-4">
              {data.requirements.map((req) => (
                <li
                  key={req}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-2 h-2 bg-red-500 rounded-full" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-sm border">
            <h3 className="text-xl font-semibold mb-6">
              Processing Information
            </h3>

            <p className="mb-4">
              <strong>Processing Time:</strong><br />
              {data.processingTime}
            </p>

            <p className="mb-8">
              <strong>Service Quote:</strong><br />
              Quote provided after document review.
            </p>

            <Link
              href="/contact"
              className="block text-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Start Application
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-linear-to-r from-red-600 to-red-700 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Apply for {data.name} Visa?
        </h2>

        <p className="max-w-2xl mx-auto mb-10 text-white/90">
          Our visa experts will guide you step-by-step to ensure a smooth and
          successful application.
        </p>

        <Link
          href="/contact"
          className="bg-white text-red-600 px-10 py-4 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          Speak to a Visa Consultant
        </Link>
      </section>

    </main>
  )
}