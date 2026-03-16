import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects/projects-hero"
import { ProjectsGallery } from "@/components/projects/projects-gallery"
import { ProjectsCTA } from "@/components/projects/projects-cta"

export const metadata: Metadata = {
  title: "Projects | QSPACE CRAFTER",
  description: "Explore our portfolio of premium home renovations in NYC & Long Island. Bathroom remodels, kitchen renovations, full home transformations, and exterior work."
}

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main>
        <ProjectsHero />
        <ProjectsGallery />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  )
}
