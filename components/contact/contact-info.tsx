import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="lg:pt-8">
      <h2 className="font-serif text-3xl lg:text-4xl mb-8">
        Let's Connect
      </h2>

      <div className="space-y-8">
        {/* Email */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
            <Mail className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif text-lg mb-1">Email</h3>
            <a 
              href="mailto:qspacecrafter@gmail.com" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              qspacecrafter@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
            <Phone className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif text-lg mb-1">Phone / SMS</h3>
            <a 
              href="tel:3476855358" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              (347) 685-5358
            </a>
          </div>
        </div>

        {/* Service Areas */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
            <MapPin className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif text-lg mb-1">Service Areas</h3>
            <p className="text-muted-foreground">
              Manhattan, Brooklyn, Queens, Bronx,<br />
              Staten Island & Long Island
            </p>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-secondary flex items-center justify-center">
            <Clock className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-serif text-lg mb-1">Response Time</h3>
            <p className="text-muted-foreground">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-12 p-8 bg-primary text-primary-foreground">
        <h3 className="font-serif text-2xl mb-4">Why Choose Us?</h3>
        <ul className="space-y-3 text-primary-foreground/80">
          <li className="flex items-start gap-3">
            <span className="text-accent">—</span>
            90% referral and re-hire rate
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent">—</span>
            Free in-person consultation
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent">—</span>
            Transparent pricing with no surprises
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent">—</span>
            Fully licensed and certified
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent">—</span>
            Family-owned with decades of experience
          </li>
        </ul>
      </div>
    </div>
  )
}
