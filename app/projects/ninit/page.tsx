import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NinitPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold mb-8">Ninit: Novus Initium</h1>
      <p className="text-lg text-green-400/90">
        Building transparent, efficient, and customizable funding and coordination solutions for the future of decentralized governance. Ninit is a meta initiative launched in 2017, aimed at addressing the lack of focus on cultivating, testing, and bridging new political infrastructure. We believe that new beginnings should be a human right and a public good.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <ul className="list-disc list-inside space-y-2 text-green-400/90">
            <li>Enhance web3 onboarding experiences</li>
            <li>Develop governance mechanisms and political infrastructure</li>
            <li>Improve impact measurement and review systems</li>
            <li>Create industry-standard protocols for governance</li>
            <li>Experiment with resource and capital allocation mechanisms</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Weekly Events</h2>
          <p className="text-green-400/90 mb-4">
            We host regular community-centric events to increase civic participation and awareness of decentralized governance.
          </p>
          <a href="https://discord.gg/jv2U6smYSU" target="_blank" rel="noopener noreferrer">
            <Button className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
              View Upcoming Events
            </Button>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Our Focus Areas</h2>
        <div className="flex flex-wrap gap-2">
          {['Governance', 'Web3', 'Public Goods', 'Civic Engagement', 'Decentralized Finance', 'Education'].map((area) => (
            <Badge key={area} variant="outline" className="border-green-400/20 bg-black/50">
              {area}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Join the Ninit Network</h2>
        <p className="text-green-400/90 mb-4">
          Whether you're a Web3 developer, passionate about social causes, or just looking to learn something new, we've got a place for you in our collective of builders and pioneers.
        </p>
        <a href="https://ninit.xyz" target="_blank" rel="noopener noreferrer">
          <Button className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
            Get Involved
          </Button>
        </a>
      </div>
    </div>
  )
}

