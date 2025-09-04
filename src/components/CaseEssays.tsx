'use client';

import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { ProjectSpread } from '@/components/ui/ProjectSpread';
import { getProjects } from '@/lib/content';

export default function CaseEssays() {
  const projects = getProjects().filter(project => project.featured);

  return (
    <Section id="projects" className="bg-background">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-body text-subtext text-center max-w-2xl mx-auto">
            Case studies of systems I&apos;ve built, problems I&apos;ve solved, and impact I&apos;ve created.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectSpread key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

