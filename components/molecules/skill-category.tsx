"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { SkillCard } from "./skill-card"

interface Skill {
  icon: LucideIcon
  name: string
  level: number
  description: string
}

interface SkillCategoryProps {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export function SkillCategory({ title, icon: Icon, skills }: SkillCategoryProps) {
  return (
    <div className="space-y-4">
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-1.5 rounded-md bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </div>
        <h3 className="font-medium">{title}</h3>
        <div className="flex-grow h-px bg-primary/10" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            icon={skill.icon}
            name={skill.name}
            level={skill.level}
            description={skill.description}
          />
        ))}
      </div>
    </div>
  )
}
