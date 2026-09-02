import { skillGroups } from '../../data/skills';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-surface-alt/40 py-24">
      <Container>
        <SectionHeading index="04" eyebrow="Stack" title="What I work in" />
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
                group.emphasis
                  ? 'border-primary/30 bg-surface'
                  : 'border-border bg-surface hover:border-primary/30'
              }`}
            >
              {group.emphasis && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-gold to-secondary"
                />
              )}
              <div className="mb-1.5 flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-primary to-secondary" />
                <h3 className="font-display text-base font-semibold text-text-strong">
                  {group.category}
                </h3>
              </div>
              <p className="mb-4 text-xs text-text/70">{group.note}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
