import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-button-from to-button-to text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 focus-visible:ring-primary-light',
  secondary:
    'border border-border text-text-strong hover:border-primary hover:text-primary hover:-translate-y-0.5 focus-visible:ring-primary-light',
};

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...anchorProps
}: ButtonProps) {
  return (
    <a
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-0 ${variantStyles[variant]} ${className}`}
      {...anchorProps}
    >
      {children}
    </a>
  );
}
