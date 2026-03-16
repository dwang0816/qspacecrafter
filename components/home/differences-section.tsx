import { Users, DollarSign, Shield } from "lucide-react"

const differences = [
  {
    icon: Users,
    title: "Referred by Many",
    subtitle: "All our clients came through referrals",
    description: "With a 90% referral and re-hire rate, our work speaks for itself. Clients trust us not just for results, but for safety and professionalism—we're fully certified and licensed for your peace of mind."
  },
  {
    icon: DollarSign,
    title: "Transparent Budget",
    subtitle: "No surprise costs—changes discussed upfront",
    description: "We respect your budget and ensure there are no unexpected costs—any adjustments are always discussed upfront. Plus, we'll visit you in person for a no-cost consultation to assess your project and understand your vision."
  },
  {
    icon: Shield,
    title: "Built to Last",
    subtitle: "We make it happen—no excuses",
    description: "We're dedicated to turning your vision into reality—no matter the challenges. From the first blueprint to the final nail, we commit to quality, transparency, and timely delivery. Your project is our priority, and we won't stop until it's done right."
  }
]

export function DifferencesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Our Differences
          </h2>
        </div>

        {/* Differences Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {differences.map((item, index) => (
            <div 
              key={index}
              className="group p-8 lg:p-10 bg-card border border-border hover:border-accent/30 transition-colors"
            >
              <div className="mb-6">
                <item.icon className="h-8 w-8 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
              <p className="text-sm text-accent mb-4">{item.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
