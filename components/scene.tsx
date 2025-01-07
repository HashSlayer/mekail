"use client"

import { Canvas, useLoader } from "@react-three/fiber"
import { Environment, Float, Text, PerspectiveCamera } from "@react-three/drei"
import { MatrixRain } from "./matrix-rain"
import { Suspense } from "react"
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'

// Extend will make TextGeometry available as a JSX element
extend({ TextGeometry })

function CommunityText() {
  const font = useLoader(FontLoader, '/fonts/helvetiker_regular.typeface.json')

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh position={[-2, 0, 0]}>
        <textGeometry 
          args={[
            "Community", 
            { font, size: 0.5, height: 0.2, curveSegments: 12, bevelEnabled: true, bevelThickness: 0.02, bevelSize: 0.02, bevelOffset: 0, bevelSegments: 5 }
          ]} 
        />
        <meshStandardMaterial color="#4ade80" />
      </mesh>
    </Float>
  )
}

function FallbackText() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Text
        color="#4ade80"
        fontSize={0.5}
        maxWidth={200}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="left"
        font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
        anchorX="center"
        anchorY="middle"
        position={[-2, 0, 0]}
      >
        Community
      </Text>
    </Float>
  )
}

export function Scene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="night" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <MatrixRain />
        
        <Suspense fallback={<FallbackText />}>
          <CommunityText />
        </Suspense>
      </Canvas>
    </div>
  )
}

