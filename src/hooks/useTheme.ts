import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

// Reads any theme already applied by the anti-flash inline script in index.html (see <head>)
function getInitialTheme(): Theme | null {
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' || attr === 'dark' ? attr : null;
}

// Manages an explicit light/dark override, persisted to localStorage; null means "follow system"
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(getInitialTheme);

  // Keep the <html data-theme> attribute (which the CSS in index.css reads) in sync with state
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      if (current === 'dark') return 'light';
      if (current === 'light') return 'dark';
      // No explicit choice yet — flip away from whatever the system preference currently renders
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return systemPrefersDark ? 'light' : 'dark';
    });
  }, []);

  // Effective theme for rendering the correct sun/moon icon, falling back to system preference
  const resolvedTheme: Theme =
    theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  return { resolvedTheme, toggleTheme };
}
