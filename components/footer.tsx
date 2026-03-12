import Link from "next/link"
import { Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react"

const footerLinks = {
  platform: [
    { label: "About Karo Pitch", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Investors", href: "#investors" },
    { label: "Featured Startups", href: "#startups" },
  ],
  company: [
    { label: "About KaroStartup", href: "https://karostartup.com" },
    { label: "Contact Us", href: "mailto:business@karostartup.com" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/karopitch/", icon: Instagram },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/karo-startup/", icon: Linkedin },
    { label: "Twitter", href: "https://x.com/karo_startup", icon: Twitter },
    { label: "YouTube", href: "https://www.youtube.com/@karostartup/videos", icon: Youtube },
    { label: "Facebook", href: "https://www.facebook.com/karostartup", icon: Facebook },
  ],
}

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">K</span>
                </div>
                <span className="font-bold text-xl text-foreground">Karo Pitch</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                India&apos;s most accessible startup discovery and funding platform for 
                Bharat entrepreneurs.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {footerLinks.social.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Platform</h4>
              <ul className="space-y-3">
                {footerLinks.platform.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link 
                    href="mailto:business@karostartup.com"
                    className="hover:text-foreground transition-colors"
                  >
                    business@karostartup.com
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://wa.me/919315194393"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    +91 9315194393
                  </Link>
                </li>
                <li className="pt-2">
                  <Link
                    href="https://karostartup.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    Visit KaroStartup →
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} KaroStartup. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
