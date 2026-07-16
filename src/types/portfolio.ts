export interface NavLink {
  label: string;
  href: string;
}

export interface PersonalInfo {
  name: string;
  brand: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  availability: string;
  preferredWork: string;
  expertise: string;
  email: string;
  resumeUrl: string;
  profileImage: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "external";
}

export interface Stat {
  label: string;
  value: string;
  helper: string;
}

export interface TrustItem {
  title: string;
  icon: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface Project {
  title: string;
  slug: string;
  category: string;
  filters: string[];
  problem: string;
  solution: string;
  description: string;
  techStack: string[];
  features: string[];
  detailsUrl: string;
  sourceUrl: string;
  liveUrl: string;
  featured: boolean;
  preview: {
    label: string;
    metric: string;
    accent: string;
  };
}

export interface Service {
  title: string;
  icon: string;
  description: string;
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  dateRange: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
}

export interface ContactInfo {
  heading: string;
  description: string;
  note: string;
  location: string;
  availability: string;
  projectTypes: string[];
  budgetRanges: string[];
}
