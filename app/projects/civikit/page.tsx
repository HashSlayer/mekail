import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Link from "next/link"

export default function CivikitPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-8">Civikit</h1>
      <div className="space-y-6">
        <p className="text-lg">
          Civikit is a full-stack SDK built on Scaffold-Eth-2 that enhances the development and testing of various governance mechanisms. It's designed to make it easier for developers to create, test, and deploy advanced governance systems for DAOs and grant programs.
        </p>
        
        <h2 className="text-2xl font-semibold">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-green-400/90">
          <li>Modular architecture for flexible governance design</li>
          <li>Pre-built components for common governance mechanisms</li>
          <li>Tools for simulating and testing governance outcomes</li>
          <li>Integration with popular Ethereum development frameworks</li>
          <li>Comprehensive documentation and examples</li>
        </ul>

        <h2 className="text-2xl font-semibold">Use Cases</h2>
        <ul className="list-disc list-inside space-y-2 text-green-400/90">
          <li>Designing and testing novel voting systems</li>
          <li>Implementing reputation-based governance</li>
          <li>Creating efficient fund allocation mechanisms</li>
          <li>Developing transparent decision-making processes</li>
        </ul>

        <p className="text-green-400/90">
          By leveraging Civikit, developers can significantly reduce the time and complexity involved in building robust governance systems, allowing for more rapid experimentation and innovation in the world of decentralized organizations.
        </p>

        <div className="pt-4">
          <Link href="https://github.com/Novus-Initium/Civikit" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

