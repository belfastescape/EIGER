import type { Metadata, Viewport } from "next"

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
  title: "Thank You | Eiger Escape Rooms",
  description: "Thank you for your booking with Eiger Escape Rooms. We look forward to seeing you soon!",
  openGraph: {
    title: "Thank You | Eiger Escape Rooms",
    description: "Thank you for your booking with Eiger Escape Rooms. We look forward to seeing you soon!",
    url: "https://www.eigerescaperooms.com/thank-you",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Thank You",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thank You | Eiger Escape Rooms",
    description: "Thank you for your booking with Eiger Escape Rooms. We look forward to seeing you soon!",
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

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 