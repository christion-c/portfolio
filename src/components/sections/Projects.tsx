import { projects } from '../../data/projects';
import { Container } from '../ui/Container';
import { ProjectCard } from '../ui/ProjectCard';
import { SectionHeading } from '../ui/SectionHeading';

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-20 py-24">
      <Container>
        <SectionHeading
          headingId="projects-heading"
          index="03"
          eyebrow="Selected Work"
          title="Things I built and kept running"
        />
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
