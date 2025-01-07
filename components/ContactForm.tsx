"use client"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Service Offline",
      description: "This service is currently offline. Please use one of the contact methods listed above.",
      variant: "destructive",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <Input
        type="text"
        placeholder="Your Name"
        required
        className="bg-black/30 border-green-400/20 text-gray-400 placeholder-gray-500"
      />
      <Input
        type="email"
        placeholder="Your Email"
        required
        className="bg-black/30 border-green-400/20 text-gray-400 placeholder-gray-500"
      />
      <Textarea
        placeholder="Your Message"
        required
        className="bg-black/30 border-green-400/20 text-gray-400 placeholder-gray-500"
      />
      <Button type="submit" className="w-full bg-green-400/20 text-green-400 hover:bg-green-400/30 border border-green-400/20">
        Send Message
      </Button>
    </form>
  )
}

