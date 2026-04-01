import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: "Christmas Gift Vouchers Grindelwald | Eiger Escape Rooms",
  description:
    "Gift Cards Grindelwald — the perfect experience for families and couples. Give the gift of adventure with escape room gift vouchers.",
  openGraph: {
    title: "Christmas Gift Vouchers Grindelwald | Eiger Escape Rooms",
    description:
      "Gift Cards Grindelwald — unique experience gift cards and escape room vouchers in Grindelwald.",
    url: "https://www.eigerescaperooms.com/gift-vouchers",
    siteName: "Eiger Escape Rooms",
    images: [
      {
        url: "https://www.eigerescaperooms.com/images/eiger-hero.png",
        width: 1200,
        height: 630,
        alt: "Gift vouchers at Eiger Escape Rooms",
      },
    ],
    locale: "en_CH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Gift Vouchers Grindelwald | Eiger Escape Rooms",
    description:
      "Give the gift of adventure — escape room gift cards and vouchers in Grindelwald.",
    images: ["https://www.eigerescaperooms.com/images/eiger-hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function GiftVouchersLayout({ children }: { children: React.ReactNode }) {
  return children
}
