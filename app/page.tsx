import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { ShootingStars } from "@/components/shooting-stars"
import { ShootingStarsRare } from "@/components/shooting-stars-rare"
import { FlyingRockets } from "@/components/flying-rockets"

export default function Home() {
  return (
    <main className="min-h-screen lined-paper relative overflow-hidden">
      <ShootingStars />
      <ShootingStarsRare />
      <FlyingRockets />
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16 relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Technologies />
        <Projects />
      </div>
    </main>
  )
}
