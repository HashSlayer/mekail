import { HeroSection } from "@/components/pages/home/HeroSection"
import { SiteHeader } from "@/components/shared/layout/SiteHeader"
import { MatrixRainBackground } from "@/components/MatrixRainBackground"

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixRainBackground />
      <div className="relative z-10">
        <SiteHeader />
        <main>
          <HeroSection />
        </main>
      </div>
    </div>
  )
}

