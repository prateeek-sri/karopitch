"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import gsap from "gsap"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLAnchorElement>(null)
  const linksRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo entrance
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out", delay: 0.1 }
      )

      // Nav links stagger
      if (linksRef.current) {
        gsap.fromTo(
          linksRef.current.children,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out", delay: 0.3 }
        )
      }

      // Buttons entrance
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current.children,
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power3.out", delay: 0.5 }
        )
      }
    }, navRef)

    return () => ctx.revert()
  }, [])

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#categories", label: "Who Can Apply" },
    { href: "#startups", label: "Startups" },
    { href: "#investors", label: "Investors" },
  ]

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link ref={logoRef} href="/" className="flex items-center gap-2 group opacity-0">
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center overflow-hidden">
              <span className="text-primary-foreground font-bold text-lg relative z-10">K</span>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-foreground leading-tight">Karo Pitch</span>
              <span className="text-[10px] text-muted-foreground leading-tight">by KaroStartup</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div ref={linksRef} className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group opacity-0"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="hidden lg:flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-muted-foreground hover:text-foreground opacity-0" 
              asChild
            >
              <Link href="#startups">Explore Startups</Link>
            </Button>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/90 relative overflow-hidden group opacity-0" 
              asChild
            >
              <Link href="#apply" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Apply to Pitch
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2 rounded-lg hover:bg-secondary/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all px-4 py-3 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
                <Button variant="outline" className="justify-center" asChild>
                  <Link href="#startups" onClick={() => setIsMobileMenuOpen(false)}>
                    Explore Startups
                  </Link>
                </Button>
                <Button className="bg-primary hover:bg-primary/90 justify-center" asChild>
                  <Link href="#apply" onClick={() => setIsMobileMenuOpen(false)}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Apply to Pitch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
