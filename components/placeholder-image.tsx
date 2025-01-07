"use client"

import { useEffect, useRef } from 'react'

interface PlaceholderImageProps {
  width: number
  height: number
}

export function PlaceholderImage({ width, height }: PlaceholderImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        // Set background
        ctx.fillStyle = '#1a0033'  // Dark purple
        ctx.fillRect(0, 0, width, height)

        // Draw some random shapes
        for (let i = 0; i < 20; i++) {
          ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
          ctx.beginPath()
          ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 50, 0, 2 * Math.PI)
          ctx.fill()
        }

      }
    }
  }, [width, height])

  return <canvas ref={canvasRef} width={width} height={height} />
}

