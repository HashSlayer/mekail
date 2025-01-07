import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  return (
    <section className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A blend of community initiatives, research projects, and software development showcasing my diverse skill set.
        </p>
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="bg-black/50 border-green-400/20">
            <CardHeader>
              <CardTitle className="text-green-400">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-green-400/20">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

const projects = [
  {
    title: "Sustainable Urban Gardens",
    description: "A community-driven initiative to create and maintain urban gardens, promoting sustainable food practices.",
    technologies: ["Community Organizing", "Sustainable Agriculture", "Education"],
  },
  {
    title: "Political Engagement Platform",
    description: "A web application to increase civic participation and political awareness in local communities.",
    technologies: ["React", "Node.js", "Political Science", "UX Research"],
  },
  {
    title: "Vibe Curation Algorithm",
    description: "An AI-powered system for curating music playlists based on community vibes and social dynamics.",
    technologies: ["Python", "Machine Learning", "Music Theory", "Social Psychology"],
  },
  {
    title: "Community Resource Mapper",
    description: "An open-source tool for mapping and sharing community resources and support networks.",
    technologies: ["JavaScript", "GIS", "Community Development", "Data Visualization"],
  },
  {
    title: "Experimental Governance Model",
    description: "Research project exploring new models of community decision-making and participatory democracy.",
    technologies: ["Political Theory", "Game Theory", "Sociology", "Data Analysis"],
  },
  {
    title: "Sustainable Event Planning Guide",
    description: "A comprehensive guide and toolkit for organizing environmentally-friendly community events.",
    technologies: ["Sustainability", "Event Planning", "Community Engagement", "Digital Publishing"],
  },
]

