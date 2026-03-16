import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { DifferencesSection } from "@/components/home/differences-section"
import { ServicesSection } from "@/components/home/services-section"
import { ProjectTypesSection } from "@/components/home/project-types-section"
import { ServiceAreasSection } from "@/components/home/service-areas-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <DifferencesSection />
        <ServicesSection />
        <ProjectTypesSection />
        <ServiceAreasSection />
      </main>
      <Footer />
    </>
  )
}
