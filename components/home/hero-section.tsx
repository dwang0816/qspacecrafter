import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background photo */}
      <Image
        src="/home/fullroom_long.png"
        alt="Beautifully renovated interior space"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Layered overlays for depth and legibility */}
      <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/20 to-black/75" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <p className="hero-animate hero-delay-1 text-sm tracking-[0.3em] uppercase text-white/60 mb-8">
            Family-Owned Construction Company
          </p>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8 text-white">
            <span className="hero-animate hero-delay-2 block">Renovate</span>
            <span className="hero-animate hero-delay-3 block italic text-amber-200">NYC & LI</span>
          </h1>

          <p className="hero-animate hero-delay-4 text-lg md:text-xl text-white/75 max-w-2xl mb-12 leading-relaxed">
            Build Efficiently. Communicate Openly. Decades in, we know the work
            and have the tools. Here to understand. Ready to deliver.
          </p>

          <div className="hero-animate hero-delay-5 flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 bg-white text-foreground text-sm tracking-widest uppercase hover:bg-white/90 transition-colors"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs tracking-widest uppercase text-white/40">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="scroll-line absolute top-0 left-0 w-full h-1/2 bg-white/70" />
        </div>
      </div>
    </section>
  )
}
