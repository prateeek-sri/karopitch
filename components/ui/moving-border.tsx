"use client"

import { cn } from "@/lib/utils"
import { useRef, useEffect, ReactNode } from "react"
import gsap from "gsap"

interface MovingBorderProps {
  children: ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderRadius?: string
  as?: React.ElementType
  borderClassName?: string
}

export function MovingBorder({
  children,
  duration = 3,
  className,
  containerClassName,
  borderRadius = "1.5rem",
  as: Component = "div",
  borderClassName,
}: MovingBorderProps) {
  const borderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!borderRef.current) return

    gsap.to(borderRef.current, {
      rotate: 360,
      duration: duration,
      repeat: -1,
      ease: "none",
    })
  }, [duration])

  return (
    <Component
      className={cn(
        "relative p-[2px] overflow-hidden group",
        containerClassName
      )}
      style={{ borderRadius }}
    >
      {/* Animated border */}
      <div
        ref={borderRef}
        className={cn(
          "absolute inset-[-100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          borderClassName
        )}
        style={{
          background: `conic-gradient(from 0deg, transparent, rgba(139, 92, 246, 0.8), transparent 30%)`,
        }}
      />
      
      {/* Content container */}
      <div
        className={cn(
          "relative z-10 bg-background",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
      >
        {children}
      </div>
    </Component>
  )
}
