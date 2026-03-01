import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah W.",
    location: "Nairobi, Kenya",
    visa: "UK Tourist Visa",
    message:
      "Winca Tours made my UK visa process smooth and stress-free. They guided me through every document and I got approved on the first attempt.",
  },
  {
    name: "Daniel M.",
    location: "Thika, Kenya",
    visa: "Schengen Visa",
    message:
      "Professional, responsive, and honest. I highly recommend them for anyone applying for a Schengen visa. Very reliable team.",
  },
  {
    name: "Aisha K.",
    location: "Mombasa, Kenya",
    visa: "Dubai Visa",
    message:
      "Fast processing and great customer care. I got my Dubai visa in time for my trip. I will definitely use them again.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-600 font-semibold text-sm uppercase tracking-wide">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
            Trusted by Travelers Across Kenya
          </h2>
          <p className="text-gray-600">
            Hear from clients who successfully traveled with our expert visa and travel support.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-5 left-6 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center shadow">
                <Quote size={18} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-red-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-sm text-gray-700 leading-relaxed mb-6">
                “{item.message}”
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-gray-500">
                  {item.location} • {item.visa}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}