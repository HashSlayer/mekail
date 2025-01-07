import { SiteHeader } from "@/components/shared/layout/SiteHeader"
import { AboutContent } from "@/components/pages/about/AboutContent"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <AboutContent />
      </main>
    </div>
  )
}

