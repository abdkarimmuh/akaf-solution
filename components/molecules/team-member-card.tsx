"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProfileImage } from "@/components/atoms/profile-image"
import { SocialLink } from "@/components/atoms/social-link"

interface TeamMemberCardProps {
  name: string
  role: string
  bio: string
  skills: string[]
  image: string
  github: string
  linkedin: string
}

export function TeamMemberCard({ name, role, bio, skills, image, github, linkedin }: TeamMemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center gap-4">
            <ProfileImage src={image} alt={name} size="sm" />
            <div>
              <CardTitle className="text-xl">{name}</CardTitle>
              <CardDescription>{role}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>{bio}</p>
          <div>
            <h4 className="font-medium mb-2">Core Skills</h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <SocialLink href={github} icon={Github} label="GitHub" variant="outline" size="sm" />
          <SocialLink href={linkedin} icon={Linkedin} label="LinkedIn" variant="outline" size="sm" />
        </CardFooter>
      </Card>
    </motion.div>
  )
}
