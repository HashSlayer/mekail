import { SiteHeader } from "@/components/shared/layout/SiteHeader"

interface ProjectLayoutProps {
  children: React.ReactNode
  title: string
}

export function ProjectLayout({ children, title }: ProjectLayoutProps) {
  const isAudiotistik = title.includes("Audiotistik")

  return (
    <div className={`min-h-screen bg-black text-green-400 ${isAudiotistik ? 'bg-gradient-to-br from-black to-[#0a001a]' : ''}`}>
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-4xl font-bold mb-8 ${isAudiotistik ? 'text-center text-5xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500' : ''}`}>
          {title}
        </h1>
        {children}
      </main>
    </div>
  )
}

