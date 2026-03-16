import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

const areas = [
  "Manhattan",
  "Brooklyn", 
  "Queens",
  "Bronx",
  "Staten Island",
  "Long Island"
]

export function ServiceAreasSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content */}
          <div className="reveal-left">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Serving Your Area with Excellence
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
              NYC Boroughs & Long Island
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              From the heart of Manhattan to the neighborhoods of Brooklyn and Queens, 
              we proudly serve all NYC boroughs and beyond—including the Bronx, Staten Island, 
              and Long Island. No matter where your project is located, our team is ready to 
              bring quality craftsmanship and reliable service right to your doorstep.
            </p>

            <Link 
              href="/contact"
              className="btn-shimmer group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Areas Grid */}
          <div className="grid grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className={`reveal reveal-delay-${Math.min(index + 1, 6)} group p-6 lg:p-8 border border-border bg-card hover:bg-secondary hover:border-accent/30 transition-all duration-400`}
              >
                <MapPin className="h-5 w-5 text-accent mb-4 transition-transform duration-400 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="font-serif text-xl lg:text-2xl">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
