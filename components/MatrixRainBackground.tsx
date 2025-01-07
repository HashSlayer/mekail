"use client"

import React from 'react'
import MatrixRain from './matrix-rain'

export function MatrixRainBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-black/90 z-0"></div>
      <MatrixRain />
    </>
  )
}

