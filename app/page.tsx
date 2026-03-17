import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PhotoCarouselSection } from "@/components/home/photo-carousel-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PhotoCarouselSection />
      </main>
      <Footer />
    </>
  )
}
