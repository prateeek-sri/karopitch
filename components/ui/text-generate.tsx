"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import gsap from "gsap"

interface TextGenerateEffectProps {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}

export function TextGenerateEffect({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsArray = words.split(" ")

  useEffect(() => {
    if (!containerRef.current) return

    const spans = containerRef.current.querySelectorAll("span")
    
    gsap.fromTo(
      spans,
      {
        opacity: 0,
        filter: filter ? "blur(10px)" : "none",
        y: 20,
      },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: duration,
        stagger: 0.05,
        ease: "power3.out",
      }
    )
  }, [duration, filter])

  return (
    <div ref={containerRef} className={cn("font-bold", className)}>
      {wordsArray.map((word, idx) => (
        <span
          key={idx}
          className="opacity-0 inline-block mr-[0.25em]"
        >
          {word}
        </span>
      ))}
    </div>
  )
}
