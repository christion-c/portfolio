import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';
import { navItems } from '../../data/nav';
import { profile } from '../../data/profile';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';

// Shared focus-visible ring applied to every nav interactive element for consistent keyboard styling
const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

// Sticky site header: verse/brand link, desktop nav, and a collapsible mobile nav
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Scrollspy: which section is active, drives the underline/highlight on nav links
  const sectionIds = navItems.map((item) => item.href.replace('#', ''));
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <Container className="flex items-start justify-between gap-4 py-4 sm:items-center">
        {/* Doubles as the brand mark and a link back to the top of the page */}
        <a
          href="#top"
          className={`max-w-[68%] rounded font-display text-xs italic leading-snug text-text-strong transition-colors hover:text-primary sm:max-w-md sm:text-base sm:leading-normal ${focusRing}`}
        >
          {profile.verse}
        </a>

        {/* Right-hand cluster: desktop nav + theme toggle + hamburger, kept together so
            justify-between only sees two top-level items (verse on the left, this on the right) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop nav row, hidden below the sm breakpoint */}
          <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex">
            {navItems.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = id === activeId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${focusRing} ${
                    isActive ? 'text-primary' : 'text-text'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Always visible, regardless of breakpoint */}
          <ThemeToggle />

          {/* Hamburger toggle, only visible below the sm breakpoint */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-text-strong transition-colors hover:border-primary hover:text-primary sm:hidden ${focusRing}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <FaXmark className="h-4 w-4" /> : <FaBars className="h-4 w-4" />}
          </button>
        </div>
      </Container>

      {/* Collapsible mobile nav: grid-rows animates the height; aria-hidden + tabIndex=-1 below
          keep its links out of the accessibility tree and tab order while visually collapsed */}
      <nav
        id="mobile-nav"
        aria-label="Primary"
        aria-hidden={!isOpen}
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
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${focusRing} ${
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
