"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "Arcturus Networks Inc.",
    period: "Sep 2025 — Dec 2025",
    logo: "/images/arcturus-networks-logo.jpg",
    caption: "Company logo",
    overview: "Training, quantization, and deployment of state-of-the-art models for edge inference",
    details: [
      "Trained a CNN-based object detection model to detect defective factory parts using Pytorch and OpenCV, ultimately achieving a 92% mAP after integration and deployment on the backend of a C++ distributed inference pipeline",
      "Reduced model performance decay by 40% and improved adherence to CI/CD best practices by automating model retraining workflows within MLOps pipelines and using NumPy to implement statistical tests for data drift detection",
      "PUT A POINT HERE FOR THE QUANTIZATION OF EFFICIENTAD",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "Vision and Image Processing Lab",
    period: "May 2025 — Aug 2025",
    logo: "/images/viplab-logo.jpg",
    caption: "Aria Glasses",
    overview:
      "Applications of Meta's Project Aria glasses",
    details: [
      "PUT SOME BULLET POINTS HERE",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Equitable Life",
    period: "Jan 2025 — Apr 2025",
    logo: "/images/equitable-logo.jpg",
    caption: "My boss!",
    overview:
      "Automation of simple actuarial pricing tasks and email processing with NLP",
    details: [
      "Saved 80+ hours for 12 actuaries by developing an email processing pipeline which classifies 1,200+ client requests per year with 94% accuracy using natural language processing in Python and PyWin32",
      "Sped up insurance pricing times by 33% by optimizing database queries and introducing multi-threading to Python modules",
      "Reduced crash reports by 40% for a Python web scrapping application by adding exception safety and handling",
      "Performed financial forecasts in Excel to answer 200+ client inquiries about life insurance policies and Canadian tax",
    ],
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Math Tutoring Centre",
    period: "Sep 2024 — Dec 2024",
    logo: "/images/ugrad-teaching-logo.jpg",
    caption: "MC building",
    overview:
      "Helping math, CS, and science students with Calculus I, II, III",
    details: [
      "TA'ed for three courses totalling 1,800+ students during the Fall 2024 academic term",
      "Personally provided 20+ students with quiz preparation every week, doing computations and proofs involving sequences, limits, differentiation, related rates, and power series",
      "Led in-person review sessions for the Calculus I midterm and final exams",
      "Gave academic advice such as course selections and chooing majors/specializations to first-year students",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    company: "University of Waterloo",
    period: "May 2024 — Aug 2024",
    logo: "/images/amath-logo.jpg",
    caption: "With my coworkers",
    overview:
      "Developing algorithms to predict stationary points for microswimmers in Stokes flow",
    details: [
      "Designed an algorithm to predict where bacteria accumulate in viscous fluids using differential equations and MATLAB",
      "Increased prediction accuracy by 29% by allowing the algorithm to update its own parameters to adapt to live data",
      "Increased algorithm speed by 500%+ by replacing redundant computations with cached results from previous runs",
      "Streamlined analysis of dynamical systems for 5 mathematicians by implementing root-finding and gradient descent algorithms to determine zero-velocity points within abstract mathematical spaces",
      "Effectively communicated research findings to 35+ students and 10+ faculty members during end-of-term departmental conference"
    ],
  },
  {
    title: "Data Science Intern",
    company: "University of California: Santa Cruz",
    period: "Jun 2022 — Aug 2022",
    logo: "/images/ucsc-logo.jpg",
    caption: "N. Gehrels Swift Telescope",
    overview:
      "Building data pipelines to help astronomers study the Mrk 421 blazar",
    details: [
      "Saved 260+ hours of manual data processing per year by engineering an ETL pipeline that transforms raw telescope data into clean CSVs and SQL-compatible database tables using Python, Pandas, and PostgreSQL",
      "Accelerated research insights for 15+ astronomers by designing interactive data visuals using NumPy and Matplotlib",
      "Led development of a web application using SQL, React, and Docker to provide clean astronomical data and live dashboards to 70+ scientists across 10+ partnered labs and universities",
    ],
  },
]

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="space-y-6">
      <div className="mb-6">
        <Image src="/images/experience-header.png" alt="experience" width={900} height={60} className="h-auto" />
      </div>

      <div className="space-y-5">
        {experiences.map((exp, index) => (
          <div key={index} className="relative bg-[#FFFEF5]/85 p-4 shadow-md border-2 border-[#8B4513]/20">
            <div className="float-right ml-3 mb-3 bg-white p-2 shadow-xl rotate-2 border-8 border-white items-center justify-center">
              <img
                src={exp.logo || "/placeholder.svg"}
                alt={`${exp.company} logo`}
                className="w-32 h-32 object-cover mx-auto"
              />
              <div
                className="text-center text-xs mt-1 text-muted-foreground"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {/* {exp.caption} */}
                {""}
              </div>
            </div>

            <h3 className="text-2xl font-bold text-foreground mb-0.5">{exp.title}</h3>
            <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
            <p className="text-md text-muted-foreground mb-3 font-semi">{exp.period}</p>

            <p className="text-foreground leading-relaxed mb-3">{exp.overview}</p>

            <button
              onClick={() => toggleExpand(index)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              {expandedIndex === index ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide Details
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show Details
                </>
              )}
            </button>

            {expandedIndex === index && (
              <div className="mt-3 pt-3 border-t-3 border-dashed border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex gap-2 text-foreground leading-relaxed">
                      <span className="text-accent mt-0">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
