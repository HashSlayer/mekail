import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function OSWSPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">OSWS</h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-green-400/90">
              OSWS is a Python introduction and guide used to teach computer programming and automation. It focuses on developing simple bots for classic 8-bit games, providing a hands-on approach to learning programming concepts and automation techniques.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/YourGithubUsername/OSWS" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg shadow-green-400/20">
            <Image 
              src="/images/osws-screenshot.jpg" 
              alt="OSWS Project Screenshot" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Project Features</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Modular Automation Components</h3>
            <p className="text-green-400/90">
              OSWS provides a set of modular automation components that allow students to build and customize their bots. These components include mouse movement control, click automation, and screen analysis tools.
            </p>

            <h3 className="text-xl font-semibold">GUI Control Panel</h3>
            <p className="text-green-400/90">
              The project features a graphical user interface that gives advanced control over bot behavior. Students can adjust parameters such as movement speed, click frequency, and randomness to fine-tune their bots' performance.
            </p>

            <h3 className="text-xl font-semibold">Anti-Botting Challenges</h3>
            <p className="text-green-400/90">
              To provide a comprehensive learning experience, OSWS includes challenges that simulate anti-botting mechanisms found in real games. This allows students to practice developing more sophisticated and undetectable automation scripts.
            </p>

            <h3 className="text-xl font-semibold">Educational Focus</h3>
            <p className="text-green-400/90">
              While the project involves creating bots, its primary purpose is educational. It teaches important programming concepts, introduces students to automation techniques, and encourages critical thinking about game mechanics and anti-cheat systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

