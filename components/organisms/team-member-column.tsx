"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, Layers } from "lucide-react"
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

interface TeamMemberColumnProps {
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
  index: number
}

export function TeamMemberColumn({
  id,
  name,
  role,
  bio,
  image,
  github,
  linkedin,
  email,
  skills,
  experiences,
  technologies,
  index,
}: TeamMemberColumnProps) {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-6">
        <ProfileImage src={image} alt={name} size="md" className="mb-4" />
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-primary mb-4">{role}</p>
        <div className="flex gap-2 mb-4">
          <SocialLink href={github} icon={Code} label="GitHub" />
          <SocialLink href={linkedin} icon={Briefcase} label="LinkedIn" />
        </div>
      </div>

      {/* Bio */}
      <Card>
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{bio}</p>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Code className="h-4 w-4" /> Skills
        </h4>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} className="text-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div>
        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Layers className="h-4 w-4" /> Technology Stack
        </h4>
        <div className="space-y-4">
          {technologies.map((tech) => (
            <Card key={tech.category}>
              <CardHeader className="py-3">
                <CardTitle className="text-base">{tech.category}</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
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
        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Briefcase className="h-4 w-4" /> Work Experience
        </h4>
        <div className="space-y-4">
          {experiences.map((experience, i) => (
            <ExperienceCard
              key={`${experience.company}-${i}`}
              title={experience.title}
              company={experience.company}
              period={experience.period}
              description={experience.description}
              technologies={experience.technologies}
              index={i}
            />
          ))}
        </div>
      </div>
    </motion.div>
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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <CardDescription className="text-sm">{company}</CardDescription>
            </div>
            <Badge variant="outline" className="text-xs font-normal">
              {period}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex flex-wrap gap-1.5">
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
