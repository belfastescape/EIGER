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
            Room Details <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Book Now
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
        "An abandoned mountain rescue hut high on the Eiger has begun transmitting again after decades of silence. Inside, everything is frozen in time—radios humming, lights flickering, logs abruptly ending. A strange signal pulses through the equipment, repeating in patterns no one can explain. As you restore power and decode the transmission, it becomes clear this is no ordinary distress call. Something was discovered beneath the mountain… and it may still be there. You have one hour to uncover the truth before the signal completes—and whatever it's calling finally arrives.",
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
        "Hidden deep within the Eiger lies a sealed WWII bunker, lost to time and buried beneath ice. Recently uncovered, its systems have mysteriously reactivated. Inside, maps, coded messages, and classified documents reveal a secret operation that was never meant to be found. As you work through military ciphers and restore the bunker's control systems, a final set of orders emerges—one that was never carried out. The countdown has already begun. You must decipher the truth and shut it down before the bunker completes its last mission.",
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
        "A hidden chamber has been discovered deep inside the Eiger, preserved in perfect ice. Strange symbols cover the walls, and crystalline structures glow with an unnatural light. No records explain who built it—or why. As you explore the chamber, mechanisms begin to respond to your presence, shifting the environment itself. This is not just a place, but a system waiting to be activated. Every choice you make shapes what happens next. Solve the chamber's secrets before it seals itself again… or risk becoming part of what it was built to contain.",
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
              Our Escape Rooms
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose your adventure from our range of immersive escape room experiences, each with unique themes and
              challenges.
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
                <h2 className="text-3xl font-bold text-white">Choose Your Adventure</h2>
                <TabsList className="bg-[#111] border border-[#222]">
                  <TabsTrigger value="all">All Rooms</TabsTrigger>
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="family-friendly">Family</TabsTrigger>
                  <TabsTrigger value="expert">Expert</TabsTrigger>
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
                <h2 className="text-3xl font-bold mb-4 text-white">Group Bookings</h2>
                <p className="text-gray-300 mb-6">
                  Planning a larger event? We can accommodate groups of all sizes by running multiple rooms
                  simultaneously. Perfect for corporate team building, birthday parties, or any special occasion.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <span className="text-gray-300">Multiple rooms running in parallel</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <span className="text-gray-300">Head to Head Team Challenge available</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-gray-300">Up to 30 people per session</span>
                  </li>
                </ul>
                <Link href="/team-building">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                    Learn About Team Building
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
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Which storyline should we tackle first?</h3>
                <p className="text-gray-300">
                  The Eiger Signal is our clearest on-ramp: radio static, rescue-hut tension, difficulty around three
                  out of five. If you already love cipher work and wartime props, The Forgotten Bunker turns the dial
                  up. When you want frostbite ambience and non-linear logic, The Ice Chamber is the summit push—save
                  it for a crew that relishes chaos.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">If the alarm sounds before we finish, do we still get closure?</h3>
                <p className="text-gray-300">
                  Yes. The story matters as much as the score. We would rather you see how the narrative ends than
                  walk out on a cliffhanger, so expect a short walkthrough when the timer stops—especially in longer
                  arcs like The Ice Chamber where threads cross in multiple corners.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Why no photos inside the sets?</h3>
                <p className="text-gray-300">
                  We keep cameras out of the play space so the next team does not inherit spoilers on Instagram. After
                  the debrief we will grab a crisp team shot in the lobby—feel free to mention if you want the peaks
                  framed in the window behind you.
                </p>
              </div>

              <div className="bg-[#111] rounded-lg border border-[#222] p-6">
                <h3 className="text-xl font-bold mb-2 text-white">Can we gift a mountain mission to someone visiting Grindelwald?</h3>
                <p className="text-gray-300">
                  Absolutely. Digital vouchers cover any of our three rooms and stay valid for twelve months—perfect
                  for guests who already skied Jungfrau and want an indoor adventure. Order through the booking flow,
                  or email us if you need a custom amount. We can usually extend expiry dates if the weather window
                  shifts; just ask before you give up on the trip.
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
                Ready for Your Next Adventure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your escape room experience today and put your problem-solving skills to the test. The clock is
                ticking!
              </p>
              <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
