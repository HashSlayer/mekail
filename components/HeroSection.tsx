"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TerminalWindow } from "@/components/shared/TerminalWindow"
import { useState, useEffect, useCallback } from 'react'

const skills = [
  "Community Organizing",
  "Political Research",
  "Community Development",
  "Solidity & Python",
  "Frontend Development",
  "C++, Swift, C#",
  "Marketing and Design"
]

export function HeroSection() {
  const [skillPercentages, setSkillPercentages] = useState<number[]>(
    skills.map(() => Math.floor(Math.random() * 100))
  )

  const updateSkillPercentages = useCallback(() => {
    setSkillPercentages(skills.map(() => Math.floor(Math.random() * 100)))
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateSkillPercentages()
    }, 1000 + Math.random() * 1000) // Random interval between 1-2 seconds

    const handleMouseMove = () => {
      updateSkillPercentages()
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [updateSkillPercentages])

  const getProgressBar = (percentage: number) => {
    const blocks = Math.floor(percentage / 10)
    return '█'.repeat(blocks) + '░'.repeat(10 - blocks)
  }

  const terminalContent = [
    "echo 'Building sustainable communities'",
    "loading skills...",
    ...skills.map((skill, index) => 
      `${skill} ${getProgressBar(skillPercentages[index])} ${skillPercentages[index]}%`
    ),
    "ready to collaborate and create impact_"
  ]

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-12 lg:py-24">
      <div className="container mx-auto px-4 md:px-6 xl:px-8 2xl:px-16 max-w-screen-2xl">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[2fr_1fr] 2xl:grid-cols-[2.5fr_1fr] lg:gap-12">
          <div className="flex flex-col justify-center space-y-6 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl 2xl:text-8xl text-green-400">
                Mekail Murphy
              </h1>
              <p className="text-green-400/80 text-xl sm:text-2xl xl:text-3xl 2xl:text-4xl max-w-full">
                Community Builder | Community Development Researcher | Event Organizer | Vibe Curator / DJ
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="/about">
                <Button variant="outline" className="border-green-400/20 bg-black/50 text-green-400 hover:bg-green-400/20 text-lg xl:text-xl">
                  About
                </Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline" className="border-green-400/20 bg-black/50 text-green-400 hover:bg-green-400/20 text-lg xl:text-xl">
                  Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-green-400/20 bg-black/50 text-green-400 hover:bg-green-400/20 text-lg xl:text-xl">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg xl:max-w-xl 2xl:max-w-2xl">
              <TerminalWindow
                title="mekail.sh"
                content={terminalContent}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

