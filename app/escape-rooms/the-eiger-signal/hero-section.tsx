import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-16 pt-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mountain.png"
          alt="The Eiger Signal escape room — abandoned mountain rescue hut"
          fill
          className="object-cover grayscale"
          priority
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
          <p className="mt-4 text-lg text-gray-400 font-mono">Mountain Rescue Mystery &mdash; Ages 12+</p>
          <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed">
            A rescue hut high on the Eiger is transmitting again after decades of silence—strange patterns in the
            signal, something beneath the mountain. One hour to uncover the truth before whatever it&apos;s calling
            arrives.
          </p>
        </div>
      </div>
    </section>
  )
}
