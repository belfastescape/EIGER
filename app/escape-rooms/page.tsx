"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageWithFilter from "@/components/image-with-filter"
import { HeroSection } from "@/components/hero-section"
import GoogleIcon from '@/components/GoogleIcon'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface RoomCardProps {
  room: {
    id: string
    name: string
    description: string
    image: string
    hoverImage?: string
    
    minPeople: number
    maxPeople: number
    duration: number
    tags: string[]
  }
}

function RoomCard({ room }: RoomCardProps) {
  return (
    <motion.div
      className="bg-[#111] rounded-xl overflow-hidden border border-[#222] hover:border-cyan-500/30 transition-all group h-full flex flex-col"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <Image
          src={room.image || "/placeholder.svg"}
          alt={room.name}
          width={800}
          height={600}
          className="object-cover w-full h-full transition-all duration-500 absolute inset-0 group-hover:scale-110 group-hover:filter group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150"
        />
        {room.hoverImage && (
          <Image
            src={room.hoverImage || "/placeholder.svg"}
            alt={`${room.name} - Alternate View`}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-all duration-500 absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:filter group-hover:brightness-125 group-hover:contrast-125 group-hover:saturate-150"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent h-20"></div>
        <div className="absolute top-4 right-4">
         
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-white mb-2">{room.name}</h3>
          <p className="text-gray-300 mb-4">{room.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="bg-[#0a0a0a] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center">
            <Users className="w-3 h-3 mr-1 text-cyan-400" />
            {room.minPeople}-{room.maxPeople} people
          </div>
          <div className="bg-[#0a0a0a] px-2 py-1 rounded-full text-xs text-gray-400 flex items-center">
            <Clock className="w-3 h-3 mr-1 text-cyan-400" />
            {room.duration} minutes
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Link
            href={`/escape-rooms/${room.id}`}
            className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center"
          >
            Story & specs <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Reserve
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function EscapeRoomsPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState("all")

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

  const rooms = [
    {
      id: "the-eiger-signal",
      name: "The Eiger Signal",
      description:
        "A high-altitude rescue post is broadcasting again after years of quiet—static on the speakers, lamps twitching, the journal stopping mid-entry. The cadence is not a textbook SOS. Reroute power, untangle the pattern, and learn what was opened beneath the ridge before the carrier fades.",
      image: "/images/mountain.png",

      minPeople: 2,
      maxPeople: 8,
      duration: 60,
      tags: ["beginner", "mystery", "signal"],
    },
    {
      id: "the-forgotten-bunker",
      name: "The Forgotten Bunker",
      description:
        "A sealed WWII shelter under the ice has powered back on—intercept traffic, redacted maps, and a final order that never went out. Work the ciphers, bring panels online, and halt the protocol before the bunker finishes what it started.",
      image: "/images/bunker.png",

      minPeople: 2,
      maxPeople: 6,
      duration: 60,
      tags: ["beginner", "family-friendly", "historical", "ciphers"],
    },
    {
      id: "the-ice-chamber",
      name: "The Ice Chamber",
      description:
        "A frozen hall inside the massif—glyphs on the walls, crystals catching light like warnings. Nothing in the archive explains the architect. The space reacts to you: paths fork, devices follow your pace. Finish the sequence before the vault resets—or stay inside what it was meant to hold.",
      image: "/images/chamber.png",

      minPeople: 2,
      maxPeople: 7,
      duration: 60,
      tags: ["expert", "ice", "exploration"],
    },
  ]

  const filteredRooms = filter === "all" ? rooms : rooms.filter((room) => room.tags.includes(filter))

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?key=yjanr"
            alt="Eiger Escape Rooms"
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
              The three missions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Same address, three different worlds—each built as a full arc with its own tone, tempo, and puzzle style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Browse by vibe</h2>
                <TabsList className="bg-[#111] border border-[#222]">
                  <TabsTrigger value="all">Every room</TabsTrigger>
                  <TabsTrigger value="beginner">Easier</TabsTrigger>
                  <TabsTrigger value="family-friendly">Family</TabsTrigger>
                  <TabsTrigger value="expert">Hardest</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="beginner" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="family-friendly" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>

              <TabsContent value="expert" className="mt-0">
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                >
                  {filteredRooms.map((room) => (
                    <RoomCard key={room.id} room={room} />
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <motion.div
            className="bg-[#111] rounded-xl border border-[#222] p-8 mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-white">Bigger groups</h2>
                <p className="text-gray-300 mb-6">
                  Hosting a crowd? Spin up more than one room at the same start time—ideal for offsites, birthdays, or
                  any day you want bragging rights at dinner.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-300">Parallel games across our three sets</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-300">Optional head-to-head scorekeeping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-300">Roughly thirty players in one wave</span>
                  </li>
                </ul>
                <Link href="/team-building">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                    Team options
                  </Button>
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/reception.png"
                  alt="Group Booking"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
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
              Common questions
            </h2>

            <div className="space-y-4">
              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Where should we start if we are new?</h3>
                <p className="text-gray-300">
                  The Eiger Signal is the gentlest slope: hut radio, medium difficulty. Prefer codes and history? The
                  Forgotten Bunker adds pressure. Want frost, branching puzzles, and a sting in the tail? Save The Ice
                  Chamber for a team that already likes a fight.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">If time runs out, do we still see the ending?</h3>
                <p className="text-gray-300">
                  Yes—we care that you hear the payoff. Expect a tight recap after the buzzer, especially in The Ice
                  Chamber where plots cross in more than one corner.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Why are phones off-limits inside?</h3>
                <p className="text-gray-300">
                  So the next group walks in cold. Afterward we are glad to shoot a team photo in the lobby—say if you
                  want the Eiger in frame.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Can we buy a gift for someone travelling here?</h3>
                <p className="text-gray-300">
                  Yes—vouchers apply to any room and last twelve months. Buy online or ask for a custom value. If
                  flights move, contact us before the date slips away; we try to extend once.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Lock a slot
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Reserve online when you know your date—the best windows go first on weekends and in peak season.
              </p>
              <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Go to booking
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
