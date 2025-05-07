import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"

interface ContactInfoProps {
  email: string
  linkedin: string
  github: string
  teamMembers: Array<{
    name: string
    email: string
  }>
}

export function ContactInfo({ email, linkedin, github, teamMembers }: ContactInfoProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Mail className="h-5 w-5 text-primary" />
        <p>{email}</p>
      </div>
      <div className="flex items-center gap-3">
        <Linkedin className="h-5 w-5 text-primary" />
        <Link href={linkedin} className="hover:underline" target="_blank">
          {linkedin.replace("https://", "")}
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <Github className="h-5 w-5 text-primary" />
        <Link href={github} className="hover:underline" target="_blank">
          {github.replace("https://", "")}
        </Link>
      </div>
      <div className="pt-4 space-y-2">
        <h3 className="font-medium">Team Members</h3>
        <div className="grid grid-cols-2 gap-4">
          {teamMembers.map((member) => (
            <div key={member.name}>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
