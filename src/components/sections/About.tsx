import { FaGraduationCap, FaLocationDot } from 'react-icons/fa6';
import { aboutStory } from '../../data/about';
import { education } from '../../data/education';
import { profile } from '../../data/profile';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading index="01" eyebrow="About" title="How I got here" />
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div className="max-w-2xl space-y-8">
            {aboutStory.map((beat) => (
              <div key={beat.label} className="relative pl-6">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-3.5 w-1 rounded-full bg-gradient-to-b from-primary to-secondary"
                />
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {beat.label}
                </p>
                <p className="mt-2 text-lg leading-relaxed text-text">{beat.body}</p>
              </div>
            ))}
          </div>

          <div className="flex h-fit flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-3 text-sm text-text">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FaLocationDot className="h-3.5 w-3.5" />
                </span>
                {profile.location}
              </div>

              <div className="h-px bg-border" />

              <div className="flex items-center gap-3 text-sm font-semibold text-text-strong">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <FaGraduationCap className="h-3.5 w-3.5" />
                </span>
                Education
              </div>
              <ul className="space-y-4">
                {education.map((school) => (
                  <li key={school.name} className="border-l-2 border-primary/20 pl-3">
                    <p className="text-sm font-semibold text-text-strong">{school.name}</p>
                    <p className="mt-0.5 text-sm text-text">{school.credential}</p>
                    {school.detail && <p className="mt-1 text-xs text-text/70">{school.detail}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
