export type TourCategory = 'international' | 'local' | 'honeymoon' | 'group'

export type Tour = {
  title: string
  slug: string
  category: TourCategory
  location: string
  duration: string
  priceFrom: string
  heroImage: string
  gallery: string[]
  overview: string
  highlights: string[]
  itinerary: {
    day: string
    title: string
    description: string
  }[]
  includes: string[]
  excludes: string[]
}

export const categoryMeta: Record<
  TourCategory,
  {
    title: string
    short: string
    audience: string
    heroImage: string
  }
> = {
  international: {
    title: 'International Tours',
    short: 'Full-package international tours with hotel, flight ticket, excursions, and visa support included.',
    audience: 'Perfect for travelers who want stress-free cross-border trips with complete planning handled end-to-end.',
    heroImage: '/destinations/europe.jpg',
  },
  local: {
    title: 'Local Tours',
    short: 'Discover unforgettable getaways close to home with curated local experiences.',
    audience: 'Great for weekend breaks, family retreats, and travelers who want high value without long-haul flights.',
    heroImage: '/destinations/Kenya.jpg',
  },
  honeymoon: {
    title: 'Honeymoon Tours',
    short: 'Romantic, private, and beautifully curated tours for once-in-a-lifetime moments.',
    audience: 'Designed for newlyweds and couples who want intimate, stress-free luxury experiences.',
    heroImage: '/destinations/maldives.jpg',
  },
  group: {
    title: 'Group Tours',
    short: 'Well-organized tours for friends, teams, schools, and shared travel adventures.',
    audience: 'Ideal for group travelers who value convenience, coordination, and cost-effective packages.',
    heroImage: '/destinations/south-africa.jpg',
  },
}

export const tours: Tour[] = [
  {
    title: 'Dubai Full Package Escape',
    slug: 'dubai-city-break',
    category: 'international',
    location: 'Dubai, UAE',
    duration: '5 Days / 4 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/dubai.jpg',
    gallery: ['/destinations/dubai.jpg', '/hero/dubai.jpg', '/destinations/europe.jpg'],
    overview:
      'A complete Dubai package covering flights, premium hotel stay, visa guidance, and curated excursions.',
    highlights: ['Burj Khalifa visit', 'Desert safari + dinner', 'Dubai Marina cruise', 'Shopping & lifestyle experiences'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & City Welcome', description: 'Airport pickup, hotel check-in, and evening city orientation tour.' },
      { day: 'Day 2', title: 'Modern Dubai Icons', description: 'Visit Burj Khalifa, Dubai Mall, and enjoy the fountain show.' },
      { day: 'Day 3', title: 'Desert Adventure', description: 'Afternoon desert safari with dune bashing, camp activities, and dinner.' },
      { day: 'Day 4', title: 'Leisure & Marina', description: 'Free time for shopping followed by sunset marina cruise.' },
      { day: 'Day 5', title: 'Departure', description: 'Hotel checkout and private transfer to the airport.' },
    ],
    includes: ['Return flight ticket', '4-night hotel stay', 'Visa processing support', 'Guided city excursions', 'Desert safari package', 'Airport transfers'],
    excludes: ['Travel insurance', 'Personal shopping expenses', 'Optional premium activities not listed'],
  },
  {
    title: 'Thailand Full Package Explorer',
    slug: 'thailand-full-package-explorer',
    category: 'international',
    location: 'Bangkok • Phuket',
    duration: '6 Days / 5 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/thailand.jpg',
    gallery: ['/destinations/thailand.jpg', '/hero/thailand.jpg', '/destinations/singapore.jpg'],
    overview:
      'A full-package Thailand tour with return tickets, hotel, guided excursions, and visa assistance support.',
    highlights: ['Bangkok city tour', 'Island excursion day', 'Cultural temple visits', 'Beach leisure experiences'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Bangkok', description: 'Airport pickup, hotel check-in, and evening city orientation.' },
      { day: 'Day 2', title: 'Bangkok Landmarks', description: 'Guided city highlights and cultural temple trail.' },
      { day: 'Day 3', title: 'Transfer to Phuket', description: 'Domestic transfer and leisure at the beach destination.' },
      { day: 'Day 4', title: 'Island Excursion', description: 'Boat excursion with scenic stops and curated activities.' },
      { day: 'Day 5', title: 'Free Day', description: 'Leisure, shopping, and optional spa or nightlife experience.' },
      { day: 'Day 6', title: 'Departure', description: 'Checkout and transfer for return flight.' },
    ],
    includes: ['Return flight ticket', '5-night hotel stay', 'Visa processing support', 'Guided excursions', 'Airport transfers', 'Daily breakfast'],
    excludes: ['Travel insurance', 'Lunch and dinner', 'Personal expenses', 'Optional add-on activities'],
  },
  {
    title: 'Singapore Full Package Discovery',
    slug: 'singapore-full-package-discovery',
    category: 'international',
    location: 'Singapore',
    duration: '5 Days / 4 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/singapore.jpg',
    gallery: ['/destinations/singapore.jpg', '/hero/singapore.jpg', '/destinations/dubai.jpg'],
    overview:
      'A premium Singapore package including flights, city hotel stay, key excursions, and visa support process.',
    highlights: ['Marina Bay tour', 'Sentosa experience', 'City highlights pass', 'Shopping & lifestyle stops'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Check-in', description: 'Airport transfer, hotel check-in, and evening at leisure.' },
      { day: 'Day 2', title: 'City Discovery', description: 'Guided city tour with key skyline and waterfront attractions.' },
      { day: 'Day 3', title: 'Sentosa Day', description: 'Entertainment and leisure experiences in Sentosa.' },
      { day: 'Day 4', title: 'Flexible Day', description: 'Shopping and optional attractions based on your preferences.' },
      { day: 'Day 5', title: 'Departure', description: 'Checkout and transfer for return flight.' },
    ],
    includes: ['Return flight ticket', '4-night hotel stay', 'Visa processing support', 'Guided excursions', 'Airport transfers', 'Daily breakfast'],
    excludes: ['Travel insurance', 'Personal shopping expenses', 'Optional activity upgrades', 'Lunch and dinner'],
  },
  {
    title: 'South Africa Full Package Adventure',
    slug: 'south-africa-full-package-adventure',
    category: 'international',
    location: 'Cape Town • Safari Region',
    duration: '7 Days / 6 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/south-africa.jpg',
    gallery: ['/destinations/south-africa.jpg', '/destinations/Kenya.jpg', '/destinations/europe.jpg'],
    overview:
      'A complete South Africa package with return ticket, hotel stay, safari excursions, and visa support.',
    highlights: ['Cape Town city highlights', 'Safari game drive experience', 'Scenic route exploration', 'Curated cultural stops'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Cape Town', description: 'Airport reception, check-in, and welcome briefing.' },
      { day: 'Day 2', title: 'Cape Town Highlights', description: 'Guided city and coastal landmark exploration.' },
      { day: 'Day 3', title: 'Scenic Tour Day', description: 'Curated route experience with multiple photo stops.' },
      { day: 'Day 4', title: 'Transfer to Safari Zone', description: 'Road transfer and evening leisure at lodge.' },
      { day: 'Day 5', title: 'Safari Experience', description: 'Morning and afternoon wildlife game drives.' },
      { day: 'Day 6', title: 'Leisure & Local Experience', description: 'Flexible day for local activities and shopping.' },
      { day: 'Day 7', title: 'Departure', description: 'Checkout and transfer for return flight.' },
    ],
    includes: ['Return flight ticket', '6-night hotel/lodge stay', 'Visa processing support', 'Guided excursions', 'Safari activity package', 'Airport transfers'],
    excludes: ['Travel insurance', 'Optional premium experiences', 'Personal expenses', 'Some meals not listed'],
  },
  {
    title: 'Europe Highlights Circuit',
    slug: 'europe-highlights-circuit',
    category: 'international',
    location: 'Paris • Rome • Amsterdam',
    duration: '8 Days / 7 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/europe.jpg',
    gallery: ['/destinations/europe.jpg', '/hero/paris.jpg', '/destinations/usa.jpg'],
    overview:
      'A multi-city European experience blending culture, architecture, museums, and unforgettable city moments.',
    highlights: ['Three-city itinerary', 'Guided landmarks tours', 'Cultural immersion', 'Flexible free-time blocks'],
    itinerary: [
      { day: 'Day 1', title: 'Arrive in Paris', description: 'Arrival transfer and evening orientation around central Paris.' },
      { day: 'Day 2', title: 'Paris Essentials', description: 'Landmark visits and optional Seine cruise.' },
      { day: 'Day 3', title: 'Travel to Amsterdam', description: 'Intercity transfer and canal district exploration.' },
      { day: 'Day 4', title: 'Amsterdam Culture', description: 'Museum and old-town experience with local guide.' },
      { day: 'Day 5', title: 'Travel to Rome', description: 'Transfer and evening leisure in historic center.' },
      { day: 'Day 6', title: 'Ancient Rome', description: 'Guided tour of classic landmarks and food district walk.' },
      { day: 'Day 7', title: 'Leisure Day', description: 'Shopping, optional excursions, and farewell dinner.' },
      { day: 'Day 8', title: 'Departure', description: 'Checkout and airport transfer.' },
    ],
    includes: ['Intercity transfers', '7-night accommodation', 'Daily breakfast', 'Guided city tours', 'Airport transfer support'],
    excludes: ['Visa fees', 'International flights', 'Lunch and dinner', 'City taxes where applicable'],
  },
  {
    title: 'Kenya Safari Explorer',
    slug: 'kenya-safari-explorer',
    category: 'local',
    location: 'Nairobi • Maasai Mara',
    duration: '4 Days / 3 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/Kenya.jpg',
    gallery: ['/destinations/Kenya.jpg', '/hero/kenya.jpg', '/destinations/south-africa.jpg'],
    overview:
      'A high-impact safari experience featuring wildlife drives, scenic lodges, and expert local guiding.',
    highlights: ['Game drives in reserve', 'Big Five spotting opportunities', 'Lodge accommodation', 'Professional safari guide'],
    itinerary: [
      { day: 'Day 1', title: 'Nairobi to Mara', description: 'Road transfer and afternoon game drive.' },
      { day: 'Day 2', title: 'Full-Day Safari', description: 'Morning and evening game drives with picnic lunch.' },
      { day: 'Day 3', title: 'Cultural Visit', description: 'Optional community visit and sunset wildlife viewing.' },
      { day: 'Day 4', title: 'Return to Nairobi', description: 'Breakfast, checkout, and transfer back to city.' },
    ],
    includes: ['Transport in safari vehicle', '3-night stay', 'Park entry fees', 'Game drives', 'Guide services'],
    excludes: ['Personal beverages', 'Travel insurance', 'Tips and gratuities', 'Optional activities'],
  },
  {
    title: 'Coastal Escape Diani',
    slug: 'coastal-escape-diani',
    category: 'local',
    location: 'Diani Beach, Kenya',
    duration: '3 Days / 2 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/Kenya.jpg',
    gallery: ['/destinations/Kenya.jpg', '/hero/thailand.jpg', '/destinations/maldives.jpg'],
    overview:
      'A relaxing beach-focused getaway with ocean views, water activities, and boutique coastal stays.',
    highlights: ['Beachfront accommodation', 'Marine activities', 'Sunset dhow option', 'Flexible leisure schedule'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Beach Leisure', description: 'Check-in and free-time along the coastline.' },
      { day: 'Day 2', title: 'Ocean Activities', description: 'Optional snorkeling/watersports and beach relaxation.' },
      { day: 'Day 3', title: 'Departure', description: 'Morning leisure and checkout transfer.' },
    ],
    includes: ['2-night accommodation', 'Breakfast', 'Airport/SGR transfer support', 'Local host support'],
    excludes: ['Watersports fees', 'Lunch and dinner', 'Personal expenses', 'Travel insurance'],
  },
  {
    title: 'Maldives Romance Retreat',
    slug: 'maldives-romance-retreat',
    category: 'honeymoon',
    location: 'Maldives',
    duration: '6 Days / 5 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/maldives.jpg',
    gallery: ['/destinations/maldives.jpg', '/hero/maldives.jpg', '/destinations/dubai.jpg'],
    overview:
      'A romantic island package with overwater luxury, private moments, and curated couple experiences.',
    highlights: ['Overwater villa stay', 'Couples spa', 'Sunset cruise', 'Private dinner setup'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Paradise', description: 'Speedboat transfer and private check-in.' },
      { day: 'Day 2', title: 'Resort Leisure', description: 'Relaxation and optional guided snorkeling.' },
      { day: 'Day 3', title: 'Couples Wellness', description: 'Spa session and sunset photo moments.' },
      { day: 'Day 4', title: 'Private Experience', description: 'Curated private dinner and beach setup.' },
      { day: 'Day 5', title: 'Free Day', description: 'Leisure, optional activities, and resort amenities.' },
      { day: 'Day 6', title: 'Departure', description: 'Checkout and transfer to airport.' },
    ],
    includes: ['5-night luxury stay', 'Breakfast & dinner', 'Airport-resort transfers', 'Couples experience package'],
    excludes: ['International flights', 'Travel insurance', 'Premium activity add-ons', 'Personal expenses'],
  },
  {
    title: 'Thailand Couple Escape',
    slug: 'thailand-couple-escape',
    category: 'honeymoon',
    location: 'Phuket • Krabi',
    duration: '5 Days / 4 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/thailand.jpg',
    gallery: ['/destinations/thailand.jpg', '/hero/thailand.jpg', '/destinations/singapore.jpg'],
    overview:
      'An intimate honeymoon package combining tropical beaches, boutique stays, and romantic activities.',
    highlights: ['Island boat excursion', 'Romantic dinner options', 'Beachfront resort', 'Couple-friendly itinerary'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Check-in', description: 'Airport transfer and evening at leisure.' },
      { day: 'Day 2', title: 'Island Day', description: 'Guided island hopping with scenic stops.' },
      { day: 'Day 3', title: 'Couples Leisure', description: 'Resort relaxation and optional spa add-on.' },
      { day: 'Day 4', title: 'Romance Day', description: 'Private moments and curated dinner setting.' },
      { day: 'Day 5', title: 'Departure', description: 'Checkout and transfer support.' },
    ],
    includes: ['4-night stay', 'Daily breakfast', 'Airport transfers', 'Island excursion'],
    excludes: ['Visa fees', 'International flights', 'Lunch and dinner', 'Optional spa upgrades'],
  },
  {
    title: 'South Africa Group Adventure',
    slug: 'south-africa-group-adventure',
    category: 'group',
    location: 'Cape Town • Safari Region',
    duration: '7 Days / 6 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/south-africa.jpg',
    gallery: ['/destinations/south-africa.jpg', '/destinations/Kenya.jpg', '/destinations/europe.jpg'],
    overview:
      'A group-friendly package balancing city exploration, scenic routes, and wildlife experiences.',
    highlights: ['Group-ready logistics', 'City + safari combination', 'Shared curated activities', 'Dedicated tour coordinator'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival & Group Briefing', description: 'Airport transfer, check-in, and welcome orientation.' },
      { day: 'Day 2', title: 'Cape Town Discoveries', description: 'Guided city highlights and coastal viewpoints.' },
      { day: 'Day 3', title: 'Scenic Route Experience', description: 'Day trip with curated photo and culture stops.' },
      { day: 'Day 4', title: 'Transfer to Safari Region', description: 'Travel and evening group activity.' },
      { day: 'Day 5', title: 'Game Drive Day', description: 'Morning and afternoon wildlife drives.' },
      { day: 'Day 6', title: 'Leisure + Group Dinner', description: 'Flexible schedules and farewell dinner.' },
      { day: 'Day 7', title: 'Departure', description: 'Checkout and return transfers.' },
    ],
    includes: ['Group transport', '6-night accommodation', 'Tour coordinator', 'Selected guided activities', 'Breakfast'],
    excludes: ['Flight tickets', 'Travel insurance', 'Some meals', 'Personal spending'],
  },
  {
    title: 'Europe Student & Friends Tour',
    slug: 'europe-student-friends-tour',
    category: 'group',
    location: 'Paris • Amsterdam',
    duration: '6 Days / 5 Nights',
    priceFrom: 'Quote on request',
    heroImage: '/destinations/europe.jpg',
    gallery: ['/destinations/europe.jpg', '/hero/paris.jpg', '/destinations/usa.jpg'],
    overview:
      'A value-packed group itinerary designed for friends, school groups, and young explorers in Europe.',
    highlights: ['Value-focused package', 'Group city experiences', 'Flexible activity blocks', 'Easy logistics support'],
    itinerary: [
      { day: 'Day 1', title: 'Arrival in Paris', description: 'Group transfer and orientation walk.' },
      { day: 'Day 2', title: 'Paris City Day', description: 'Landmark visits and cultural highlights.' },
      { day: 'Day 3', title: 'Travel to Amsterdam', description: 'Intercity transfer with evening free time.' },
      { day: 'Day 4', title: 'Amsterdam Experience', description: 'Guided city and museum district access.' },
      { day: 'Day 5', title: 'Leisure Day', description: 'Optional activities and shopping time.' },
      { day: 'Day 6', title: 'Departure', description: 'Checkout and airport transfer.' },
    ],
    includes: ['5-night accommodation', 'Intercity movement support', 'Daily breakfast', 'Group coordinator'],
    excludes: ['Visa and insurance', 'International flights', 'Lunch and dinner', 'Optional paid experiences'],
  },
]

export function getToursByCategory(category: TourCategory): Tour[] {
  return tours.filter((tour) => tour.category === category)
}

export function getTourByCategoryAndSlug(category: TourCategory, slug: string): Tour | undefined {
  return tours.find((tour) => tour.category === category && tour.slug === slug)
}

export const featuredTours: Tour[] = [
  'dubai-city-break',
  'kenya-safari-explorer',
  'maldives-romance-retreat',
  'south-africa-group-adventure',
]
  .map((slug) => tours.find((tour) => tour.slug === slug))
  .filter((tour): tour is Tour => Boolean(tour))
