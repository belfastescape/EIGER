import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from '@/components/JsonLd'
import MainLayoutWrapper from '@/components/layout/main-layout-wrapper'
import { StickyBookingCta } from '@/components/StickyBookingCta'
import { inter } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eigerescaperooms.com'),
  title: "Eiger Escape Rooms",
  description: "Three story-led escape games in Grindelwald: work together, beat the clock, and explore The Eiger Signal, The Forgotten Bunker, and The Ice Chamber—ideal for friends, families, and company offsites.",
  openGraph: {
    title: "Eiger Escape Rooms | Grindelwald live adventures for groups",
    description: "Three story-led escape games in Grindelwald: timed missions, hands-on puzzles, and rooms built around the mountain—great for visitors, locals, and teams.",
    images: [
      {
        url: '/images/eiger-hero.png',
        width: 1920,
        height: 1080,
        alt: 'Eiger Escape Rooms — step into a mountain-set mission',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eiger Escape Rooms | Indoor missions in the Bernese Oberland",
    description: "Timed escape adventures in Grindelwald: collaborate under pressure in three themed rooms at the foot of the Eiger.",
    images: ['/images/eiger-hero.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eiger Escape Rooms",
    "url": "https://www.eigerescaperooms.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.eigerescaperooms.com/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to own domain for faster resource loading */}
        <link rel="preconnect" href="https://www.eigerescaperooms.com" />
        {/* designER bad example: no LCP image preload; drop in a 4MB+ uncompressed PNG as /images/eiger-hero.png for slow hero loads */}

        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <StickyBookingCta />
        </ThemeProvider>
        <GoogleAnalytics gaId="G-MTR7HY9NS8" />
      </body>
    </html>
  )
}
