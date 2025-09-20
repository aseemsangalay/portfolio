import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getProjects } from "@/lib/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-display-bold text-foreground mb-6">
                Projects
              </h1>
              <p className="text-body text-subtext leading-relaxed">
                Case studies of systems I&apos;ve built, problems I&apos;ve
                solved, and impact I&apos;ve created.
              </p>
            </div>

            <div className="space-y-12">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="border-b border-hairline pb-12 last:border-b-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 text-sm text-subtext">
                          <span className="font-medium text-accent">
                            {project.tags[0]}
                          </span>
                          <span>•</span>
                          <time>{formatDate(project.date)}</time>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="hover:text-accent transition-colors duration-300"
                          >
                            {project.title}
                          </Link>
                        </h2>

                        <p className="text-body text-subtext leading-relaxed">
                          {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-hairline text-subtext rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.stack.length > 4 && (
                            <span className="px-3 py-1 text-xs font-medium bg-hairline text-subtext rounded-full">
                              +{project.stack.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="md:col-span-1">
                      <Link href={`/projects/${project.slug}`}>
                        <div className="aspect-[4/3] bg-hairline border border-hairline rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center text-subtext">
                              <div className="text-4xl mb-3">📱</div>
                              <div className="text-sm font-medium">
                                {project.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
