interface GradientBlobProps {
  className?: string;
  variant?: 'primary' | 'gold';
  slow?: boolean;
}

const variants = {
  primary: 'from-primary via-secondary to-gold',
  gold: 'from-gold via-primary-light to-secondary',
};

export function GradientBlob({ className = '', variant = 'primary', slow = false }: GradientBlobProps) {
  const motion = slow ? 'motion-safe:animate-float-slow' : 'motion-safe:animate-float';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br ${variants[variant]} opacity-30 blur-3xl ${motion} ${className}`}
    />
  );
}
