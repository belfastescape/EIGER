"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ImageWithFilter from "@/components/image-with-filter"
import { HeroSection } from "@/components/hero-section"
import { Umbrella, Cloud, Coffee, Book, Film, Gamepad, Users, Star } from "lucide-react"

export default function RainyDayActivitiesEigerPage() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="When the valley turns wet"
        subtitle="Dry, lively things to do around Grindelwald until the lifts clear again"
        buttonText="Book Your Quest"
        imageSrc="/images/mountain.png"
        imageAlt="Grindelwald in misty weather"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Indoor picks around Grindelwald
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Clouds roll in fast here—below are warm, dry ways to spend the day without cancelling the fun.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Making the Most of Rainy Days</h3>
              <p className="text-gray-300 mb-6">
                Eiger's weather can be unpredictable, but that doesn't mean your day has to be ruined. From cultural experiences to thrilling adventures, our city offers countless ways to stay entertained indoors.
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're a local looking for something new or a visitor wanting to make the most of your time in the capital, these indoor activities provide the perfect escape from the rain.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden"
            >
              <ImageWithFilter
                src="/images/chamber.png"
                alt="Indoor entertainment"
                width={800}
                height={533}
                filter="brightness-110 contrast-110 saturate-150"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden"
            >
              <ImageWithFilter
                src="/images/bunker.png"
                alt="Family fun"
                width={800}
                height={533}
                filter="brightness-110 contrast-110 saturate-150"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden"
            >
              <ImageWithFilter
                src="/images/reception.png"
                alt="Group activities"
                width={800}
                height={533}
                filter="brightness-110 contrast-110 saturate-150"
                className="rounded-xl"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden"
            >
              <ImageWithFilter
                src="/images/mountain.png"
                alt="Indoor fun"
                width={800}
                height={533}
                filter="brightness-110 contrast-110 saturate-150"
                className="rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Top Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Featured Indoor Activities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From museums to escape rooms, discover the best ways to spend a rainy day in Eiger.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Eiger Escape Rooms</h3>
                  <p className="text-gray-400 mb-4">
                    Our escape rooms offer the perfect blend of entertainment and challenge. With three unique rooms to choose from, you'll be immersed in thrilling scenarios that test your problem-solving skills and teamwork.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Perfect for groups of 2-8 people</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">60 minutes of immersive entertainment</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Located in the heart of Eiger</span>
                    </li>
                  </ul>
                  <Link href="/rooms">
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                      Book Your Escape
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                    <Book className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">Te Papa Museum</h3>
                  <p className="text-gray-400 mb-4">
                    New Zealand's national museum offers fascinating exhibitions and interactive displays that showcase the country's unique culture and history.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Free general admission</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Interactive exhibits</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Family-friendly activities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                    <Film className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">The Embassy Theatre</h3>
                  <p className="text-gray-400 mb-4">
                    Experience the magic of cinema in this historic theatre, known for hosting world premieres and offering a unique movie-going experience.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Art deco architecture</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Premium viewing experience</span>
                    </li>
                    <li className="flex items-start">
                      <Star className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Central location</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Escape Rooms Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Escape Rooms: Your Perfect Rainy Day Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              When the rain starts falling, our escape rooms offer the perfect indoor adventure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden"
            >
              <ImageWithFilter
                src="/images/reception.png"
                alt="Team solving puzzles in escape room"
                width={800}
                height={600}
                filter="brightness-110 contrast-110 saturate-150"
                className="w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Why Escape Rooms Are Ideal for Rainy Days</h3>
              <p className="text-gray-300 mb-6">
                Eiger Escape Rooms stands out as one of the best indoor activities in Eiger for several reasons:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Immersive Experience</h4>
                    <p className="text-gray-300">Our carefully designed rooms transport you to different worlds, making you forget about the weather outside.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Perfect for Groups</h4>
                    <p className="text-gray-300">Whether you're with family, friends, or colleagues, our rooms accommodate groups of various sizes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold mb-1">Central Location</h4>
                    <p className="text-gray-300">Located in the heart of Eiger, we're easily accessible and close to other attractions.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <div>
                    <h4 className="text-white font-bold mb-1">All-Weather Entertainment</h4>
                    <p className="text-gray-300">Our climate-controlled rooms provide the perfect escape from Eiger's unpredictable weather.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-[#111] rounded-2xl overflow-hidden border border-[#222]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Dry fun while it pours
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Grab a timed mission at Eiger Escape Rooms—one of the liveliest indoor picks in the valley when the peaks
                disappear into cloud.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Reserve
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Ask us anything
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