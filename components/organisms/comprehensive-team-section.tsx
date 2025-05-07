"use client"

import { useState } from "react"
import { Users, Briefcase, Code, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/atoms/section-heading"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileImage } from "@/components/atoms/profile-image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialLink } from "@/components/atoms/social-link"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

interface Technology {
  category: string
  items: string[]
}

interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  github: string
  linkedin: string
  email: string
  skills: string[]
  experiences: Experience[]
  technologies: Technology[]
}

interface ComprehensiveTeamSectionProps {
  title: string
  members: TeamMember[]
}

export function ComprehensiveTeamSection({ title, members }: ComprehensiveTeamSectionProps) {
  const [activeTab, setActiveTab] = useState(members[0]?.id || "")

  return (
    <section id="team" className="py-16 scroll-mt-20">
      <SectionHeading icon={Users} title={title} />

      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-8 flex w-full justify-start overflow-x-auto">
          {members.map((member) => (
            <TabsTrigger key={member.id} value={member.id} className="flex items-center gap-2 px-4 py-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="object-cover w-full h-full"
                  width={24}
                  height={24}
                />
              </div>
              <span>{member.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {members.map((member) => (
          <TabsContent key={member.id} value={member.id} className="mt-0 space-y-12">
            {/* Profile Section */}
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <ProfileImage src={member.image} alt={member.name} size="lg" className="mb-4" />
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-primary mb-4">{member.role}</p>
                <div className="flex gap-2 mb-4">
                  <SocialLink href={member.github} icon={Code} label="GitHub" />
                  <SocialLink href={member.linkedin} icon={Users} label="LinkedIn" />
                </div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">Email:</span> {member.email}
                </p>
              </div>
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{member.bio}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Code className="h-5 w-5" /> Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <Badge key={skill} className="text-sm py-1.5">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5" /> Technology Stack
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {member.technologies.map((tech) => (
                  <Card key={tech.category}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{tech.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {tech.items.map((item) => (
                          <Badge key={item} variant="outline">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-5 w-5" /> Work Experience
              </h3>
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
                  {member.experiences.map((experience, index) => (
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
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  index: number
}

function ExperienceCard({ title, company, period, description, technologies, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription>{company}</CardDescription>
            </div>
            <Badge variant="outline" className="text-xs font-normal">
              {period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
