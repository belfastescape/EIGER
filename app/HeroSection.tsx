import Image from "next/image"

/**
 * Server-rendered hero image and overlay only.
 * Rendered in initial HTML so the LCP image is not delayed by client hydration.
 */
export function HeroSection() {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-black"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/eiger-hero.png"
          alt=""
          fill
          className="object-cover object-left md:object-center"
          priority
          quality={75}
          sizes="100vw"
          unoptimized
        />
      </div>
      <div className="absolute inset-0 bg-black/60" aria-hidden />
    </div>
  )
}
