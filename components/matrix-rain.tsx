"use client"

import React, { useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = Array(columns).fill(0)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const colors = ['#4ade80cc', '#22d3eecc', '#a78bfacc', '#fb7185cc']

      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
        const x = i * 20
        const y = drops[i] * 20

        const color = colors[Math.floor(Math.random() * colors.length)]
        ctx.fillStyle = color.slice(0, 7) + 'aa'

        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full mix-blend-screen" style={{ zIndex: 1 }} />
}

export default MatrixRain

