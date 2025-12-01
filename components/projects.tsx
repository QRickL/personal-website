import { ExternalLink } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "LearnPlusPlus",
    description: "Deep learning library providing a neural network class. Train any network you can dream of, then perform lightning fast inference! Supports model serialization and transfer learning.",
    tags: ["C/C++", "Machine Learning"],
    link: "https://github.com/QRickL/LearnPlusPlus",
  },
  {
    title: "Mini-C Compilers",
    description: "Compiler for a subset of the C language with support for basic control flow and I/O. Comes with compiler optimizations to increase execution speed and minimize binary size.",
    tags: ["C/C++", "MIPS Assembly", "Compiler"],
    link: "https://github.com/QRickL/Mini-C-Compiler",
  },
  {
    title: "Biquadris",
    description: "Multiplayer Tetris game where you can crush your friends! Compete against them using fun power ups on a variety of levels and game modes.",
    tags: ["C/C++", "X Window", "Video Games"],
    link: "https://github.com/QRickL/Biquadris",
  },
  {
    title: "Personal Website",
    description: "The amazing website you're looking at right now! This is still a work in progress, so feel free to give me some feedback!!!",
    tags: ["React", "TypeScript", "Visual Arts"],
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
]

export function Projects() {
  return (
    <section className="space-y-6 pb-12">
      <div className="mb-6">
        <Image src="/images/projects-header.png" alt="projects" width={900} height={60} className="h-auto" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card/80 p-6 rounded-lg border-2 border-primary/20 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative block"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
              <ExternalLink className="w-5 h-5 text-primary" />
            </div>

            <p className="text-foreground leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-secondary/40 text-secondary-foreground text-sm rounded-full border border-primary/20 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
