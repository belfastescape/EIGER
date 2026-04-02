"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface ImageWithFilterProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  filter?: string
  quality?: number
}

export default function ImageWithFilter({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
  filter = "none",
  quality = 75,
}: ImageWithFilterProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(false)
  }, [src])

  return (
    <div className={cn("relative w-full aspect-[3/2] overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          filter !== "none" && `filter ${filter}`
        )}
        onLoad={() => setIsLoaded(true)}
        priority={priority}
        sizes={sizes}
        quality={quality}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </div>
  )
}
