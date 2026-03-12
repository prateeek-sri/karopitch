"use client"

import { FileText, CheckCircle, Presentation, Rocket } from "lucide-react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Apply with Your Pitch Deck",
    description: "Submit your startup details and pitch deck through our simple application form. Tell us your story and vision.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Get Shortlisted by KaroStartup",
    description: "Our expert team reviews applications and selects promising startups based on innovation, scalability, and market potential.",
    color: "from-green-500 to-emerald-400",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Pitch Live to Investors",
    description: "Present your startup in a structured pitch session to our curated panel of active investors looking for opportunities.",
    color: "from-primary to-purple-400",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Raise Funding and Scale",
    description: "Connect with interested investors, negotiate terms, and secure the funding you need to take your startup to the next level.",
    color: "from-orange-500 to-amber-400",
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

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

      // Timeline line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      )

      // Steps stagger animation
      if (timelineRef.current) {
        const cards = timelineRef.current.querySelectorAll(".step-card")
        cards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { 
              opacity: 0, 
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.9
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top bottom-=100",
                toggleActions: "play none none reverse",
              },
            }
          )
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px]" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mb-20">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4 px-4 py-1 rounded-full border border-primary/20 bg-primary/5">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Your Journey to Funding
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process designed to connect great ideas with the right investors.
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden lg:block">
              <div 
                ref={lineRef}
                className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-transparent origin-top"
              />
            </div>

            {/* Steps */}
            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`step-card lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  } ${index > 0 ? 'lg:mt-[-4rem]' : ''}`}
                  style={{ 
                    marginTop: index > 0 ? '-2rem' : '0',
                  }}
                >
                  {/* Card */}
                  <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                    <div className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:border-primary/30 overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Glow effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                      <div className="relative z-10">
                        {/* Number badge */}
                        <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-sm font-bold text-white">{step.number}</span>
                        </div>

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center mb-6`} style={{ background: `linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(139, 92, 246, 0.05))` }}>
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center" style={{ top: `${(index * 25) + 5}%` }}>
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color} ring-4 ring-background`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Ready to start your funding journey?
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Apply Now
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
