"use client"

import type { ReactNode } from "react"
import { motion, type MotionProps } from "framer-motion"

interface AnimatedElementProps extends MotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimatedElement({ children, className = "", delay = 0, ...motionProps }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedFadeIn({ children, className = "", delay = 0, ...motionProps }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedScale({ children, className = "", delay = 0, ...motionProps }: AnimatedElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
