import { Button } from "@/components/ui/button"
import { Github } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { CourseStructure } from "@/components/pages/projects/crypto-conductors/CourseStructure"

export default function CryptoConductorsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">Crypto Conductors</h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg text-green-400/90">
              Crypto Conductors offers in-person and online courses that break down the complexities of cryptocurrency and blockchain technology. Our comprehensive curriculum takes you on a journey from the fundamentals of value to the cutting edge of Web3 development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://github.com/HashSlayer/Crypto-Conductors-Guide" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
                  <Github className="mr-2 h-4 w-4" />
                  Crypto Conductors Digital Guide
                </Button>
              </Link>
              <Link href="https://github.com/HashSlayer/Encryptedkiss" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
                  <Github className="mr-2 h-4 w-4" />
                  EncryptedKiss
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg shadow-green-400/20">
            <Image 
              src="/images/teaching.jpg" 
              alt="Teaching a crypto course" 
              fill 
              className="object-cover"
              priority
            />
          </div>
        </div>

        <CourseStructure />
      </div>
    </div>
  )
}

