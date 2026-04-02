export interface FAQItem {
  id: string
  question: string
  answer: string
}

/** Source content preserved; UI renders as a flat wall of text (designER bad example). */
export const faqItems: FAQItem[] = [
  {
    id: "what-is-eiger",
    question: "What is an escape room at Eiger Escape Rooms?",
    answer:
      "You step into a timed, story-driven adventure inside one of our themed spaces. Your mission is to decode clues, open mechanisms, and complete the narrative before the clock runs out—usually within sixty minutes. Here at Eiger Escape Rooms in Grindelwald, every game is tied to the mountain: a rescue-hut signal, a sealed bunker, or a frozen chamber deep in the rock. Nothing is random trivia; the puzzles belong to the world we have built.",
  },
  {
    id: "first-visit-tips",
    question: "I've never played an escape room before. Where should I start?",
    answer:
      "Call out what you find, split tasks so nobody huddles over one puzzle, and flag anything that looks like a pattern or code. You will not need to climb furniture or break props—everything is meant to be discovered. If you are new to the format, we usually point first-timers toward The Eiger Signal or The Forgotten Bunker; The Ice Chamber is built for crews who already know how escape games flow.",
  },
  {
    id: "what-to-bring",
    question: "What should we wear or bring to our booking?",
    answer:
      "Wear comfortable shoes and layers you can move in—Grindelwald weather shifts quickly, and you will still be active inside the rooms. We supply everything you need to play. Leave food and drink outside the game areas; lockers are available for valuables. Aim to arrive about fifteen minutes before your slot so we can check you in, set expectations, and start the story on time.",
  },
  {
    id: "how-many-people",
    question: "How many players fit in each room?",
    answer:
      "The Eiger Signal takes two to eight players. The Forgotten Bunker is built for two to six. The Ice Chamber fits two to seven and spreads puzzles across more than one beat—larger teams often split attention naturally. If you are unsure, tell us your group size when you book and we will suggest the best fit.",
  },
  {
    id: "age-requirements",
    question: "Are your games suitable for children or school groups?",
    answer:
      "We recommend players be at least ten for the full puzzle experience. Mixed-age groups work best when an adult joins in. For parties of children under fourteen, we require an adult in the room. Purely kid-only groups need to be twelve or older. The Forgotten Bunker tends to suit families; The Ice Chamber is heavier on layered logic and suits teens and adults who want a real challenge.",
  },
  {
    id: "how-to-book",
    question: "How do I book a room?",
    answer:
      "Choose your room and time through our online booking flow and pay at checkout to secure the slot. Weekends, holidays, and ski-season weeks fill fast—book early if you have a fixed date. If you need to move dates, swap rooms, or arrange a corporate block, use our contact form and we will help.",
  },
  {
    id: "cancellation-policy",
    question: "What is your cancellation and rescheduling policy?",
    answer:
      "With forty-eight hours or more before your game, you can receive a full refund or reschedule once at no charge. Between twenty-four and forty-eight hours, you can reschedule but refunds are not available. Inside twenty-four hours, bookings are non-refundable and rescheduling is at our discretion based on availability. For group bookings of ten or more, please give seven days notice for any refund.",
  },
  {
    id: "gift-vouchers",
    question: "Do you sell gift vouchers?",
    answer:
      "Yes. Vouchers work for any standard experience at Eiger Escape Rooms and are valid for twelve months from purchase. You can order them through the booking path or ask us by email if you want a custom amount. They make a solid gift for visitors staying in the Jungfrau region who want something memorable after a day on the slopes.",
  },
  {
    id: "discounts-available",
    question: "Do you run special rates or group deals?",
    answer:
      "We rotate seasonal offers—think early slots, weekday team blocks, and birthday bundles. Pricing and active deals are always shown at checkout. If you are coordinating a school, club, or company event, message us with your headcount and dates; we will quote the best option across our three rooms.",
  },
  {
    id: "locked-in",
    question: "Are we physically locked inside the room?",
    answer:
      'No. You are never trapped behind a bolted door. You can exit the space if you need air, a bathroom break, or an emergency. The "escape" is a story goal: finish the mission before time expires. Our game masters watch each session so you stay safe and on track.',
  },
  {
    id: "scary",
    question: "Are the rooms horror or jump-scare experiences?",
    answer:
      "No. Our themes are mystery, tension, and atmosphere—think alpine radio static, wartime archives, and ice-lit chambers—not gore or haunted-house scares. We do not use actors to startle you. If someone in your group prefers low-stress play, tell us when you arrive and we will tailor hints accordingly.",
  },
  {
    id: "photos",
    question: "Can we take photos or videos during the game?",
    answer:
      "We keep gameplay photography out of the rooms so puzzle details stay private for the next team. After your game, we are happy to snap a group photo in our lobby or designated spot—tag Eiger Escape Rooms when you post so we can cheer you on.",
  },
  {
    id: "team-building",
    question: "Do you host corporate or team-building groups?",
    answer:
      "Yes. Companies use us for communication drills under pressure, cross-functional teams, and off-site days in the mountains. You can run multiple rooms side by side for a friendly scoreboard. Share your objectives when you contact us—we will suggest timings, room pairings, and debrief talking points that match your team.",
  },
  {
    id: "private-bookings",
    question: "Will we share a room with strangers?",
    answer:
      "Never. When you book a room, that session is yours alone. We do not mix unrelated groups. If you want the whole venue for a private takeover, reach out with dates and guest numbers and we will build a schedule across The Eiger Signal, The Forgotten Bunker, and The Ice Chamber.",
  },
  {
    id: "accessibility-venue",
    question: "Is the venue accessible if someone uses a wheelchair or has limited mobility?",
    answer:
      "Our lobby and briefing areas are step-free. Game spaces vary by room—some puzzles require reaching low shelves or moving between zones. Tell us about mobility or sensory needs when you book and we will recommend the best fit, reserve extra time if helpful, and brief your game master so hints arrive in a way that works for your whole team.",
  },
  {
    id: "location-grindelwald",
    question: "Where exactly are you in Grindelwald?",
    answer:
      "We are at 3818 Grindelwald, Switzerland. Most guests arrive via regional trains through Interlaken; the village is compact and walkable. If you are driving, plan a few extra minutes for parking in peak ski weeks. Drop us a note before you travel if you want the best route from your hotel or the lifts.",
  },
]
