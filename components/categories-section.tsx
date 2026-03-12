"use client"

import { ShoppingBag, Building2, Code2, Factory, Smartphone, MapPin } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const categories = [
  {
    icon: ShoppingBag,
    title: "D2C Brands",
    description: "Direct-to-consumer brands disrupting traditional retail with innovative products and distribution models.",
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 via-orange-500/10 to-transparent overflow-hidden relative group-hover/bento:from-pink-500/30 transition-all duration-300">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500/30 to-orange-500/30 blur-2xl animate-pulse" />
        </div>
        <div className="absolute bottom-4 right-4 flex gap-2">
          {["Fashion", "Beauty", "Food"].map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-background/50 text-foreground/70 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: Smartphone,
    title: "Consumer Startups",
    description: "Consumer-focused apps and services solving everyday problems with technology.",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-3 gap-2 opacity-30">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-lg bg-blue-500/50" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Building2,
    title: "MSMEs",
    description: "Micro, small & medium enterprises building scalable businesses with sustainable growth.",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-transparent overflow-hidden relative">
        <div className="absolute inset-0 flex items-end justify-center pb-4">
          <div className="flex gap-1 items-end">
            {[40, 60, 45, 80, 55, 70, 90].map((h, i) => (
              <div 
                key={i} 
                className="w-3 rounded-t-sm bg-gradient-to-t from-green-500/50 to-emerald-500/30"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Code2,
    title: "SaaS Startups",
    description: "Software-as-a-Service companies building B2B or B2C solutions with recurring revenue.",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <pre className="text-[10px] text-primary font-mono">
{`const grow = async () => {
  await raise.funding();
  return scale();
}`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Innovative manufacturing businesses modernizing production with technology and efficiency.",
    className: "md:col-span-1",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-amber-500/20 via-yellow-500/10 to-transparent overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-16 rounded-sm bg-amber-500/30 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: MapPin,
    title: "Bharat-Focused",
    description: "Startups solving unique challenges for India's Tier-2, Tier-3 cities and rural markets.",
    className: "md:col-span-2",
    header: (
      <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-red-500/20 via-rose-500/10 to-transparent overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            {/* Simplified India map representation with dots */}
            {[
              { x: 50, y: 20 }, { x: 60, y: 30 }, { x: 40, y: 40 },
              { x: 55, y: 50 }, { x: 45, y: 60 }, { x: 50, y: 70 },
              { x: 55, y: 80 }, { x: 65, y: 45 }, { x: 35, y: 55 },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-red-500/50 animate-pulse"
                style={{ 
                  left: `${pos.x}%`, 
                  top: `${pos.y}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-4 flex gap-2">
          {["Tier 2", "Tier 3", "Rural"].map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-full bg-background/50 text-foreground/70 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
  },
]

export function CategoriesSection() {
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

      // Grid items stagger
      if (gridRef.current) {
        const items = gridRef.current.children
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
    <section ref={sectionRef} id="categories" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              Who Can Apply
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Built for Every Startup Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re building the next big D2C brand or solving local challenges, 
              Karo Pitch welcomes founders from all sectors.
            </p>
          </div>

          {/* Bento Grid */}
          <div ref={gridRef}>
            <BentoGrid className="md:auto-rows-[20rem]">
              {categories.map((category, index) => (
                <BentoGridItem
                  key={index}
                  title={category.title}
                  description={category.description}
                  header={category.header}
                  className={category.className}
                  icon={<category.icon className="w-5 h-5 text-primary" />}
                />
              ))}
            </BentoGrid>
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Don&apos;t see your category? <span className="text-foreground font-medium">Apply anyway!</span> We welcome innovative ideas from all sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
