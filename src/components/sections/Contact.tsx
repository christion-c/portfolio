import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { GradientBlob } from '../ui/GradientBlob';
import { SectionHeading } from '../ui/SectionHeading';

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is open."
        />

        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 sm:p-14">
          <GradientBlob className="-right-16 -top-16 h-56 w-56" variant="gold" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5"
          />

          <div className="relative flex flex-col items-start gap-6">
            <h3 className="max-w-md font-display text-2xl font-semibold text-text-strong sm:text-3xl">
              Ready to build something reliable and well-crafted?
            </h3>
            <div className="flex flex-wrap gap-4">
              <Button href={`mailto:${profile.email}`}>Say Hello</Button>
              {profile.resumeUrl && (
                <Button href={profile.resumeUrl} variant="secondary">
                  Download Resume
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
