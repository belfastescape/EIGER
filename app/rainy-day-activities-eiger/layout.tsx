import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Rainy Day Activities Eiger | Eiger Escape Rooms",
  description: "Discover the best indoor activities in Eiger for rainy days. Our escape rooms offer exciting entertainment regardless of the weather.",
  openGraph: {
    title: "Rainy Day Activities Eiger | Eiger Escape Rooms",
    description: "Discover the best indoor activities in Eiger for rainy days. Our escape rooms offer exciting entertainment regardless of the weather.",
    url: "https://www.eigerescaperooms.com/rainy-day-activities-eiger",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Rainy Day Activities Eiger",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rainy Day Activities Eiger | Eiger Escape Rooms",
    description: "Discover the best indoor activities in Eiger for rainy days. Our escape rooms offer exciting entertainment regardless of the weather.",
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

export default function RainyDayActivitiesEigerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 