"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { SectionHeading } from "@/components/atoms/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ContactInfo } from "@/components/molecules/contact-info"

interface ContactSectionProps {
  email: string
  linkedin: string
  github: string
  teamMembers: Array<{
    name: string
    email: string
  }>
}

export function ContactSection({ email, linkedin, github, teamMembers }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 scroll-mt-20 relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container relative z-10">
        <SectionHeading icon={Mail} title="Get In Touch" />
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card shadow-md h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels</CardDescription>
              </CardHeader>
              <CardContent>
                <ContactInfo email={email} linkedin={linkedin} github={github} teamMembers={teamMembers} />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card shadow-md h-full">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>We'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="w-full p-2 rounded-md border border-border bg-background/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full p-2 rounded-md border border-border bg-background/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="w-full p-2 rounded-md border border-border bg-background/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full p-2 rounded-md border border-border bg-background/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full rounded-full shadow-md relative overflow-hidden group">
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative z-10">Send Message</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
