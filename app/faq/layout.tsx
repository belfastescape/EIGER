import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Eiger Escape Rooms Grindelwald",
  description:
    "Find answers to common questions about our escape rooms, booking process, and more at Eiger Escape Rooms in Grindelwald.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Eiger Escape Rooms Grindelwald",
    description: "Find answers to common questions about our escape rooms, booking process, and more.",
    type: "website",
    url: "https://www.eigerescaperooms.com/faq",
  },
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children
}
