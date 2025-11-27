"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface Rocket {
  id: number
  top: string
  delay: number
  duration: number
}

export function FlyingRockets() {
  const [rockets, setRockets] = useState<Rocket[]>([])

  useEffect(() => {
    const createRocket = () => {
      const top = Math.random() * 70 + 10 // 10-80% from top
      const newRocket: Rocket = {
        id: Date.now(),
        top: `${top}%`,
        delay: 0,
        duration: 5 + Math.random() * 3, // 5-8 seconds
      }

      setRockets((prev) => [...prev, newRocket])

      // Remove rocket after animation completes
      setTimeout(() => {
        setRockets((prev) => prev.filter((r) => r.id !== newRocket.id))
      }, 10000)
    }

    // Create rockets periodically (every 4 seconds)
    const interval = setInterval(createRocket, 4000)
    createRocket() // Initial rocket

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {rockets.map((rocket) => (
        <div
          key={rocket.id}
          className="absolute -right-32 w-24 h-24"
          style={{
            top: rocket.top,
            animation: `flyRocket ${rocket.duration}s linear forwards`,
          }}
        >
          <Image src="/rocket.png" alt="" width={96} height={96} className="w-full h-full" />
        </div>
      ))}
    </div>
  )
}
