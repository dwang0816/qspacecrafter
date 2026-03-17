"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react"

const carouselPhotos = [
  { src: "/home/fullroom_long.png",          label: "Living Room"  },
  { src: "/gallery/g001.jpg",                label: "Bathroom"     },
  { src: "/home/blue%20bathroom.PNG",        label: "Bathroom"     },
  { src: "/gallery/g007.jpg",               label: "Shower"       },
  { src: "/home/kitchen.jpg",               label: "Kitchen"      },
  { src: "/gallery/g010.jpg",               label: "Kitchen"      },
  { src: "/gallery/g015.jpg",               label: "Kitchen"      },
  { src: "/home/bathroom%20shower.jpg",     label: "Shower"       },
  { src: "/gallery/g018.jpg",               label: "Cabinetry"    },
  { src: "/gallery/g023.jpg",               label: "Kitchen"      },
  { src: "/home/3%20windows.jpg",           label: "Interior"     },
  { src: "/gallery/g031.jpg",               label: "Full Remodel" },
  { src: "/gallery/g034.jpg",               label: "Kitchen"      },
  { src: "/gallery/g040.jpg",               label: "Tile Work"    },
  { src: "/home/bathoom%20light%20mirror.jpg", label: "Vanity"    },
  { src: "/gallery/g044.jpg",               label: "Bathroom"     },
  { src: "/gallery/g052.jpg",               label: "Shower"       },
  { src: "/gallery/g056.png",               label: "Terrace"      },
  { src: "/gallery/g059.jpg",               label: "Vanity"       },
  { src: "/gallery/g063.jpg",               label: "Kitchen"      },
  { src: "/gallery/g067.jpg",               label: "Staircase"    },
  { src: "/gallery/g070.jpg",               label: "Bathroom"     },
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
    <section className="pt-10 pb-10 lg:pt-14 lg:pb-12 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-4">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Portfolio
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-3">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed max-w-md">
              From marble-clad bathrooms to full-scale kitchen transformations —
              every project reflects precision craftsmanship and an eye for detail.
            </p>
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
        <div className="flex gap-1.5 mt-3 flex-wrap">
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

      {/* Bridge — category index */}
      <div className="container mx-auto px-6 lg:px-12 mb-4">
        <div className="border-t border-border pt-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 shrink-0">
            {carouselPhotos.length} Projects
          </span>
          <div className="w-px h-4 bg-border hidden sm:block" />
          <p className="text-xs tracking-wide text-muted-foreground leading-relaxed">
            Kitchens · Bathrooms · Showers · Full Remodels · Tile Work · Cabinetry · Vanities · Terraces · Staircases — drag or use the arrows to explore our recent work.
          </p>
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
                alt={`${photo.label} renovation project`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 78vw, 300px"
                draggable={false}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                <span className="block text-[10px] tracking-[0.25em] uppercase text-white/50 mb-1">
                  Project
                </span>
                <span className="font-serif text-white text-base italic">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
          <div className="flex-none w-6 lg:w-12" />
        </div>
      </div>
    </section>
  )
}

