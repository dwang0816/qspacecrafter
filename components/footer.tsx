import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl lg:text-4xl mb-6">QSPACE CRAFTER</h2>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Family-owned construction company serving NYC & Long Island. 
              Decades of experience delivering quality craftsmanship with 
              transparent communication.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Navigation</h3>
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">Contact</h3>
            <div className="flex flex-col gap-4 text-primary-foreground/70">
              <a href="mailto:qspacecrafter@gmail.com" className="hover:text-primary-foreground transition-colors">
                qspacecrafter@gmail.com
              </a>
              <a href="tel:3476855358" className="hover:text-primary-foreground transition-colors">
                (347) 685-5358
              </a>
              <p>
                Manhattan, Brooklyn, Queens<br />
                Bronx, Staten Island & Long Island
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} QSPACE CRAFTER. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Licensed & Certified in NYC
          </p>
        </div>
      </div>
    </footer>
  )
}
