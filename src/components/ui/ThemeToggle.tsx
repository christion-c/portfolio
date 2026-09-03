import { FaMoon, FaSun } from 'react-icons/fa6';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

// Icon button that flips the site between light and dark, overriding system preference
export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-text-strong transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${className}`}
    >
      {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
    </button>
  );
}
