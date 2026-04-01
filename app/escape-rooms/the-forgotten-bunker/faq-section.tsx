import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-20 bg-[#0f1410] border-t border-white/10">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-mono text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto text-center mb-12">
          Field notes for teams heading into the Forgotten Bunker.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Is the bunker OK for families with younger players?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              The room leans on WWII-era cipher props and radio chatter—no shock scares, but the pacing is quicker than
              The Eiger Signal. Families with kids ten and up usually have a blast when an adult joins the mission. If
              your group is mostly tweens, we recommend at least one grown-up who loves decoding paperwork.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              What is the &quot;extra mile&quot; for veterans escape-room players?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Sharp crews who clear the first act with time to spare may uncover an optional side mission tucked into
              the bunker&apos;s paperwork. It never blocks the main exit path—it simply rewards teams who like to
              chase every loose thread before the all-clear sounds.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              How many operatives can the bunker hold?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              Two to six players is the sweet spot. It is our most compact footprint at Eiger Escape Rooms, so five
              adults (or six lanky teenagers) keeps sightlines clear without crowding the map table.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              Do we need history degrees or German language skills?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              No. Everything you need is printed, stamped, or wired into the set. Bring curiosity, a steady hand for
              tuning dials, and one teammate who keeps a running inventory of what you have already ruled out.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-[#222] rounded-lg overflow-hidden bg-[#111]">
            <AccordionTrigger className="px-6 py-4 text-white hover:text-cyan-400 transition-colors">
              How do hints work in the bunker?
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-gray-300">
              The watch officer in our booth sees every channel you open. Ask for a nudge when morale dips, or wait
              until we check in—either way, hints are delivered in-universe so the bunker stays believable from the
              first briefing to the final handshake.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
