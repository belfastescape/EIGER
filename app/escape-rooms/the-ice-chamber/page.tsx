"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IceChamberPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/chamber.png"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            unoptimized
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
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl">
              Room: The Ice Chamber. Players: 2–7. Duration: 60 minutes. Difficulty: Hard (rated 4/5). Indoor puzzle
              sequence with non-linear tasks and environmental triggers. Minimum recommended age: 12+ with adult for
              younger groups.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div>
              <motion.div
                className="mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold mb-6 text-white">Room specification</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300">
                    Room: The Ice Chamber. Players: 2–7. Duration: 60 minutes. Difficulty: Hard (4/5). Mechanism-driven
                    layout with parallel puzzle tracks. Lighting and temperature effects used as puzzle inputs. Success
                    metric: complete objective sequence before timer end.
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
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <Image src="/images/bunker.png" alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <Image src="/images/chamber.png" alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <Image src="/images/mountain.png" alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <Image src="/images/reception.png" alt="" fill className="object-cover" unoptimized />
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
                      <p className="text-gray-300 italic">
                        Most challenging and rewarding session completed so far. Puzzles rated high complexity;
                        environment state changes during run. Completed with under one minute remaining.
                      </p>
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
                      <p className="text-gray-300 italic">
                        High difficulty run; objective not completed within timer. Hint system used. Would repeat.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#111] border-[#222]">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-300 italic">
                        Six participants; corporate booking. Communication load high; objective not completed; group
                        satisfaction reported as positive.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
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

      <section className="py-20 md:py-28 bg-[#0a0a0a] border-t border-[#222]">
        <div className="container mx-auto px-4 flex justify-center">
          <Link
            href="/enquiry?room=The%20Ice%20Chamber"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            Enquire about this room
          </Link>
        </div>
      </section>
    </div>
  )
}
