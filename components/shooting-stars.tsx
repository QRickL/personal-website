"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface Star {
  id: number
  top: string
  delay: number
  duration: number
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const createStarGroup = () => {
      const groupSize = Math.random() > 0.5 ? 2 : (Math.random() > 0.5 ? 1 : (Math.random() > 0.80 ? 3 : 4)) // pairs or triplets
      const baseTop = Math.random() * 60
      const newStars: Star[] = []

      for (let i = 0; i < groupSize; i++) {
        newStars.push({
          id: Date.now() + i,
          top: `${baseTop + i * (8 + 2 * Math.random())}%`, // slightly offset vertically
          delay: i * (0.2 + 0.1 * Math.random()), // stagger the start times
          duration: 60 + Math.random() * 5,
        })
      }

      setStars((prev) => [...prev, ...newStars])

      // Remove stars after animation completes
      setTimeout(() => {
        setStars((prev) => prev.filter((s) => !newStars.find((ns) => ns.id === s.id)))
      }, 70000 + 20000 * Math.random())
    }

    // Create star groups periodically
    const interval = setInterval(createStarGroup, 6000)
    createStarGroup() // Initial group

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute -left-20 w-16 h-16 rotate-[10deg]"
          style={{
            top: star.top,
            animation: `shootingStar ${star.duration}s ease-out ${star.delay}s forwards`,
          }}
        >
          <Image src="/images/shooting-star.png" alt="star" width={64} height={64} className="w-full h-full" />
        </div>
      ))}
    </div>
  )
}
