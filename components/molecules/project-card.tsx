"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  content: string
  image: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
}

export function ProjectCard({
  title,
  description,
  content,
  image,
  technologies,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <Card className="glass-card shadow-md h-full flex flex-col overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <motion.div
            className="aspect-video rounded-lg overflow-hidden bg-muted mb-4 shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover w-full h-full"
              width={400}
              height={200}
            />
          </motion.div>
          <p className="text-sm text-muted-foreground">{content}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="bg-background/50">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> Code
            </Link>
          </Button>
          <Button size="sm" asChild className="rounded-full">
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
