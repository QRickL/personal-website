"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface UFO {
  id: number
  top: string
  delay: number
  duration: number
  size: number
}

export function FlyingUFOs() {
  const [ufos, setUFOs] = useState<UFO[]>([])

  useEffect(() => {
    const createUFO = () => {
      const top = Math.random() * 100
      const size = 0.8 + Math.random() * 0.5 // scale 0.8x-1.3x
      const duration = 40 + Math.random() * 10

      const newUFO: UFO = {
        id: Date.now(),
        top: `${top}%`,
        delay: 0,
        duration,
        size,
      }

      setUFOs((prev) => [...prev, newUFO])

      // Remove UFO after animation completes
      setTimeout(() => {
        setUFOs((prev) => prev.filter((u) => u.id !== newUFO.id))
      }, duration * 1200)
    }

    const interval = setInterval(createUFO, 42000)
    createUFO() // initial UFO

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 h-screen">
      {ufos.map((ufo) => (
        <div
          key={ufo.id}
          className="absolute -right-32"
          style={{
            top: ufo.top,
            width: `${ufo.size * 96}px`,
            height: `${ufo.size * 96}px`,
            animation: `flyUFO ${ufo.duration}s linear forwards`,
          }}
        >
          <Image src="/images/ufo.png" alt="ufo" width={96} height={96} className="w-full h-full" />
        </div>
      ))}

      <style jsx>{`
        @keyframes flyUFO {
          0% {
            transform: translateX(0) translateY(0) rotate(-5deg);
          }
          20% {
            transform: translateX(-25vw) translateY(1.5vw) rotate(2deg);
          }
          40% {
            transform: translateX(-50vw) translateY(-1vw) rotate(-3deg);
          }
          60% {
            transform: translateX(-75vw) translateY(2vw) rotate(3deg);
          }
          80% {
            transform: translateX(-100vw) translateY(-1.5vw) rotate(0deg);
          }
          95% {
            transform: translateX(-125vw) translateY(0) rotate(2deg);
          }
          100% {
            transform: translateX(-150vw) translateY(2) rotate(-4deg);
          }
        }
      `}</style>
    </div>
  )
}
