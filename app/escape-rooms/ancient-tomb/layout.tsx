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
  title: "Quest for the Ancient Tomb | Family-Friendly Escape Room | Eiger Escape Rooms",
  description:
    "Uncover the secrets of a legendary ancient tomb. Navigate hidden chambers, decode cryptic inscriptions, and claim the relic before time runs out. Perfect for families and beginners. 2-6 players, 60 minutes.",
  openGraph: {
    title: "Quest for the Ancient Tomb | Eiger Escape Rooms",
    description:
      "Uncover the secrets of a legendary ancient tomb. Navigate hidden chambers, decode cryptic inscriptions, and claim the relic before time runs out. Perfect for families and beginners.",
    url: "https://www.eigerescaperooms.com/escape-rooms/ancient-tomb",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1920,
        height: 1080,
        alt: "Quest for the Ancient Tomb Escape Room",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quest for the Ancient Tomb | Eiger Escape Rooms",
    description:
      "Uncover the secrets of a legendary ancient tomb. Navigate hidden chambers, decode cryptic inscriptions, and claim the relic before time runs out. Perfect for families and beginners.",
    images: ["https://www.eigerescaperooms.com/images/eiger-hero.png"],
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const magicWandSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Quest for the Ancient Tomb - Family-Friendly Escape Room",
  "description": "Uncover the secrets of a legendary ancient tomb. Navigate hidden chambers, decode cryptic inscriptions, and claim the relic before the tunnels collapse. Perfect for families and beginners. 2-6 players, 60 minutes.",
  "image": "https://www.eigerescaperooms.com/images/eiger-hero.png",
  "url": "https://www.eigerescaperooms.com/escape-rooms/ancient-tomb",
  "brand": {
    "@type": "Brand",
    "name": "Eiger Escape Rooms"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NZD",
    "price": "35",
    "availability": "https://schema.org/InStock",
    "url": "https://www.eigerescaperooms.com/escape-rooms/ancient-tomb",
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
      "value": "2-6"
    },
    {
      "@type": "PropertyValue",
      "name": "Difficulty",
      "value": "Beginner-Friendly"
    }
  ]
}

export default function MagicWandLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={magicWandSchema} />
      {children}
    </>
  )
}
