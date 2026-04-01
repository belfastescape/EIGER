import type { Metadata, Viewport } from "next"
import { JsonLd } from '@/components/JsonLd'

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "The Ice Chamber | Deep-Eiger Escape Adventure | Eiger Escape Rooms",
  description:
    "A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols, crystalline light, and mechanisms that respond to your choices. 2–7 players, 60 minutes.",
  openGraph: {
    title: "The Ice Chamber | Deep-Eiger Escape Adventure | Eiger Escape Rooms",
    description:
      "A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols, crystalline light, and mechanisms that respond to your choices. 2–7 players, 60 minutes.",
    url: "https://www.eigerescaperooms.com/escape-rooms/the-ice-chamber",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/chamber.png",
        width: 1200,
        height: 630,
        alt: "The Ice Chamber Escape Room",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ice Chamber | Deep-Eiger Escape Adventure | Eiger Escape Rooms",
    description:
      "A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols, crystalline light, and mechanisms that respond to your choices.",
    images: ["https://www.eigerescaperooms.com/images/chamber.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const iceChamberSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Ice Chamber - Deep-Eiger Escape Adventure",
  "description": "A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols, crystalline light, and shifting mechanisms. Solve its secrets before it seals again. 2–7 players, 60 minutes.",
  "image": "https://www.eigerescaperooms.com/images/chamber.png",
  "url": "https://www.eigerescaperooms.com/escape-rooms/the-ice-chamber",
  "brand": {
    "@type": "Brand",
    "name": "Eiger Escape Rooms"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NZD",
    "price": "35",
    "availability": "https://schema.org/InStock",
    "url": "https://www.eigerescaperooms.com/escape-rooms/the-ice-chamber",
    "validFrom": "2024-01-01"
  },
  "category": "Escape Room Experience",
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Duration",
      "value": "60 minutes"
    },
    {
      "@type": "PropertyValue",
      "name": "Players",
      "value": "2-7"
    },
    {
      "@type": "PropertyValue",
      "name": "Difficulty",
      "value": "Advanced"
    }
  ]
}

export default function TheIceChamberLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={iceChamberSchema} />
      {children}
    </>
  )
}
