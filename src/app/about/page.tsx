import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-16">
              <h1 className="text-display-bold text-foreground mb-6">About</h1>
            </div>

            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-body text-subtext leading-relaxed mb-6">
                  I&apos;m an engineer who believes in building systems that
                  compound over time. My approach combines technical depth with
                  systems thinking to create solutions that are both elegant and
                  enduring.
                </p>

                <p className="text-body text-subtext leading-relaxed mb-6">
                  I work at the intersection of technology and human behavior,
                  focusing on products that help people think better, work
                  smarter, and build things that matter.
                </p>

                <p className="text-body text-subtext leading-relaxed mb-6">
                  When I&apos;m not coding, you&apos;ll find me reading about
                  systems thinking, writing about productivity, or exploring how
                  we can build better tools for knowledge work.
                </p>
              </div>

              <div className="border-t border-hairline pt-8">
                <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                  Brand Manifesto
                </h2>
                <p className="text-body text-subtext leading-relaxed italic">
                  {siteConfig.brand.manifesto}
                </p>
              </div>

              <div className="border-t border-hairline pt-8">
                <h2 className="text-xl font-display font-semibold text-foreground mb-6">
                  Let&apos;s Connect
                </h2>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={siteConfig.links.email}
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                  >
                    Email
                  </a>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

