import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { buttonClassName, type ButtonVariant } from './buttonStyles';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

// Pill-shaped call-to-action link (renders as <a>, not <button> — every use is a navigation/action link)
export function Button({
  children,
  variant = 'primary',
  className = '',
  ...anchorProps
}: ButtonProps) {
  return (
    <a className={buttonClassName(variant, className)} {...anchorProps}>
      {children}
    </a>
  );
}
