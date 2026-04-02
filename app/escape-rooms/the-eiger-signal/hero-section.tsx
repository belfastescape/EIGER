import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mountain.png"
          alt=""
          fill
          className="object-cover grayscale"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-mono leading-none text-balance">
            The Eiger
            <br />
            <span className="text-cyan-400">Signal</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-mono">Room specification</p>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Room: The Eiger Signal. Players: 2–8. Duration: 60 minutes. Difficulty: Medium–hard (3/5). Objectives:
            restore power, decode signal sequence, complete mission before timer expiry. Recommended minimum age: 12+.
          </p>
        </div>
      </div>
    </section>
  )
}
