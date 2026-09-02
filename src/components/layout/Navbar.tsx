import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { navItems } from '../../data/nav';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container } from '../ui/Container';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = navItems.map((item) => item.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-4 py-4">
        <a
          href="#top"
          className="max-w-[12rem] truncate font-display text-sm italic text-text-strong transition-colors hover:text-primary sm:max-w-md sm:overflow-visible sm:whitespace-normal sm:text-base"
          title={profile.verse}
        >
          {profile.verse}
        </a>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            const isActive = id === activeId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-text'
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-text-strong transition-colors hover:border-primary hover:text-primary sm:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
        </button>
      </Container>

      <nav
        className={`grid overflow-hidden border-t border-border transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] border-t-0'
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = id === activeId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-text hover:text-primary'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </Container>
        </div>
      </nav>
    </header>
  );
}
