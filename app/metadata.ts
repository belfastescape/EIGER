import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eigerescaperooms.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://eigerescaperooms.com',
    siteName: 'Eiger Escape Rooms',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eigerescaperooms',
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