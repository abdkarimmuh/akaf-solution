"use client"

import { motion } from "framer-motion"
import { Briefcase, Code } from "lucide-react"
import { ProfileImage } from "@/components/atoms/profile-image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SocialLink } from "@/components/atoms/social-link"
import { Badge } from "@/components/ui/badge"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
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
  experiences: Experience[]
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
  experiences,
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
        <h3 className="font-heading text-2xl font-bold">{name}</h3>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-medium mb-4">{role}</p>
        <div className="flex gap-3 mb-4">
          <SocialLink href={github} icon={Code} label="GitHub" />
          <SocialLink href={linkedin} icon={Briefcase} label="LinkedIn" />
        </div>
      </div>

      {/* Bio */}
      <Card className="glass-card shadow-md">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{bio}</p>
        </CardContent>
      </Card>

      {/* Work Experience */}
      <div>
        <h4 className="font-heading text-lg font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="h-4 w-4 text-primary" />
          Work Experience
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
      <Card className="glass-card shadow-md h-full">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <CardTitle className="text-base">{title}</CardTitle>
              <CardDescription className="text-sm">{company}</CardDescription>
            </div>
            <Badge variant="outline" className="text-xs font-normal bg-background/50">
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
