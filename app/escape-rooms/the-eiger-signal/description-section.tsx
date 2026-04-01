import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function DescriptionSection() {
  return (
    <section className="py-[10px] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-2xl font-bold text-white font-mono tracking-tight pl-[58px]">
              The Mission Brief
            </h2>
            <Card className="border-[6px] border-white bg-[#111] flex-1">
            <CardContent className="py-[80px] px-[52px] flex flex-col justify-center h-full">
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                An abandoned mountain rescue hut high on the Eiger has begun transmitting again after decades of
                silence. Inside, everything is frozen in time—radios humming, lights flickering, logs abruptly ending.
                A strange signal pulses through the equipment, repeating in patterns no one can explain.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed text-base md:text-lg">
                As you restore power and decode the transmission, it becomes clear this is no ordinary distress call.
                Something was discovered beneath the mountain… and it may still be there. You have one hour to uncover
                the truth before the signal completes—and whatever it&apos;s calling finally arrives.
              </p>
            </CardContent>
          </Card>
          </div>

          <Card className="border-[6px] border-white bg-[#111] overflow-hidden">
            <div className="relative aspect-video lg:aspect-auto lg:h-full lg:min-h-[320px]">
              <Image
                src="/images/reception.png"
                alt="Inside The Eiger Signal escape room"
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
