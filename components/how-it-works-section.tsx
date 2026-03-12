"use client"

import { FileText, CheckCircle, Presentation, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Apply with Your Pitch Deck",
    description: "Submit your startup details and pitch deck through our simple application form. Tell us your story and vision.",
  },
  {
    number: "02",
    icon: CheckCircle,
    title: "Get Shortlisted by KaroStartup",
    description: "Our expert team reviews applications and selects promising startups based on innovation, scalability, and market potential.",
  },
  {
    number: "03",
    icon: Presentation,
    title: "Pitch Live to Investors",
    description: "Present your startup in a structured pitch session to our curated panel of active investors looking for opportunities.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Raise Funding and Scale",
    description: "Connect with interested investors, negotiate terms, and secure the funding you need to take your startup to the next level.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Your Journey to Funding
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, transparent process designed to connect great ideas with the right investors.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%+1rem)] w-[calc(100%-2rem)] h-px bg-border z-0" />
                )}

                <div className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Ready to start your funding journey?
            </p>
            <a
              href="#apply"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              Apply Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
