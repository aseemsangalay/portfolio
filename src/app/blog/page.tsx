import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { getAllBlogPosts } from "@/content/blog";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Insights on Scaling and Engineering",
  description:
    "Essays on scaling, system design, and engineering velocity by Aseem Sangalay.",
  openGraph: {
    title: "Blog — Insights on Scaling and Engineering",
    description:
      "Essays on scaling, system design, and engineering velocity by Aseem Sangalay.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Insights on Scaling and Engineering",
    description:
      "Essays on scaling, system design, and engineering velocity by Aseem Sangalay.",
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-background">
      <Section className="pt-24 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h1 className="text-display-bold text-foreground mb-4">Blog</h1>
              <p className="text-body text-subtext">
                Thoughts on scaling, engineering systems, and building for
                velocity.
              </p>
            </div>
            <div className="space-y-12">
              {posts.map(({ meta }) => (
                <article
                  key={meta.slug}
                  className="border-b border-hairline pb-12 last:border-b-0"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-subtext">
                      <time>{formatDate(meta.date)}</time>
                      <span>•</span>
                      <span>{meta.readingTime ?? ""}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground">
                      <Link
                        href={`/blog/${meta.slug}`}
                        className="hover:text-accent transition-colors duration-300"
                      >
                        {meta.title}
                      </Link>
                    </h2>
                    <p className="text-body text-subtext leading-relaxed">
                      {meta.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {meta.tags.map((tag) => (
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
