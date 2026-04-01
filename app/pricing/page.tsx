"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// Tabs removed
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PricingPage() {
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
            src="/images/eiger-hero.png"
            alt="Eiger Escape Rooms Pricing"
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
              Escape Room Pricing & Packages
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl mt-[30px] inline-block">
                From $33 per Adult. from $25 per child.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Affordable adventure awaits! Explore our pricing options and special discounts for your next escape room
              experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Pricing Section */}
      <section className="py-16 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </h2>
              <p className="text-gray-300 text-lg">
                Choose the best option for your group size
              </p>
            </div>

            {/* Main Pricing Table */}
            <div className="bg-[#111] rounded-xl shadow-2xl overflow-hidden mb-8 border border-[#222]">
              <div className="bg-gradient-to-r from-cyan-600 to-green-600 text-white px-6 py-4">
                <h3 className="text-xl font-bold">Standard Pricing</h3>
              </div>
              <div className="divide-y divide-[#222]">
                {/* 2 Players */}
                <div className="px-6 py-4 hover:bg-[#151515] transition-colors duration-150 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white">2 Players</span>
                    <span className="text-gray-400 text-sm ml-2">• Perfect for couples</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">
                    $45<span className="text-sm font-normal text-gray-400">/pp</span>
                  </div>
                </div>

                {/* 3 Players */}
                <div className="px-6 py-4 hover:bg-[#151515] transition-colors duration-150 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white">3 Players</span>
                    <span className="text-gray-400 text-sm ml-2">• Trio adventures</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">
                    $40<span className="text-sm font-normal text-gray-400">/pp</span>
                  </div>
                </div>

                {/* 4 Players */}
                <div className="px-6 py-4 hover:bg-[#151515] transition-colors duration-150 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white">4 Players</span>
                    <span className="text-gray-400 text-sm ml-2">• Small groups</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">
                    $38<span className="text-sm font-normal text-gray-400">/pp</span>
                  </div>
                </div>

                {/* 5-8 Players */}
                <div className="px-6 py-4 hover:bg-[#151515] transition-colors duration-150 flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-white">5-8 Players</span>
                    <span className="text-gray-400 text-sm ml-2">• Best value</span>
                  </div>
                  <div className="text-2xl font-bold text-cyan-400">
                    $35<span className="text-sm font-normal text-gray-400">/pp</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offers Row */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Saturday Morning */}
              <div className="bg-gradient-to-br from-cyan-600 to-green-600 rounded-xl shadow-xl p-6 text-white relative overflow-hidden border-2 border-cyan-400/50">
                <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  BEST DEAL!
                </div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Saturday Morning</h3>
                    <p className="text-white/90 text-sm mb-2">Up to 8 players</p>
                    <div className="text-3xl font-bold">$130 max</div>
                  </div>
                  <div className="text-6xl opacity-20">☀️</div>
                </div>
              </div>

              {/* Weekday Groups */}
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-xl shadow-xl p-6 text-white border border-[#333]">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold mb-1">Weekday Groups</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      8+ players • Mon-Fri •{" "}
                      <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 underline">
                        Contact Us
                      </Link>
                    </p>
                    <div className="text-3xl font-bold text-cyan-400">$33/pp</div>
                  </div>
                  <div className="text-6xl opacity-20">👥</div>
                </div>
              </div>
            </div>

            {/* Children's Pricing */}
            <div className="bg-gradient-to-r from-cyan-950/30 to-green-950/30 rounded-xl p-6 border-2 border-cyan-500/30">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Children's Pricing (Under 16)
                  </h3>
                  <p className="text-gray-300 text-sm">Special rates for young adventurers</p>
                </div>
                <div className="flex gap-6">
                  <div className="text-center bg-[#111] px-6 py-3 rounded-lg shadow-lg border border-[#222]">
                    <div className="text-2xl font-bold text-cyan-400">$25</div>
                    <div className="text-xs text-gray-400">Regular</div>
                  </div>
                  <div className="text-center bg-[#111] px-6 py-3 rounded-lg shadow-lg border border-[#222]">
                    <div className="text-2xl font-bold text-cyan-400">$28</div>
                    <div className="text-xs text-gray-400">Sat Afternoon</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-10">
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-bold text-2xl px-20 py-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105">
                  BOOK HERE
                </Button>
              </Link>
              <p className="text-gray-400 text-sm mt-4">
                All prices in NZD • 60-minute games • No hidden fees
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-white">Choose Your Experience</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* The Eiger Signal */}
                  <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all overflow-hidden">
                    <div className="h-40 relative">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/videos/optimised/SPYMOVIEedit.webm" type="video/webm" />
                        <source src="/videos/SPYMOVIEedit.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">The Eiger Signal</h3>
                        <p className="text-sm text-gray-300">Mountain rescue hut mystery on the Eiger</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        
                        <p className="text-sm text-gray-400">2-8 players | 60 minutes</p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Medium  difficulty (3.5/5)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Decode the transmission</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Perfect for all players</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Head to Head Challenge Available</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Book Now
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* The Forgotten Bunker */}
                  <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all overflow-hidden">
                    <div className="h-40 relative">
                      <Image src="/images/bunker.png" alt="The Forgotten Bunker" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">The Forgotten Bunker</h3>
                        <p className="text-sm text-gray-300">WWII ciphers and classified secrets</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        
                        <p className="text-sm text-gray-400">2-6 players | 60 minutes</p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Moderate difficulty (4/5)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Military ciphers &amp; documents</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Great for families &amp; small groups</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Tense countdown finale</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Book Now
                      </Link>
                    </CardFooter>
                  </Card>

                  {/* The Ice Chamber */}
                  <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all overflow-hidden">
                    <div className="h-40 relative">
                      <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      >
                        <source src="/videos/optimised/WANDMOVIE.webm" type="video/webm" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white">The Ice Chamber</h3>
                        <p className="text-sm text-gray-300">Our most challenging room</p>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <div className="mb-6">
                        
                        <p className="text-sm text-gray-400">2-7 players | 60 minutes</p>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300"> Tricky but Fun (4.5/5)</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Living environment &amp; branching choices</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Layered puzzles for experienced teams</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">Most exciting escape on the mountain</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Link href="/booking" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        Book Now
                      </Link>
                    </CardFooter>
                  </Card>
              </div>
            </div>
          </motion.div>
 
              
                           
                            
                     
                     
                           
 
           {/* Gift Vouchers Section */}
           <motion.div
             className="mb-16 bg-[#111] rounded-xl border border-[#222] overflow-hidden"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeIn}
           >
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-8">
                 <h2 className="text-3xl font-bold mb-4 text-white">Gift Vouchers</h2>
                 <p className="text-gray-300 mb-6">
                   Give the gift of adventure! Our gift vouchers make the perfect present for birthdays, holidays, or any
                   special occasion.
                 </p>
                 <ul className="space-y-4 mb-6">
                   
                   <li className="flex items-start">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                       <span className="text-white font-bold text-sm">2</span>
                     </div>
                     <div>
                       <h4 className="font-bold text-white">Value Vouchers</h4>
                       <p className="text-gray-400">Choose any amount from $50  to be used toward any booking.</p>
                     </div>
                   </li>
                   <li className="flex items-start">
                     <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-green-500 flex items-center justify-center mr-3 mt-0.5">
                       <span className="text-white font-bold text-sm">3</span>
                     </div>
                     <div>
                       <h4 className="font-bold text-white">Digital or Physical</h4>
                       <p className="text-gray-400">Choose between instant email delivery or a physical gift card.</p>
                     </div>
                   </li>
                 </ul>
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white">
                    Purchase Gift Voucher
                  </Button>
                </Link>
               </div>
                             <div className="relative h-full min-h-[300px] md:min-h-0">
                <Image src="/images/reception.png" alt="Gift Voucher" fill className="object-cover" />
              </div>
             </div>
           </motion.div>

           
           {/* FAQ Section */}
           <motion.div
             className="mb-16"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, margin: "-100px" }}
             variants={fadeIn}
           >
             <h2 className="text-3xl font-bold mb-8 text-white">Pricing FAQs</h2>
             <div className="bg-[#111] rounded-xl border border-[#222] p-8">
               <Accordion type="single" collapsible className="w-full">
                 <AccordionItem value="item-1" className="border-b border-[#222]">
                   <AccordionTrigger className="text-white hover:text-cyan-400">
                     Can we stack more than one Eiger promotion on a single booking?
                   </AccordionTrigger>
                   <AccordionContent className="text-gray-300">
                     No—only one offer applies per checkout. If you qualify for several, we automatically keep the
                     reduction that saves your group the most on that date and room.
                   </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-2" className="border-b border-[#222]">
                   <AccordionTrigger className="text-white hover:text-cyan-400">
                     What is the smallest crew you will run a room for?
                   </AccordionTrigger>
                   <AccordionContent className="text-gray-300">
                     Every mission at Eiger Escape Rooms needs at least two players so puzzles that split attention still
                     work. Solo travellers can book as a pair with a friend or ask us about joining another duo if we
                     ever trial public slots.
                   </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-3" className="border-b border-[#222]">
                   <AccordionTrigger className="text-white hover:text-cyan-400">
                     How long are Grindelwald gift vouchers good for?
                   </AccordionTrigger>
                   <AccordionContent className="text-gray-300">
                     Vouchers stay valid for twelve months from purchase—long enough to span ski season and summer hiking.
                     If your Jungfrau trip slips, email us before the date; we often extend once so the credit does not
                     vanish into the fog.
                   </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-4" className="border-b border-[#222]">
                   <AccordionTrigger className="text-white hover:text-cyan-400">
                     Will another group share our Eiger Signal or Bunker slot?
                   </AccordionTrigger>
                   <AccordionContent className="text-gray-300">
                     Never. A reservation buys the room, not a seat at a stranger&apos;s table. For a full-venue takeover
                     across The Eiger Signal, The Forgotten Bunker, and The Ice Chamber, contact us with your guest list
                     and we will quote a schedule.
                   </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-5" className="border-b border-[#222]">
                   <AccordionTrigger className="text-white hover:text-cyan-400">
                     How do we pay from abroad or on a company PO?
                   </AccordionTrigger>
                   <AccordionContent className="text-gray-300">
                     Online bookings use major cards (Visa, Mastercard, American Express). Swiss and EU companies can
                     request an invoice with bank transfer for team blocks and school trips—send your billing details
                     when you lock the date.
                   </AccordionContent>
                 </AccordionItem>
                 <AccordionItem value="item-6" className="border-b-0">
                   <AccordionTrigger className="text-white hover:text-cyan-400">
                     Does the listed price cover everything for the hour in-room?
                   </AccordionTrigger>
                   <AccordionContent className="text-gray-300">
                     The rate you see covers the full game, briefing, and standard taxes for Eiger Escape Rooms. Optional
                     add-ons—custom debriefs, staggered waves for big groups—are quoted separately if you need them.
                   </AccordionContent>
                 </AccordionItem>
               </Accordion>
             </div>
           </motion.div>
         </div>
       </section>

       {/* CTA Section */}
       <section className="py-16 bg-[#0c0c0c]">
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
                 Ready to Book Your Adventure?
               </h2>
               <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                 Choose your room, gather your team, and put your problem-solving skills to the test. The clock is
                 ticking!
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-2xl py-8 px-16">
                    BOOK HERE
                  </Button>
                </Link>
                 <Link href="/contact">
                   <Button
                     variant="outline"
                     className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                   >
                     Contact Us
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
