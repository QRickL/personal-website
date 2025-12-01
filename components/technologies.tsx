import Image from "next/image"
import { Code2, Database, Brain } from "lucide-react"

const techCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    technologies: [
      { name: "Python" },
      { name: "C/C++" },
      { name: "SQL" },
      { name: "R" },
      { name: "MATLAB" },
      { name: "Go" },
    ],
  },
  {
    title: "Data Science & Machine Learning",
    icon: Brain,
    technologies: [
      { name: "PyTorch" },
      { name: "Tensorflow" },
      { name: "scikit-learn" },
      { name: "NumPy" },
      { name: "OpenCV" },
      { name: "Pandas" },
      { name: "Jupyter" },
      { name: "Pillow" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    technologies: [
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "MySQL" },
      //{ name: "Redis" },
      //{ name: "Supabase" },
      { name: "MS Access" },
    ],
  },
]

export function Technologies() {
  return (
    <section className="space-y-8">
      <div className="mb-6">
        <Image src="/images/technologies-header.png" alt="technologies" width={900} height={60} className="h-auto" />
      </div>

      <div className="space-y-8">
        {techCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <div className="flex items-center gap-2">
              <category.icon className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-mono)" }}>
                {category.title}
              </h3>
            </div>

            <div className="bg-[#f8f6f0]/80 p-4 rounded-lg border-2 border-secondary/40 shadow-sm">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                {category.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-card px-3 py-2 rounded border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="font-bold text-foreground text-center text-sm">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
