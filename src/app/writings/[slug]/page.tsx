import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getWritings } from "@/lib/content";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import MdxClient from "@/components/MdxClient";

interface WritingPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const writings = getWritings();
  return writings.map((writing) => ({
    slug: writing.slug,
  }));
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const writings = getWritings();
  const writing = writings.find((w) => w.slug === slug);

  if (!writing) {
    notFound();
  }

  const isMdxBacked = slug === "what-2-years-in-tech-taught-me-about-scaling";

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/writings"
              className="inline-flex items-center text-sm text-subtext hover:text-foreground transition-colors duration-300 mb-8"
            >
              ← Back to Writings
            </Link>

            {/* Article header */}
            <div className="mb-16">
              <div className="flex items-center gap-4 text-sm text-subtext mb-6">
                <time>{formatDate(writing.date)}</time>
                <span>•</span>
                <span>{writing.readingTime}</span>
              </div>

              <h1 className="text-display-bold text-foreground mb-6">
                {writing.title}
              </h1>

              <p className="text-body text-subtext leading-relaxed mb-6">
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

            {/* Article content */}
            {isMdxBacked ? (
              <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:mt-10 prose-h2:pt-6 prose-h2:border-t prose-h2:border-hairline prose-a:text-accent hover:prose-a:text-foreground prose-strong:font-semibold">
                <MdxClient slug={slug} />
              </article>
            ) : (
              <div className="prose prose-lg max-w-none">
                <div className="text-body text-subtext leading-relaxed whitespace-pre-line">
                  {writing.content || "Content coming soon..."}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
    </main>
  );
}
