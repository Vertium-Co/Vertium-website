'use client'

import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import { HeroSection } from '@/components/layout/HeroSection'
import { ServicesSection } from '@/components/layout/ServicesSection'
import { ProcessSection } from '@/components/layout/ProcessSection'
import { AboutSection } from '@/components/layout/AboutSection'
import { StatsSection } from '@/components/layout/StatsSection'
import { ContactSection } from '@/components/layout/ContactSection'

export default function VertiumLandingPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
