import { profile } from '../../data/profile';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ContactForm } from '../ui/ContactForm';
import { GradientBlob } from '../ui/GradientBlob';
import { SectionHeading } from '../ui/SectionHeading';

// Closing CTA section: a gradient card holding the contact form plus a quick-links fallback
export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading
          headingId="contact-heading"
          index="05"
          eyebrow="Contact"
          title="Let's work together"
          description="Have a project in mind or just want to say hi? My inbox is open."
        />

        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 sm:p-14">
          {/* Decorative blob + gradient wash behind the CTA copy */}
          <GradientBlob className="-right-16 -top-16 h-56 w-56" variant="gold" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <h3 className="mb-6 max-w-md font-display text-2xl font-semibold text-text-strong sm:text-3xl">
                Ready to build something reliable and well-crafted?
              </h3>
              <ContactForm />
            </div>

            {/* Fallback for anyone who'd rather not use the form */}
            <div className="flex flex-col items-start gap-4 lg:border-l lg:border-border lg:pl-10">
              <p className="text-sm text-text">Prefer to reach out directly?</p>
              <div className="flex flex-wrap gap-4">
                <Button href={`mailto:${profile.email}`} variant="secondary">
                  Say Hello
                </Button>
                {profile.resumeUrl && (
                  <Button href={profile.resumeUrl} variant="secondary">
                    Download Resume
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
