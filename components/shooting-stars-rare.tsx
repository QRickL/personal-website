"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface StarRare {
  id: number
  top: string
  delay: number
  duration: number
}

export function ShootingStarsRare() {
  const [stars, setStars] = useState<StarRare[]>([])

  useEffect(() => {
    const createStarGroup = () => {
      const baseTop = Math.random() * 90
      const newStars: StarRare[] = []

      newStars.push({
        id: Date.now() + 1,
        top: `${baseTop + 1 * 8}%`, // slightly offset vertically
        delay: 1 * 0.2, // stagger the start times
        duration: 10 + Math.random() * 2, // 10-12 seconds
      })

      setStars((prev) => [...prev, ...newStars])

      // Remove stars after animation completes
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => !newStars.find((ns) => ns.id === s.id)))
      }, 8000)
    }

    // Create star groups periodically
    const interval = setInterval(createStarGroup, 15000)
    createStarGroup() // Initial group

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute -left-20 w-16 h-16 rotate-[0deg]"
          style={{
            top: star.top,
            animation: `shootingStarRare ${star.duration}s ease-out ${star.delay}s forwards`,
          }}
        >
          <Image src="/images/shooting-star-rare.png" alt="" width={64} height={64} className="w-full h-full" />
        </div>
      ))}
    </div>
  )
}
