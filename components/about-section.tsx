"use client"

import { Target, Users, Globe, ArrowUpRight } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GlowingCard } from "@/components/ui/glowing-card"
import { MovingBorder } from "@/components/ui/moving-border"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const features = [
  { icon: Target, title: "Focused Access", desc: "Direct connections to active investors looking for the next big opportunity" },
  { icon: Users, title: "Community Driven", desc: "Part of a thriving ecosystem of founders, mentors, and industry experts" },
  { icon: Globe, title: "Pan-India Reach", desc: "Empowering startups from every corner of India, not just metro cities" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top bottom-=100",
            toggleActions: "play none none reverse",
          },
        }
      )

      // Content animation
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".animate-item")
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top bottom-=50",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              About Karo Pitch
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Bridging Founders with Investors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Thousands of founders are building amazing businesses but lack access to investors. 
              Karo Pitch connects these founders with investors through curated pitch events 
              and a discovery platform.
            </p>
          </div>

          {/* Content Grid */}
          <div ref={contentRef} className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Mission Statement */}
            <div className="space-y-6">
              <div className="space-y-4 animate-item">
                <h3 className="text-2xl font-bold text-foreground">
                  The Mission for Bharat
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over the past 5 years, KaroStartup has built one of India&apos;s largest 
                  startup storytelling platforms, sharing thousands of founder journeys 
                  and inspiring entrepreneurs across the country.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Now, we&apos;re taking it a step further with Karo Pitch — a platform 
                  designed to give early-stage founders from Tier-2, Tier-3 cities and 
                  Bharat the stage they deserve.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3 pt-4">
                {features.map((item, index) => (
                  <GlowingCard
                    key={index}
                    className="p-4"
                    containerClassName="animate-item"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1 flex items-center gap-2">
                          {item.title}
                          <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </GlowingCard>
                ))}
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="animate-item">
              <MovingBorder
                duration={4}
                borderRadius="1.5rem"
                containerClassName="w-full"
                className="p-8 lg:p-10 bg-card"
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary-foreground">K</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-3">
                      Our Vision
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      To build India&apos;s most accessible startup discovery and funding 
                      platform for Bharat entrepreneurs. We believe great ideas can come 
                      from anywhere — and they deserve to be heard.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">5+</div>
                        <div className="text-sm text-muted-foreground">Years of Impact</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">1000+</div>
                        <div className="text-sm text-muted-foreground">Stories Shared</div>
                      </div>
                    </div>
                  </div>
                </div>
              </MovingBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
