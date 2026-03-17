"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    // Small delay lets the incoming page's DOM settle before we query it
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-left").forEach((el) => {
        observer.observe(el)
      })
    }, 60)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [pathname])

  return null
}
