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
  title: "The Eiger Signal | Mountain Mystery Escape Room | Eiger Escape Rooms",
  description:
    "An abandoned mountain rescue hut on the Eiger is transmitting again. Decode the signal and uncover what lies beneath the mountain before time runs out. 2–8 players, 60 minutes.",
  openGraph: {
    title: "The Eiger Signal | Mountain Mystery Escape Room | Eiger Escape Rooms",
    description:
      "An abandoned mountain rescue hut on the Eiger is transmitting again. Decode the signal and uncover what lies beneath the mountain before time runs out. 2–8 players, 60 minutes.",
    url: "https://www.eigerescaperooms.com/escape-rooms/the-eiger-signal",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/mountain.png",
        width: 1200,
        height: 630,
        alt: "The Eiger Signal Escape Room",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Eiger Signal | Mountain Mystery Escape Room | Eiger Escape Rooms",
    description:
      "An abandoned mountain rescue hut on the Eiger is transmitting again. Decode the signal and uncover what lies beneath the mountain before time runs out.",
    images: ["https://www.eigerescaperooms.com/images/mountain.png"],
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

const eigerSignalSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Eiger Signal - Mountain Mystery Escape Room",
  "description": "An abandoned mountain rescue hut high on the Eiger has begun transmitting again after decades of silence. Decode the transmission and uncover the truth in this immersive 60-minute challenge for 2–8 players.",
  "image": "https://www.eigerescaperooms.com/images/mountain.png",
  "url": "https://www.eigerescaperooms.com/escape-rooms/the-eiger-signal",
  "brand": {
    "@type": "Brand",
    "name": "Eiger Escape Rooms"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NZD",
    "price": "35",
    "availability": "https://schema.org/InStock",
    "url": "https://www.eigerescaperooms.com/escape-rooms/the-eiger-signal",
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
      "value": "2-8"
    },
    {
      "@type": "PropertyValue",
      "name": "Difficulty",
      "value": "Intermediate"
    }
  ]
}

export default function TheEigerSignalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={eigerSignalSchema} />
      {children}
    </>
  )
}
