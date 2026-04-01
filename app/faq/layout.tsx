import type { Metadata } from "next"
import { JsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Eiger Escape Rooms Grindelwald",
  description:
    "Find answers to common questions about our escape rooms, booking process, and more at Eiger Escape Rooms in Grindelwald.",
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: "Frequently Asked Questions | Eiger Escape Rooms Grindelwald",
    description: "Find answers to common questions about our escape rooms, booking process, and more.",
    type: "website",
    url: "https://www.eigerescaperooms.com/faq",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an escape room at Eiger Escape Rooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You step into a timed, story-driven adventure inside one of our themed spaces. Your mission is to decode clues, open mechanisms, and complete the narrative before the clock runs out—usually within sixty minutes. Here at Eiger Escape Rooms in Grindelwald, every game is tied to the mountain: a rescue-hut signal, a sealed bunker, or a frozen chamber deep in the rock. Nothing is random trivia; the puzzles belong to the world we have built."
      }
    },
    {
      "@type": "Question",
      "name": "I've never played an escape room before. Where should I start?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call out what you find, split tasks so nobody huddles over one puzzle, and flag anything that looks like a pattern or code. You will not need to climb furniture or break props—everything is meant to be discovered. If you are new to the format, we usually point first-timers toward The Eiger Signal or The Forgotten Bunker; The Ice Chamber is built for crews who already know how escape games flow."
      }
    },
    {
      "@type": "Question",
      "name": "How many players fit in each room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Eiger Signal takes two to eight players. The Forgotten Bunker is built for two to six. The Ice Chamber fits two to seven and spreads puzzles across more than one beat—larger teams often split attention naturally. If you are unsure, tell us your group size when you book and we will suggest the best fit."
      }
    },
    {
      "@type": "Question",
      "name": "Are your games suitable for children or school groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend players be at least ten for the full puzzle experience. Mixed-age groups work best when an adult joins in. For parties of children under fourteen, we require an adult in the room. Purely kid-only groups need to be twelve or older. The Forgotten Bunker tends to suit families; The Ice Chamber is heavier on layered logic and suits teens and adults who want a real challenge."
      }
    },
    {
      "@type": "Question",
      "name": "How do I book a room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choose your room and time through our online booking flow and pay at checkout to secure the slot. Weekends, holidays, and ski-season weeks fill fast—book early if you have a fixed date. If you need to move dates, swap rooms, or arrange a corporate block, use our contact form and we will help."
      }
    },
    {
      "@type": "Question",
      "name": "Do you sell gift vouchers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Vouchers work for any standard experience at Eiger Escape Rooms and are valid for twelve months from purchase. You can order them through the booking path or ask us by email if you want a custom amount. They make a solid gift for visitors staying in the Jungfrau region who want something memorable after a day on the slopes."
      }
    },
    {
      "@type": "Question",
      "name": "Are we physically locked inside the room?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. You are never trapped behind a bolted door. You can exit the space if you need air, a bathroom break, or an emergency. The \"escape\" is a story goal: finish the mission before time expires. Our game masters watch each session so you stay safe and on track."
      }
    },
    {
      "@type": "Question",
      "name": "Are the rooms horror or jump-scare experiences?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Our themes are mystery, tension, and atmosphere—think alpine radio static, wartime archives, and ice-lit chambers—not gore or haunted-house scares. We do not use actors to startle you. If someone in your group prefers low-stress play, tell us when you arrive and we will tailor hints accordingly."
      }
    },
    {
      "@type": "Question",
      "name": "Do you host corporate or team-building groups?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Companies use us for communication drills under pressure, cross-functional teams, and off-site days in the mountains. You can run multiple rooms side by side for a friendly scoreboard. Share your objectives when you contact us—we will suggest timings, room pairings, and debrief talking points that match your team."
      }
    },
    {
      "@type": "Question",
      "name": "What is your cancellation and rescheduling policy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With forty-eight hours or more before your game, you can receive a full refund or reschedule once at no charge. Between twenty-four and forty-eight hours, you can reschedule but refunds are not available. Inside twenty-four hours, bookings are non-refundable and rescheduling is at our discretion based on availability. For group bookings of ten or more, please give seven days notice for any refund."
      }
    },
    {
      "@type": "Question",
      "name": "Do you run special rates or group deals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We rotate seasonal offers—think early slots, weekday team blocks, and birthday bundles. Pricing and active deals are always shown at checkout. If you are coordinating a school, club, or company event, message us with your headcount and dates; we will quote the best option across our three rooms."
      }
    }
  ]
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JsonLd data={faqSchema} />
      {children}
    </>
  )
}
