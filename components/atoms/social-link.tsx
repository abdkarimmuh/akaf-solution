"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function SocialLink({ href, icon: Icon, label, variant = "outline", size = "icon" }: SocialLinkProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
      <Button
        variant={variant}
        size={size}
        asChild
        className="relative overflow-hidden rounded-full shadow-sm hover:shadow-md transition-shadow"
      >
        <Link href={href} target="_blank" rel="noopener noreferrer">
          <motion.span
            className="absolute inset-0 bg-primary/10"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          />
          <Icon className={size === "icon" ? "h-4 w-4 relative z-10" : "mr-2 h-4 w-4 relative z-10"} />
          {size !== "icon" && <span className="relative z-10">{label}</span>}
          {size === "icon" && <span className="sr-only">{label}</span>}
        </Link>
      </Button>
    </motion.div>
  )
}
