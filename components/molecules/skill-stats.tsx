"use client"

import { motion } from "framer-motion"
import { SkillOrb } from "@/components/atoms/skill-orb"

interface SkillStat {
  label: string
  value: string
}

interface SkillStatsProps {
  stats: SkillStat[]
}

export function SkillStats({ stats }: SkillStatsProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/3 flex justify-center">
        <SkillOrb className="w-full max-w-[300px]" />
      </div>

      <div className="w-full md:w-2/3">
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="p-4 rounded-lg border border-primary/10 bg-background/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(255, 0, 0, 0.2)" }}
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
