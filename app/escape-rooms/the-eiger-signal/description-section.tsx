import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DescriptionSection() {
  return (
    <section className="py-[10px] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight pl-[58px]">
              Room data
            </h2>
            <Card className="border-[6px] border-white bg-[#111] flex-1">
            <CardContent className="py-[80px] px-[52px] flex flex-col justify-center h-full">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                Room: The Eiger Signal. Players: 2–8. Duration: 60 minutes. Difficulty: Medium–hard. Puzzle types: logic,
                radio/signal pattern, mechanical. Win condition: complete objective chain before countdown ends. Failure
                mode: timer reaches zero.
              </p>
            </CardContent>
          </Card>
          </div>

          <Card className="border-[6px] border-white bg-[#111] overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/reception.png"
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
