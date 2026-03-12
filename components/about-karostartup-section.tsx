"use client"

import { BookOpen, Users, Award, Radio, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GlowingCard } from "@/components/ui/glowing-card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const highlights = [
  {
    icon: BookOpen,
    value: 1000,
    suffix: "+",
    label: "Stories Published",
  },
  {
    icon: Users,
    value: 50,
    suffix: "K+",
    label: "Founder Community",
  },
  {
    icon: Award,
    value: 5,
    suffix: "+",
    label: "Years of Impact",
  },
  {
    icon: Radio,
    value: 100,
    suffix: "+",
    label: "Cities Reached",
  },
]

export function AboutKaroStartupSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card animation with 3D effect
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: -60, rotateY: -10 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Content stagger
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".animate-item")
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        )
      }

      // Stats counter animation
      if (statsRef.current) {
        const statElements = statsRef.current.querySelectorAll("[data-value]")
        statElements.forEach((el) => {
          const target = parseInt(el.getAttribute("data-value") || "0")
          const suffix = el.getAttribute("data-suffix") || ""
          const obj = { value: 0 }
          
          gsap.to(obj, {
            value: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top bottom-=50",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.value).toString() + suffix
            }
          })
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Visual */}
            <div ref={cardRef} className="relative order-2 lg:order-1" style={{ perspective: "1000px" }}>
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
                {/* Header with gradient */}
                <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-8 lg:p-12 overflow-hidden">
                  {/* Animated gradient orb */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-background to-background/80 border border-border flex items-center justify-center mb-6 shadow-lg">
                      <span className="text-3xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">K</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      KaroStartup
                    </h3>
                    <p className="text-muted-foreground">
                      India&apos;s Largest Startup Storytelling Platform
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-4">
                    {highlights.map((item, index) => (
                      <GlowingCard
                        key={index}
                        className="p-4 text-center"
                        containerClassName="h-full"
                      >
                        <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div 
                          className="text-2xl font-bold text-foreground"
                          data-value={item.value}
                          data-suffix={item.suffix}
                        >
                          {item.value}{item.suffix}
                        </div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </GlowingCard>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div ref={contentRef} className="space-y-6 order-1 lg:order-2">
              <div className="animate-item">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
                  About KaroStartup
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                  The Story Behind Karo Pitch
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="animate-item">
                  KaroStartup began with a simple mission: to tell the stories of India&apos;s 
                  entrepreneurs. Over five years, we&apos;ve grown into one of the country&apos;s 
                  largest startup media platforms.
                </p>
                <p className="animate-item">
                  We&apos;ve published thousands of founder journeys, created a thriving 
                  community of entrepreneurs, and built a platform that inspires millions 
                  across India.
                </p>
                <p className="animate-item">
                  Now, with <span className="text-foreground font-semibold">Karo Pitch</span>, 
                  we&apos;re taking the next step — moving beyond stories to action. We&apos;re 
                  creating direct pathways for founders to meet investors and raise the 
                  capital they need to scale.
                </p>
              </div>

              {/* Social Links */}
              <div className="animate-item pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow us on</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Instagram", href: "https://www.instagram.com/karo_startup_/" },
                    { name: "LinkedIn", href: "https://www.linkedin.com/company/karo-startup/" },
                    { name: "Twitter", href: "https://x.com/karo_startup" },
                    { name: "YouTube", href: "https://www.youtube.com/@karostartup/videos" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      {social.name}
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
