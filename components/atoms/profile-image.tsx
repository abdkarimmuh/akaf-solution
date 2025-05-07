"use client"

import { motion } from "framer-motion"

interface ProfileImageProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ProfileImage({ src, alt, size = "md", className = "" }: ProfileImageProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  }

  return (
    <motion.div
      className={`relative rounded-full overflow-hidden ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
      <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-background shadow-lg">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="object-cover w-full h-full"
          width={size === "sm" ? 64 : size === "md" ? 160 : 256}
          height={size === "sm" ? 64 : size === "md" ? 160 : 256}
        />
      </div>
    </motion.div>
  )
}
