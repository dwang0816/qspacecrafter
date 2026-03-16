"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All Projects" },
  { id: "bathroom", label: "Bathroom" },
  { id: "kitchen", label: "Kitchen" },
  { id: "full-home", label: "Full Home" },
  { id: "exterior", label: "Exterior" }
]

const projects = [
  {
    id: 1,
    title: "Modern Manhattan Bathroom",
    category: "bathroom",
    location: "Manhattan, NY",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete bathroom transformation with custom vanity and walk-in shower"
  },
  {
    id: 2,
    title: "Brooklyn Brownstone Kitchen",
    category: "kitchen",
    location: "Brooklyn, NY",
    image: "/placeholder.svg?height=800&width=600",
    description: "Open concept kitchen with custom cabinetry and marble countertops"
  },
  {
    id: 3,
    title: "Queens Family Home",
    category: "full-home",
    location: "Queens, NY",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete home renovation including new flooring, paint, and electrical"
  },
  {
    id: 4,
    title: "Long Island Extension",
    category: "exterior",
    location: "Long Island, NY",
    image: "/placeholder.svg?height=800&width=600",
    description: "Home extension adding 500 sq ft of living space"
  },
  {
    id: 5,
    title: "Spa-Inspired Bathroom",
    category: "bathroom",
    location: "Manhattan, NY",
    image: "/placeholder.svg?height=600&width=800",
    description: "Luxury bathroom with heated floors and freestanding tub"
  },
  {
    id: 6,
    title: "Chef's Kitchen Remodel",
    category: "kitchen",
    location: "Brooklyn, NY",
    image: "/placeholder.svg?height=800&width=600",
    description: "Professional-grade kitchen with island and premium appliances"
  },
  {
    id: 7,
    title: "Bronx Apartment Renovation",
    category: "full-home",
    location: "Bronx, NY",
    image: "/placeholder.svg?height=600&width=800",
    description: "Complete apartment makeover with modern finishes"
  },
  {
    id: 8,
    title: "Staten Island Deck",
    category: "exterior",
    location: "Staten Island, NY",
    image: "/placeholder.svg?height=800&width=600",
    description: "Custom deck with built-in seating and outdoor kitchen"
  }
]

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="pb-24 lg:pb-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Filter Tabs */}
        <div className="reveal flex flex-wrap gap-2 mb-12 lg:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 text-sm tracking-widest uppercase transition-colors",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid - Masonry Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={`${activeCategory}-${project.id}`}
              style={{ animationDelay: `${index * 0.07}s` }}
              className={cn(
                "gallery-item group cursor-pointer",
                index % 3 === 1 && "lg:mt-12"
              )}
            >
              <div className="relative overflow-hidden bg-muted mb-4">
                <div className={cn(
                  "aspect-[4/3]",
                  index % 2 === 1 && "aspect-[3/4]"
                )}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                {project.location}
              </p>
              <h3 className="font-serif text-xl lg:text-2xl mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
