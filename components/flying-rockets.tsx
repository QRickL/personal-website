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
      const top = Math.random() * 60 + 20 // 20-80% from top
      //const top =
      const newRocket: Rocket = {
        id: Date.now(),
        top: `${top}%`, 
        delay: 0,
        duration: 6 + Math.random() * 3, // 5-8 seconds
      }

      setRockets((prev) => [...prev, newRocket])

      // Remove rocket after animation completes
      setTimeout(() => {
        setRockets((prev) => prev.filter((r) => r.id !== newRocket.id))
      }, newRocket.duration * 1000)
    }

    // Create rockets periodically (every 4 seconds)
    const interval = setInterval(createRocket, 4000)
    createRocket() // Initial rocket

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen">
      {rockets.map((rocket) => (
        <div
          key={rocket.id}
          className="absolute -right-32 w-24 h-24"
          style={{
            top: rocket.top,
            animation: `flyRocket ${rocket.duration}s linear forwards`,
          }}
        >
          <Image src="/rocket.png" alt="rocket ship" width={96} height={96} className="w-full h-full" />
        </div>
      ))}

      <style jsx>{`
        @keyframes flyRocket {
          0% {
            transform: translateX(0) translateY(-2vw) rotate(-10deg);
          }
          20% {
            transform: translateX(-25vw) translateY(2vw) rotate(5deg);
          }
          40% {
            transform: translateX(-50vw) translateY(-1vw) rotate(-5deg);
          }
          60% {
            transform: translateX(-75vw) translateY(3vw) rotate(10deg);
          }
          80% {
            transform: translateX(-100vw) rotate(0deg);
          }
        
          100% {
            transform: translateX(-125vw) translateY(-2vw) rotate(5deg);
          }
        }
      `}</style>
    </div>
  )
}
