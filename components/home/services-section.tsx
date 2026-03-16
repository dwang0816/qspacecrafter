const services = [
  {
    number: "01",
    title: "Planning & Design",
    description: "We work with you to create custom designs that fit your style and needs, ensuring compliance with all building regulations."
  },
  {
    number: "02",
    title: "Permits & Approvals",
    description: "We handle all paperwork, obtaining necessary permits and approvals while ensuring compliance with zoning laws and building codes."
  },
  {
    number: "03",
    title: "Demolition & Site Prep",
    description: "We take care of demolition and site prep, ensuring the space is cleared and ready for construction."
  },
  {
    number: "04",
    title: "Construction & Systems",
    description: "We manage all construction, plumbing, and electrical work to ensure everything is built to code and functions properly."
  },
  {
    number: "05",
    title: "Final Touches",
    description: "We focus on finishing details like flooring, painting, and custom features, leaving your space ready to enjoy."
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            From Start to Finish
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Full Services
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Planning, Design, Construction & Beyond. We handle every aspect of 
            your renovation from the initial concept to the final walkthrough.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group border-t border-border py-8 lg:py-10 flex flex-col md:flex-row md:items-start gap-6 md:gap-12 hover:bg-secondary/50 transition-colors px-4 -mx-4"
            >
              <span className="font-serif text-accent text-sm">{service.number}</span>
              <div className="flex-1">
                <h3 className="font-serif text-2xl lg:text-3xl mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  )
}
