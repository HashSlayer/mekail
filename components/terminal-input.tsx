"use client"

import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface TerminalInputProps {
  onCommand: (command: string) => void
  className?: string
  autoFocus?: boolean
}

export function TerminalInput({ onCommand, className, autoFocus = true }: TerminalInputProps) {
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus()
    }
  }, [autoFocus])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onCommand(input.trim())
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("flex items-center space-x-2", className)}>
      <span className="text-primary">❯</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 bg-transparent border-none outline-none focus:ring-0 text-primary"
        aria-label="Terminal input"
        spellCheck="false"
        autoComplete="off"
      />
    </form>
  )
}

