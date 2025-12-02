"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const education = [
  {
    degree: "University of Waterloo",
    school: "Bachelor of Mathematics, Data Science",
    year: "Sep 2023 — Apr 2027",
    gpa: "3.96/4.0",
    logo: "/images/uwaterloo-logo.jpg",
    campusPhoto: "/images/uwaterloo-campus.jpg",
    coursework: [
      { name: "Advanced Combinatorics", grade: "99" },
      { name: "Applied Linear Models", grade: "99" },
      { name: "Compilers", grade: "96" },
      { name: "Data Structures and Data Management", grade: "96" },
      { name: "Linear Algebra II", grade: "100" },
      { name: "Mathematical Statistics", grade: "98" },
      { name: "Object Oriented Software Development", grade: "90" },
      { name: "Stochastic Processes I", grade: "96" },
    ],
  },
  {
    degree: "National University of Singapore",
    school: "Exchange Semester",
    year: "Jan 2026 — May 2026",
    gpa: "🥥 / 🌴",
    logo: "/images/nus-logo.jpg",
    campusPhoto: "/images/nus-campus.jpg",
    coursework: [
      { name: "Bayesian Statistics", grade: "" },
      { name: "Design and Analysis of Experiments", grade: "" },
      //{ name: "Econometrics II", grade: "" },
    ],
  },
  {
    degree: "University of British Columbia",
    school: "Concurrent Studies",
    year: "Sep 2022 — Dec 2022",
    gpa: "4.33/4.33",
    logo: "/images/ubc-logo.jpg",
    campusPhoto: "/images/ubc-campus.jpg",
    coursework: [
      { name: "Calculus III", grade: "97" },
    ],
  },
]

export function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="space-y-6">
      <div className="mb-6">
        <Image src="/images/education-header.png" alt="education" width={850} height={80} className="h-auto" />
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-[#faf8f3]/85 border-2 border-primary/40 p-6 rounded shadow-md relative"
            style={{
              borderStyle: "solid",
            }}
          >
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 relative">
                <div className="w-32 h-32 shadow-md">
                  <Image
                    src={edu.logo || "/placeholder.svg"}
                    alt={`${edu.school} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">{edu.degree}</h3>
                    <p className="text-lg text-foreground font-medium">{edu.school}</p>
                    <p className="text-md text-muted-foreground font-semi">{edu.year}</p>
                  </div>
                  <div
                    className="bg-secondary px-4 py-2 -rotate-1 border-2 border-secondary/50"
                    style={{
                      boxShadow:
                        "2px 2px 0px rgba(0,0,0,0.1), 4px 4px 8px rgba(0,0,0,0.15), 6px 6px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">GPA</p>
                    <p className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-caveat)" }}>
                      {edu.gpa}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  {expandedIndex === index ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      See Less...
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      See More!
                    </>
                  )}
                </button>
              </div>
            </div>

            {expandedIndex === index && (
              <div className="mt-6 pt-6 border-t-2 border-dashed border-primary/30">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left column: Coursework */}
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-caveat)" }}>
                      Relevant Coursework
                    </h4>
                    <div className="grid gap-2">
                      {edu.coursework.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex justify-between items-center bg-white/50 border border-primary/20 px-3 py-2 rounded"
                        >
                          <span className="text-sm text-foreground">{course.name}</span>
                          <span className="text-sm font-bold text-accent font-mono">{course.grade}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right column: Portrait photo */}
                  <div className="w-full md:w-80 flex-shrink-0">
                    <div className="relative w-full h-64 md:h-full rounded overflow-hidden shadow-md border-4 border-white">
                      <Image
                        src={edu.campusPhoto || "/placeholder.svg"}
                        alt={`${edu.school} photo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
