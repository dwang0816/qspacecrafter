import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projectTypes = [
  {
    title: "Bathroom Remodel",
    subtitle: "Fresh yourself with perfect shower, mirror, and vanity",
    description: "Every day starts and ends in your bathroom. Let us help elevate your space to suit your daily routine needs. Don't let your bathroom make you feel trapped, empower yourself with a place that feels like something.",
    image: "/placeholder.svg?height=600&width=800"
  },
  {
    title: "Kitchen Remodel",
    subtitle: "Cabinet, island, space alteration, tile placement, and more",
    description: "Kitchen is the heart of your home. Empower it with a remodel that enhances the space where you spend a lot of your time. We will help you create a space that you actually want to be in and utilize daily.",
    image: "/placeholder.svg?height=600&width=800"
  },
  {
    title: "Full Home Remodel",
    subtitle: "Flooring, window, electrical wiring, painting, you name it",
    description: "Your home should be more than just a place to live. It should reflect who you are and empower the way you live life. Elevate your home with timeless, modern design, and innovative techniques to ensure a transformation that lasts for years.",
    image: "/placeholder.svg?height=600&width=800"
  },
  {
    title: "Exterior",
    subtitle: "Exterior alteration and expansion",
    description: "Expand your home in an investment in both your space and your future. My team is capable of helping you see this through to the end. Assisting in adding more room to your new existing oasis to increase comfort and functionality.",
    image: "/placeholder.svg?height=600&width=800"
  }
]

export function ProjectTypesSection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Our Expertise
          </h2>
        </div>

        {/* Project Types Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {projectTypes.map((project, index) => (
            <Link 
              key={index}
              href="/projects"
              className="group block"
            >
              <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-primary-foreground/10">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-primary-foreground text-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/60 mb-2">
                {project.subtitle}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-primary-foreground/70 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
