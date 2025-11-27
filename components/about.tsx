import Image from "next/image"

export function About() {
  return (
    <section className="space-y-4">
      <div className="mb-6">
        <Image src="/images/about-me-header.png" alt="About Me" width={400} height={200} className="h-auto" />
      </div>
      <div className="relative">
        <Image src="/images/about-paper.png" alt="Lined paper background" width={700} height={300} className="w-250 h-130 drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]" />
        <div className="absolute inset-0 flex px-8 md:px-16 py-10 pt-12">
          <p className="text-3xl leading-relaxed text-foreground max-w-2xl" style={{ fontFamily: "var(--font-caveat)" }}>
            {"I'm passionate about all things data -- it's brilliant how numbers can tell us engaging stories, complete with morals and character development (if you look hard enough). "}
            {"My favourite type of data is data about people and what they do! "}
            {"In the near future, I hope to use my skills to turn data into some profitable decisions... "}
            {"When I'm not coding or learning new math, you can find me drawing, listening to KPop, or trying new cuisines from all over the world. "}
          </p>
        </div>

        <Image
          src="/images/clt.png"
          alt="Central Limit Theorem"
          width={300}
          height={300}
          className="absolute top-100 right-6 z-20 rotate-355"
        />

        <Image
          src="/images/taylors-theorem.png"
          alt="Taylor's Theorem"
          width={400}
          height={400}
          className="absolute top-100 left-6 z-20 rotate-3"
        />
      </div>
    </section>
  )
}
