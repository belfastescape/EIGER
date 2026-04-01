import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Group Bookings | Eiger Escape Rooms",
  description: "Book your group event at Eiger Escape Rooms. Perfect for corporate teams, birthday parties, and special occasions.",
  openGraph: {
    title: "Group Bookings | Eiger Escape Rooms",
    description: "Book your group event at Eiger Escape Rooms. Perfect for corporate teams, birthday parties, and special occasions.",
    url: "https://www.eigerescaperooms.com/group-bookings",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Group Bookings at Eiger Escape Rooms",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group Bookings | Eiger Escape Rooms",
    description: "Book your group event at Eiger Escape Rooms. Perfect for corporate teams, birthday parties, and special occasions.",
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

export default function GroupBookingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 