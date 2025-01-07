import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Music } from 'lucide-react'
import Link from "next/link"
import { TerminalWindow } from "./terminal-window"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Mekail Murphy
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Community Builder | Sustainable Development Researcher | Political Organizer | Vibe Curator
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button variant="outline" className="border-green-400/20 bg-gray-800 text-green-400 hover:bg-gray-700">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="text-green-400">
                  <Github className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-green-400">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-green-400">
                  <Music className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <TerminalWindow
              title="mekail.sh"
              content={[
                "echo 'Building sustainable communities'",
                "loading skills...",
                "Community Organizing ████████████ 100%",
                "Political Research ██████████ 90%",
                "Sustainable Development ████████ 80%",
                "Software Development ██████ 60%",
                "ready to collaborate and create impact_"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

