"use client"

import Link from "next/link"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HeroSection } from "./hero-section"
import { DescriptionSection } from "./description-section"
import { GameStats } from "./game-stats"
import { VideoSection } from "./video-section"
import { CtaSection } from "./cta-section"
export default function TheEigerSignalPage() {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-2">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/escape-rooms">Escape Rooms</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>The Eiger Signal</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <HeroSection />
      <DescriptionSection />

      <GameStats />

      <VideoSection />

      <CtaSection />

      {/* Head to Head / Use Cases */}
      <section className="py-20 bg-[#0c0c0c] border-t border-[#222]">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono leading-[1.2] tracking-tight text-balance">
            Challenge your friends or work mates — play as two teams in a head to head battle
          </h2>
          <p className="mt-8 text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            The Eiger Signal is equally brilliant for{" "}
            <Link href="/team-building-eiger" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors font-semibold">
              corporate team building
            </Link>
            {" "}and{" "}
            <Link href="/group-bookings" className="text-white underline underline-offset-4 hover:text-gray-300 transition-colors font-semibold">
              teenage birthday parties
            </Link>
            . Race the clock and decode the mystery together.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#0a0a0a] border-t border-[#222]">
        <div className="container mx-auto px-4 flex justify-center">
          <Link
            href="/enquiry?room=The%20Eiger%20Signal"
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3 text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            Enquire about this room
          </Link>
        </div>
      </section>
    </div>
  )
}
