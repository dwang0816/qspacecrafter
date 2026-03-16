import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ProjectsCTA() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="reveal reveal-delay-1 text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let us help you transform your space. Schedule a free in-person 
          consultation to discuss your vision and get a clear estimate.
        </p>
        <div className="reveal reveal-delay-2">
          <Link 
            href="/contact"
            className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Get Free Consultation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
