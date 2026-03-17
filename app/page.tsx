import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PhotoCarouselSection } from "@/components/home/photo-carousel-section"
import { PhotoGallerySection } from "@/components/home/photo-gallery-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PhotoCarouselSection />
        <PhotoGallerySection />
      </main>
      <Footer />
    </>
  )
}
