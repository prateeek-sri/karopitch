import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Lightbulb, Shield } from "lucide-react"
import Link from "next/link"

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

export function InvestorsSection() {
  return (
    <section id="investors" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
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
                    className="flex gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
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

              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
                <Link href="#apply">Partner With Us</Link>
              </Button>
            </div>

            {/* Right - Investor Logos Placeholder */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Our Investor Network
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Trusted by leading investors across India
                  </p>
                </div>

                {/* Placeholder Investor Logos */}
                <div className="grid grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-secondary/50 border border-border flex items-center justify-center"
                    >
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-muted-foreground text-xs font-medium">
                          VC {i + 1}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-foreground font-semibold">50+</span> investors actively 
                    looking for opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
