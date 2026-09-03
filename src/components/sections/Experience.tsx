import { FaBriefcase } from 'react-icons/fa6';
import { experience } from '../../data/experience';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-20 bg-surface-alt/40 py-24">
      <Container>
        <SectionHeading
          headingId="experience-heading"
          index="02"
          eyebrow="Experience"
          title="Production support, overnight"
        />

        <ol className="relative space-y-10 border-l border-border pl-8">
          {experience.map((role) => (
            <li key={`${role.org}-${role.title}`} className="relative">
              <span className="absolute -left-[38px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-br from-button-from to-button-to ring-4 ring-bg">
                <FaBriefcase className="h-2 w-2 text-white" />
              </span>

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-text-strong">{role.title}</h3>
                <span className="text-sm font-medium text-text/80">{role.dates}</span>
              </div>
              <p className="mt-0.5 text-sm font-semibold text-primary">{role.org}</p>

              <ul className="mt-4 space-y-2">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-sm leading-relaxed text-text">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
