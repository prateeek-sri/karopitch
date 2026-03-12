"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export function useScrollFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return ref
}

export function useStaggerChildren<T extends HTMLElement>(selector: string) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    const children = ref.current.querySelectorAll(selector)

    gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom-=50",
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [selector])

  return ref
}

export function useParallax<T extends HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current, {
      yPercent: -100 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [speed])

  return ref
}

export function useCountUp(
  targetValue: number,
  duration: number = 2,
  prefix: string = "",
  suffix: string = ""
) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const obj = { value: 0 }

    gsap.to(obj, {
      value: targetValue,
      duration: duration,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        element.textContent = prefix + Math.round(obj.value).toLocaleString() + suffix
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [targetValue, duration, prefix, suffix])

  return ref
}
