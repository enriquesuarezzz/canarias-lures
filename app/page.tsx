import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductCategories } from "@/components/product-categories"
import { AnglersTips } from "@/components/anglers-tips"
import { VideosSection } from "@/components/videos-section"
import { FishingOffers } from "@/components/fishing-offers"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <AnglersTips />
      <FishingOffers />
      <VideosSection />
    </main>
  )
}
