"use client"

import { Briefcase } from "lucide-react"
import { SectionHeading } from "@/components/atoms/section-heading"
import { ProjectCard } from "@/components/molecules/project-card"

interface Project {
  title: string
  description: string
  content: string
  image: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
}

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container relative z-10">
        <SectionHeading icon={Briefcase} title="Our Projects" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              content={project.content}
              image={project.image}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              demoUrl={project.demoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
