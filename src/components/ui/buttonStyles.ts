export type ButtonVariant = 'primary' | 'secondary';

// primary uses fixed (non-theme-swapping) gradient stops so white text stays readable in dark mode too
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-button-from to-button-to text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 focus-visible:ring-primary-light',
  secondary:
    'border border-border text-text-strong hover:border-primary hover:text-primary hover:-translate-y-0.5 focus-visible:ring-primary-light',
};

// Shared pill-button styling used by both the <a>-based Button and any plain <button> (e.g. a form submit)
export function buttonClassName(variant: ButtonVariant = 'primary', className = '') {
  return `group inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:translate-y-0 ${variantStyles[variant]} ${className}`;
}
