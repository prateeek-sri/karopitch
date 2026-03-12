"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GlowingCard } from "@/components/ui/glowing-card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const featuredStartups = [
  {
    name: "Bharat Fresh",
    category: "D2C",
    location: "Lucknow",
    description: "Farm-to-table organic produce delivery connecting rural farmers to urban consumers.",
    raised: "₹50L",
    stage: "Seed",
    growth: "+120%",
    color: "from-green-500/20 to-emerald-500/10",
  },
  {
    name: "LearnKaro",
    category: "EdTech",
    location: "Jaipur",
    description: "Vernacular language learning platform for Tier-2 and Tier-3 cities.",
    raised: "₹1.2Cr",
    stage: "Pre-Series A",
    growth: "+85%",
    color: "from-blue-500/20 to-cyan-500/10",
  },
  {
    name: "PackRight",
    category: "Manufacturing",
    location: "Surat",
    description: "Sustainable packaging solutions for e-commerce and D2C brands.",
    raised: "₹75L",
    stage: "Seed",
    growth: "+200%",
    color: "from-amber-500/20 to-yellow-500/10",
  },
  {
    name: "FinSeva",
    category: "FinTech",
    location: "Patna",
    description: "Digital banking and financial services for underbanked rural communities.",
    raised: "₹2Cr",
    stage: "Series A",
    growth: "+150%",
    color: "from-primary/20 to-purple-500/10",
  },
  {
    name: "KisanTech",
    category: "AgriTech",
    location: "Nagpur",
    description: "AI-powered crop management and yield optimization for small farmers.",
    raised: "₹90L",
    stage: "Seed",
    growth: "+95%",
    color: "from-green-500/20 to-lime-500/10",
  },
  {
    name: "LocalMart",
    category: "Consumer",
    location: "Indore",
    description: "Hyperlocal marketplace connecting neighborhood stores with customers.",
    raised: "₹1.5Cr",
    stage: "Pre-Series A",
    growth: "+180%",
    color: "from-red-500/20 to-orange-500/10",
  },
]

export function FeaturedStartupsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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

      // Grid cards stagger with 3D effect
      if (gridRef.current) {
        const cards = gridRef.current.children
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            y: 80,
            rotateX: -15,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
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
    <section ref={sectionRef} id="startups" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
                Featured Startups
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
                Discover Promising Ventures
              </h2>
            </div>
            <Button variant="outline" className="border-border hover:border-primary/50 hover:bg-primary/5 w-fit group" asChild>
              <Link href="#apply">
                View All Startups
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Startups Grid */}
          <div 
            ref={gridRef} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ perspective: "1000px" }}
          >
            {featuredStartups.map((startup, index) => (
              <GlowingCard
                key={index}
                containerClassName="h-full"
                className="p-6 h-full"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${startup.color} opacity-50 rounded-xl`} />

                <div className="relative z-10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                      <span className="text-2xl font-bold text-primary">
                        {startup.name.charAt(0)}
                      </span>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {startup.stage}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {startup.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs border-border">
                          {startup.category}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {startup.location}
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {startup.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground block">Raised</span>
                      <p className="text-lg font-bold text-foreground">{startup.raised}</p>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-green-500">
                      <TrendingUp className="w-4 h-4" />
                      {startup.growth}
                    </div>
                  </div>
                </div>
              </GlowingCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
