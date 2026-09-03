import { useEffect, useState } from 'react';

// Tracks which section is currently in view (scrollspy) so the Navbar can highlight the active link
export function useActiveSection(sectionIds: string[]) {
  // Currently active section id, defaults to the first section
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    // Watch each section and switch activeId when one crosses the middle of the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    // Start observing every section referenced by sectionIds
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Stop observing on unmount / when sectionIds changes
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
