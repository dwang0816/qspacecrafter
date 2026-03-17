// All 70 gallery photos (g056/g057/g058 are PNG, rest JPG)
const galleryPhotos = Array.from({ length: 70 }, (_, i) => {
  const n = i + 1
  const num = String(n).padStart(3, "0")
  const ext = [56, 57, 58].includes(n) ? "png" : "jpg"
  return `/gallery/g${num}.${ext}`
})

// Home photos interleaved for visual variety
const homePhotos = [
  "/home/fullroom_long.png",
  "/home/blue%20bathroom.PNG",
  "/home/bathroom%20shower.jpg",
  "/home/bathroom%20shower%202.jpg",
  "/home/bathroom%20cabinet.jpg",
  "/home/bathroom%20ceiling%203.jpg",
  "/home/bathtoom%20ceiling.jpg",
  "/home/bathoom%20light%20mirror.jpg",
  "/home/kitchen.jpg",
  "/home/ktichen%20door.jpg",
  "/home/3%20windows.jpg",
  "/home/mirror.jpg",
]

// Interleave: 3 gallery → 1 home to spread variety across columns
const allPhotos: string[] = []
let gi = 0, hi = 0
while (gi < galleryPhotos.length || hi < homePhotos.length) {
  if (gi < galleryPhotos.length) allPhotos.push(galleryPhotos[gi++])
  if (gi < galleryPhotos.length) allPhotos.push(galleryPhotos[gi++])
  if (gi < galleryPhotos.length) allPhotos.push(galleryPhotos[gi++])
  if (hi < homePhotos.length) allPhotos.push(homePhotos[hi++])
}

export function ProjectsGallery() {
  return (
    <section className="pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <p className="reveal text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
          {allPhotos.length} Photos
        </p>

        {/* CSS Columns masonry — preserves each photo's natural proportions */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 lg:gap-3">
          {allPhotos.map((src, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-2 lg:mb-3 overflow-hidden group relative"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={`Renovation project ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

