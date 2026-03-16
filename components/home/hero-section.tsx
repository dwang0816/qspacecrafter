import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            currentColor 100px,
            currentColor 101px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 100px,
            currentColor 100px,
            currentColor 101px
          )`
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Eyebrow */}
          <p className="hero-animate hero-delay-1 text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Family-Owned Construction Company
          </p>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-8">
            <span className="hero-animate hero-delay-2 block">Renovate</span>
            <span className="hero-animate hero-delay-3 block italic text-accent">NYC & LI</span>
          </h1>

          {/* Tagline */}
          <p className="hero-animate hero-delay-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Build Efficiently. Communicate Openly. Decades in, we know the work 
            and have the tools. Here to understand. Ready to deliver.
          </p>

          {/* CTA Buttons */}
          <div className="hero-animate hero-delay-5 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Free Consultation
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/projects"
              className="btn-shimmer inline-flex items-center gap-3 px-8 py-4 border border-primary text-primary text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-border/40 relative overflow-hidden">
            <div className="scroll-line absolute top-0 left-0 w-full h-1/2 bg-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
