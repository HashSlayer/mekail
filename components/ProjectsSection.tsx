import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  return (
    <section id="projects-section" className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
        <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          A blend of community initiatives, research projects, and innovative endeavors showcasing my diverse skill set.
        </p>
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.slug} className="transition-transform hover:scale-105">
            <Card className="h-full bg-black/50 border-green-400/20">
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
          </Link>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/contact">
          <Button variant="outline" className="border-green-400/20 bg-gray-800 text-green-400 hover:bg-gray-700">
            Let's Collaborate
          </Button>
        </Link>
      </div>
    </section>
  )
}

const projects = [
  {
    title: "Crypto Conductors",
    slug: "crypto-conductors",
    description: "Web3 education and onboarding initiative launched in 2017. Breaking down crypto from token to transistor.",
    technologies: ["Web3", "Blockchain", "Education", "Community Building"],
  },
  {
    title: "Political Engagement Platform",
    slug: "political-engagement",
    description: "Web app for increasing civic participation and awareness.",
    technologies: ["React", "Node.js", "Political Science", "UX Research"],
  },
  {
    title: "OSWS",
    slug: "osws",
    description: "Python intro and guide for computer programming and automation, developing bots for classic 8-bit games with modular components and anti-botting practice.",
    technologies: ["Python", "Automation", "GUI", "Game Development", "Education"],
  },
  {
    title: "Civikit",
    slug: "civikit",
    description: "Full-stack SDK using Scaffold-Eth-2 for developing and testing innovative governance mechanisms. Empowers developers to create advanced systems for DAOs and grant programs.",
    technologies: ["Ethereum", "Scaffold-Eth-2", "TypeScript", "Solidity", "Governance"],
  },
  {
    title: "Experimental Governance Model",
    slug: "governance-model",
    description: "Research on new models of community decision-making.",
    technologies: ["Political Theory", "Game Theory", "Sociology", "Data Analysis"],
  },
  {
    title: "Audiotistik: Community Vibe Curation",
    slug: "audiotistik",
    description: "Moving the world through sound, Audiotistik is the name, audiotism is the game. DJ project exploring music, community, and decentralized governance.",
    technologies: ["DJing", "Music Curation", "Event Planning", "Decentralized Platforms"],
  },
]

