"use client"

import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/atoms/section-heading"
import { ExperienceCard } from "@/components/molecules/experience-card"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface ExperienceSectionProps {
  title: string
  experiences: Experience[]
}

export function ExperienceSection({ title, experiences }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <SectionHeading icon={Briefcase} title={title} />

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-muted"
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="space-y-8 ml-10">
          {experiences.map((experience, index) => (
            <div key={`${experience.company}-${index}`} className="relative">
              {/* Timeline dot */}
              <motion.div
                className="absolute -left-[30px] top-6 w-4 h-4 rounded-full bg-primary"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              />

              <ExperienceCard
                title={experience.title}
                company={experience.company}
                period={experience.period}
                description={experience.description}
                technologies={experience.technologies}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
