"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, X, ChevronRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

export default function FAQPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([])

  // All FAQs data — written for Eiger Escape Rooms, Grindelwald
  const faqs: FAQ[] = [
    {
      id: "what-is-eiger",
      question: "What is an escape room at Eiger Escape Rooms?",
      answer:
        "You step into a timed, story-driven adventure inside one of our themed spaces. Your mission is to decode clues, open mechanisms, and complete the narrative before the clock runs out—usually within sixty minutes. Here at Eiger Escape Rooms in Grindelwald, every game is tied to the mountain: a rescue-hut signal, a sealed bunker, or a frozen chamber deep in the rock. Nothing is random trivia; the puzzles belong to the world we have built.",
      category: "general",
      tags: ["basics", "new players"],
    },
    {
      id: "first-visit-tips",
      question: "I've never played an escape room before. Where should I start?",
      answer:
        "Call out what you find, split tasks so nobody huddles over one puzzle, and flag anything that looks like a pattern or code. You will not need to climb furniture or break props—everything is meant to be discovered. If you are new to the format, we usually point first-timers toward The Eiger Signal or The Forgotten Bunker; The Ice Chamber is built for crews who already know how escape games flow.",
      category: "general",
      tags: ["basics", "new players", "tips"],
    },
    {
      id: "what-to-bring",
      question: "What should we wear or bring to our booking?",
      answer:
        "Wear comfortable shoes and layers you can move in—Grindelwald weather shifts quickly, and you will still be active inside the rooms. We supply everything you need to play. Leave food and drink outside the game areas; lockers are available for valuables. Aim to arrive about fifteen minutes before your slot so we can check you in, set expectations, and start the story on time.",
      category: "general",
      tags: ["preparation", "new players"],
    },
    {
      id: "how-many-people",
      question: "How many players fit in each room?",
      answer:
        "The Eiger Signal takes two to eight players. The Forgotten Bunker is built for two to six. The Ice Chamber fits two to seven and spreads puzzles across more than one beat—larger teams often split attention naturally. If you are unsure, tell us your group size when you book and we will suggest the best fit.",
      category: "general",
      tags: ["group size", "booking"],
    },
    {
      id: "age-requirements",
      question: "Are your games suitable for children or school groups?",
      answer:
        "We recommend players be at least ten for the full puzzle experience. Mixed-age groups work best when an adult joins in. For parties of children under fourteen, we require an adult in the room. Purely kid-only groups need to be twelve or older. The Forgotten Bunker tends to suit families; The Ice Chamber is heavier on layered logic and suits teens and adults who want a real challenge.",
      category: "general",
      tags: ["age", "children", "family"],
    },

    {
      id: "how-to-book",
      question: "How do I book a room?",
      answer:
        "Choose your room and time through our online booking flow and pay at checkout to secure the slot. Weekends, holidays, and ski-season weeks fill fast—book early if you have a fixed date. If you need to move dates, swap rooms, or arrange a corporate block, use our contact form and we will help.",
      category: "booking",
      tags: ["reservation", "payment"],
    },

    {
      id: "cancellation-policy",
      question: "What is your cancellation and rescheduling policy?",
      answer:
        "With forty-eight hours or more before your game, you can receive a full refund or reschedule once at no charge. Between twenty-four and forty-eight hours, you can reschedule but refunds are not available. Inside twenty-four hours, bookings are non-refundable and rescheduling is at our discretion based on availability. For group bookings of ten or more, please give seven days notice for any refund.",
      category: "booking",
      tags: ["cancellation", "refund", "reschedule"],
    },
    {
      id: "gift-vouchers",
      question: "Do you sell gift vouchers?",
      answer:
        "Yes. Vouchers work for any standard experience at Eiger Escape Rooms and are valid for twelve months from purchase. You can order them through the booking path or ask us by email if you want a custom amount. They make a solid gift for visitors staying in the Jungfrau region who want something memorable after a day on the slopes.",
      category: "booking",
      tags: ["gifts", "vouchers"],
    },
    {
      id: "discounts-available",
      question: "Do you run special rates or group deals?",
      answer:
        "We rotate seasonal offers—think early slots, weekday team blocks, and birthday bundles. Pricing and active deals are always shown at checkout. If you are coordinating a school, club, or company event, message us with your headcount and dates; we will quote the best option across our three rooms.",
      category: "booking",
      tags: ["discounts", "savings", "special offers"],
    },

    {
      id: "locked-in",
      question: "Are we physically locked inside the room?",
      answer:
        "No. You are never trapped behind a bolted door. You can exit the space if you need air, a bathroom break, or an emergency. The \"escape\" is a story goal: finish the mission before time expires. Our game masters watch each session so you stay safe and on track.",
      category: "experience",
      tags: ["safety", "gameplay"],
    },

    {
      id: "scary",
      question: "Are the rooms horror or jump-scare experiences?",
      answer:
        "No. Our themes are mystery, tension, and atmosphere—think alpine radio static, wartime archives, and ice-lit chambers—not gore or haunted-house scares. We do not use actors to startle you. If someone in your group prefers low-stress play, tell us when you arrive and we will tailor hints accordingly.",
      category: "experience",
      tags: ["horror", "fear", "atmosphere"],
    },
    {
      id: "photos",
      question: "Can we take photos or videos during the game?",
      answer:
        "We keep gameplay photography out of the rooms so puzzle details stay private for the next team. After your game, we are happy to snap a group photo in our lobby or designated spot—tag Eiger Escape Rooms when you post so we can cheer you on.",
      category: "experience",
      tags: ["photography", "social media"],
    },

    {
      id: "team-building",
      question: "Do you host corporate or team-building groups?",
      answer:
        "Yes. Companies use us for communication drills under pressure, cross-functional teams, and off-site days in the mountains. You can run multiple rooms side by side for a friendly scoreboard. Share your objectives when you contact us—we will suggest timings, room pairings, and debrief talking points that match your team.",
      category: "groups",
      tags: ["corporate", "team building", "work events"],
    },
    {
      id: "private-bookings",
      question: "Will we share a room with strangers?",
      answer:
        "Never. When you book a room, that session is yours alone. We do not mix unrelated groups. If you want the whole venue for a private takeover, reach out with dates and guest numbers and we will build a schedule across The Eiger Signal, The Forgotten Bunker, and The Ice Chamber.",
      category: "groups",
      tags: ["private", "exclusive", "group booking"],
    },
    {
      id: "accessibility-venue",
      question: "Is the venue accessible if someone uses a wheelchair or has limited mobility?",
      answer:
        "Our lobby and briefing areas are step-free. Game spaces vary by room—some puzzles require reaching low shelves or moving between zones. Tell us about mobility or sensory needs when you book and we will recommend the best fit, reserve extra time if helpful, and brief your game master so hints arrive in a way that works for your whole team.",
      category: "accessibility",
      tags: ["mobility", "needs"],
    },
    {
      id: "location-grindelwald",
      question: "Where exactly are you in Grindelwald?",
      answer:
        "We are at 3818 Grindelwald, Switzerland. Most guests arrive via regional trains through Interlaken; the village is compact and walkable. If you are driving, plan a few extra minutes for parking in peak ski weeks. Drop us a note before you travel if you want the best route from your hotel or the lifts.",
      category: "location",
      tags: ["address", "travel"],
    },
  ]

  useEffect(() => {
    setIsVisible(true)
    filterFaqs()
  }, [searchQuery, activeCategory])

  const filterFaqs = () => {
    let filtered = [...faqs]

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((faq) => faq.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query) ||
          faq.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    setFilteredFaqs(filtered)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleTagClick = (tag: string) => {
    setSearchQuery(tag)
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=faq-hero"
            alt="Eiger Escape Rooms FAQs"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Help centre
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Booking rules, room fit, and what to expect inside The Eiger Signal, The Forgotten Bunker, and The Ice
              Chamber at our Grindelwald site.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Type a keyword…"
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-12 pr-12 py-6 bg-[#111] border-[#333] focus:border-cyan-500 text-white text-lg rounded-full"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Categories and Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
              <div className="mb-8 overflow-x-auto">
                <TabsList className="bg-[#111] border border-[#222] p-1 inline-flex min-w-full md:min-w-0">
                  <TabsTrigger value="all">All Questions</TabsTrigger>
                  <TabsTrigger value="general">General Info</TabsTrigger>
                  <TabsTrigger value="booking">Booking & Pricing</TabsTrigger>
                  <TabsTrigger value="experience">Game Experience</TabsTrigger>
                  <TabsTrigger value="groups">Group Bookings</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
              </div>

              {/* Results Count */}
              <div className="mb-6 flex justify-between items-center">
                <div className="text-gray-400">
                  {searchQuery ? (
                    <span>
                      Found {filteredFaqs.length} result{filteredFaqs.length !== 1 ? "s" : ""} for "
                      <span className="text-cyan-400">{searchQuery}</span>"
                    </span>
                  ) : (
                    <span>
                      Showing {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
                    </span>
                  )}
                </div>
              </div>

              {/* FAQ Accordion */}
              <motion.div variants={staggerContainer} className="space-y-4">
                {filteredFaqs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full">
                    {filteredFaqs.map((faq: FAQ) => (
                      <motion.div key={faq.id} id={faq.id} variants={fadeIn} className="scroll-mt-28">
                        <AccordionItem
                          value={faq.id}
                          className="bg-[#111] rounded-lg border border-[#222] overflow-hidden mb-4"
                        >
                          <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-6 text-gray-300">
                            <div className="prose prose-invert max-w-none">
                              <p>{faq.answer}</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2">
                              {faq.tags.map((tag: string) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="bg-[#0a0a0a] text-gray-400 border-[#333] hover:border-cyan-500 cursor-pointer"
                                  onClick={() => handleTagClick(tag)}
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    ))}
                  </Accordion>
                ) : (
                  <div className="bg-[#111] rounded-lg border border-[#222] p-8 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">No results found</h3>
                    <p className="text-gray-400 mb-4">
                      We couldn't find any FAQs matching your search. Try different keywords or browse by category.
                    </p>
                    <Button
                      variant="outline"
                      className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
                      onClick={clearSearch}
                    >
                      Clear Search
                    </Button>
                  </div>
                )}
              </motion.div>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center md:text-left">
                    Still Have Questions?
                  </h2>
                  <p className="text-gray-300 mb-6 text-center md:text-left">
                    Can't find the answer you're looking for? Please feel free to contact us directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                        Contact Us
                      </Button>
                    </Link>
                    <Link href="mailto:info@eigerescaperooms.com" className="flex-1">
                      <Button variant="outline" className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                        Email us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Questions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Popular Questions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "Which room should first-timers book?",
                  answer:
                    "Start with The Eiger Signal or The Forgotten Bunker; save The Ice Chamber for when your crew already speaks escape-room shorthand.",
                  link: "/faq#first-visit-tips",
                },
                {
                  question: "Can we bring a company off-site here?",
                  answer:
                    "Yes—run one room or all three in parallel, then compare notes over coffee in town.",
                  link: "/faq#team-building",
                },
                {
                  question: "How do pricing and offers work?",
                  answer:
                    "Rates and seasonal bundles update live at checkout; big groups should email us for a tailored quote.",
                  link: "/faq#discounts-available",
                },
                {
                  question: "What if our plans change?",
                  answer:
                    "Forty-eight hours or more gets a full refund or free reschedule; inside twenty-four hours options narrow—see the full policy.",
                  link: "/faq#cancellation-policy",
                },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="bg-[#111] rounded-xl border border-[#222] p-6 hover:border-cyan-500/30 transition-all group"
                >
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 mb-2">{item.answer}</p>
                  <div className="flex items-center text-cyan-400 text-sm">
                    <span>Read more</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Ready to Book Your Adventure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Now that you have all the information you need, it's time to put your problem-solving skills to the
                test. The clock is ticking!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                  Reserve
                </Button>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
