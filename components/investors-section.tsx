"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Lightbulb, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { MovingBorder } from "@/components/ui/moving-border"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const investorBenefits = [
  {
    icon: Lightbulb,
    title: "Curated Deal Flow",
    description: "Access pre-vetted startups selected by our expert team",
  },
  {
    icon: TrendingUp,
    title: "Early Stage Access",
    description: "Connect with promising startups at ground level",
  },
  {
    icon: Users,
    title: "Diverse Portfolio",
    description: "Discover opportunities across multiple sectors",
  },
  {
    icon: Shield,
    title: "Due Diligence Support",
    description: "Get comprehensive startup profiles and metrics",
  },
]

const testimonials = [
  {
    quote: "Karo Pitch gave me access to startups I would never have discovered otherwise. The quality of deal flow is exceptional.",
    name: "Rajesh Sharma",
    title: "Angel Investor, Mumbai",
  },
  {
    quote: "The platform's focus on Tier-2 and Tier-3 cities is refreshing. Found some real hidden gems here.",
    name: "Priya Mehta",
    title: "VC Partner, Delhi",
  },
  {
    quote: "As an investor looking for Bharat-focused startups, this is exactly what I needed. Great curation.",
    name: "Amit Patel",
    title: "Family Office, Ahmedabad",
  },
  {
    quote: "The pitch sessions are well-organized and the founders are well-prepared. Highly recommend for fellow investors.",
    name: "Sneha Reddy",
    title: "Angel Network Lead, Hyderabad",
  },
]

export function InvestorsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const items = contentRef.current.querySelectorAll(".animate-item")
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="investors" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="animate-item">
                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
                  For Investors
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                  Meet Investors Looking for the Next Big Startup
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Join our network of angel investors, VCs, and strategic partners actively 
                  seeking investment opportunities in India&apos;s most promising early-stage startups.
                </p>
              </div>

              {/* Benefits Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {investorBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="animate-item group flex gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="animate-item">
                <MovingBorder
                  duration={3}
                  borderRadius="0.75rem"
                  containerClassName="w-fit"
                  className="px-6 py-3 bg-card"
                >
                  <Link href="#apply" className="flex items-center gap-2 text-foreground font-semibold group">
                    Partner With Us
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MovingBorder>
              </div>
            </div>

            {/* Right - Stats Card */}
            <div className="animate-item relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12 overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Our Investor Network
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Trusted by leading investors across India
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { value: "50+", label: "Active Investors" },
                      { value: "₹10Cr+", label: "Deployed Capital" },
                      { value: "25+", label: "Cities Represented" },
                      { value: "100+", label: "Deals Evaluated" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-4 rounded-xl bg-secondary/50 border border-border">
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Join a network of investors who believe in <span className="text-primary font-semibold">Bharat&apos;s startup ecosystem</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Marquee */}
      <div className="mt-20">
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          pauseOnHover
          className="py-4"
        />
      </div>
    </section>
  )
}
