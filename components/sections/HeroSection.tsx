'use client'

import { useEffect, useState } from "react"
import Link from "next/link"

const slides = [
  {
    image: "/hero/kenya.jpg",
    location: "Kenya",
    headline: "Wild Safaris & Coastal Escapes",
    subtext:
      "Experience breathtaking safaris, pristine beaches, and rich culture across Kenya’s most iconic destinations.",
  },
  {
    image: "/hero/dubai.jpg",
    location: "Dubai, UAE",
    headline: "Luxury Escapes & Desert Adventures",
    subtext:
      "World-class hotels, iconic skylines, shopping, and unforgettable desert safaris crafted for comfort and style.",
  },
  {
    image: "/hero/thailand.jpg",
    location: "Thailand",
    headline: "Tropical Beaches & Cultural Wonders",
    subtext:
      "From vibrant cities to serene islands, enjoy exotic cuisine, temples, beaches, and unforgettable nightlife.",
  },
  {
    image: "/hero/singapore.jpg",
    location: "Singapore",
    headline: "Modern City, Timeless Experiences",
    subtext:
      "A perfect blend of luxury, culture, shopping, and futuristic architecture in Asia’s cleanest city.",
  },
   {
    image: "/hero/maldives.jpg",
    location: "Maldives",
    headline: "Pure Bliss in Tropical Paradise",
    subtext:
      "Crystal-clear waters, private resorts, and serene beaches designed for relaxation and romance.",
  },
  {
    image: "/hero/paris.jpg",
    location: "Paris, France",
    headline: "Romance, Culture & Timeless Beauty",
    subtext:
      "Walk historic streets, explore iconic landmarks, and indulge in world-class cuisine and art.",
  },
  {
    image: "/hero/south-africa.jpg",
    location: "South Africa",
    headline: "Adventure, Wildlife & Scenic Beauty",
    subtext:
      "From thrilling safaris to coastal drives and vibrant cities, discover Africa’s diverse experiences.",
  },
]

export default function HeroSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 6500)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[active]

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-3xl text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.55)]">

            {/* Location Badge */}
            <span className="inline-block mb-5 px-5 py-1.5 rounded-full text-sm font-semibold bg-red-600 text-white">
              {slide.location}
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              {slide.headline}
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mb-10 leading-relaxed">
              {slide.subtext}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/tours"
                className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-md text-sm font-semibold transition"
              >
                Explore Tour Packages
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-white/70 text-white px-10 py-4 rounded-md text-sm font-semibold hover:bg-white hover:text-black transition"
              >
                Plan My Vacation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              active === index
                ? "w-10 bg-red-600"
                : "w-4 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}