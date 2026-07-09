export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  detailsUrl: string;
  sourceUrl: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ContactLink {
  label: string;
  href: string;
}
