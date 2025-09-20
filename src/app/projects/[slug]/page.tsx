import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projects = getProjects();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Back link */}
            <Link
              href="/projects"
              className="inline-flex items-center text-sm text-subtext hover:text-foreground transition-colors duration-300 mb-8"
            >
              ← Back to Projects
            </Link>

            {/* Project header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 text-sm text-subtext mb-6">
                <span className="font-medium text-accent">
                  {project.tags[0]}
                </span>
                <span>•</span>
                <time>{formatDate(project.date)}</time>
              </div>

              <h1 className="text-display-bold text-foreground mb-6">
                {project.title}
              </h1>

              <p className="text-body text-subtext leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            {/* Project content */}
            <div className="space-y-16">
              {/* Problem */}
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Problem
                </h2>
                <p className="text-body text-subtext leading-relaxed">
                  {project.problem}
                </p>
              </section>

              {/* Approach */}
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Approach
                </h2>
                <p className="text-body text-subtext leading-relaxed">
                  {project.approach}
                </p>
              </section>

              {/* Impact */}
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Impact
                </h2>
                <p className="text-body text-subtext leading-relaxed">
                  {project.impact}
                </p>
              </section>

              {/* Stack */}
              <section>
                <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 text-sm font-medium bg-hairline text-subtext rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Links */}
              {project.links && (
                <section>
                  <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                    Links
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {project.links.repo && (
                      <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                      >
                        View Code
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </section>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
