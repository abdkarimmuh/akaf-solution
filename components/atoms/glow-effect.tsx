"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlowEffectProps {
  children: ReactNode
  className?: string
  color?: string
}

export function GlowEffect({ children, className = "", color = "rgba(255, 0, 0, 0.5)" }: GlowEffectProps) {
  return (
    <div className={`relative ${className}`}>
      <motion.div
        className="absolute inset-0 rounded-lg blur-xl opacity-50"
        style={{ backgroundColor: color }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      {children}
    </div>
  )
}
