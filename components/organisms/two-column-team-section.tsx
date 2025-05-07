"use client"

import { Users } from "lucide-react"
import { SectionHeading } from "@/components/atoms/section-heading"
import { TeamMemberColumn } from "../molecules/team-member-column"

interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
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
  experiences: Experience[]
}

interface TwoColumnTeamSectionProps {
  title: string
  members: TeamMember[]
}

export function TwoColumnTeamSection({ title, members }: TwoColumnTeamSectionProps) {
  return (
    <section id="team" className="py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="container relative z-10">
        <SectionHeading icon={Users} title={title} />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {members.map((member, index) => (
            <TeamMemberColumn
              key={member.id}
              id={member.id}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
              github={member.github}
              linkedin={member.linkedin}
              email={member.email}
              experiences={member.experiences}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
