"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Mail, Clock, Bus, Car, ArrowRight } from "lucide-react"

export default function LocationPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-20 pb-20 bg-[#0c0c0c]">
      <section className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="bg-[#111] rounded-2xl overflow-hidden border border-[#222] mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-full h-[320px] md:h-[400px] relative overflow-hidden bg-[#111]">
            <iframe
              src="https://maps.google.com/maps?q=3818+Grindelwald,+Switzerland&hl=en&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              title="3818 Grindelwald, Switzerland on Google Maps"
            />
          </div>
          <div className="p-8 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Our Location
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              3818 Grindelwald, Switzerland
            </p>
            <p className="text-gray-400 mb-8">
              Find us in the heart of the Bernese Oberland, accessible via trains through Interlaken.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-[#111] rounded-xl border border-[#222] p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Reach us</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">info@eigerescaperooms.com</p>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">Open 7 days, 9:30 AM - 9:00 PM</p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <p className="text-gray-300">3818 Grindelwald, Switzerland</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-[#111] rounded-xl border border-[#222] p-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-white">Travel</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <Car className="w-5 h-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Parking</h3>
                </div>
                <p className="text-gray-300 ml-8">
                  There are street, lot, and hotel parking spots available around the village. Please watch local signs
                  for hours and fees.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Bus className="w-5 h-5 text-cyan-400 mr-3" />
                  <h3 className="text-lg font-semibold text-white">Public Transport</h3>
                </div>
                <p className="text-gray-300 ml-8">
                  Take the SBB to Interlaken Ost, then the Berner Oberland Bahn up to Grindelwald station. We are a short
                  walk from the station.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8"
            asChild
          >
            <Link href="/contact">
              Reserve a game <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  )
} 