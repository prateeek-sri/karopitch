import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CategoriesSection } from "@/components/categories-section"
import { InvestorsSection } from "@/components/investors-section"
import { FeaturedStartupsSection } from "@/components/featured-startups-section"
import { AboutKaroStartupSection } from "@/components/about-karostartup-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <CategoriesSection />
      <FeaturedStartupsSection />
      <InvestorsSection />
      <AboutKaroStartupSection />
      <CTASection />
      <Footer />
    </main>
  )
}
