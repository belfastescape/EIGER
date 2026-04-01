"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Users, Clock, CheckCircle2, ArrowRight, Building2, Brain, Puzzle, MapPin, Mail, Facebook, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import GoogleIcon from '@/components/GoogleIcon'

export default function TeamBuildingPage() {
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
    <div className="min-h-screen">
      {/* Move JsonLd to a server component or layout file */}
      <HeroSection
        title="Team Building Eiger"
        subtitle="Strengthen your team with our immersive escape room challenges"
        buttonText="Book Your Team Event"
        imageSrc="/images/reception.png"
        imageAlt="Team building success celebration"
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
              Eiger's Premier Team Building Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking for team building activities in Eiger that are fun, engaging, and effective? Our escape rooms
              provide the perfect environment for teams to collaborate, communicate, and problem-solve together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Why Escape Rooms for Team Building?</h3>
              <p className="text-gray-300 mb-6">
                Escape rooms are the perfect team building activity because they naturally encourage the skills that
                make teams successful: communication, leadership, problem-solving, and collaboration.
              </p>
              <p className="text-gray-300 mb-6">
                In our carefully designed rooms, your team will need to work together to solve puzzles, find clues, and
                complete objectives within a 60-minute timeframe. The experience reveals how team members communicate
                under pressure and highlights each person's unique strengths.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Improves communication and collaboration</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Builds trust and team cohesion</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Develops problem-solving and critical thinking</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Creates shared memories and strengthens relationships</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl overflow-hidden border border-cyan-500/20 shadow-lg hover:shadow-cyan-500/10 transition-shadow"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ aspectRatio: '800/600' }}
              >
                <source src="/videos/optimised/teambuilding.webm" type="video/webm" />
              </video>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Benefits of Escape Room Team Building
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our escape rooms are designed to bring out the best in your team and develop key workplace skills.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Improved Communication</h3>
              <p className="text-gray-400">
                Teams must share information effectively to succeed. Our rooms create natural opportunities for clear
                communication and active listening.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Problem-Solving Skills</h3>
              <p className="text-gray-400">
                Escape rooms present unique challenges that require creative thinking and collaborative problem-solving,
                skills that transfer directly to the workplace.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Puzzle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Team Cohesion</h3>
              <p className="text-gray-400">
                Shared challenges create bonds. Successfully escaping a room together builds trust and strengthens
                relationships between team members.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={fadeIn}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Leadership Development</h3>
              <p className="text-gray-400">
                Escape rooms reveal natural leaders and give everyone a chance to step up. They're perfect for
                identifying leadership potential in your team.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              How Our Team Building Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From booking to debriefing, we've designed a seamless experience for your team.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Consultation</h3>
              <p className="text-gray-400">
                We'll discuss your team's size, goals, and preferences to recommend the perfect escape room experience.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Briefing</h3>
              <p className="text-gray-400">
                On arrival, our game masters will explain the rules and set the scene for your team's adventure.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Challenge</h3>
              <p className="text-gray-400">
                Your team will have 60 minutes to solve puzzles, find clues, and work together to escape the room.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Debrief</h3>
              <p className="text-gray-400">
                After the experience, we'll facilitate a discussion about your team's performance and key takeaways.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Teams Say About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what corporate teams have to say about their experience.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "We took our team last night for our Christmas function. We completed The Eiger Signal, it's well thought out, fun and a little challenging at times.

Everyone had a fantastic time and it's a great team bonding experience. So much so that everyone was talking about coming back to do another room in the New Year.

The team from Eiger Escape Rooms are friendly, easy to deal with and very accommodating.

If you are wanting an escape room experience, we would 100% recommended this one.
"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Hallids</h4>
                      <p className="text-gray-400">Team Organiser, Eiger </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "Absolutely perfect for our staff Christmas doo. We had enough for two teams, so being able to run the same story in two separate rooms and allow the victors to lord it over the second place team - and watch on the monitors - was sweet.
                    For a relatively new Escape Room, they've got a pretty sweet setup going."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Stuart Bothwell</h4>
                      <p className="text-gray-400"> Eiger </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "As a startup, we needed a team building activity that was both fun and budget-friendly. Eiger Escape Rooms was perfect for us."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                      <GoogleIcon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">Sarah Lee</h4>
                      <p className="text-gray-400"> Eiger </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Corporate offsites, leadership retreats, and squad days—answered for our Grindelwald venue and three
              mountain-set rooms.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  How many colleagues can we bring to Eiger Escape Rooms in one wave?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  A single department can fill one room; larger offsites can run The Eiger Signal, The Forgotten Bunker,
                  and The Ice Chamber in parallel so roughly thirty people play at once. We then stagger the next wave if
                  you need more seats—tell us your headcount and we will map a timetable that keeps energy high instead
                  of leaving half the team in the cold.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Do we need escape-room experience or mountaineering skills?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  No crampons required—our challenges live indoors. Prior escape-room visits help in The Ice Chamber, but
                  The Eiger Signal welcomes newcomers. Bring clear communication, one person willing to keep a clue log,
                  and shoes you are happy standing in for an hour; we handle the alpine flavour with lighting, sound, and
                  story.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  How far ahead should we book a team day in Grindelwald?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Aim for two weeks for a single room, three to four when you need every bay or a back-to-back schedule
                  during ski season and Christmas markets. Last-minute gaps sometimes open—email us with your train
                  arrival time and we will see what is still on the board.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Why choose Eiger Escape Rooms over another indoor team activity?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Our games are built for this valley—radio distress calls, bunker ciphers, ice caverns—not generic
                  padlock drills. The sixty-minute clock surfaces who speaks up, who listens, and who connects dots under
                  stress, which is exactly what most managers want to observe without staging a workshop in a beige
                  conference room.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Can we align the experience with a company message or off-site theme?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Share your objectives when you book—quarterly values, a merger story, leadership principles. We cannot
                  rewrite entire rooms overnight, but we can tailor briefings, hint language, and debrief prompts so the
                  mission echoes what your leadership team wants reinforced.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What does the post-game debrief cover?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Your game master walks through pivotal moments: where communication clicked, where parallel puzzles
                  stalled, and how hints were used. If you want a facilitator-led discussion afterward, tell us in
                  advance—we will reserve a few extra minutes in the lobby before everyone scatters toward fondue.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  Do you cater meals or recommend where to go after the games?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  We focus on the escape experiences; food and drink stay outside the play areas. Grindelwald has
                  excellent bistros, hotel dining rooms, and casual spots within a short walk—tell us your budget and
                  dietary needs and we will point your group somewhere that fits the tone of the day.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
                <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
                  What is the cancellation policy for corporate and large team bookings?
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  Parties of ten or more need seven days notice for a full refund. Smaller team blocks follow our
                  standard policy: forty-eight hours or more for a refund or reschedule, tighter windows limit what we
                  can move. The sooner you flag a weather delay or flight change, the more flexibility we have across
                  rooms.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <p className="text-gray-300 mb-6">Have more questions about our team building experiences?</p>
            <Link href="/contact" className="inline-block">
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                Contact Our Team Building Specialists
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Rooms for Team Building */}
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
              Our Escape Rooms for Team Building
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each of our rooms offers unique challenges that test different team skills.
            </p>
          </motion.div>

          <Tabs defaultValue="the-eiger-signal" className="w-full">
            <TabsList className="w-full flex justify-center mb-8 bg-[#111] border border-[#222] p-1">
              <TabsTrigger value="the-eiger-signal" className="flex-1">
                The Eiger Signal
              </TabsTrigger>
              <TabsTrigger value="the-forgotten-bunker" className="flex-1">
                The Forgotten Bunker
              </TabsTrigger>
              <TabsTrigger value="the-ice-chamber" className="flex-1">
                The Ice Chamber
              </TabsTrigger>
            </TabsList>

            <TabsContent value="the-eiger-signal">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/mountain.png"
                    alt="The Eiger Signal"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Eiger Signal</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      MOUNTAIN MYSTERY
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-8 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Decode a mysterious transmission from an abandoned mountain rescue hut and uncover what lies beneath
                    the Eiger. The Eiger Signal tests strategic thinking and careful attention to detail.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Strategic planning and delegation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Attention to detail and information management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Critical thinking under pressure</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                    asChild
                  >
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="the-forgotten-bunker">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/bunker.png"
                    alt="The Forgotten Bunker"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Forgotten Bunker</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      WWII CIPHERS
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-6 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Work through military ciphers and classified documents in a sealed bunker that has reactivated deep in
                    the mountain. The Forgotten Bunker is perfect for teams that need to coordinate across puzzles and
                    tight spaces.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Communication across team members</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Resource management and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Leadership and role assignment</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                    asChild
                  >
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="the-ice-chamber">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/chamber.png"
                    alt="The Ice Chamber"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Ice Chamber</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      MOST CHALLENGING
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-7 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Explore a frozen chamber where the environment itself responds to your choices. With layered puzzles and
                    nonlinear challenges, The Ice Chamber is ideal for experienced teams that need to coordinate across
                    shifting spaces.
                  </p>
                  <h4 className="text-lg font-bold mb-2 text-white">Team Skills Tested:</h4>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Creative thinking under changing conditions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Collaborative problem-solving</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-2 mt-0.5" />
                      <span className="text-gray-300">Pattern recognition and logical reasoning</span>
                    </li>
                  </ul>
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white"
                    asChild
                  >
                    <Link href="/booking">Book Now</Link>
                  </Button>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
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
                Ready to Strengthen Your Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Book your team building experience today and discover the power of collaborative problem-solving in our
                immersive escape rooms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    Check Availability
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Request Information
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-[#111] rounded-xl border border-[#222] p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
              <ul className="space-y-6">
                <motion.li variants={fadeIn} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Address</h3>
                    <p className="text-gray-300">3818 Grindelwald, Switzerland</p>
                  </div>
                </motion.li>

                <motion.li variants={fadeIn} className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300">
                      <Link href="mailto:info@eigerescaperooms.com" className="hover:text-cyan-400 transition-colors">
                        info@eigerescaperooms.com
                      </Link>
                    </p>
                  </div>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 