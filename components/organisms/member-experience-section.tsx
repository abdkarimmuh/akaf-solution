"use client"

import { useState } from "react"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/atoms/section-heading"
import { ExperienceCard } from "@/components/molecules/experience-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProfileImage } from "@/components/atoms/profile-image"

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
  image: string
  experiences: Experience[]
}

interface MemberExperienceSectionProps {
  title: string
  members: TeamMember[]
}

export function MemberExperienceSection({ title, members }: MemberExperienceSectionProps) {
  const [activeTab, setActiveTab] = useState(members[0]?.id || "")

  return (
    <section id="experience" className="py-16 scroll-mt-20">
      <SectionHeading icon={Briefcase} title={title} />

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
          <TabsContent key={member.id} value={member.id} className="mt-0">
            <div className="flex items-center gap-4 mb-6">
              <ProfileImage src={member.image} alt={member.name} size="sm" />
              <h3 className="text-2xl font-medium">{member.name}'s Experience</h3>
            </div>

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
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
