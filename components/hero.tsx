import { Linkedin, Mail, Github } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative pt-4 -mb-8 pb-12 md:pb-0">
      <Image
        src="/images/pencil-1.png"
        alt="pencil"
        width={280}
        height={700}
        className="absolute top-35 left-[42%] rotate-[60deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      <Image
        src="/images/pencil-2.png"
        alt="pencil"
        width={280}
        height={700}
        className="absolute top-15 left-[15%] rotate-[250deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      <Image
        src="/images/paperclip.png"
        alt="pencil"
        width={125}
        height={125}
        className="absolute -top-12 left-[10%] rotate-[33deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      {
      /* <Image
        src="/videos/rotating-cheese.gif"
        alt="cheese"
        width={400}
        height={400}
        className="absolute top-500 left-[-60%] rotate-[-10deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      <Image
        src="/videos/rotating-banh-mi.gif"
        alt="banh mi"
        width={470}
        height={470}
        className="absolute top-400 left-[105%] rotate-[20deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      <Image
        src="/videos/rotating-ramen.gif"
        alt="ramen noodles"
        width={400}
        height={400}
        className="absolute top-900 left-[-55%] rotate-[10deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />

      <Image
        src="/videos/rotating-tea.gif"
        alt="iced tea"
        width={200}
        height={200}
        className="absolute top-1050 left-[120%] rotate-[20deg] z-0 pointer-events-none"
        style={{ transformOrigin: "top center" }}
      />
      */}

      <div className="flex md:flex-row items-start justify-between gap-8 relative z-10">
        <div className="flex-1 space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-primary" style={{ fontFamily: '"Comic Sans MS", "Comic Sans", caveat' }}>
            Rick Li
          </h1>
          <p
            className="text-2xl text-muted-foreground text-stone-900 min-w-[220px]"
            style={{ fontFamily: '"Comic Sans MS", "Comic Sans", caveat' }}
          >
            Aspiring statistician & data scientist...
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/q-rick-li/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#f8f6f0] border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors shadow-sm hover:shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/QRickL"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#f8f6f0] border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors shadow-sm hover:shadow-md"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:q39li@uwaterloo.ca"
              className="p-3 bg-[#f8f6f0] border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors shadow-sm hover:shadow-md"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="relative -top-10 -left-10 md:order-last md:-ml-12">
          <img
            src="/images/photo-me.png"
            alt="rick"
            width={175}
            height={175}
            className="object-contain ml-auto relative z-10"
          />

          <div className="absolute top-10 -right-5 rotate-310 z-0">
            <Image
              src="/images/paperclip.png"
              alt="paperclip"
              width={125}
              height={125}
              //className="object-contain drop-shadow-lg"
              className="object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
