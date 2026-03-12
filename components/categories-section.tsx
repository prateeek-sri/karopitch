"use client"

import { ShoppingBag, Building2, Code2, Factory, Smartphone, MapPin } from "lucide-react"

const categories = [
  {
    icon: ShoppingBag,
    title: "D2C Brands",
    description: "Direct-to-consumer brands disrupting traditional retail with innovative products and distribution models.",
    gradient: "from-pink-500/20 to-orange-500/20",
  },
  {
    icon: Smartphone,
    title: "Consumer Startups",
    description: "Consumer-focused apps and services solving everyday problems with technology and innovation.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Building2,
    title: "MSMEs",
    description: "Micro, small & medium enterprises building scalable businesses with sustainable growth models.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Code2,
    title: "SaaS Startups",
    description: "Software-as-a-Service companies building B2B or B2C solutions with recurring revenue models.",
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Innovative manufacturing businesses modernizing production with technology and efficiency.",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    icon: MapPin,
    title: "Bharat-Focused",
    description: "Startups solving unique challenges for India's Tier-2, Tier-3 cities and rural markets.",
    gradient: "from-red-500/20 to-rose-500/20",
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
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

          {/* Categories Grid - Bento Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-primary text-2xl">→</span>
                </div>
              </div>
            ))}
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
