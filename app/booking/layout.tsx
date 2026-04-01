import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reserve - Eiger Escape Rooms',
  description: 'Book your escape room adventure. Choose from our thrilling experiences: The Eiger Signal, The Forgotten Bunker, and The Ice Chamber. Easy online booking available.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
