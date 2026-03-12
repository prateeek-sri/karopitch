"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="apply" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 mb-8">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">Applications Open</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Ready to Pitch Your Startup?
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Join hundreds of founders who have already taken the first step. 
                Apply now and get in front of India&apos;s top investors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg group"
                  asChild
                >
                  <Link href="mailto:business@karostartup.com?subject=Karo Pitch Application">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-10 py-7 text-lg border-border hover:bg-secondary"
                  asChild
                >
                  <Link href="mailto:business@karostartup.com?subject=Partnership Inquiry - Karo Pitch">
                    Partner With Us
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions? Reach out to us
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <Link 
                    href="mailto:business@karostartup.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    business@karostartup.com
                  </Link>
                  <span className="text-border hidden sm:inline">|</span>
                  <Link 
                    href="https://wa.me/919315194393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    +91 9315194393
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
