import type { Metadata, Viewport } from "next"
import { JsonLd } from '@/components/JsonLd'
import { teamBuildingSchema } from './schema'

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Team Building Activities | Eiger Escape Rooms",
  description: "Enhance team collaboration and problem-solving skills with our exciting team building escape room experiences in Eiger.",
  openGraph: {
    title: "Team Building Activities | Eiger Escape Rooms",
    description: "Enhance team collaboration and problem-solving skills with our exciting team building escape room experiences in Eiger.",
    url: "https://www.eigerescaperooms.com/team-building",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Team Building Activities",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Building Activities | Eiger Escape Rooms",
    description: "Enhance team collaboration and problem-solving skills with our exciting team building escape room experiences in Eiger.",
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

export default function TeamBuildingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={teamBuildingSchema} />
      {children}
    </>
  )
} 