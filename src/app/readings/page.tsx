import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getReadings } from "@/lib/content";
import { formatDate } from "@/lib/utils";

export default function ReadingsPage() {
  const readings = getReadings();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-display-bold text-foreground mb-6">
                Current Readings
              </h1>
              <p className="text-body text-subtext leading-relaxed">
                Books and articles I&apos;m currently reading, with notes and
                insights.
              </p>
            </div>

            <div className="space-y-12">
              {readings.map((reading) => (
                <article
                  key={reading.slug}
                  className="border-b border-hairline pb-12 last:border-b-0"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-subtext">
                      <time>{formatDate(reading.date)}</time>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                      {reading.title}
                    </h2>

                    {reading.author && (
                      <p className="text-body text-subtext">
                        by {reading.author}
                      </p>
                    )}

                    {reading.summary && (
                      <p className="text-body text-subtext leading-relaxed">
                        {reading.summary}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {reading.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-hairline text-subtext rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {reading.link && (
                      <a
                        href={reading.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 underline-animate"
                      >
                        Read more →
                      </a>
                    )}
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
