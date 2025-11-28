import Image from "next/image"

export function About() {
  return (
    <section className="space-y-4">
      <div className="mb-6">
        <Image
          src="/images/about-me-header.png"
          alt="about me"
          width={400}
          height={200}
          className="h-auto"
        />
      </div>
      <div className="relative">
        <div
          className="
            relative z-10 
            bg-[url('/images/about-paper.png')]
            bg-cover 
            bg-no-repeat 
            bg-top 
            w-full
            rounded-xl
            fill
            drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]
          "
          style={{ overflow: "visible" }}
        >
          <div className="p-10 md:p-16 py-15">
            <p
              className="text-3xl leading-relaxed text-foreground max-w-2xl"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              I'm passionate about all things data -- it's brilliant how numbers can tell us engaging stories, complete with morals and character development (if you look hard enough).
              My favourite type of data is data about people and what they do! In the near future, I hope to use my skills to turn data into some profitable decisions...
              When I'm not coding or learning new math, you can find me drawing, listening to KPop, or trying new cuisines from all over the world.
            </p>
          </div>
        </div>

        <Image
          src="/images/pencil-3.png"
          alt="blue crayon"
          width={400}
          height={400}
          className="absolute -top-40 left-70 z-5 rotate-90 drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
        />

        <Image
          src="/images/pencil-4.png"
          alt="red crayon"
          width={400}
          height={400}
          className="absolute -top-40 left-90 z-5 rotate-120 drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
        />

        <Image
          src="/images/pencil-5.png"
          alt="yellow crayon"
          width={400}
          height={400}
          className="absolute -top-40 left-110 z-5 rotate-20 drop-shadow-[0_8px_12px_rgba(0,0,0,0.25)]"
        />

        <Image
          src="/images/clt.png"
          alt="central limit theorem"
          width={300}
          height={300}
          className="absolute top-100 -right-80 z-20 rotate-355"
        />

        <Image
          src="/images/taylors-theorem.png"
          alt="taylor's theorem"
          width={400}
          height={400}
          className="absolute top-50 -left-120 z-20 rotate-3"
        />
      </div>
    </section>
  )
}
