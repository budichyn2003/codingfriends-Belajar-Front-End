"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesGrid from "@/components/features-grid"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <Navigation />
      <HeroSection />
      <FeaturesGrid />
      <Footer />
    </div>
  )
}
