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
          posterAlt=""
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
              Escape the real world for an hour. Our immersive escape rooms are the perfect{" "}
              <Link href="/rainy-day-activities-eiger" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                fun indoor activity in Grindelwald
              </Link>
              —whether you&apos;re with friends, family, or workmates.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              Work together, crack the puzzles, beat the clock. Three unique escape rooms, each with its own story
              waiting to be solved. We challenge you to escape.
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
              Choose Your Adventure
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Choose your adventure from our range of immersive escape room experiences, each with unique themes and
              challenges.
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
                alt=""
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–7 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">The Ice Chamber</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    Room: The Ice Chamber. Players: 2–7. Duration: 60 minutes. Difficulty: Hard. Indoor puzzle sequence;
                    non-linear tasks; environmental triggers.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/escape-rooms">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Find out more <ArrowRight className="ml-2 h-5 w-5" />
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
                alt=""
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–6 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">The Forgotten Bunker</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    Room: The Forgotten Bunker. Players: 2–6. Duration: 60 minutes. Difficulty: Medium–hard. Puzzle types:
                    ciphers, maps, document-based logic.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/escape-rooms">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Find out more <ArrowRight className="ml-2 h-5 w-5" />
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
                alt=""
                fill
                className="object-cover"
                loading="lazy"
                quality={75}
                sizes="(max-width: 768px) 90vw, (max-width: 1280px) 85vw, 80vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 w-full px-8 md:px-16 pb-12 md:pb-20">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center text-sm text-cyan-400 mb-3 gap-1.5">
                    <Users className="w-4 h-4" /> 2–8 people &nbsp;·&nbsp; 60 minutes
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold text-white mb-4">The Eiger Signal</h3>
                  <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-xl">
                    Room: The Eiger Signal. Players: 2–8. Duration: 60 minutes. Difficulty: Medium–hard. Objectives: power
                    restoration, signal decode, timed completion.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/escape-rooms">
                      <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-4 px-10">
                        Find out more <ArrowRight className="ml-2 h-5 w-5" />
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
              Why Choose Eiger Escape Rooms?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              We&apos;re committed to providing you the best escape room experience in Grindelwald with immersive themes,
              challenging puzzles, and unforgettable adventures.
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
              <h3 className="text-xl font-bold mb-3 text-white">Immersive Experiences</h3>
              <p className="text-gray-300">
                Our escape rooms feature detailed sets, professional props, and engaging storylines that transport you to
                another world.
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
              <h3 className="text-xl font-bold mb-3 text-white">Perfect for Groups</h3>
              <p className="text-gray-300">
                Whether it&apos;s your next family outing, a birthday party, or your{" "}
                <Link href="/team-building-eiger" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  team building event in Grindelwald
                </Link>
                , our escape rooms are designed for groups of all sizes.
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
              <h3 className="text-xl font-bold mb-3 text-white">Central Location</h3>
              <p className="text-gray-300">
                Conveniently located in Grindelwald, we&apos;re easily accessible by public transport and close to
                restaurants and cafes.
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
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Got questions? We&apos;ve got answers! Here are some of the most common questions about our escape rooms.
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
              Ready for Your Next Adventure?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4">
              Book your escape room experience today and discover why we&apos;re Grindelwald&apos;s premier escape room
              destination. Challenge your mind, test your teamwork, and create unforgettable memories!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
              <Link href="/escape-rooms" className="w-full sm:w-auto">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-base sm:text-lg py-4 px-6 sm:px-8 w-full sm:w-auto">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  Find out more
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