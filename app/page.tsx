"use client"

import { useState, useEffect, useRef } from "react"
import dynamic from "next/dynamic"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Users, ArrowRight, MapPin, PartyPopper } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ParallaxNav from "@/components/ParallaxNav"
import { PlayOnScrollVideo } from "@/components/PlayOnScrollVideo"

const PriceComparisonWidget = dynamic(
  () => import("@/components/PriceComparisonWidget").then((m) => ({ default: m.PriceComparisonWidget })),
  { ssr: false }
)

export default function Home() {
  const [isHydrated, setIsHydrated] = useState(false)
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Scroll-linked 3D card stack
  const cardsContainerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start start", "end end"],
  })
  // Card 1 (The Eiger Signal) folds back during first 40% of scroll
  const card1RotateX = useTransform(scrollYProgress, [0, 0.4], [0, -90])
  // Card 2 (The Forgotten Bunker) folds back during middle 40–80%
  const card2RotateX = useTransform(scrollYProgress, [0.4, 0.8], [0, -90])

  return (
    <div className="min-h-screen">
      {/* Parallax Navigation Hero */}
      <ParallaxNav />

      {/* Full-screen video */}
      <section className="relative w-full aspect-video sm:aspect-auto sm:h-screen overflow-hidden">
        <PlayOnScrollVideo
          className="absolute inset-0 w-full h-full"
          videoClassName="absolute inset-0 w-full h-full object-cover"
          poster="/images/eiger-hero.png"
          posterAlt="Eiger Escape Rooms intro"
          posterSizes="100vw"
          captionsSrc="/videos/escape-rooms-eiger-intro-captions.vtt"
        >
          <source src="/videos/escape-rooms-eiger-intro.mp4" type="video/mp4" />
        </PlayOnScrollVideo>
        <div className="absolute inset-0 bg-black/30" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0c0c0c]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Eiger Escape Rooms
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Step out of the everyday for sixty minutes: hands-on missions beneath the mountain. A solid{" "}
              <Link href="/rainy-day-activities-eiger" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                indoor plan when the weather turns
              </Link>
              —whether you roll in with friends, relatives, or colleagues.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Collaborate, hunt for clues, and beat the timer. Three standalone rooms, each with its own thread to pull
              and a finale worth reaching.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Escape Rooms Section */}
      <section id="escape-rooms" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Pick your mission
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Three different setups—each one a full storyline, its own difficulty curve, and a reason to talk about the
              ride home.
            </p>
          </motion.div>

        </div>

        {/* Scroll-linked 3D card stack — tall container drives the scroll */}
        <div ref={cardsContainerRef} className="relative" style={{ height: "340vh" }}>
          {/* Sticky viewport — cards live here, pinned while parent scrolls */}
          <div
            className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
          >
            {/* ── Card 3: The Ice Chamber — bottom of stack, rendered first (furthest back) ── */}
            <div className="absolute w-[90%] h-[85vh] rounded-3xl overflow-hidden border border-gray-400/40 flex items-end bg-black"
              style={{ transformOrigin: "center top", zIndex: 10 }}
            >
              <Image
                src="/images/chamber.png"
                alt="The Ice Chamber"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–7 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">The Ice Chamber</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols on the walls, crystalline
                    light, and mechanisms that respond to your choices. Solve its secrets before it seals again—or risk
                    becoming part of what it was built to contain.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Get tickets <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/escape-rooms/the-ice-chamber">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-10">
                        Full briefing
                      </Button>
                    </Link>
                    </div>
                </div>
              </div>
            </div>

            {/* ── Card 2: The Forgotten Bunker — middle of stack ── */}
            <motion.div
              className="absolute w-[90%] h-[85vh] rounded-3xl overflow-hidden border border-gray-400/40 flex items-end bg-black"
              style={{ rotateX: card2RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 20 }}
            >
              <Image
                src="/images/bunker.png"
                alt="The Forgotten Bunker"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–6 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">The Forgotten Bunker</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    A sealed WWII bunker deep in the Eiger, buried under ice—recently uncovered, systems reactivated.
                    Maps, ciphers, and a final order never carried out: decipher the truth and shut it down before the
                    bunker completes its last mission.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Get tickets <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/escape-rooms/the-forgotten-bunker">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-10">
                        Full briefing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Card 1: The Eiger Signal — top of stack, rendered last (frontmost) ── */}
            <motion.div
              className="absolute w-[90%] h-[85vh] rounded-3xl overflow-hidden border border-gray-400/40 flex items-end bg-black"
              style={{ rotateX: card1RotateX, transformPerspective: 1200, transformOrigin: "center top", zIndex: 30 }}
            >
              <Image
                src="/images/mountain.png"
                alt="The Eiger Signal"
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–8 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">The Eiger Signal</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    An abandoned mountain rescue hut high on the Eiger is transmitting again—radios humming, a strange
                    signal pulsing through the gear. Restore power, decode the transmission, and uncover what lies
                    beneath the mountain before the signal completes—and whatever it is calling arrives.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Get tickets <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/escape-rooms/the-eiger-signal">
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg py-4 px-10">
                        Full briefing
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Local Price Comparison Widget */}
      <section className="py-16 px-4 bg-[#0c0c0c]">
        <PriceComparisonWidget />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              What sets us apart
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We build worlds you can touch—tight storytelling, puzzles that feel fair, and a finish you will still be
              debating over coffee.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 bg-[#111] rounded-xl border border-[#222]"
              initial={false}
              animate={isHydrated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Built sets & story</h3>
              <p className="text-gray-300">
                Physical props, layered sound, and a plot that keeps moving—so you feel inside the fiction, not in a
                bare box with locks.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#111] rounded-xl border border-[#222]"
              initial={false}
              animate={isHydrated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Made for crews</h3>
              <p className="text-gray-300">
                From <Link href="/group-bookings" className="text-cyan-400 hover:text-cyan-300 transition-colors">birthdays and school trips</Link> to{" "}
                <Link href="/team-building-eiger" className="text-cyan-400 hover:text-cyan-300 transition-colors">company offsites</Link>, we scale the
                welcome and the pacing to match your mix of ages and experience.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-[#111] rounded-xl border border-[#222]"
              initial={false}
              animate={isHydrated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Easy to reach</h3>
              <p className="text-gray-300">
                3818 Grindelwald—trains from Interlaken, quick links to the rest of the Bernese Oberland, and a walkable
                village once you arrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Before you book
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Straight answers about the Grindelwald site and the three alpine games we run.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How many players fit in each Eiger room?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The Eiger Signal holds two to eight; The Forgotten Bunker and The Ice Chamber each cap out a little
                  lower (see their pages for exact numbers). If you are between sizes, tell us when you book and we will
                  steer you toward the room that breathes best with your group.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  How long should we block on the calendar?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The mission clock runs about sixty minutes. With waiver, story, and a quick wrap-up, most teams are
                  in and out in roughly seventy-five to ninety minutes—plan a little buffer before dinner in Grindelwald.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  Can kids join, or is this adults-only?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  We aim for ages ten and up so everyone can follow the puzzles. Mixed-age families work great; anyone
                  under fourteen needs an adult in the room, and kid-only groups should be twelve plus. The Forgotten
                  Bunker is the friendliest entry for younger players; The Ice Chamber is aimed at teens and adults.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  What if the timer beats us?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Plenty of teams hear the buzzer before the final lock opens—especially in The Ice Chamber. Your game
                  master still walks you through the loose ends so the story lands, and you leave with a clear picture of
                  what you cracked and what still hid in the mountain.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-[#222]">
                <AccordionTrigger className="text-white hover:text-cyan-400">
                  Do walk-ins ever work, or are we better booking ahead?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Same-day slots sometimes open, but holiday weeks and ski season weekends fill up fast. If you have a
                  train connection or a chalet checkout, reserve online so the room you want is waiting—not a maybe
                  at the door.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-green-900/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={false}
            animate={isHydrated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white px-4">
              Plan your next run
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Lock a slot today—stretch your problem-solving, lean on each other under the clock, and leave with a story
              you did not have that morning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/booking" className="w-full sm:w-auto">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-base sm:text-lg py-4 px-6 sm:px-8 w-full sm:w-auto">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  Reserve a room
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-base sm:text-lg py-4 px-6 sm:px-8 w-full sm:w-auto">
                  Ask a question
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}