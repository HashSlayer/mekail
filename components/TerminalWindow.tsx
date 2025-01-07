import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TerminalIcon } from 'lucide-react'

interface TerminalWindowProps {
  title: string
  content: string[]
}

// TerminalWindow component that renders a terminal-like interface
export function TerminalWindow({ title, content }: TerminalWindowProps) {
  return (
    <Card className="bg-black/90 border-green-400/20">
      <CardHeader className="border-b border-green-400/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-green-400 flex items-center gap-2">
            <TerminalIcon className="h-4 w-4" />
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 font-mono text-sm">
        {content.map((line, i) => (
          <div key={i} className="flex items-start space-x-2">
            <span className="text-green-400">❯</span>
            <span className="text-green-400/90">{line}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

