import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { destinationDetails, destinationImageSlots } from '../data'

type PlaceGuide = {
  name: string
  offers: string
  whyVisit: string
}

const destinationInsights: Record<
  string,
  {
    whyVisit: string[]
    placesToTour: PlaceGuide[]
  }
> = {
  kenya: {
    whyVisit: [
      'Kenya combines world-class wildlife, warm coastal beaches, and rich cultural heritage in one trip.',
      'You can enjoy both luxury and budget-friendly travel experiences with excellent guide support.',
      'It is ideal for first-time Africa travelers as well as returning explorers seeking variety.',
    ],
    placesToTour: [
      {
        name: 'Maasai Mara National Reserve',
        offers: 'Big Five safaris, the Great Migration season, premium lodges, and sunrise game drives.',
        whyVisit: 'It is one of the best safari destinations globally for close wildlife encounters and photography.',
      },
      {
        name: 'Diani Beach',
        offers: 'White-sand beaches, snorkeling, kite surfing, oceanfront resorts, and dhow excursions.',
        whyVisit: 'Perfect for relaxation after safari, with clear waters and excellent coastal hospitality.',
      },
      {
        name: 'Nairobi City & National Park',
        offers: 'City tours, wildlife experiences near town, giraffe centers, and cultural museums.',
        whyVisit: 'You get a rare blend of modern city comfort and wildlife access in a single destination.',
      },
      {
        name: 'Amboseli National Park',
        offers: 'Elephant herds, scenic plains, and iconic views of Mount Kilimanjaro.',
        whyVisit: 'Best choice for dramatic landscapes and memorable safari moments with mountain backdrops.',
      },
    ],
  },
  thailand: {
    whyVisit: [
      'Thailand offers strong value for money with beaches, food, nightlife, and culture all in one itinerary.',
      'It is easy to combine city adventures and tropical island escapes in a short stay.',
    ],
    placesToTour: [
      {
        name: 'Bangkok',
        offers: 'Floating markets, temples, rooftop dining, and modern shopping districts.',
        whyVisit: 'Ideal for vibrant city culture and unforgettable culinary experiences.',
      },
      {
        name: 'Phuket & Krabi',
        offers: 'Island hopping, beach resorts, cliff views, and water sports.',
        whyVisit: 'Great for tropical scenery, adventure, and romantic beach holidays.',
      },
    ],
  },
  singapore: {
    whyVisit: [
      'Singapore is clean, safe, and efficient—perfect for families, business travelers, and first-time Asia visitors.',
      'You get premium attractions, world-class dining, and smooth city movement in a compact destination.',
    ],
    placesToTour: [
      {
        name: 'Marina Bay',
        offers: 'Skyline views, waterfront walks, iconic architecture, and evening light shows.',
        whyVisit: 'Best area to experience modern Singapore at its finest.',
      },
      {
        name: 'Sentosa Island',
        offers: 'Beaches, theme attractions, family entertainment, and resort stays.',
        whyVisit: 'Perfect for leisure, family activities, and relaxed coastal fun.',
      },
    ],
  },
  dubai: {
    whyVisit: [
      'Dubai delivers luxury, convenience, and high-quality experiences year-round.',
      'It combines adventure and premium comfort, making it suitable for couples, families, and business travelers.',
    ],
    placesToTour: [
      {
        name: 'Downtown Dubai',
        offers: 'Burj Khalifa, Dubai Mall, fountains, and premium dining.',
        whyVisit: 'A must-visit district for iconic attractions and upscale city life.',
      },
      {
        name: 'Dubai Desert Reserve',
        offers: '4x4 safaris, cultural camps, camel rides, and sunset dinners.',
        whyVisit: 'Adds authentic Arabian adventure beyond the city skyline.',
      },
    ],
  },
  europe: {
    whyVisit: [
      'Europe gives you diverse cultures, architecture, and cuisine within short travel distances.',
      'Multi-city trips are efficient and ideal for travelers who want variety in one package.',
    ],
    placesToTour: [
      {
        name: 'Paris',
        offers: 'Historic landmarks, river cruises, museums, and fine dining.',
        whyVisit: 'Ideal for art, romance, and timeless cultural experiences.',
      },
      {
        name: 'Rome',
        offers: 'Ancient ruins, iconic plazas, Vatican tours, and local cuisine.',
        whyVisit: 'Perfect for history lovers and immersive city exploration.',
      },
    ],
  },
  usa: {
    whyVisit: [
      'The USA offers broad travel variety—from iconic cities to natural parks and entertainment hubs.',
      'It is suitable for family vacations, shopping trips, road trips, and event-based travel.',
    ],
    placesToTour: [
      {
        name: 'New York City',
        offers: 'Landmarks, Broadway, museums, shopping, and skyline tours.',
        whyVisit: 'Great for fast-paced city experiences and global culture.',
      },
      {
        name: 'Orlando',
        offers: 'Theme parks, family resorts, and entertainment districts.',
        whyVisit: 'Top choice for family-focused travel and amusement experiences.',
      },
    ],
  },
  maldives: {
    whyVisit: [
      'The Maldives is ideal for luxury relaxation, honeymoon escapes, and ocean-based wellness.',
      'It offers privacy, premium service, and some of the world’s clearest waters.',
    ],
    placesToTour: [
      {
        name: 'North Malé Atoll',
        offers: 'Overwater villas, diving spots, and luxury island resorts.',
        whyVisit: 'Best for iconic postcard experiences and romantic stays.',
      },
      {
        name: 'Ari Atoll',
        offers: 'Snorkeling, whale shark sightings, and marine activities.',
        whyVisit: 'Excellent for underwater adventures and nature lovers.',
      },
    ],
  },
  'south-africa': {
    whyVisit: [
      'South Africa combines wildlife, coastline, food, and wine in one high-value destination.',
      'It supports both adventure itineraries and premium lifestyle travel.',
    ],
    placesToTour: [
      {
        name: 'Cape Town',
        offers: 'Table Mountain, coastal views, city tours, and culinary hotspots.',
        whyVisit: 'Perfect for scenic beauty, culture, and urban comfort.',
      },
      {
        name: 'Kruger Region',
        offers: 'Safari lodges, game drives, and rich biodiversity experiences.',
        whyVisit: 'One of the best regions for authentic African wildlife encounters.',
      },
    ],
  },
}

type Props = {
  params: Promise<{
    slug: string
  }>
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params
  const destination = destinationDetails.find(
    (d) => d.slug === slug
  )

  if (!destination) return notFound()

  const insights = destinationInsights[destination.slug]
  const imageSlots = destinationImageSlots[destination.slug] ?? [
    {
      title: `${destination.name} Highlights`,
      image: destination.heroImage,
      caption: 'Signature travel moments curated by our destination experts.',
    },
    {
      title: `${destination.name} Experiences`,
      image: destination.heroImage,
      caption: 'From city tours to nature escapes, tailored to your travel style.',
    },
    {
      title: `${destination.name} Premium Stays`,
      image: destination.heroImage,
      caption: 'Comfort-focused accommodation options with seamless planning support.',
    },
  ]

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative h-[70vh]">
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {destination.name}
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-white/90">
              {destination.intro}
            </p>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Destination Highlights
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destination.highlights.map((item) => (
            <div
              key={item}
              className="p-6 border rounded-xl text-center hover:border-red-500 transition"
            >
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Experiences You’ll Love
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {destination.experiences.map((exp) => (
              <div
                key={exp}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
              >
                {exp}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4 text-center">
          {destination.name} Visual Journey
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Premium image slots to showcase the best views, activities, and stay experiences in {destination.name}.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {imageSlots.map((slot) => (
            <article
              key={slot.title}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="relative h-56">
                <Image
                  src={slot.image}
                  alt={slot.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{slot.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{slot.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {insights ? (
        <>
          <section className="max-w-7xl mx-auto px-6 py-20">
            <h2 className="text-3xl font-bold mb-10 text-center">
              Why Visit {destination.name}
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {insights.whyVisit.map((reason) => (
                <div
                  key={reason}
                  className="rounded-2xl border bg-white p-6 shadow-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 text-sm font-bold inline-flex items-center justify-center mb-4">
                    ✓
                  </div>
                  <p className="text-gray-700 leading-relaxed">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-4 text-center">
                Top Places to Tour in {destination.name}
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Discover where to go, what each place offers, and why it should be on your itinerary.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {insights.placesToTour.map((place) => (
                  <article
                    key={place.name}
                    className="rounded-2xl border bg-white p-8 shadow-sm hover:shadow-md transition"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{place.name}</h3>

                    <div className="space-y-4 text-gray-700">
                      <p>
                        <span className="font-semibold text-gray-900">What it offers:</span> {place.offers}
                      </p>
                      <p>
                        <span className="font-semibold text-gray-900">Why you should visit:</span> {place.whyVisit}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {/* CTA */}
      <section className="bg-linear-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Plan Your {destination.name} Trip
          </h2>

          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Speak to our travel experts to create a personalized itinerary
            tailored to your budget and travel dates.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-white text-red-700 px-12 py-4 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Start Planning →
          </Link>
        </div>
      </section>
    </main>
  )
}