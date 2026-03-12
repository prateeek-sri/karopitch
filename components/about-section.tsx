import { Target, Users, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Mission Statement */}
            <div className="space-y-6">
              <div className="space-y-4">
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
              <div className="space-y-4 pt-4">
                {[
                  { icon: Target, title: "Focused Access", desc: "Direct connections to active investors looking for the next big opportunity" },
                  { icon: Users, title: "Community Driven", desc: "Part of a thriving ecosystem of founders, mentors, and industry experts" },
                  { icon: Globe, title: "Pan-India Reach", desc: "Empowering startups from every corner of India, not just metro cities" },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-10">
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">K</span>
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
                        <div className="text-2xl font-bold text-primary">5+</div>
                        <div className="text-sm text-muted-foreground">Years of Impact</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">1000+</div>
                        <div className="text-sm text-muted-foreground">Stories Shared</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
