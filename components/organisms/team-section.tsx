import { User } from "lucide-react"
import { SectionHeading } from "@/components/atoms/section-heading"
import { TeamMemberCard } from "@/components/molecules/team-member-card"

interface TeamMember {
  name: string
  role: string
  bio: string
  skills: string[]
  image: string
  github: string
  linkedin: string
}

interface TeamSectionProps {
  members: TeamMember[]
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section id="team" className="py-16 scroll-mt-20">
      <SectionHeading icon={User} title="Meet The Team" />
      <div className="grid md:grid-cols-2 gap-8">
        {members.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            role={member.role}
            bio={member.bio}
            skills={member.skills}
            image={member.image}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </section>
  )
}
