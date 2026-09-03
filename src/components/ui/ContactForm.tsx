import { useState } from 'react';
import type { FormEvent } from 'react';
import { buttonClassName } from './buttonStyles';

type Status = 'idle' | 'submitting' | 'success' | 'error';

// Shared styling for the three form fields
const fieldClasses =
  'w-full rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text-strong placeholder:text-text/50 transition-colors focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-surface';
const labelClasses = 'mb-1.5 block text-xs font-semibold uppercase tracking-widest text-primary-strong';

// Netlify Forms contact form. Netlify detects the form at build time from the hidden static
// copy in index.html (JS-rendered forms aren't visible to its build-time HTML scan) — the
// "contact" name and field names here must match that static form exactly.
export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-xl border border-primary/25 bg-primary/10 p-6 text-sm text-text-strong">
        <p className="font-semibold text-primary-strong">Thanks for reaching out!</p>
        <p className="mt-1 text-text">I&rsquo;ll get back to you as soon as I can.</p>
      </div>
    );
  }

  return (
    <form
      name="contact"
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* Honeypot: hidden from real visitors, catches simple spam bots that fill every field */}
      <p className="hidden">
        <label>
          Leave this field blank
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message
        </label>
        <textarea id="contact-message" name="message" required rows={4} className={fieldClasses} />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm font-medium text-secondary">
          Something went wrong sending that — please try again, or email me directly below.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={buttonClassName('primary', 'self-start disabled:cursor-not-allowed disabled:opacity-60')}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
