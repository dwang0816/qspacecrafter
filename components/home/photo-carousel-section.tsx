"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react"

// Curated selection from home + gallery — spread across all project batches for variety
const carouselPhotos = [
  { src: "/home/fullroom_long.png" },
  { src: "/gallery/photos/g001.jpg" },
  { src: "/home/blue%20bathroom.PNG" },
  { src: "/gallery/photos/g007.jpg" },
  { src: "/home/kitchen.jpg" },
  { src: "/gallery/photos/g010.jpg" },
  { src: "/gallery/photos/g015.jpg" },
  { src: "/home/bathroom%20shower.jpg" },
  { src: "/gallery/photos/g018.jpg" },
  { src: "/gallery/photos/g023.jpg" },
  { src: "/home/3%20windows.jpg" },
  { src: "/gallery/photos/g031.jpg" },
  { src: "/gallery/photos/g034.jpg" },
  { src: "/gallery/photos/g040.jpg" },
  { src: "/home/bathoom%20light%20mirror.jpg" },
  { src: "/gallery/photos/g044.jpg" },
  { src: "/gallery/photos/g052.jpg" },
  { src: "/gallery/photos/g056.png" },
  { src: "/gallery/photos/g059.jpg" },
  { src: "/gallery/photos/g063.jpg" },
  { src: "/gallery/photos/g067.jpg" },
  { src: "/gallery/photos/g070.jpg" },
]

export function PhotoCarouselSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    return () => { emblaApi.off("select", onSelect) }
  }, [emblaApi, onSelect])

  return (
    <section className="py-10 lg:py-14 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-6">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Featured Work
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2">
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={scrollNext}
                className="w-10 h-10 border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground/70">
              <MoveHorizontal className="h-3 w-3" />
              Drag to explore
            </span>
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex gap-1.5 mt-4 flex-wrap">
          {carouselPhotos.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-0.5 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-6 bg-foreground" : "w-3 bg-border hover:bg-muted-foreground/40"
              }`}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden pl-6 lg:pl-12" ref={emblaRef}>
        <div className="flex gap-2 lg:gap-3">
          {carouselPhotos.map((photo, index) => (
            <div
              key={index}
              className="flex-none relative overflow-hidden group cursor-grab active:cursor-grabbing"
              style={{ width: "min(300px, 78vw)", height: "400px" }}
            >
              <Image
                src={photo.src}
                alt={`Project photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 78vw, 300px"
                draggable={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
          ))}
          <div className="flex-none w-6 lg:w-12" />
        </div>
      </div>
    </section>
  )
}
