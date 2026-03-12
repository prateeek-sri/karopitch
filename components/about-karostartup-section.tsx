import { BookOpen, Users, Award, Radio } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    icon: BookOpen,
    value: "1000+",
    label: "Stories Published",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Founder Community",
  },
  {
    icon: Award,
    value: "5+",
    label: "Years of Impact",
  },
  {
    icon: Radio,
    value: "100+",
    label: "Cities Reached",
  },
]

export function AboutKaroStartupSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/20 to-accent/10 p-8 lg:p-12">
                  <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center mb-6">
                    <span className="text-3xl font-bold text-primary">K</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    KaroStartup
                  </h3>
                  <p className="text-muted-foreground">
                    India&apos;s Largest Startup Storytelling Platform
                  </p>
                </div>

                {/* Stats */}
                <div className="p-8 lg:p-12">
                  <div className="grid grid-cols-2 gap-6">
                    {highlights.map((item, index) => (
                      <div key={index} className="text-center p-4 rounded-xl bg-secondary/50">
                        <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{item.value}</div>
                        <div className="text-xs text-muted-foreground">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">
                  About KaroStartup
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
                  The Story Behind Karo Pitch
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  KaroStartup began with a simple mission: to tell the stories of India&apos;s 
                  entrepreneurs. Over five years, we&apos;ve grown into one of the country&apos;s 
                  largest startup media platforms.
                </p>
                <p>
                  We&apos;ve published thousands of founder journeys, created a thriving 
                  community of entrepreneurs, and built a platform that inspires millions 
                  across India.
                </p>
                <p>
                  Now, with <span className="text-foreground font-semibold">Karo Pitch</span>, 
                  we&apos;re taking the next step — moving beyond stories to action. We&apos;re 
                  creating direct pathways for founders to meet investors and raise the 
                  capital they need to scale.
                </p>
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow us on</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Instagram", href: "https://www.instagram.com/karo_startup_/" },
                    { name: "LinkedIn", href: "https://www.linkedin.com/company/karo-startup/" },
                    { name: "Twitter", href: "https://x.com/karo_startup" },
                    { name: "YouTube", href: "https://www.youtube.com/@karostartup/videos" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-secondary/50 border border-border text-sm text-foreground hover:bg-secondary hover:border-primary/50 transition-colors"
                    >
                      {social.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
