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
  const isExternal = link.url.startsWith('http');

  return (
    <a
      href={link.url}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={isExternal ? `${link.label} (opens in a new tab)` : link.label}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface text-text transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:text-white hover:shadow-lg hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-button-from to-button-to opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <Icon className="relative h-4 w-4" />
    </a>
  );
}
