interface GradientBlobProps {
  className?: string;
  variant?: 'primary' | 'gold';
  slow?: boolean;
}

// Gradient color stops per variant
const variants = {
  primary: 'from-primary via-secondary to-gold',
  gold: 'from-gold via-primary-light to-secondary',
};

// Decorative blurred gradient circle used behind Hero/Contact content; purely visual (aria-hidden)
export function GradientBlob({ className = '', variant = 'primary', slow = false }: GradientBlobProps) {
  // motion-safe: prefix respects prefers-reduced-motion by skipping the float animation
  const motion = slow ? 'motion-safe:animate-float-slow' : 'motion-safe:animate-float';

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br ${variants[variant]} opacity-30 blur-3xl ${motion} ${className}`}
    />
  );
}
