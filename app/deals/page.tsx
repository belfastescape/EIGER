"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Users, Star, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DealsPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative w-full h-[400px] bg-black flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Offers & promos</h1>
          <p className="text-xl text-white max-w-2xl">
            Limited bundles and seasonal cuts on our Grindelwald games—same rooms, lighter totals when you qualify.
          </p>
        </div>
      </section>

      {/* Saturday Morning Special */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Saturday early-bird</h2>
              <p className="text-gray-300 mb-6">
                Weekend starts before lunch—book any Saturday slot before noon and the cap stays friendly for bigger squads.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Saturdays, start time before 12:00</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">$130 max total for up to eight players</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Great for families and anyone who likes quiet lifts</span>
                </li>
              </ul>
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                  Reserve
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Winter Teams Deal */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-white">Summer team block</h2>
              <p className="text-gray-300 mb-6">
                Warm-season offsites: tighter per-person pricing when you bring eight or more on weekdays we designate.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Discounted bands for eight-plus players</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Corporate and school invoicing welcome</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Pair with our team-building flow</span>
                </li>
              </ul>
              <Link href="/team-building">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                  Team-building info
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      
    </div>
  )
} 