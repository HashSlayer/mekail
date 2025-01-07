import { ProjectLayout } from "@/components/project-layout"
import { Badge } from "@/components/ui/badge"
import { PlaceholderImage } from "@/components/placeholder-image"
import Image from "next/image";

export default function AudiotistikPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Audiotistik (DJ): Community Vibe Curation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4 text-lg">
            As DJ Audiotistik, I curate vibes through a variety of genres, specializing in house, dance, and electronic music. 
            Regularly performing at my local kava lounge on Thursdays and various crypto events, this project explores the 
            intersection of music, community, and decentralized governance in event experiences.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {['House', 'Dance', 'Electronic', 'Techno', 'Trance'].map((genre) => (
                <Badge key={genre} variant="outline" className="border-green-400/20 bg-black/50">
                  {genre}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Upcoming Events</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Every Thursday - Kava Lounge Nights</li>
              <li>July 15 - Crypto Summer Bash</li>
              <li>August 5 - Decentralized Dance Party</li>
            </ul>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg shadow-green-400/20">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-23%20203743-bzpeCRNKQzHcVPvVRJG0mRQwVkQ4zE.png"
            alt="Pixel art avatar of DJ Audiotistik"
            fill
            className="object-contain bg-black"
            priority
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Community Vibe Curation</h2>
        <p className="mb-4">
          At the heart of Audiotistik is the concept of community-driven music experiences. We're pioneering 
          decentralized music platforms that allow party attendees to vote on playlists and propose genre switches 
          in real-time, giving the community direct control over the sonic journey of each event.
        </p>
        <p>
          This innovative approach not only creates a more engaging and interactive party atmosphere but also 
          serves as a real-world experiment in decentralized decision-making and community governance.
        </p>
      </div>
    </div>
  )
}

