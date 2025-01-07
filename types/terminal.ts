export interface Command {
  name: string
  description: string
  usage: string
  execute: (args: string[]) => string | Promise<string>
}

export interface TerminalHistory {
  command: string
  output: string
  timestamp: number
}

export interface TerminalState {
  history: TerminalHistory[]
  currentDirectory: string
}

export interface ThemeColors {
  background: string
  foreground: string
  primary: string
  secondary: string
  accent: string
  muted: string
}

