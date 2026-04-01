export const teamBuildingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Team Building Escape Room Activities Eiger",
  "description": "Professional team building activities using escape rooms in Eiger. Perfect for corporate groups looking to improve communication, problem-solving, and collaboration skills. Three themed rooms available for groups up to 24 people.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Eiger Escape Rooms",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3818",
      "addressLocality": "Grindelwald",
      "addressRegion": "Canton of Bern",
      "postalCode": "3818",
      "addressCountry": "CH"
    },
    "url": "https://www.eigerescaperooms.com"
  },
  "serviceType": "Team Building Activities",
  "areaServed": {
    "@type": "City",
    "name": "Grindelwald",
    "addressCountry": "CH"
  },
  "offers": {
    "@type": "Offer",
    "description": "Team building escape room experiences for corporate groups",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "NZD",
    "price": "33",
    "priceValidUntil": "2026-12-31"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Team Building Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Eiger Signal",
          "description": "Abandoned mountain rescue hut high on the Eiger transmitting again—decode the signal and uncover what lies beneath. 2–8 players."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Forgotten Bunker",
          "description": "A sealed WWII bunker deep in the Eiger, buried under ice—systems reactivated, ciphers and a final order never carried out. 2–6 players."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Ice Chamber",
          "description": "A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols, crystalline light, and mechanisms that respond to your choices. 2–7 players."
        }
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Corporate Teams, Work Groups, Organisations"
  }
}
