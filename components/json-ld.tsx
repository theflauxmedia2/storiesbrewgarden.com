import {
  ADDRESS,
  GEO,
  INSTAGRAM_URL,
  PHONE_TEL,
  RESERVEGO_URL,
  SITE_URL,
} from "@/lib/site";

// Type is ["Restaurant","BarOrPub"] — deliberately NOT Brewery. The beers are
// brewed off-site by Stories Brewery & Kitchen (BTM); this outlet does not brew
// on site, so "Brewery" would be a false claim. `priceRange` is still unknown
// and omitted rather than emitted empty. Address, geo, telephone and hours are
// confirmed.
const data = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "BarOrPub"],
  "@id": `${SITE_URL}/#business`,
  name: "Stories Brew Garden",
  alternateName: [
    "Stories Brew Garden, Yelahanka",
    "Stories Brew Garden Bengaluru",
  ],
  description:
    "A rooftop restaurant, bar and brew garden in Avalahalli, Yelahanka, North Bengaluru, with crafted beers, a multicuisine kitchen, signature cocktails and open-air rooftop seating, plus a kids' play area, pet-friendly spaces, live music and private dining for parties and corporate events.",
  slogan: "Come for the Flavours. Discover Your Pour. Stay for the Story.",
  url: SITE_URL,
  image: [
    `${SITE_URL}/photos/rooftop-terrace-dusk.webp`,
    `${SITE_URL}/photos/rooftop-dining-evening.webp`,
    `${SITE_URL}/photos/bar-counter.webp`,
  ],
  logo: `${SITE_URL}/android-chrome-512x512.png`,
  telephone: PHONE_TEL,
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI",
  areaServed: ["Avalahalli", "Yelahanka", "North Bengaluru", "Bengaluru"],
  isAccessibleForFree: true,
  publicAccess: true,
  parentOrganization: {
    "@type": "Organization",
    name: "Stories",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.lat,
    longitude: GEO.lng,
  },
  hasMap: `https://www.google.com/maps/search/?api=1&query=${GEO.lat},${GEO.lng}`,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "23:59",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "01:00",
    },
  ],
  servesCuisine: [
    "Global",
    "North Indian",
    "Indian",
    "Asian",
    "Continental",
    "Desserts",
  ],
  // Only amenities stated on the site. Rooftop capacity / covered seating are
  // still unconfirmed, so they are not listed.
  amenityFeature: [
    "Rooftop",
    "Outdoor seating",
    "Kids' play area",
    "Pet friendly",
    "Live music",
    "Private dining room",
  ].map((name) => ({
    "@type": "LocationFeatureSpecification",
    name,
    value: true,
  })),
  menu: `${SITE_URL}/food-and-drinks/`,
  hasMenu: {
    "@type": "Menu",
    name: "Food & Drinks",
    url: `${SITE_URL}/food-and-drinks/`,
  },
  acceptsReservations: RESERVEGO_URL,
  sameAs: [INSTAGRAM_URL],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
