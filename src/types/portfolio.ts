// Personal/contact info shown in the Hero, Navbar, Footer, and Contact section
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

// One entry in the Hero/Footer social icon row
export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'email';
}

// One case-study entry rendered by ProjectCard in the Projects section
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

// One category card in the Skills section
export interface SkillGroup {
  category: string;
  note: string;
  items: string[];
  emphasis?: boolean;
}

// One labeled narrative beat in the About section's story
export interface AboutEntry {
  label: string;
  body: string;
}

// One role entry in the Experience timeline
export interface ExperienceEntry {
  org: string;
  title: string;
  dates: string;
  bullets: string[];
}

// One school entry in the About section's Education card
export interface EducationEntry {
  name: string;
  credential: string;
  detail?: string;
}

// One link in the Navbar's primary navigation
export interface NavItem {
  label: string;
  href: string;
}
