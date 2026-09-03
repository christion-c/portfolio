import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

// Small pill used for tech-stack tags on project cards and skill items
export function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-strong transition-colors duration-200 hover:border-primary/40 hover:bg-primary/15">
      {children}
    </span>
  );
}
