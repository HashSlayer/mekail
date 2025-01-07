import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()
  
  // Here you would typically send an email or save to a database
  console.log('Received message:', { name, email, message })

  // For now, we'll just simulate a successful submission
  return NextResponse.json({ success: true })
}

