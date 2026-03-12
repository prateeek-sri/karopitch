import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Karo Pitch | Pitch Your Startup to India\'s Top Investors',
  description: 'Karo Pitch is a platform where early-stage founders from across India can pitch their startups directly to investors. Apply now to get funded.',
  keywords: ['startup', 'pitch', 'investors', 'funding', 'India', 'D2C', 'MSME', 'SaaS', 'KaroStartup'],
  authors: [{ name: 'KaroStartup' }],
  openGraph: {
    title: 'Karo Pitch | Pitch Your Startup to India\'s Top Investors',
    description: 'Connect with top investors and raise funding for your startup through curated pitch events.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
