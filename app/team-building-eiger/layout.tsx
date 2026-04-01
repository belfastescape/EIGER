import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Team Building Eiger | Eiger Escape Rooms",
  description: "Discover the best team building activities in Eiger with our immersive escape room experiences. Perfect for corporate teams and groups.",
  openGraph: {
    title: "Team Building Eiger | Eiger Escape Rooms",
    description: "Discover the best team building activities in Eiger with our immersive escape room experiences. Perfect for corporate teams and groups.",
    url: "https://www.eigerescaperooms.com/team-building-eiger",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Team Building Eiger",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Building Eiger | Eiger Escape Rooms",
    description: "Discover the best team building activities in Eiger with our immersive escape room experiences. Perfect for corporate teams and groups.",
    images: ["https://www.eigerescaperooms.com/images/eiger-hero.png"],
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

export default function TeamBuildingEigerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 