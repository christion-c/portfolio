export interface Profile {
  name: string;
  role: string;
  location: string;
  tagline: string;
  verse: string;
  email: string;
  resumeUrl?: string;
  photoUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  problem: string;
  built: string;
  tags: string[];
  meta?: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface SkillGroup {
  category: string;
  note: string;
  items: string[];
  emphasis?: boolean;
}

export interface ExperienceEntry {
  org: string;
  title: string;
  dates: string;
  bullets: string[];
}

export interface EducationEntry {
  name: string;
  credential: string;
  detail?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
