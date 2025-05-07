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

interface SkillsTechSectionProps {
  title: string
  members: TeamMember[]
}

export function SkillsTechSection({ title, members }: SkillsTechSectionProps) {
  return (
    <section id="skills-tech" className="py-16 scroll-mt-20">
      <SectionHeading icon={Code} title={title} />

      <div className="space-y-16">
        {members.map((member, index) => (
          <div key={member.id} className="space-y-8">
            <motion.h3
              className="text-2xl font-bold text-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {member.name}'s Expertise
            </motion.h3>

            {/* Skills Section */}
            <div>
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Code className="h-5 w-5 text-primary" />
                <h4 className="text-xl font-semibold">Core Skills</h4>
              </motion.div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                      >
                        <Badge className="text-sm py-1">{skill}</Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Technology Stack */}
            <div>
              <motion.div
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Layers className="h-5 w-5 text-primary" />
                <h4 className="text-xl font-semibold">Technology Stack</h4>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-4">
                {member.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.category}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + techIndex * 0.1 }}
                  >
                    <Card>
                      <CardHeader className="py-3">
                        <CardTitle className="text-base">{tech.category}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-2">
                        <div className="flex flex-wrap gap-2">
                          {tech.items.map((item) => (
                            <Badge key={item} variant="outline">
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

            {index < members.length - 1 && (
              <motion.div
                className="border-t border-border my-8"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
