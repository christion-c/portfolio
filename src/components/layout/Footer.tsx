import { FaArrowUp } from 'react-icons/fa6';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { Container } from '../ui/Container';
import { IconLink } from '../ui/IconLink';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
      />
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-text">
          © {year} {profile.name}. Built with{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-semibold text-transparent">
            React
          </span>{' '}
          &amp; Tailwind.
        </p>

        <div className="flex items-center gap-3">
          {socials.map((link) => (
            <IconLink key={link.label} link={link} />
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-strong transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <FaArrowUp className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
