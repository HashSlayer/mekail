import { SiteHeader } from "@/components/shared/layout/SiteHeader"
import { projects } from "@/constants/projectData"

// ProjectsLayout component that provides a consistent layout for all project pages
export default function ProjectsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string }
}) {
  const project = projects.find(p => p.slug === params.slug)
  const title = project ? project.title : 'Project'

  return (
    <div className="min-h-screen bg-black text-green-400">
      <SiteHeader />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}

