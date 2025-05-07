"use client"

import { Users } from "lucide-react"

import { SiteHeader } from "@/components/organisms/site-header"
import { HeroSection } from "@/components/organisms/hero-section"
import { SectionHeading } from "@/components/atoms/section-heading"
import { ProjectsSection } from "@/components/organisms/projects-section"
import { ContactSection } from "@/components/organisms/contact-section"
import { SiteFooter } from "@/components/organisms/site-footer"
import { TwoColumnTeamSection } from "@/components/organisms/two-column-team-section"
import { CombinedExpertiseSection } from "@/components/organisms/combined-expertise-section"

// Mock data
const navItems = [
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Our Expertise" },
  { href: "#contact", label: "Contact" },
]

const teamMembers = [
  {
    id: "alex",
    name: "Alex Chen",
    role: "Frontend Developer & UX Specialist",
    bio: "Alex specializes in creating intuitive user interfaces and seamless user experiences. With expertise in modern frontend frameworks and a keen eye for design, Alex transforms complex requirements into elegant, user-friendly applications. With over 7 years of experience in frontend development, Alex has worked on projects ranging from small business websites to large-scale enterprise applications.",
    image: "/placeholder.svg?height=160&width=160",
    github: "https://github.com/alexchen",
    linkedin: "https://linkedin.com/in/alexchen",
    email: "alex@akaf.com",
    skills: [
      "UI/UX Design",
      "Frontend Architecture",
      "Responsive Design",
      "Animation & Interaction",
      "Accessibility",
      "Performance Optimization",
      "Design Systems",
      "Component Libraries",
    ],
    experiences: [
      {
        title: "Senior Frontend Developer",
        company: "UX Innovations",
        period: "2020 - Present",
        description:
          "Leading the frontend development team in creating responsive and accessible web applications. Implementing modern UI/UX practices and mentoring junior developers.",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      },
      {
        title: "UI/UX Developer",
        company: "Digital Creations Agency",
        period: "2017 - 2020",
        description:
          "Developed responsive and interactive user interfaces for various client projects. Collaborated with designers to implement pixel-perfect designs.",
        technologies: ["React", "Vue.js", "SCSS", "JavaScript", "Figma"],
      },
      {
        title: "Frontend Developer",
        company: "Web Solutions Inc.",
        period: "2015 - 2017",
        description:
          "Built and maintained client-facing web applications. Implemented responsive designs and interactive features. Collaborated with backend developers to integrate APIs.",
        technologies: ["JavaScript", "HTML/CSS", "jQuery", "Bootstrap", "LESS"],
      },
    ],
    technologies: [
      {
        category: "Frontend Frameworks & Libraries",
        items: ["React", "Next.js", "Vue.js", "Svelte", "Angular"],
      },
      {
        category: "Styling & UI",
        items: ["Tailwind CSS", "SCSS/SASS", "Styled Components", "Material UI", "Chakra UI", "shadcn/ui"],
      },
      {
        category: "Languages",
        items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
      },
      {
        category: "Tools & Utilities",
        items: ["Figma", "Adobe XD", "Storybook", "Jest", "React Testing Library", "Webpack", "Vite"],
      },
    ],
  },
  {
    id: "jordan",
    name: "Jordan Taylor",
    role: "Backend Developer & System Architect",
    bio: "Jordan excels in building robust backend systems and architecting scalable solutions. With deep knowledge of server technologies and database design, Jordan ensures that applications are performant, secure, and maintainable. With over 10 years of experience in software development, Jordan has developed expertise in designing complex systems that can handle high traffic and data loads.",
    image: "/placeholder.svg?height=160&width=160",
    github: "https://github.com/jordantaylor",
    linkedin: "https://linkedin.com/in/jordantaylor",
    email: "jordan@akaf.com",
    skills: [
      "System Architecture",
      "Database Design",
      "API Development",
      "Microservices",
      "Cloud Infrastructure",
      "DevOps",
      "Security",
      "Performance Tuning",
    ],
    experiences: [
      {
        title: "Lead Backend Developer",
        company: "TechInnovate Solutions",
        period: "2019 - Present",
        description:
          "Architecting and implementing scalable backend systems for enterprise clients. Designing database schemas and API structures. Leading a team of backend developers.",
        technologies: ["Node.js", "Python", "PostgreSQL", "AWS", "Docker"],
      },
      {
        title: "Backend Engineer",
        company: "Data Systems Corp",
        period: "2016 - 2019",
        description:
          "Developed and maintained server-side applications and databases. Implemented RESTful APIs and microservices. Optimized database queries and improved system performance.",
        technologies: ["Python", "Django", "MongoDB", "Redis", "GraphQL"],
      },
      {
        title: "Software Developer",
        company: "StartUp Innovations",
        period: "2014 - 2016",
        description:
          "Full-stack development for an early-stage startup. Built features across the entire stack with a focus on backend systems. Implemented authentication and payment processing.",
        technologies: ["JavaScript", "Node.js", "Express", "MySQL", "Git"],
      },
      {
        title: "Junior Developer",
        company: "Tech Solutions Inc.",
        period: "2012 - 2014",
        description:
          "Assisted in the development of web applications and internal tools. Gained experience in backend development while working with senior developers.",
        technologies: ["PHP", "MySQL", "JavaScript", "Apache", "Linux"],
      },
    ],
    technologies: [
      {
        category: "Backend Frameworks & Libraries",
        items: ["Node.js", "Express", "Django", "Flask", "FastAPI", "Spring Boot"],
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "DynamoDB"],
      },
      {
        category: "Languages",
        items: ["Python", "JavaScript/TypeScript", "Java", "Go", "PHP", "SQL"],
      },
      {
        category: "DevOps & Cloud",
        items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Nginx"],
      },
    ],
  },
]

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack online shopping application",
    content:
      "Built a complete e-commerce solution with user authentication, product catalog, shopping cart, and payment processing. Alex handled the frontend and user experience, while Jordan developed the backend systems and database architecture.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/akaf/ecommerce",
    demoUrl: "https://ecommerce-demo.example.com",
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool",
    content:
      "Developed a task management application with real-time updates, team collaboration features, and customizable workflows. Jordan built the real-time backend infrastructure while Alex created an intuitive and responsive interface.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    githubUrl: "https://github.com/akaf/taskmanager",
    demoUrl: "https://taskmanager-demo.example.com",
  },
  {
    title: "AI Content Generator",
    description: "Machine learning powered content creation tool",
    content:
      "Created an AI-powered application that generates marketing content, blog posts, and social media captions. Jordan implemented the AI backend and API, while Alex designed the user interface and content editing experience.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Python", "React", "TensorFlow", "FastAPI"],
    githubUrl: "https://github.com/akaf/ai-content",
    demoUrl: "https://ai-content-demo.example.com",
  },
  {
    title: "Health Tracking Dashboard",
    description: "Personal health analytics platform",
    content:
      "Built a comprehensive health tracking application with data visualization, goal setting, and progress tracking. Alex created the dashboard and data visualization components, while Jordan developed the data processing and analytics backend.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["Vue.js", "Express", "D3.js", "Firebase"],
    githubUrl: "https://github.com/akaf/health-tracker",
    demoUrl: "https://health-tracker-demo.example.com",
  },
]

export default function TeamPortfolio() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader
        title="AKAF"
        navItems={navItems}
        githubUrl="https://github.com/akaf"
        linkedinUrl="https://linkedin.com/company/akaf"
      />

      <main>
        <HeroSection
          title="We are"
          highlight="AKAF"
          description="A dynamic team of software engineers building exceptional digital experiences that connect people and technology."
          primaryAction={{
            href: "#contact",
            label: "Work With Us",
          }}
          secondaryAction={{
            href: "#projects",
            label: "View Projects",
          }}
          teamImages={["/placeholder.svg?height=300&width=300", "/placeholder.svg?height=300&width=300"]}
        />

        <section id="about" className="py-20 scroll-mt-20 relative">
          <div className="absolute inset-0 dot-pattern opacity-30" />
          <div className="container relative z-10">
            <SectionHeading icon={Users} title="About Our Team" />
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-xl shadow-md">
                  <h3 className="font-heading text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    AKAF
                  </h3>
                  <p className="text-lg italic">Accelerating Konnectivity Across Frontiers</p>
                </div>
                <p className="body-lg">
                  We are a passionate duo of software engineers with complementary skills and a shared vision for
                  creating impactful digital solutions. With our combined expertise, we tackle complex challenges and
                  deliver high-quality products that exceed expectations.
                </p>
                <p className="body-lg">
                  Our collaborative approach allows us to leverage our individual strengths while maintaining a unified
                  focus on technical excellence, user experience, and business goals. We believe in writing clean,
                  maintainable code and implementing best practices in software development.
                </p>
              </div>
              <div className="space-y-6">
                <div className="p-6 glass-card rounded-xl shadow-md">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading font-medium mb-2">Team Name</h3>
                      <p className="text-muted-foreground">AKAF</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium mb-2">Location</h3>
                      <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium mb-2">Email</h3>
                      <p className="text-muted-foreground">contact@akaf.com</p>
                    </div>
                    <div>
                      <h3 className="font-heading font-medium mb-2">Availability</h3>
                      <p className="text-muted-foreground">Open to new projects</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 glass-card rounded-xl shadow-md">
                  <h3 className="font-heading text-xl font-bold mb-3">Our Mission</h3>
                  <p className="body-md">
                    To accelerate digital transformation by creating innovative solutions that connect people, systems,
                    and ideas across technological frontiers. We're committed to building software that's not just
                    functional, but transformative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TwoColumnTeamSection title="Meet The Team" members={teamMembers} />

        <ProjectsSection projects={projects} />

        <CombinedExpertiseSection title="Our Expertise" members={teamMembers} />

        <ContactSection
          email="contact@akaf.com"
          linkedin="https://linkedin.com/company/akaf"
          github="https://github.com/akaf"
          teamMembers={teamMembers.map((member) => ({ name: member.name, email: member.email }))}
        />
      </main>

      <SiteFooter
        companyName="AKAF"
        githubUrl="https://github.com/akaf"
        linkedinUrl="https://linkedin.com/company/akaf"
        email="contact@akaf.com"
      />
    </div>
  )
}
