"use client";

import { Users } from "lucide-react";

import { SiteHeader } from "@/components/organisms/site-header";
import { HeroSection } from "@/components/organisms/hero-section";
import { SectionHeading } from "@/components/atoms/section-heading";
import { ProjectsSection } from "@/components/organisms/projects-section";
import { ContactSection } from "@/components/organisms/contact-section";
import { SiteFooter } from "@/components/organisms/site-footer";
import { TwoColumnTeamSection } from "@/components/organisms/two-column-team-section";
import { CombinedExpertiseSection } from "@/components/organisms/combined-expertise-section";
import { useEffect, useState } from "react";
import { About, Project, Teams } from "./interface";

// Mock data
const navItems = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Our Expertise" },
  { href: "#contact", label: "Contact" },
];

export default function TeamPortfolio() {
  const [about, setAbout] = useState<About>();
  const [projects, setProjets] = useState<Project[]>([]);
  const [teams, setTeams] = useState<Teams[]>([]);

  async function fetchAbout() {
    const response = await fetch("/about.json");
    const data = await response.json();
    setAbout(data);
  }

  async function fetchProjets() {
    const response = await fetch("/projects.json");
    const data = await response.json();
    setProjets(data);
  }

  async function fetchTeams() {
    const response = await fetch("/teams.json");
    const data = await response.json();
    setTeams(data);
  }

  useEffect(() => {
    fetchAbout();
    fetchProjets();
    fetchTeams();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        title={about?.title ?? ""}
        subTitle={about?.subtitle ?? ""}
        navItems={navItems}
        githubUrl={about?.contact.github_url ?? ""}
        linkedinUrl={about?.contact.linkedin_url ?? ""}
      />

      <main>
        <HeroSection
          title="We are"
          highlight={about?.title ?? ""}
          acronym={about?.acronym ?? []}
          description={about?.description ?? ""}
          primaryAction={{
            href: "#contact",
            label: "Work With Us",
          }}
          secondaryAction={{
            href: "#projects",
            label: "View Projects",
          }}
          teamImages={teams.map((item) => item.image)}
        />

        <section id="about" className="py-20 scroll-mt-20 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="container relative z-10">
            <SectionHeading icon={Users} title="About Our Team" />
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-xl shadow-md">
                  <h3 className="font-heading text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {about?.title}
                  </h3>
                  <p className="text-lg italic">{about?.subtitle}</p>
                </div>
                {about?.body.map((item, index) => (
                  <p className="body-lg" key={index}>
                    {item}
                  </p>
                ))}
              </div>
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-xl shadow-md">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading font-medium mb-2">
                        Team Name
                      </h3>
                      <p className="text-muted-foreground">AKAF</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium mb-2">
                        Location
                      </h3>
                      <p className="text-muted-foreground">
                        {about?.contact.address}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        {about?.contact.email}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium mb-2">
                        Availability
                      </h3>
                      <p className="text-muted-foreground">
                        Open to new projects
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 glass-card rounded-xl shadow-md">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    Our Mission
                  </h3>
                  {about?.mission.map((item, index) => (
                    <p className="body-md" key={index}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <TwoColumnTeamSection title="Meet The Team" members={teams} />

        <ProjectsSection projects={projects} />

        <CombinedExpertiseSection title="Our Expertise" members={teams} />

        <ContactSection
          email={about?.contact.email ?? ""}
          linkedin={about?.contact.linkedin_url ?? ""}
          github={about?.contact.github_url ?? ""}
          teamMembers={teams.map((member) => ({
            name: member.name,
            email: member.email,
          }))}
        />
      </main>

      <SiteFooter
        title={about?.title ?? ""}
        subTitle={about?.subtitle ?? ""}
        description={about?.description ?? ""}
        githubUrl={about?.contact.github_url ?? ""}
        linkedinUrl={about?.contact.linkedin_url ?? ""}
        email={about?.contact.email ?? ""}
        address={about?.contact.address ?? ""}
      />
    </div>
  );
}
