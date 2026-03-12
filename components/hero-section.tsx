"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Globe } from "@/components/ui/globe"
import { Spotlight } from "@/components/ui/spotlight"
import { TextGenerateEffect } from "@/components/ui/text-generate"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const globeContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.2 }
      )

      // Buttons stagger animation
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 1.2 }
        )
      }

      // Stats counter animation
      if (statsRef.current) {
        const statItems = statsRef.current.querySelectorAll("[data-stat]")
        statItems.forEach((item, index) => {
          const target = parseInt(item.getAttribute("data-target") || "0")
          const prefix = item.getAttribute("data-prefix") || ""
          const suffix = item.getAttribute("data-suffix") || ""
          const obj = { value: 0 }
          
          gsap.to(obj, {
            value: target,
            duration: 2,
            delay: 1.5 + index * 0.1,
            ease: "power2.out",
            onUpdate: () => {
              item.textContent = prefix + Math.round(obj.value).toLocaleString() + suffix
            }
          })
        })

        gsap.fromTo(
          statsRef.current.children,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 1.4 }
        )
      }

      // Globe entrance
      gsap.fromTo(
        globeContainerRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Spotlight Effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(139, 92, 246, 0.2)" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div 
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8 opacity-0"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-foreground/80">
                India&apos;s Most Accessible Startup Platform
              </span>
            </div>

            {/* Main Headline with Text Generate Effect */}
            <div className="mb-6">
              <TextGenerateEffect
                words="Pitch Your Startup to India's Top Investors"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              />
            </div>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 text-balance leading-relaxed opacity-0 animate-[fadeIn_0.8s_ease_1s_forwards]">
              Connect founders from Tier-2 and Tier-3 cities directly with investors 
              through curated pitch events. Your story deserves to be heard.
            </p>

            {/* CTA Buttons */}
            <div ref={buttonsRef} className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg group relative overflow-hidden"
                asChild
              >
                <Link href="#apply">
                  <span className="relative z-10 flex items-center">
                    Apply to Pitch
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-6 text-lg border-border hover:border-primary/50 hover:bg-primary/5 transition-all"
                asChild
              >
                <Link href="#startups">
                  Explore Startups
                </Link>
              </Button>
            </div>
          </div>

          {/* Right - 3D Globe */}
          <div 
            ref={globeContainerRef}
            className="relative h-[400px] lg:h-[500px] opacity-0"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-[500px] aspect-square">
                <Globe className="w-full h-full" />
                {/* Glow effect behind globe */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="mt-16 lg:mt-24 pt-12 border-t border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: 500, suffix: "+", label: "Startups Reached" },
              { value: 50, suffix: "+", label: "Investor Network" },
              { value: 10, prefix: "₹", suffix: "Cr+", label: "Funding Facilitated" },
              { value: 100, suffix: "+", label: "Cities Covered" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  <span 
                    data-stat 
                    data-target={stat.value}
                    data-prefix={stat.prefix || ""}
                    data-suffix={stat.suffix}
                  >
                    {stat.prefix || ""}{stat.value}{stat.suffix}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 bg-primary rounded-full" />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
