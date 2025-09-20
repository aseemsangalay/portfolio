import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-display-bold text-foreground mb-6">
                Write. Don&apos;t wait.
              </h1>
              <p className="text-body text-subtext leading-relaxed max-w-2xl mx-auto">
                Ready to build something together? Let&apos;s start a
                conversation about your project, ideas, or just say hello.
              </p>
            </div>

            <div className="space-y-12">
              {/* Contact methods */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-hairline rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📧</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    Email
                  </h3>
                  <p className="text-sm text-subtext mb-4">
                    Best for detailed discussions
                  </p>
                  <a
                    href={siteConfig.links.email}
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                  >
                    Send Email
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-hairline rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💼</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-subtext mb-4">
                    Professional networking
                  </p>
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                  >
                    Connect
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-hairline rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    GitHub
                  </h3>
                  <p className="text-sm text-subtext mb-4">
                    Open source collaboration
                  </p>
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
                  >
                    View Code
                  </a>
                </div>
              </div>

              {/* Response time */}
              <div className="text-center border-t border-hairline pt-8">
                <p className="text-sm text-subtext">
                  I typically respond within 24 hours. Looking forward to
                  hearing from you.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
