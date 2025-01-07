"use client"

import { useEffect, useRef, useState } from "react"
import { TerminalInput } from "./terminal-input"
import { commands } from "@/utils/commands"
import { TerminalHistory } from "@/types/terminal"
import { Card } from "@/components/ui/card"

export function Terminal() {
  const [history, setHistory] = useState<TerminalHistory[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  const handleCommand = async (command: string) => {
    const [cmd, ...args] = command.split(" ")
    const output = cmd in commands ? await commands[cmd].execute(args) : `Command not found: ${cmd}`

    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
        timestamp: Date.now(),
      },
    ])
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <Card className="w-full max-w-4xl h-[600px] bg-black/90 text-green-400 font-mono text-sm overflow-hidden rounded-lg border-green-400/20">
      <div ref={terminalRef} className="h-full overflow-auto p-4 space-y-4">
        <div className="text-center pb-4 border-b border-green-400/20">
          <h1 className="text-xl font-bold">Terminal Portfolio</h1>
          <p className="text-green-400/70">Type &apos;help&apos; to see available commands</p>
        </div>
        
        {history.map((entry, i) => (
          <div key={entry.timestamp} className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-primary">❯</span>
              <span>{entry.command}</span>
            </div>
            <div className="pl-6 whitespace-pre-wrap">{entry.output}</div>
          </div>
        ))}
        
        <TerminalInput onCommand={handleCommand} className="pt-2" />
      </div>
    </Card>
  )
}

