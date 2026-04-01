import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { JsonLd } from '@/components/JsonLd'
import MainLayoutWrapper from '@/components/layout/main-layout-wrapper'
import { StickyBookingCta } from '@/components/StickyBookingCta'
import { inter } from './fonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eigerescaperooms.com'),
  title: "Eiger Escape Rooms | Grindelwald live adventures for groups",
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
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TouristAttraction", "EntertainmentBusiness"],
    "name": "Eiger Escape Rooms",
    "url": "https://www.eigerescaperooms.com",
    "logo": "https://www.eigerescaperooms.com/images/eiger-hero.png",
    "image": "https://www.eigerescaperooms.com/images/eiger-hero.png",
    "description": "Hands-on escape games at 3818 Grindelwald—three themed rooms for parties, schools, and team days beneath the Eiger.",
    "priceRange": "$$",
    "currenciesAccepted": "NZD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3818",
      "addressLocality": "Grindelwald",
      "addressRegion": "Canton of Bern",
      "postalCode": "3818",
      "addressCountry": "CH"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 46.6242,
      "longitude": 8.0342
    },
    "email": "info@eigerescaperooms.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:30"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/YOUR_FACEBOOK_PAGE"
    ],
    "hasMap": "https://www.google.com/maps/place/3818+Grindelwald,+Switzerland",
    "areaServed": {
      "@type": "City",
      "name": "Grindelwald",
      "addressCountry": "CH"
    },
    "keywords": "escape room eiger, escape rooms eiger, team building eiger, birthday party venue eiger, tourist attraction eiger, indoor activities eiger, things to do eiger"
  }

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

        {/* Preload LCP image (optimized variant so browser fetches smaller file) */}
        <link
          rel="preload"
          href="/_next/image?url=%2Fimages%2Feiger-hero.png&amp;w=828&amp;q=75"
          as="image"
          fetchPriority="high"
        />
        
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MainLayoutWrapper>{children}</MainLayoutWrapper>
          <StickyBookingCta />
        </ThemeProvider>
      </body>
    </html>
  )
}
