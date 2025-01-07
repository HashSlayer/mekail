import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TerminalIcon } from 'lucide-react'

interface TerminalWindowProps {
  title: string
  content: string[]
}

export function TerminalWindow({ title, content }: TerminalWindowProps) {
  return (
    <Card className="bg-white/90 dark:bg-black/90 border-blue-400/20 dark:border-green-400/20">
      <CardHeader className="border-b border-blue-400/20 dark:border-green-400/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-blue-600 dark:text-green-400 flex items-center gap-2">
            <TerminalIcon className="h-4 w-4" />
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 font-mono text-sm">
        {content.map((line, i) => (
          <div key={i} className="flex items-start space-x-2">
            <span className="text-blue-600 dark:text-green-400">❯</span>
            <span className="text-gray-800 dark:text-green-400/90">{line}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

