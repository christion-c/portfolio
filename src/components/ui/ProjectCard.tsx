import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import type { Project } from '../../types/portfolio';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

// Single case-study card: optional screenshot, title/meta, problem/solution copy, tags, and live/source links
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
      {/* Gradient accent bar that reveals on hover, sits above the screenshot when one exists */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 z-10 h-1 origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-primary via-gold to-secondary transition-transform duration-300 group-hover:scale-x-100"
      />

      {/* Live screenshot(s), when captured for this project. A single (landscape web) shot fills
          a full-bleed banner; two or more (e.g. portrait phone screens) sit side by side at their
          natural aspect ratio so they aren't awkwardly cropped by a fixed video-style frame. */}
      {project.imageUrls?.length === 1 && (
        <div className="aspect-video w-full overflow-hidden bg-surface-alt">
          <img
            src={project.imageUrls[0]}
            alt={`Screenshot of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {project.imageUrls && project.imageUrls.length > 1 && (
        <div className="flex justify-center gap-4 overflow-x-auto bg-surface-alt p-6">
          {project.imageUrls.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Screenshot ${i + 1} of ${project.title}`}
              loading="lazy"
              className="h-[360px] w-auto shrink-0 rounded-2xl border border-border object-contain shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ))}
        </div>
      )}

      <div className="p-6 sm:p-8">
        {/* Title row: name + optional meta pill on the left, decorative index number on the right */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="font-display text-2xl font-semibold text-text-strong">{project.title}</h3>
              {project.meta && (
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary-strong">
                  {project.meta}
                </span>
              )}
            </div>
            <p className="mt-1.5 font-display text-base italic text-text/80">{project.tagline}</p>
          </div>
          {/* Purely decorative "01/02/03" — aria-hidden since the title already identifies the card */}
          <span
            aria-hidden="true"
            className="shrink-0 font-display text-3xl font-semibold text-primary/85 transition-colors duration-300 group-hover:text-primary"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary-strong">{project.role}</p>

        {/* Problem/solution copy */}
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-text">
          <p>
            <span className="font-semibold text-text-strong">The problem. </span>
            {project.problem}
          </p>
          <p>
            <span className="font-semibold text-text-strong">What I built. </span>
            {project.built}
          </p>
        </div>

        {/* Tech-stack tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>

        {/* Live/source links — only rendered if the project has at least one */}
        {(project.liveUrl || project.sourceUrl) && (
          <div className="mt-6 flex gap-5 border-t border-border pt-5 text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link -my-1.5 inline-flex items-center gap-1.5 rounded py-1.5 text-text-strong transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Live site
                <span className="sr-only"> (opens in a new tab)</span>
                <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link -my-1.5 inline-flex items-center gap-1.5 rounded py-1.5 text-text-strong transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                Source
                <span className="sr-only"> (opens in a new tab)</span>
                <FaGithub className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:rotate-6" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
