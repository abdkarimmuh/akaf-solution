"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SiteFooterProps {
  companyName: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export function SiteFooter({ companyName, githubUrl, linkedinUrl, email }: SiteFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative pt-20 pb-6 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="flex justify-end mb-10">
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-primary hover:text-white transition-colors"
          >
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 px-3 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-lg shadow-md">
                AKAF
              </div>
              <span className="font-heading font-bold text-xl">{companyName}</span>
            </div>
            <p className="text-sm text-muted-foreground">Accelerating Konnectivity Across Frontiers</p>
            <p className="text-sm text-muted-foreground">
              A dynamic team of software engineers building exceptional digital experiences.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#expertise" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <Link href={`mailto:${email}`} className="hover:text-primary transition-colors">
                  {email}
                </Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Github className="h-4 w-4 text-primary" />
                <Link href={githubUrl} className="hover:text-primary transition-colors" target="_blank">
                  GitHub
                </Link>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Linkedin className="h-4 w-4 text-primary" />
                <Link href={linkedinUrl} className="hover:text-primary transition-colors" target="_blank">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Location</h3>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            <p className="text-sm text-muted-foreground mt-2">Available for remote work worldwide</p>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Link href={`mailto:${email}`}>
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
