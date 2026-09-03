import { FaArrowDown } from 'react-icons/fa6';
import { profile } from '../../data/profile';
import { socials } from '../../data/socials';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { GradientBlob } from '../ui/GradientBlob';
import { IconLink } from '../ui/IconLink';
import { ProfilePhoto } from '../ui/ProfilePhoto';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-24 scroll-mt-20">
      <GradientBlob className="-top-24 -left-24 h-72 w-72" variant="primary" />
      <GradientBlob className="-top-10 right-0 h-96 w-96" variant="gold" slow />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,var(--color-border)_1px,transparent_0)] bg-[length:24px_24px] opacity-40"
      />

      <Container className="relative flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-1 flex-col items-start">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-strong motion-safe:animate-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            OPEN TO NEW OPPORTUNITIES
          </div>

          <p className="text-sm font-semibold uppercase tracking-widest text-primary motion-safe:animate-in [animation-delay:80ms]">
            {profile.role}
          </p>

          <h1 className="mt-3 bg-gradient-to-br from-text-strong via-text-strong to-primary bg-clip-text font-display text-5xl font-semibold leading-[1.05] text-transparent motion-safe:animate-in [animation-delay:120ms] sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text motion-safe:animate-in [animation-delay:200ms]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 motion-safe:animate-in [animation-delay:260ms]">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>

          <div className="mt-9 flex gap-3 motion-safe:animate-in [animation-delay:320ms]">
            {socials.map((link) => (
              <IconLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        {profile.photoUrl && (
          <ProfilePhoto
            src={profile.photoUrl}
            alt={profile.name}
            className="max-w-[200px] shrink-0 motion-safe:animate-in sm:max-w-[240px] lg:max-w-[280px]"
          />
        )}
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 rounded text-text/85 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg sm:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-widest">Scroll</span>
        <FaArrowDown className="h-3.5 w-3.5 motion-safe:animate-bounce" />
      </a>
    </section>
  );
}
