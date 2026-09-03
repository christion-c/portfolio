import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import type { Project } from '../../types/portfolio';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 sm:p-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-t-2xl bg-gradient-to-r from-primary via-gold to-secondary transition-transform duration-300 group-hover:scale-x-100"
      />

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
        <span
          aria-hidden="true"
          className="shrink-0 font-display text-3xl font-semibold text-primary/85 transition-colors duration-300 group-hover:text-primary"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-primary-strong">{project.role}</p>

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

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

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
    </article>
  );
}
