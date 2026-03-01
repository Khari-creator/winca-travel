// src/app/page.tsx

import HeroSection from "../../components/sections/HeroSection"
import ServicesSection from "../../components/sections/SevicesSection"
import WhyChooseUsSection from "../../components/sections/WhyChooseUsSection"
import PopularVisaDestinationsSection from "../../components/sections/PopularVisaDestinationsSection"
import TestimonialsSection from "../../components/sections/estimonialsSection"

export default function HomePage() {
  return (
    <>
      {/* Full Hero Section */}
      <HeroSection />

      {/* Core Services */}
      <ServicesSection />

      {/* Popular Visa Destinations */}
      <PopularVisaDestinationsSection />

      {/* Why Chooses Us Section*/}
      <WhyChooseUsSection/>
      {/* Testimonial Section */}
      <TestimonialsSection/>
    </>
  )
}