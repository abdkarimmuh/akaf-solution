"use client"

import { Code, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/atoms/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Technology {
  category: string
  items: string[]
}

interface TeamMember {
  id: string
  name: string
  skills: string[]
  technologies: Technology[]
}

interface CombinedExpertiseSectionProps {
  title: string
  members: TeamMember[]
}

export function CombinedExpertiseSection({ title, members }: CombinedExpertiseSectionProps) {
  // Combine all unique skills from both team members
  const allSkills = Array.from(new Set(members.flatMap((member) => member.skills))).sort()

  // Get all unique technology categories
  const allCategories = Array.from(
    new Set(members.flatMap((member) => member.technologies.map((tech) => tech.category))),
  ).sort()

  // Create a combined technology stack with unique items per category
  const combinedTechStack = allCategories.map((category) => {
    const items = Array.from(
      new Set(
        members
          .flatMap((member) => member.technologies)
          .filter((tech) => tech.category === category)
          .flatMap((tech) => tech.items),
      ),
    ).sort()

    return {
      category,
      items,
    }
  })

  return (
    <section id="expertise" className="py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container relative z-10">
        <SectionHeading icon={Code} title={title} />

        <div className="space-y-16">
          {/* Core Skills */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Code className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-2xl font-semibold">Core Skills</h3>
            </motion.div>

            <Card className="glass-card shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {allSkills.map((skill, i) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + i * 0.03 }}
                    >
                      <Badge className="text-sm py-1.5 px-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack */}
          <div>
            <motion.div
              className="flex items-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Layers className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-2xl font-semibold">Technology Stack</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {combinedTechStack.map((tech, techIndex) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + techIndex * 0.1 }}
                >
                  <Card className="glass-card shadow-md h-full">
                    <CardHeader className="py-4">
                      <CardTitle className="text-lg">{tech.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item) => (
                          <Badge key={item} variant="outline" className="bg-background/50">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
