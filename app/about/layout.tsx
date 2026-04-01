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
  title: "About Us | Eiger Escape Rooms",
  description:
    "Learn about Eiger Escape Rooms, our mission, and our commitment to providing the best escape room experience in Eiger.",
  openGraph: {
    title: "About Us | Eiger Escape Rooms",
    description:
      "Learn about Eiger Escape Rooms, our mission, and our commitment to providing the best escape room experience in Eiger.",
    url: "https://www.eigerescaperooms.com/about",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "About Us",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Eiger Escape Rooms",
    description:
      "Learn about Eiger Escape Rooms, our mission, and our commitment to providing the best escape room experience in Eiger.",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 