"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border nav-animate">
      <nav className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="font-serif text-xl tracking-wide transition-[letter-spacing] duration-500 hover:tracking-widest">
            QSPACE CRAFTER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link 
              href="/" 
              className="nav-link-underline text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="nav-link-underline text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/contact" 
              className="nav-link-underline text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          <Link 
            href="/contact" 
            className="btn-shimmer hidden md:block px-6 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
          >
            Free Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-6">
              <Link 
                href="/" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/contact" 
                className="mt-4 px-6 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase text-center hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Free Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
