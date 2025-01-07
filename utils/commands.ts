import { Command } from "@/types/terminal"

export const commands: Record<string, Command> = {
  help: {
    name: "help",
    description: "List all available commands",
    usage: "help",
    execute: () => `
Available commands:
  help - Show this help message
  about - Display information about me
  projects - List my projects
  contact - Show contact information
  clear - Clear the terminal
  theme - Change the terminal theme
    `.trim(),
  },
  about: {
    name: "about",
    description: "Display information about me",
    usage: "about",
    execute: () => `
Hi, I'm a software developer passionate about creating 
elegant solutions to complex problems.

Skills:
- Frontend: React, TypeScript, Next.js
- Backend: Node.js, Python, Go
- DevOps: Docker, Kubernetes, AWS
    `.trim(),
  },
  projects: {
    name: "projects",
    description: "List my projects",
    usage: "projects",
    execute: () => `
Recent Projects:
1. Project Alpha - A real-time collaboration tool
2. Project Beta - AI-powered data analytics
3. Project Gamma - Distributed systems architecture
    `.trim(),
  },
  clear: {
    name: "clear",
    description: "Clear the terminal",
    usage: "clear",
    execute: () => "",
  },
}

