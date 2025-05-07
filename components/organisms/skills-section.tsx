"use client"

import type React from "react"

import { Code, Cpu, Layout, Server } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/atoms/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface SkillsSectionProps {
  title: string
}

export function SkillsSection({ title }: SkillsSectionProps) {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Layout,
      skills: [
        "React & Next.js",
        "UI/UX Design",
        "CSS & Tailwind",
        "Responsive Design",
        "JavaScript/TypeScript",
        "HTML5",
        "Redux",
        "Framer Motion",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "Node.js & Express",
        "Database Design",
        "API Development",
        "Authentication",
        "GraphQL",
        "REST APIs",
        "Serverless Functions",
        "Microservices",
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript/TypeScript", "Python", "SQL", "HTML/CSS", "PHP", "Java", "C#", "Bash"],
    },
    {
      title: "DevOps & Infrastructure",
      icon: Cpu,
      skills: [
        "CI/CD Pipelines",
        "Cloud Services (AWS, Azure, GCP)",
        "Docker & Kubernetes",
        "Monitoring & Logging",
        "Git & GitHub",
        "Linux Administration",
        "Terraform",
        "Nginx/Apache",
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 scroll-mt-20">
      <SectionHeading icon={Code} title={title} />

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={category.title}
            title={category.title}
            icon={category.icon}
            skills={category.skills}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

interface SkillCategoryProps {
  title: string
  icon: React.ComponentType<any>
  skills: string[]
  index: number
}

function SkillCategory({ title, icon: Icon, skills, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-md bg-muted">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-xl font-medium">{title}</h3>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + skillIndex * 0.05 }}
              >
                <Badge variant="outline" className="bg-background">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
