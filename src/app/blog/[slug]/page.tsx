import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { formatDate } from "@/lib/utils";
import { getAllBlogEntries, getBlogEntryBySlug } from "@/content/blog";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import MdxClient from "@/components/MdxClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = getAllBlogEntries();
  return entries.map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getBlogEntryBySlug(slug);
  if (!entry) return {};
  const { title, description } = entry.meta;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const entry = getBlogEntryBySlug(slug);
  if (!entry) notFound();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-subtext hover:text-foreground transition-colors duration-300 mb-8"
            >
              ← Back to Blog
            </Link>
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-subtext mb-4">
                <time>{formatDate(entry.meta.date)}</time>
                <span>•</span>
                <span>{entry.meta.readingTime ?? ""}</span>
              </div>
              <h1 className="text-display-bold text-foreground mb-4">
                {entry.meta.title}
              </h1>
              <p className="text-body text-subtext leading-relaxed">
                {entry.meta.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {entry.meta.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-hairline text-subtext rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-h1:text-3xl md:prose-h1:text-4xl prose-h2:mt-10 prose-h2:pt-6 prose-h2:border-t prose-h2:border-hairline prose-a:text-accent hover:prose-a:text-foreground prose-strong:font-semibold">
              <MdxClient slug={slug} />
            </article>
          </div>
        </Container>
      </Section>
    </main>
  );
}
