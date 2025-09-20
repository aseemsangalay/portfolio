import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getWritings } from "@/lib/content";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function WritingsPage() {
  const writings = getWritings();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-display-bold text-foreground mb-6">
                Writings
              </h1>
              <p className="text-body text-subtext leading-relaxed">
                Thoughts on systems thinking, productivity, and building things
                that matter.
              </p>
            </div>

            <div className="space-y-12">
              {writings.map((writing) => (
                <article
                  key={writing.slug}
                  className="border-b border-hairline pb-12 last:border-b-0"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-subtext">
                      <time>{formatDate(writing.date)}</time>
                      <span>•</span>
                      <span>{writing.readingTime}</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                      <Link
                        href={`/writings/${writing.slug}`}
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {writing.title}
                      </Link>
                    </h2>

                    <p className="text-body text-subtext leading-relaxed">
                      {writing.summary}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {writing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-hairline text-subtext rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
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
