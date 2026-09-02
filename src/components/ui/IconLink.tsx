import { FaGithub, FaLinkedin, FaXTwitter, FaRegEnvelope } from 'react-icons/fa6';
import type { SocialLink } from '../../types/portfolio';

const icons: Record<SocialLink['icon'], React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  email: FaRegEnvelope,
};

interface IconLinkProps {
  link: SocialLink;
}

export function IconLink({ link }: IconLinkProps) {
  const Icon = icons[link.icon];

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={link.label}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-primary/30"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Icon className="relative h-4 w-4" />
    </a>
  );
}
