"use client"

import { useState } from "react"
import { ArrowRight, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-secondary p-8 lg:p-12">
        <div className="text-center py-12">
          <h3 className="font-serif text-3xl mb-4">Thank You!</h3>
          <p className="text-muted-foreground leading-relaxed">
            We've received your message and will get back to you within 24 hours 
            to schedule your free consultation.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="reveal bg-secondary p-8 lg:p-12">
      <h2 className="font-serif text-3xl lg:text-4xl mb-2">
        Get FREE Consultation
      </h2>
      <p className="text-muted-foreground mb-8">
        Fill out the form and we'll reach out to schedule an in-person visit.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm tracking-wide uppercase mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              placeholder="John"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm tracking-wide uppercase mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              placeholder="Doe"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm tracking-wide uppercase mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm tracking-wide uppercase mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors"
            placeholder="(347) 555-0123"
          />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm tracking-wide uppercase mb-2">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select a project type</option>
            <option value="bathroom">Bathroom Remodel</option>
            <option value="kitchen">Kitchen Remodel</option>
            <option value="full-home">Full Home Remodel</option>
            <option value="exterior">Exterior Work</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="location" className="block text-sm tracking-wide uppercase mb-2">
            Location
          </label>
          <select
            id="location"
            name="location"
            required
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors appearance-none"
          >
            <option value="">Select your area</option>
            <option value="manhattan">Manhattan</option>
            <option value="brooklyn">Brooklyn</option>
            <option value="queens">Queens</option>
            <option value="bronx">Bronx</option>
            <option value="staten-island">Staten Island</option>
            <option value="long-island">Long Island</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm tracking-wide uppercase mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-3 bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
            placeholder="Tell us about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-shimmer group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  )
}
