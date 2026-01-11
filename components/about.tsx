import Image from "next/image"

export function About() {
  return (
    <section className="space-y-4">
      <div className="mb-6">
        <Image
          src="/images/about-me-header.png"
          alt="about me"
          width={350}
          height={175}
          className="h-auto"
        />
      </div>
        <div className="relative">
          <div
            className="
              relative z-10
              bg-[#f8f6f0]/85
              rounded-3xl 
              border-2 border-secondary/40 
              shadow-xl
            "
          >
          <div className="p-6 md:p-8">
            <p
              className="text-2xl leading-relaxed text-foreground"
              //style={{ fontFamily: "var(--font-caveat)" }}
              style={{ fontFamily: '"Comic Sans MS", "Comic Sans", caveat' }}
            >
              I'm Rick, a third-year computer science and statistics student at UWaterloo.
              I enjoy combining my technical skills with my creative side to build whatever I can think of.
              Some topics I'm currently interested in are the impacts of AI on education, how user data from social media apps is being used, and a field of math called measure theory.
              In my free time, you'll find me drawing, listening to KPop, or trying foods from all over the world.
            </p>
          </div>
        </div>

        <Image
          src="/images/pencil-3.png"
          alt="blue crayon"
          width={400}
          height={400}
          //className="absolute -top-35 left-85 z-5 rotate-100 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
          className="absolute -top-35 left-85 z-5 rotate-100"
        />

        <Image
          src="/images/pencil-4.png"
          alt="red crayon"
          width={350}
          height={350}
          //className="absolute -top-35 left-110 z-5 rotate-125 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
          className="absolute -top-35 left-110 z-5 rotate-125"
        />

        <Image
          src="/images/pencil-5.png"
          alt="yellow crayon"
          width={400}
          height={400}
          //className="absolute -top-35 left-130 z-5 rotate-15 drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)]"
          className="absolute -top-35 left-130 z-5 rotate-15"
        />

        <Image
          src="/images/clt.png"
          alt="central limit theorem"
          width={300}
          height={300}
          className="absolute top-50 -right-90 z-20 rotate-355"
        />

        <Image
          src="/images/taylors-theorem.png"
          alt="taylor's theorem"
          width={400}
          height={400}
          className="absolute top-80 -left-120 z-20 rotate-3"
        />
      </div>
    </section>
  )
}
