"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Clock, Users, Star, CheckCircle2, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageSlideshow } from "@/components/image-slideshow"
import { CtaSection } from "./cta-section"

export default function IceChamberPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chamber.png"
            alt="The Ice Chamber"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={fadeIn} className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Back to All Rooms
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              The Ice Chamber
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl mt-[30px] inline-block">
                Our Most Challenging Escape Room
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              A hidden chamber deep inside the Eiger, preserved in perfect ice. Mechanisms respond to your presence—every
              choice shapes what happens next. Solve its secrets before it seals again.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6 mb-8"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="flex items-center text-gray-300">
              <Users className="w-5 h-5 mr-2 text-cyan-400" />
              <span>2-7 Players</span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center text-gray-300">
              <Clock className="w-5 h-5 mr-2 text-cyan-400" />
              <span>60 Minutes</span>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={fadeIn}>
            <Link 
              href="/booking" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Reserve
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Your Mission Briefing</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300">
                    A hidden chamber has been discovered deep inside the Eiger, preserved in perfect ice. Strange symbols
                    cover the walls, and crystalline structures glow with an unnatural light. No records explain who built
                    it—or why.
                  </p>
                  <p className="text-gray-300 mt-4">
                    As you explore the chamber, mechanisms begin to respond to your presence, shifting the environment
                    itself. This is not just a place, but a system waiting to be activated. Every choice you make shapes
                    what happens next.
                  </p>
                  <p className="text-gray-300 mt-4">
                    This is our most advanced room — trickier than The Eiger Signal — and is best suited to players who
                    have tackled an escape room before. Solve the chamber&apos;s secrets before it seals itself again… or
                    risk becoming part of what it was built to contain.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Experience Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Living Environment</h3>
                    <p className="text-gray-300">
                      The chamber responds to your team—ice, light, and mechanisms shift as you progress, so no two runs
                      feel quite the same.
                    </p>
                  </div>
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Advanced Puzzles</h3>
                    <p className="text-gray-300">
                      Solve our most intricate and challenging puzzles that will test your logical thinking, observation
                      skills, and teamwork.
                    </p>
                  </div>
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Branching Choices</h3>
                    <p className="text-gray-300">
                      Decisions matter. The chamber&apos;s systems react to how you work together under pressure.
                    </p>
                  </div>
                  <div className="bg-[#111] p-6 rounded-xl border border-[#222]">
                    <h3 className="text-xl font-bold mb-3 text-white">Immersive Atmosphere</h3>
                    <p className="text-gray-300">
                      Step into a frozen space deep in the mountain—symbols, crystal, and shadow combine for a fully
                      immersive set.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Mission Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/bunker.png"
                      alt="Team exploring The Ice Chamber"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/chamber.png"
                      alt="Friends working together in The Ice Chamber"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/mountain.png"
                      alt="Group solving puzzles in The Ice Chamber"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-xl aspect-video">
                    <Image
                      src="/images/reception.png"
                      alt="Team in The Ice Chamber"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Agent Testimonials</h2>
                <div className="space-y-6">
                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "The Ice Chamber was the most challenging and rewarding escape room I've ever done! The puzzles
                        were incredibly clever and the shifting environment kept us engaged the entire time. We escaped
                        with just 37 seconds left and the adrenaline rush was amazing!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">AL</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Alex L.</h4>
                          <p className="text-gray-400 text-sm">Played May 2023</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                        {[...Array(1)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gray-600" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "Wow, this room is tough! We didn't make it out in time but had an absolute blast trying. The
                        puzzles are next-level difficult but in a good way. The staff were great about giving hints when
                        we needed them. Will definitely come back to try again!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">KP</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">Kaitlyn P.</h4>
                          <p className="text-gray-400 text-sm">Played February 2025</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-4">
                        "Our team of 6 took on The Ice Chamber as part of a corporate team building day, and it was
                        perfect! The room really highlighted everyone's different strengths and forced us to communicate
                        effectively. Even though we didn't escape in time, it was a fantastic bonding experience."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">DT</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium">David T.</h4>
                          <p className="text-gray-400 text-sm">Played April 2024</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <motion.div
                  className="bg-[#111] rounded-xl border border-[#222] overflow-hidden mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Mission Details</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Team Size</h4>
                          <p className="text-gray-400">2-7 people (Recommended: 4-6)</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Duration</h4>
                          <p className="text-gray-400">60 minutes</p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white">Difficulty</h4>
                          <p className="text-gray-400">Tricky, but Fun. (4/5)</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-cyan-900/20 to-green-900/20 border-t border-[#222]">
                    <h4 className="font-bold text-white mb-2">Perfect For:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Experienced escape room enthusiasts</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Larger groups (4-6 recommended)</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Corporate team building</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mr-2" />
                        <span className="text-gray-300">Those seeking a real challenge</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#111] rounded-xl border border-[#222] overflow-hidden mb-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Accept Your Mission</h3>
                    <p className="text-gray-300 mb-4">
                      Ready to test your skills with our most challenging room? Book now and see if you can unlock the
                      chamber before it seals.
                    </p>
                    <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      Reserve
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-[#111] rounded-xl border border-[#222] overflow-hidden"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-white">Our Other Escape Rooms</h3>
                    <div className="space-y-4">
                      <Link
                        href="/escape-rooms/the-eiger-signal"
                        className="block p-4 bg-[#0a0a0a] rounded-lg border border-[#333] hover:border-cyan-500/50 transition-all group"
                      >
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          The Eiger Signal
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Decode a mysterious transmission from an abandoned mountain rescue hut high on the Eiger.
                        </p>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>

                      <Link
                        href="/escape-rooms/the-forgotten-bunker"
                        className="block p-4 bg-[#0a0a0a] rounded-lg border border-[#333] hover:border-cyan-500/50 transition-all group"
                      >
                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                          The Forgotten Bunker
                        </h4>
                        <p className="text-gray-400 text-sm mt-1">
                          Work through WWII ciphers and classified documents in a sealed bunker deep in the Eiger.
                        </p>
                        <div className="flex items-center justify-end mt-2">
                          <ArrowRight className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Mission Support & FAQs
            </h2>

            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="general">General Questions</TabsTrigger>
                <TabsTrigger value="room">Room-Specific Questions</TabsTrigger>
              </TabsList>
              <TabsContent value="general" className="space-y-4">
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">Do the ice doors actually seal us in?</h3>
                    <p className="text-gray-300">
                      No. The frost is theatre, not a trap. You can step out for air, a coat adjustment, or an
                      emergency anytime. The &quot;escape&quot; is a mission objective—finish the thaw before the
                      countdown—not a physical lock behind you.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">How do hints work in the cold?</h3>
                    <p className="text-gray-300">
                      Your game master watches the chamber feed and can route a clue through the in-world comms. Ask
                      early if you want a light push; otherwise we will wait until the team looks stuck so the
                      difficulty still feels earned.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">What time should boots hit the lobby?</h3>
                    <p className="text-gray-300">
                      Aim for fifteen minutes ahead of your slot. The Ice Chamber needs a slightly longer gear
                      briefing—layers, gloves, and how we keep the floor safe—before we cut you loose inside the
                      glacier.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="room" className="space-y-4">
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">Is The Ice Chamber a first-night room?</h3>
                    <p className="text-gray-300">
                      We rate it at 4.5/5 difficulty with puzzles spread across multiple zones. If you have never
                      played a room before, warm up on The Eiger Signal or The Forgotten Bunker; come back here when
                      you already know how your crew communicates under pressure.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">Can a duo clear the chamber?</h3>
                    <p className="text-gray-300">
                      Two seasoned players who split attention well can finish, but the room keeps parallel tasks
                      running—expect to jog between stations. Brand-new pairs should book a larger team or pick a
                      gentler room first; we would rather you leave exhilarated than exhausted.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-[#111] border-[#222]">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-white mb-2">What makes this room bite harder than the others?</h3>
                    <p className="text-gray-300">
                      The Ice Chamber is deliberately non-linear: clues you find early may not pay off until later, and
                      temperature-themed effects can hide details in plain sight. It rewards teams who track every
                      discovery on a shared board rather than chasing one linear path.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Share & Actions */}
      <CtaSection />

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  Ready to Enter The Ice Chamber?
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  The chamber is waking. Crystalline light cuts through the ice. Your crew has sixty minutes to solve its
                  secrets before it seals. Are you in?
                </p>
                <Link 
                  href="/booking" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 text-white font-bold rounded-xl hover:from-cyan-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Reserve
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <ImageSlideshow
                  images={[
                    {
                      src: "/images/chamber.png",
                      alt: "Team exploring The Ice Chamber",
                    },
                    {
                      src: "/images/bunker.png",
                      alt: "Frozen passages near The Ice Chamber",
                    },
                    {
                      src: "/images/mountain.png",
                      alt: "The Eiger above the ice chamber",
                    },
                    {
                      src: "/images/reception.png",
                      alt: "Eiger Escape Rooms reception",
                    },
                  ]}
                  interval={4000}
                  aspectRatio="video"
                  className="h-full md:rounded-l-none"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
