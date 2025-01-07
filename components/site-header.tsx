import Link from "next/link"
import { Terminal } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-black/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Terminal className="h-6 w-6 text-green-400" />
            <span className="inline-block font-bold text-green-400">Mekail Murphy</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-green-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="transition-colors hover:text-green-400"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-green-400"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-green-400"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

