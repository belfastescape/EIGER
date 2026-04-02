import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DescriptionSection() {
  return (
    <section className="py-[10px] bg-[#0f1410]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight pl-[52px]">
              Room data
            </h2>
            <Card className="border-[6px] border-white bg-[#111] flex-1">
              <CardContent className="py-[80px] px-[52px] flex flex-col justify-center h-full">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  Room: The Forgotten Bunker. Players: 2–6. Duration: 60 minutes. Difficulty: Medium–hard. Win condition:
                  complete shutdown sequence before timer. Failure mode: timer reaches zero. Accessibility: contact for
                  mobility requirements.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[6px] border-white bg-[#111] overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/bunker.png"
                alt=""
                fill
                className="object-contain lg:object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
