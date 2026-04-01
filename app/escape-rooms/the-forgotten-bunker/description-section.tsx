import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DescriptionSection() {
  return (
    <section className="py-[10px] bg-[#0f1410]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight pl-[52px]">
              The Mission Brief
            </h2>
            <Card className="border-[6px] border-white bg-[#111] flex-1">
              <CardContent className="py-[80px] px-[52px] flex flex-col justify-center h-full">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                  Hidden deep within the Eiger lies a sealed WWII bunker, lost to time and buried beneath ice. Recently
                  uncovered, its systems have mysteriously reactivated. Inside, maps, coded messages, and classified
                  documents reveal a secret operation that was never meant to be found.
                </p>
                <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                  As you work through military ciphers and restore the bunker&apos;s control systems, a final set of
                  orders emerges—one that was never carried out. The countdown has already begun. You must decipher the
                  truth and shut it down before the bunker completes its last mission.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-[6px] border-white bg-[#111] overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/bunker.png"
                alt="Inside The Forgotten Bunker escape room"
                fill
                className="object-contain lg:object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
