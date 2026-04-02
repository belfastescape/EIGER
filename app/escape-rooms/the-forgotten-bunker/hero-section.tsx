import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/bunker.png"
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1410] via-[#0f1410]/85 to-[#0f1410]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 w-full">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-mono leading-none text-balance">
            The Forgotten
            <br />
            <span className="text-amber-400">Bunker</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 font-mono">Room specification</p>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            Room: The Forgotten Bunker. Players: 2–6. Duration: 60 minutes. Difficulty: Medium–hard (4/5). Puzzle types:
            ciphers, maps, document logic. Recommended minimum age: 10+ with adult for younger groups.
          </p>
        </div>
      </div>
    </section>
  )
}
