interface ProfilePhotoProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfilePhoto({ src, alt, className = 'max-w-[220px]' }: ProfilePhotoProps) {
  return (
    <div className={`group relative mx-auto w-full sm:mx-0 ${className}`}>
      <div
        aria-hidden="true"
        className="absolute -inset-1.5 rounded-[1.25rem] bg-gradient-to-br from-primary via-gold to-secondary opacity-70 blur-md transition-opacity duration-300 group-hover:opacity-100"
      />
      <img
        src={src}
        alt={alt}
        className="relative aspect-[4/5] w-full rounded-2xl border border-border object-cover shadow-lg"
      />
    </div>
  );
}
