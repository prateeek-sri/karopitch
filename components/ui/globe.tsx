"use client"

import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { cn } from "@/lib/utils"

interface GlobeProps {
  className?: string
  config?: {
    width?: number
    height?: number
    phi?: number
    theta?: number
    dark?: number
    diffuse?: number
    mapSamples?: number
    mapBrightness?: number
    baseColor?: [number, number, number]
    markerColor?: [number, number, number]
    glowColor?: [number, number, number]
    markers?: Array<{ location: [number, number]; size: number }>
  }
}

// Major Indian cities coordinates
const indiaMarkers = [
  { location: [28.6139, 77.209] as [number, number], size: 0.08 }, // Delhi
  { location: [19.076, 72.8777] as [number, number], size: 0.08 }, // Mumbai
  { location: [13.0827, 80.2707] as [number, number], size: 0.06 }, // Chennai
  { location: [22.5726, 88.3639] as [number, number], size: 0.06 }, // Kolkata
  { location: [12.9716, 77.5946] as [number, number], size: 0.07 }, // Bangalore
  { location: [17.385, 78.4867] as [number, number], size: 0.06 }, // Hyderabad
  { location: [26.9124, 75.7873] as [number, number], size: 0.05 }, // Jaipur
  { location: [26.8467, 80.9462] as [number, number], size: 0.05 }, // Lucknow
  { location: [21.1702, 72.8311] as [number, number], size: 0.05 }, // Surat
  { location: [22.7196, 75.8577] as [number, number], size: 0.04 }, // Indore
  { location: [25.5941, 85.1376] as [number, number], size: 0.04 }, // Patna
  { location: [21.1458, 79.0882] as [number, number], size: 0.04 }, // Nagpur
]

export function Globe({ className, config = {} }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const phiRef = useRef(0)

  useEffect(() => {
    let phi = 0
    let width = 0
    
    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth
      }
    }
    
    window.addEventListener("resize", onResize)
    onResize()

    if (!canvasRef.current) return

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: config.width ?? 600 * 2,
      height: config.height ?? 600 * 2,
      phi: config.phi ?? 0,
      theta: config.theta ?? 0.25,
      dark: config.dark ?? 1,
      diffuse: config.diffuse ?? 1.2,
      mapSamples: config.mapSamples ?? 16000,
      mapBrightness: config.mapBrightness ?? 6,
      baseColor: config.baseColor ?? [0.15, 0.15, 0.2],
      markerColor: config.markerColor ?? [0.545, 0.361, 0.965],
      glowColor: config.glowColor ?? [0.15, 0.1, 0.25],
      markers: config.markers ?? indiaMarkers,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.003
        }
        state.phi = phi + pointerInteractionMovement.current
        phiRef.current = phi
        state.width = width * 2
        state.height = width * 2
      },
    })

    const handlePointerDown = (e: PointerEvent) => {
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current
      if (canvasRef.current) {
        canvasRef.current.style.cursor = "grabbing"
      }
    }

    const handlePointerUp = () => {
      pointerInteracting.current = null
      if (canvasRef.current) {
        canvasRef.current.style.cursor = "grab"
      }
    }

    const handlePointerOut = () => {
      pointerInteracting.current = null
      if (canvasRef.current) {
        canvasRef.current.style.cursor = "grab"
      }
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current
        pointerInteractionMovement.current = delta / 200
      }
    }

    const canvas = canvasRef.current
    canvas.addEventListener("pointerdown", handlePointerDown)
    canvas.addEventListener("pointerup", handlePointerUp)
    canvas.addEventListener("pointerout", handlePointerOut)
    canvas.addEventListener("pointermove", handlePointerMove)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
      canvas.removeEventListener("pointerdown", handlePointerDown)
      canvas.removeEventListener("pointerup", handlePointerUp)
      canvas.removeEventListener("pointerout", handlePointerOut)
      canvas.removeEventListener("pointermove", handlePointerMove)
    }
  }, [config])

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "w-full h-full cursor-grab",
        className
      )}
      style={{
        contain: "layout paint size",
        opacity: 1,
      }}
    />
  )
}
