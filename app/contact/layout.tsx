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
  title: "Contact Us | Eiger Escape Rooms",
  description:
    "Get in touch with Eiger Escape Rooms. We're here to help with bookings, inquiries, and any questions you may have.",
  openGraph: {
    title: "Contact Us | Eiger Escape Rooms",
    description:
      "Get in touch with Eiger Escape Rooms. We're here to help with bookings, inquiries, and any questions you may have.",
    url: "https://www.eigerescaperooms.com/contact",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Contact Us",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Eiger Escape Rooms",
    description:
      "Get in touch with Eiger Escape Rooms. We're here to help with bookings, inquiries, and any questions you may have.",
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 