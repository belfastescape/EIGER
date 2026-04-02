"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, Users, Star, ArrowRight, Building2, Brain, Puzzle, Send, MapPin, Mail, Clock, Facebook, User, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HeroSection } from "@/components/hero-section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TeamBuildingEigerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Team Building Eiger Enquiry",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "Team Building Eiger Enquiry", message: "" })
      } else {
        setSubmitStatus("error")
        setErrorMessage(data.details || data.error || "Something went wrong. Please try again.")
      }
    } catch {
      setSubmitStatus("error")
      setErrorMessage("Network error — please check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Team Building Grindelwald"
        subtitle="Strengthen your team with our immersive escape room challenges"
        buttonText="Plan Your Team Event"
        imageSrc="/images/reception.png"
      />

      {/* Introduction Section */}
      <section className="py-20 bg-[#0c0c0c]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Grindelwald&apos;s Premier Team Building Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Looking for team building activities in Grindelwald that are fun, engaging, and effective? Our escape rooms
              provide the perfect environment for teams to collaborate, communicate, and problem-solve together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Why Choose Escape Rooms for Your Team?</h3>
              <p className="text-gray-300 mb-6">
                Escape rooms naturally foster the essential skills every team needs: open communication, creative thinking, and effective collaboration.
              </p>
              <p className="text-gray-300 mb-6">
                In our immersive environments, your group will solve puzzles, uncover clues, and achieve shared goals—all within a thrilling 60-minute countdown. It's a fun way to discover hidden talents and strengthen bonds.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Encourages teamwork and trust</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Reveals leadership and problem-solving skills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Strengthens communication under pressure</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mr-3 mt-0.5" />
                  <span className="text-gray-300">Creates lasting memories for your team</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="rounded-xl overflow-hidden"
            >
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Key Advantages of Team Building in Escape Rooms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our Eiger escape rooms are crafted to unlock your team's full potential and foster essential workplace skills.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Stronger Connections</h3>
              <p className="text-gray-400">
                Teams build trust and rapport as they work together to escape. Our rooms encourage open dialogue and mutual support.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Creative Problem Solving</h3>
              <p className="text-gray-400">
                Each puzzle is a new challenge, pushing teams to think outside the box and collaborate on inventive solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Puzzle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Unified Team Spirit</h3>
              <p className="text-gray-400">
                Overcoming obstacles together creates a sense of unity and accomplishment that lasts long after the game ends.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111] p-8 rounded-xl border border-[#222] hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 h-full"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Leadership in Action</h3>
              <p className="text-gray-400">
                Escape rooms highlight natural leaders and encourage everyone to take initiative in a supportive environment.
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              How Your Team Building Journey Unfolds
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We make it easy for your team to enjoy a seamless and memorable experience from start to finish.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Discovery Call</h3>
              <p className="text-gray-400">
                We'll chat about your team's needs and recommend the best escape room adventure for your group.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Welcome Briefing</h3>
              <p className="text-gray-400">
                On arrival, our hosts will introduce the rules and set the stage for your team's mission.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">The Escape Challenge</h3>
              <p className="text-gray-400">
                Your team will have one hour to solve puzzles, crack codes, and escape before time runs out.
              </p>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Team Debrief</h3>
              <p className="text-gray-400">
                After the game, we'll guide a discussion to reflect on your team's performance and celebrate your achievements.
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Real Teams, Real Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how Eiger teams have transformed their workplace dynamics through our escape room adventures.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "Our department left the escape room energized and more connected than ever. The puzzles were clever and everyone contributed. Highly recommended for any Eiger business!"
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "We wanted something different for our annual team event and this was perfect. The staff were fantastic and the experience brought out the best in everyone."
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
              <Card className="bg-[#111] border-[#222] hover:border-cyan-500/30 transition-all h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "As a small business, we found the escape room to be a fun and affordable way to build trust and communication. We'll definitely be back!"
                  </p>
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about team building at Eiger Escape Rooms.
            </p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              Explore Our Eiger Escape Rooms
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our range of immersive rooms, each designed to challenge and inspire your team.
            </p>
          </motion.div>

          {/* Tabs and room content copied exactly from the original */}
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
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/mountain.png" alt="" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Eiger Signal</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      DIFFICULTY: CHALLENGING
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-8 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    A rescue hut high on the Eiger is transmitting again—decode the signal and uncover what lies beneath
                    before the hour runs out. Ideal for teams that need strategic planning and attention to detail.
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
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Reserve
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="the-forgotten-bunker">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/bunker.png" alt="" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Forgotten Bunker</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      DIFFICULTY: EXPERIENCED
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-6 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    A sealed WWII bunker deep in the Eiger, buried under ice—systems reactivated, ciphers and classified
                    orders in play. Ideal for teams coordinating across puzzles and tight spaces.
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
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Reserve
                  </Link>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="the-ice-chamber">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              >
                <div className="rounded-xl overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/chamber.png" alt="" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">The Ice Chamber</h3>
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mr-3">
                      DIFFICULTY: EXPERT
                    </div>
                    <span className="text-sm text-gray-400 flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                      2-7 people per room
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    A hidden chamber deep inside the Eiger, preserved in perfect ice—symbols on the walls, crystalline
                    light, and mechanisms that respond to your choices. Ideal for larger experienced teams coordinating
                    across shifting spaces.
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
                  <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Reserve
                  </Link>
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
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          >
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                Line up your next off-site
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Hold a slot for your crew and we will help you pick rooms, timing, and a debrief that matches your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/booking">
                  <Button className="bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white text-lg py-6 px-8">
                    See open times
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 text-lg py-6 px-8"
                  >
                    Talk to us
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
            >
              <div className="bg-[#111] rounded-xl border border-[#222] p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>
                <p className="text-gray-400 mb-6">Have a question or want to discuss your team event? Send us a message and our Eiger team will be in touch soon.</p>

                {submitStatus === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <p className="text-green-400 text-sm">Message sent successfully! We&apos;ll be in touch soon.</p>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="tb-name" className="text-gray-300 text-sm font-medium">Name *</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="tb-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tb-email" className="text-gray-300 text-sm font-medium">Email *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <Input
                        id="tb-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tb-subject" className="text-gray-300 text-sm font-medium">Subject *</Label>
                    <Input
                      id="tb-subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20"
                      placeholder="e.g. Team Building Eiger Enquiry"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tb-message" className="text-gray-300 text-sm font-medium">Message *</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
                      <Textarea
                        id="tb-message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="pl-10 bg-[#0a0a0a] border-[#333] text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 resize-none"
                        placeholder="Tell us about your team, preferred date, group size, and any questions..."
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:from-cyan-600 hover:to-green-600 text-white font-semibold py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
            >
              <div className="bg-[#111] rounded-xl border border-[#222] p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
                <ul className="space-y-6">
                  <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Address</h3>
                      <p className="text-gray-300">3818 Grindelwald, Switzerland</p>
                    </div>
                  </motion.li>

                  <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Email</h3>
                      <p className="text-gray-300">
                        <Link
                          href="mailto:info@eigerescaperooms.com"
                          className="hover:text-cyan-400 transition-colors"
                        >
                          info@eigerescaperooms.com
                        </Link>
                      </p>
                    </div>
                  </motion.li>

                  <motion.li variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Opening Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 09:00 AM - 7:00 PM</p>
                      <p className="text-gray-300">Saturday - Sunday: 09:00 - 7:30 PM</p>
                    </div>
                  </motion.li>
                </ul>

                <div className="mt-8 pt-8 border-t border-[#222]">
                  <h3 className="font-bold text-white mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.facebook.com/YOUR_FACEBOOK_PAGE"
                      className="w-10 h-10 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#333] hover:border-cyan-500 transition-colors"
                      aria-label="Eiger Escape Rooms on Facebook (opens in a new tab)"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Map */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="bg-[#111] rounded-xl border border-[#222] p-8 h-[400px] relative overflow-hidden"
              >
                <h2 className="text-2xl font-bold mb-4 text-white">Find Us</h2>
                <div className="absolute inset-0 pt-16 px-8 pb-8">
                  <iframe
                    src="https://maps.google.com/maps?q=3818+Grindelwald,+Switzerland&hl=en&z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "0.5rem" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="3818 Grindelwald, Switzerland on Google Maps"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  ></iframe>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 