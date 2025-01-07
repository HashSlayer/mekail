"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Mail, Send, Instagram, Linkedin, Github, TextIcon as Telegram } from 'lucide-react'
import { ContactForm } from "./ContactForm"
import { useState } from 'react'

export function ContactContent() {
  const [copyFeedback, setCopyFeedback] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('TheHashSlayer@Gmail.com')
      .then(() => {
        setCopyFeedback('Email copied!')
        setTimeout(() => setCopyFeedback(''), 2000)
      })
      .catch(() => {
        setCopyFeedback('Failed to copy')
        setTimeout(() => setCopyFeedback(''), 2000)
      })
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8 text-green-400">Contact Mekail Murphy</h1>
      
      <Card className="bg-black/50 border-green-400/20">
        <CardContent className="p-6">
          <p className="mb-6 font-mono text-sm text-gray-400">
            I'm always open to interesting conversations and collaborations. Here are the best ways to reach me:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://twitter.com/NotMekail" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 bg-black/30 border border-green-400/20 rounded text-green-400 hover:bg-green-400/10 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span>|</span>
              <span>@NotMekail</span>
            </a>
            <a 
              href="https://t.me/TheHashSlayer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 bg-black/30 border border-green-400/20 rounded text-green-400 hover:bg-green-400/10 transition-colors"
            >
              <Send className="h-5 w-5" />
              <span>|</span>
              <span>@TheHashSlayer</span>
            </a>
            <button 
              onClick={handleCopyEmail}
              className="flex items-center space-x-2 p-2 bg-black/30 border border-green-400/20 rounded text-green-400 hover:bg-green-400/10 transition-colors w-full text-left"
            >
              <Mail className="h-5 w-5" />
              <span>|</span>
              <span>TheHashSlayer@Gmail.com</span>
              {copyFeedback && <span className="ml-2 text-xs">{copyFeedback}</span>}
            </button>
            <a 
              href="https://www.instagram.com/MekailMurphy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 bg-black/30 border border-green-400/20 rounded text-green-400 hover:bg-green-400/10 transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>|</span>
              <span>@MekailMurphy</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mekail-murphy-31352516a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 bg-black/30 border border-green-400/20 rounded text-green-400 hover:bg-green-400/10 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>|</span>
              <span>Mekail Murphy</span>
            </a>
            <a 
              href="https://github.com/HashSlayer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 bg-black/30 border border-green-400/20 rounded text-green-400 hover:bg-green-400/10 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>|</span>
              <span>@HashSlayer</span>
            </a>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-400">Best Contact Methods</h2>
          <ul className="mt-2 font-mono text-sm text-gray-400 list-disc list-inside">
            <li>For quick questions or public discussions, Twitter, Discord, or Telegram is best.</li>
            <li>For more detailed conversations or collaborations, reach out on Telegram.</li>
            <li>For formal inquiries or longer messages, email is preferred.</li>
            <li>Response times may vary, but I strive to get back within 48 hours.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="bg-black/50 border-green-400/20 mt-8">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Send a Message (OFFLINE)</h2>
          <ContactForm />
        </CardContent>
      </Card>
    </div>
  )
}

