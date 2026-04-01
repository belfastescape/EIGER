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
          "description": "Navigate through political intrigue and government secrets in this Eiger-themed escape room adventure. 2-8 players."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Forgotten Bunker",
          "description": "Plan the perfect heist to steal a priceless diamond in this multi-room escape challenge. 2-7 players."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "The Ice Chamber",
          "description": "Embark on a magical journey to find the legendary wand in this enchanting adventure. 2-6 players."
        }
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Corporate Teams, Work Groups, Organisations"
  }
}
