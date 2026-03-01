import { visaCountries } from '@/data/visaCountries'

export type Destination = {
    name: string
    slug: string
    tagline: string
    image: string
    highlight: string
  }

  export type DestinationDetail = {
    name: string
    slug: string
    heroImage: string
    intro: string
    highlights: string[]
    experiences: string[]
  }

    export type DestinationImageSlot = {
      title: string
      image: string
      caption: string
    }
  
    const curatedDestinations: Destination[] = [
    {
      name: 'Kenya',
      slug: 'kenya',
      tagline: 'Safari, culture & coastal escapes',
      image: '/destinations/Kenya.jpg',
      highlight: 'Wildlife • Beaches • Heritage',
    },
    {
      name: 'Thailand',
      slug: 'thailand',
      tagline: 'Exotic islands & vibrant nightlife',
      image: '/destinations/thailand.jpg',
      highlight: 'Beaches • Culture • Nightlife',
    },
    {
      name: 'Singapore',
      slug: 'singapore',
      tagline: 'Luxury, shopping & skyline views',
      image: '/destinations/singapore.jpg',
      highlight: 'Luxury • City Life • Food',
    },
    {
      name: 'Dubai',
      slug: 'dubai',
      tagline: 'Luxury shopping & desert adventures',
      image: '/destinations/dubai.jpg',
      highlight: 'Luxury • Desert • Nightlife',
    },
    {
      name: 'Europe',
      slug: 'europe',
      tagline: 'Multiple countries, one journey',
      image: '/destinations/europe.jpg',
      highlight: 'Culture • History • Cities',
    },
    {
      name: 'USA',
      slug: 'usa',
      tagline: 'Iconic cities & diverse landscapes',
      image: '/destinations/usa.jpg',
      highlight: 'Cities • Nature • Entertainment',
    },
    {
      name: 'Maldives',
      slug: 'maldives',
      tagline: 'Luxury overwater escapes',
      image: '/destinations/maldives.jpg',
      highlight: 'Luxury • Beaches • Honeymoon',
    },
    {
      name: 'South Africa',
      slug: 'south-africa',
      tagline: 'Adventure, wine & wildlife',
      image: '/destinations/south-africa.jpg',
      highlight: 'Safari • Wine • Adventure',
    },
  ]

  const curatedDestinationDetails: DestinationDetail[] = [
    {
      name: 'Kenya',
      slug: 'kenya',
      heroImage: '/destinations/Kenya.jpg',
      intro: 'From world-famous safaris to white-sand beaches, Kenya offers unforgettable nature, culture, and adventure in one journey.',
      highlights: ['Maasai Mara Safaris', 'Diani Beach Escapes', 'Nairobi City Tours', 'Cultural Village Visits'],
      experiences: [
        'Witness the Big Five on guided game drives and sunrise safaris.',
        'Relax along Kenya’s coastline with snorkeling, dhow rides, and oceanfront stays.',
        'Explore local markets, cuisine, and heritage-rich communities with expert local guides.',
      ],
    },
    {
      name: 'Thailand',
      slug: 'thailand',
      heroImage: '/destinations/thailand.jpg',
      intro: 'Thailand blends tropical islands, rich temples, and vibrant nightlife, perfect for both relaxation and exploration.',
      highlights: ['Phuket & Krabi Beaches', 'Bangkok Shopping', 'Island Hopping', 'Temple Trails'],
      experiences: [
        'Enjoy crystal-clear beaches and boat tours across iconic islands.',
        'Discover Thai street food, night markets, and cultural performances.',
        'Visit ancient temples and scenic viewpoints for memorable photo moments.',
      ],
    },
    {
      name: 'Singapore',
      slug: 'singapore',
      heroImage: '/destinations/singapore.jpg',
      intro: 'Singapore offers futuristic city life, world-class attractions, and a clean, family-friendly travel experience.',
      highlights: ['Marina Bay', 'Sentosa Adventures', 'Universal Studios', 'Luxury Shopping'],
      experiences: [
        'Explore iconic skyline attractions and waterfront dining experiences.',
        'Enjoy family entertainment parks and immersive city attractions.',
        'Experience multicultural cuisine and premium retail districts.',
      ],
    },
    {
      name: 'Dubai',
      slug: 'dubai',
      heroImage: '/destinations/dubai.jpg',
      intro: 'Dubai combines luxury hospitality, desert adventures, and iconic architecture for a premium travel experience.',
      highlights: ['Burj Khalifa Views', 'Desert Safaris', 'Luxury Malls', 'Yacht Cruises'],
      experiences: [
        'Enjoy desert dune bashing, cultural camps, and evening entertainment.',
        'Visit landmark attractions and world-famous shopping destinations.',
        'Relax in luxury hotels with curated experiences for couples and families.',
      ],
    },
    {
      name: 'Europe',
      slug: 'europe',
      heroImage: '/destinations/europe.jpg',
      intro: 'Travel across multiple European cities and cultures with curated itineraries designed for comfort and discovery.',
      highlights: ['Historic Landmarks', 'Scenic Rail Routes', 'City Breaks', 'Museum & Art Tours'],
      experiences: [
        'Discover iconic architecture, castles, and heritage districts.',
        'Enjoy multi-city experiences with efficient transport planning.',
        'Taste regional cuisine and explore rich arts and culture.',
      ],
    },
    {
      name: 'USA',
      slug: 'usa',
      heroImage: '/destinations/usa.jpg',
      intro: 'The USA delivers a diverse mix of iconic cities, national parks, entertainment, and shopping experiences.',
      highlights: ['New York City', 'Los Angeles', 'Theme Parks', 'National Parks'],
      experiences: [
        'Explore famous city landmarks, museums, and entertainment districts.',
        'Plan scenic road trips and outdoor adventures through top parks.',
        'Combine shopping, sports, and culinary experiences in one itinerary.',
      ],
    },
    {
      name: 'Maldives',
      slug: 'maldives',
      heroImage: '/destinations/maldives.jpg',
      intro: 'The Maldives is ideal for luxury escapes, honeymoon travel, and tranquil oceanfront relaxation.',
      highlights: ['Overwater Villas', 'Snorkeling & Diving', 'Private Island Resorts', 'Sunset Cruises'],
      experiences: [
        'Relax in exclusive island resorts with private beach access.',
        'Enjoy marine adventures including snorkeling and scuba diving.',
        'Experience romantic dining and curated wellness activities.',
      ],
    },
    {
      name: 'South Africa',
      slug: 'south-africa',
      heroImage: '/destinations/south-africa.jpg',
      intro: 'South Africa offers dramatic coastlines, world-class safaris, and vibrant city experiences in one destination.',
      highlights: ['Cape Town Views', 'Game Reserves', 'Garden Route', 'Wine Country'],
      experiences: [
        'Explore scenic coastal drives and iconic mountain landscapes.',
        'Enjoy wildlife safaris in renowned national parks and reserves.',
        'Visit vineyards, cultural hotspots, and adventure-rich regions.',
      ],
    },
  ]

  const curatedDestinationSlugs = new Set(curatedDestinations.map((item) => item.slug))
  const curatedDetailSlugs = new Set(curatedDestinationDetails.map((item) => item.slug))

  const visaBackedDestinations: Destination[] = Object.entries(visaCountries)
    .filter(([slug]) => !curatedDestinationSlugs.has(slug))
    .map(([slug, country]) => ({
      name: country.name,
      slug,
      tagline: country.tagline,
      image: country.heroImage,
      highlight: country.visaTypes
        .slice(0, 3)
        .map((type) => type.replace(' Visa', ''))
        .join(' • '),
    }))

  const visaBackedDestinationDetails: DestinationDetail[] = Object.entries(visaCountries)
    .filter(([slug]) => !curatedDetailSlugs.has(slug))
    .map(([slug, country]) => ({
      name: country.name,
      slug,
      heroImage: country.heroImage,
      intro: `${country.tagline}. Plan your ${country.name} journey with guided support from consultation to travel readiness.`,
      highlights: country.visaTypes.slice(0, 4),
      experiences: [
        `Tailored trip planning for ${country.name} based on your travel purpose, dates, and preferred pace.`,
        `Pre-travel guidance including documentation, timing, and destination-specific preparation support.`,
        `Flexible itinerary structuring with options for leisure, business, and family-focused travel.`
      ],
    }))

  export const destinations: Destination[] = [
    ...curatedDestinations,
    ...visaBackedDestinations,
  ]

  export const destinationDetails: DestinationDetail[] = [
    ...curatedDestinationDetails,
    ...visaBackedDestinationDetails,
  ]

  export const destinationImageSlots: Record<string, DestinationImageSlot[]> = {
    kenya: [
      {
        title: 'Safari Game Drives',
        image: '/destinations/safari-game-drives.jpg',
        caption: 'Big Five encounters and dramatic savannah landscapes.',
      },
      {
        title: 'Coastal Escapes',
        image: '/destinations/coastal-escapes.jpg',
        caption: 'White-sand beaches, dhow experiences, and oceanfront stays.',
      },
      {
        title: 'Culture & Heritage',
        image: '/destinations/culture-heritage.jpg',
        caption: 'Authentic community visits, local cuisine, and rich traditions.',
      },
    ],
    thailand: [
      {
        title: 'Island Views',
        image: '/destinations/island-views.jpg',
        caption: 'Tropical coastlines, clear waters, and scenic boat trips.',
      },
      {
        title: 'Temple Trails',
        image: '/destinations/temple-trails.jpg',
        caption: 'Ancient temples and cultural landmarks across vibrant cities.',
      },
      {
        title: 'Night Markets',
        image: '/destinations/night-markets.jpg',
        caption: 'Street food, shopping, and colorful evening experiences.',
      },
    ],
    singapore: [
      {
        title: 'Skyline Icons',
        image: '/destinations/skyline-icons.jpg',
        caption: 'Marina skyline, futuristic architecture, and waterfront views.',
      },
      {
        title: 'Family Attractions',
        image: '/destinations/family-attractions.jpg',
        caption: 'Sentosa adventures and world-class entertainment parks.',
      },
      {
        title: 'Luxury Lifestyle',
        image: '/destinations/luxury-lifestyle.jpg',
        caption: 'Premium shopping, fine dining, and refined city comfort.',
      },
    ],
    dubai: [
      {
        title: 'Modern Landmarks',
        image: '/destinations/modern-landmarks.jpg',
        caption: 'Iconic towers, luxury malls, and panoramic city views.',
      },
      {
        title: 'Desert Adventures',
        image: '/destinations/desert-adventures.jpg',
        caption: 'Dune safaris, sunset camps, and immersive cultural moments.',
      },
      {
        title: 'Premium Stay',
        image: '/destinations/premium-stay.jpg',
        caption: 'Five-star hospitality with curated leisure experiences.',
      },
    ],
    europe: [
      {
        title: 'Historic Cities',
        image: '/destinations/historic-cities.jpg',
        caption: 'Timeless architecture, museums, and cultural landmarks.',
      },
      {
        title: 'Scenic Routes',
        image: '/destinations/scenic-routes.jpg',
        caption: 'Beautiful rail journeys and postcard-perfect viewpoints.',
      },
      {
        title: 'Culinary Journeys',
        image: '/destinations/culinary-journeys.jpg',
        caption: 'Local flavors, classic cafés, and unforgettable dining.',
      },
    ],
    usa: [
      {
        title: 'Iconic Skylines',
        image: '/destinations/iconic-skylines.jpg',
        caption: 'Legendary cityscapes, landmarks, and urban attractions.',
      },
      {
        title: 'Entertainment Hubs',
        image: '/destinations/entertainment-hubs.jpg',
        caption: 'Theme parks, live events, and dynamic nightlife scenes.',
      },
      {
        title: 'Nature Escapes',
        image: '/destinations/nature-escapes.jpg',
        caption: 'National parks, road trips, and outdoor adventure trails.',
      },
    ],
    maldives: [
      {
        title: 'Overwater Luxury',
        image: '/destinations/overwater-luxury.jpg',
        caption: 'Private villas and tranquil oceanfront relaxation.',
      },
      {
        title: 'Marine Adventures',
        image: '/destinations/marine-adventures.jpg',
        caption: 'Snorkeling, diving, and vibrant coral reef exploration.',
      },
      {
        title: 'Romantic Moments',
        image: '/destinations/romantic-moments.jpg',
        caption: 'Sunset cruises, spa rituals, and curated honeymoon experiences.',
      },
    ],
    'south-africa': [
      {
        title: 'Scenic Coastlines',
        image: '/destinations/scenic-coastlines.jpg',
        caption: 'Ocean drives, mountain views, and dramatic natural beauty.',
      },
      {
        title: 'Safari Experiences',
        image: '/destinations/safari-experiences.jpg',
        caption: 'World-class game reserves and wildlife-rich adventures.',
      },
      {
        title: 'Wine & Culture',
        image: '/destinations/wine-culture.jpg',
        caption: 'Vineyard tours, heritage neighborhoods, and local cuisine.',
      },
    ],
  }