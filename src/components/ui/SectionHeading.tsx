interface SectionHeadingProps {
  headingId: string;
  index: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ headingId, index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-2xl motion-safe:animate-in">
      <div className="mb-3 flex items-center gap-3">
        <span aria-hidden="true" className="font-display text-sm text-primary">
          {index}
        </span>
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-primary to-transparent" />
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        )}
      </div>
      <h2
        id={headingId}
        className="bg-gradient-to-br from-text-strong to-text-strong/70 bg-clip-text font-display text-4xl font-semibold text-transparent sm:text-5xl"
      >
        {title}
      </h2>
      {description && <p className="mt-4 text-lg text-text">{description}</p>}
    </div>
  );
}
