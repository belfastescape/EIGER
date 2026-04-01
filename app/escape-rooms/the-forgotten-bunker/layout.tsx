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
  title: "The Forgotten Bunker | WWII Cipher Escape Room | Eiger Escape Rooms",
  description:
    "A sealed WWII bunker deep in the Eiger has reactivated. Work through military ciphers and classified documents before the last mission completes. 2–6 players, 60 minutes.",
  openGraph: {
    title: "The Forgotten Bunker | Eiger Escape Rooms",
    description:
      "A sealed WWII bunker deep in the Eiger has reactivated. Work through military ciphers and classified documents before the last mission completes. 2–6 players, 60 minutes.",
    url: "https://www.eigerescaperooms.com/escape-rooms/the-forgotten-bunker",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/bunker.png",
        width: 1920,
        height: 1080,
        alt: "The Forgotten Bunker Escape Room",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Forgotten Bunker | Eiger Escape Rooms",
    description:
      "A sealed WWII bunker deep in the Eiger has reactivated. Work through military ciphers and classified documents before the last mission completes.",
    images: ["https://www.eigerescaperooms.com/images/bunker.png"],
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

const forgottenBunkerSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "The Forgotten Bunker - WWII Cipher Escape Room",
  "description": "Hidden deep within the Eiger lies a sealed WWII bunker. Decipher classified documents and shut down the bunker before its last mission completes. 2–6 players, 60 minutes.",
  "image": "https://www.eigerescaperooms.com/images/bunker.png",
  "url": "https://www.eigerescaperooms.com/escape-rooms/the-forgotten-bunker",
  "brand": {
    "@type": "Brand",
    "name": "Eiger Escape Rooms"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "NZD",
    "price": "35",
    "availability": "https://schema.org/InStock",
    "url": "https://www.eigerescaperooms.com/escape-rooms/the-forgotten-bunker",
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

export default function TheForgottenBunkerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={forgottenBunkerSchema} />
      {children}
    </>
  )
}
