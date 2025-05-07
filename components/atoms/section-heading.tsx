"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface SectionHeadingProps {
  icon: LucideIcon
  title: string
}

export function SectionHeading({ icon: Icon, title }: SectionHeadingProps) {
  return (
    <motion.div
      className="flex flex-col items-start gap-3 mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div className="h-px w-12 bg-primary/30" />
      </div>
      <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight relative">
        {title}
        <motion.span
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: "30%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </h2>
    </motion.div>
  )
}
