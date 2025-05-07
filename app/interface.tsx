export interface Teams {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  github: string;
  linkedin: string;
  email: string;
  skills: string[];
  experiences: Experience[];
  technologies: TechnologyCategory[];
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface TechnologyCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  content: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

export interface About {
  title: string;
  subtitle: string;
  description: string;
  body: string[];
  contact: ContactInfo;
  mission: string[];
}

interface ContactInfo {
  github_url: string;
  linkedin_url: string;
  address: string;
  email: string;
}
