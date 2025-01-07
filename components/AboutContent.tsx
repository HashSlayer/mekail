import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function AboutContent() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-green-400">About Mekail Murphy</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">My Journey</h2>
        <Card className="bg-black/50 border-green-400/20">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative h-96 rounded overflow-hidden">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GAApu4fGhE4gItWEAMWlUcztqO9fdT.png"
                  alt="Mekail Murphy portrait"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-green-400">From Frustration to Innovation</h3>
                <p className="text-gray-400">
                  My journey into web3 began in late high school after a serious concussion. Frustrated with the inefficiencies and corruption in modern governing systems, I channeled my discontent into a quest for solutions. This led me to pursue an education in political science and economics while delving deep into blockchain and crypto technologies.
                </p>
                <p className="text-gray-400 mt-4">
                  My passion lies in creating a future where we feel closer to our communities and have more control over the governing systems that impact our daily lives. This drive led to the creation of Ninit, a project and movement aimed at finding and implementing solutions to these problems, starting with increasing awareness and understanding of blockchain technology.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Projects and Achievements</h2>
        <Card className="bg-black/50 border-green-400/20">
          <CardContent className="p-6">
            <ul className="space-y-4 text-gray-400">
              <li>
                <strong className="text-green-400">Ninit:</strong> A movement focused on increasing awareness and implementing solutions for better governance systems.
              </li>
              <li>
                <strong className="text-green-400">Crypto Conductors:</strong> An educational initiative aimed at creating more "conductors" in the crypto social network, offering development courses and building a community of passionate researchers and developers.
              </li>
              <li>
                <strong className="text-green-400">ETHBrussels Hackathon:</strong> Secured 1st place bounty from NounsDAO in 2024, developing a highly customizable grant stack application.
              </li>
              <li>
                <strong className="text-green-400">Civikit:</strong> A long-term project focusing on research and development in the web3 space.
              </li>
              <li>
                <strong className="text-green-400">E-commerce Success:</strong> Achieved $100k in revenue in the first full year of online and retail arbitrage on Amazon, utilizing custom Python scripts for efficient product sourcing and pricing.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Skills and Expertise</h2>
        <Card className="bg-black/50 border-green-400/20">
          <CardContent className="p-6">
            <p className="text-gray-400 mb-4">
              My diverse experiences have led me to develop a unique skill set spanning multiple disciplines:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="border-green-400/20 text-gray-400">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Professional Experience</h2>
        <Card className="bg-black/50 border-green-400/20">
          <CardContent className="p-6">
            <ul className="space-y-4">
              {experiences.map((exp, index) => (
                <li key={index} className="border-l-2 border-green-400/20 pl-4">
                  <h3 className="text-xl font-semibold text-green-400">{exp.title}</h3>
                  <p className="text-gray-500">{exp.period}</p>
                  <p className="text-gray-400 mt-2">{exp.description}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-green-400">Interests and Community Involvement</h2>
        <Card className="bg-black/50 border-green-400/20">
          <CardContent className="p-6">
            <p className="text-gray-400 mb-4">
              Beyond my professional endeavors, I'm deeply committed to personal growth and community building:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Avid climber and bouldering enthusiast</li>
              <li>Chess player</li>
              <li>Fermenting foods and drinks as a hobby</li>
              <li>Hosting various community events</li>
              <li>Developing and managing Discord servers for projects like Ninit and Coin.fi</li>
              <li>Contributing to community management, business development, and marketing initiatives</li>
              <li>Organizing educational workshops on blockchain and cryptocurrency</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

const skills = [
  "Blockchain Technology", "Cryptocurrency", "Community Building", "Political Science",
  "Economics", "Python Development", "E-commerce", "Project Management", "Event Organization",
  "Discord Management", "Business Development", "Marketing", "Grant Writing", "Hackathon Participation"
]

const experiences = [
  {
    title: "Founder of Ninit and Crypto Conductors",
    period: "2017 - Present",
    description: "Leading initiatives to increase awareness of blockchain technology and implement innovative governance solutions."
  },
  {
    title: "Web3 Developer and Researcher",
    period: "2018 - Present",
    description: "Developing projects like Civikit and contributing to hackathons, focusing on customizable grant systems and governance mechanisms."
  },
  {
    title: "E-commerce Entrepreneur",
    period: "2019 - 2020",
    description: "Achieved significant success in Amazon e-commerce, utilizing custom Python scripts for efficient product sourcing and pricing strategies."
  },
  {
    title: "Community Manager and Business Developer",
    period: "2020 - Present",
    description: "Managing online communities, developing business strategies, and contributing to marketing efforts for various blockchain and crypto projects."
  }
]

