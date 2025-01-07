import { SiteHeader } from "@/components/shared/layout/SiteHeader"
import { ContactContent } from "@/components/pages/contact/ContactContent"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-green-400">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <ContactContent />
      </main>
    </div>
  )
}

