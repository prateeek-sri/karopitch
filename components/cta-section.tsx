"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Star, Rocket } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MovingBorder } from "@/components/ui/moving-border"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Floating icons animation
      if (iconsRef.current) {
        const icons = iconsRef.current.children
        gsap.fromTo(
          icons,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: iconsRef.current,
              start: "top bottom-=50",
              toggleActions: "play none none reverse",
            },
          }
        )

        // Continuous floating animation
        Array.from(icons).forEach((icon, i) => {
          gsap.to(icon, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-15, 15)",
            duration: "random(3, 5)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.2,
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="apply" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      {/* Floating decorative icons */}
      <div ref={iconsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[10%] w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Zap className="w-6 h-6 text-primary/50" />
        </div>
        <div className="absolute top-32 right-[15%] w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Star className="w-5 h-5 text-primary/50" />
        </div>
        <div className="absolute bottom-32 left-[20%] w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
          <Rocket className="w-7 h-7 text-primary/50" />
        </div>
        <div className="absolute bottom-20 right-[10%] w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 text-primary/50" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={cardRef}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Card background with gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
            <div className="absolute inset-[1px] bg-card rounded-3xl" />

            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16 text-center">
              {/* Decorative beams */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm text-foreground">Applications Open for Season 1</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Ready to Pitch Your{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Startup?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Join hundreds of founders who have already taken the first step. 
                Apply now and get in front of India&apos;s top investors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <MovingBorder
                  duration={3}
                  borderRadius="0.75rem"
                  containerClassName="w-fit"
                  className="px-10 py-4 bg-primary hover:bg-primary/90"
                >
                  <Link 
                    href="mailto:business@karostartup.com?subject=Karo Pitch Application"
                    className="flex items-center gap-2 text-primary-foreground font-semibold text-lg group"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MovingBorder>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-10 py-6 text-lg border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                  asChild
                >
                  <Link href="mailto:business@karostartup.com?subject=Partnership Inquiry - Karo Pitch">
                    Partner With Us
                  </Link>
                </Button>
              </div>

              {/* Contact Info */}
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions? Reach out to us
                </p>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                  <Link 
                    href="mailto:business@karostartup.com"
                    className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    business@karostartup.com
                  </Link>
                  <span className="text-border hidden sm:inline">|</span>
                  <Link 
                    href="https://wa.me/919315194393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-500" />
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
