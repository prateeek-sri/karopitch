"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

const featuredStartups = [
  {
    name: "Bharat Fresh",
    category: "D2C",
    location: "Lucknow",
    description: "Farm-to-table organic produce delivery connecting rural farmers to urban consumers.",
    raised: "₹50L",
    stage: "Seed",
  },
  {
    name: "LearnKaro",
    category: "EdTech",
    location: "Jaipur",
    description: "Vernacular language learning platform for Tier-2 and Tier-3 cities.",
    raised: "₹1.2Cr",
    stage: "Pre-Series A",
  },
  {
    name: "PackRight",
    category: "Manufacturing",
    location: "Surat",
    description: "Sustainable packaging solutions for e-commerce and D2C brands.",
    raised: "₹75L",
    stage: "Seed",
  },
  {
    name: "FinSeva",
    category: "FinTech",
    location: "Patna",
    description: "Digital banking and financial services for underbanked rural communities.",
    raised: "₹2Cr",
    stage: "Series A",
  },
  {
    name: "KisanTech",
    category: "AgriTech",
    location: "Nagpur",
    description: "AI-powered crop management and yield optimization for small farmers.",
    raised: "₹90L",
    stage: "Seed",
  },
  {
    name: "LocalMart",
    category: "Consumer",
    location: "Indore",
    description: "Hyperlocal marketplace connecting neighborhood stores with customers.",
    raised: "₹1.5Cr",
    stage: "Pre-Series A",
  },
]

export function FeaturedStartupsSection() {
  return (
    <section id="startups" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Featured Startups
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 text-balance">
                Discover Promising Ventures
              </h2>
            </div>
            <Button variant="outline" className="border-border hover:bg-secondary w-fit" asChild>
              <Link href="#apply">
                View All Startups
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Startups Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredStartups.map((startup, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">
                      {startup.name.charAt(0)}
                    </span>
                  </div>
                  <Badge variant="secondary" className="bg-secondary text-foreground">
                    {startup.stage}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {startup.name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Badge variant="outline" className="text-xs">
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

                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Raised</span>
                      <p className="text-lg font-bold text-primary">{startup.raised}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      Learn More →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
