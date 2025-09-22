import type { ComponentType } from "react";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  tags: string[];
  readingTime?: string;
}

export interface BlogPostModule {
  default: ComponentType<Record<string, unknown>>;
  meta: BlogPostMeta;
}

export interface BlogPostEntry {
  meta: BlogPostMeta;
  load: () => Promise<BlogPostModule>;
}

const postWhat2YearsMeta: BlogPostMeta = {
  slug: "what-2-years-in-tech-taught-me-about-scaling",
  title:
    "What 2 Years in Tech Taught Me About Scaling (Before Senior Engineer)",
  description:
    "Lessons on scaling, system design, and leadership from two years in tech — insights for recruiters, founders, and engineers.",
  date: "2025-09-22",
  tags: ["Career Growth", "Engineering", "Scaling"],
  readingTime: "7 min read",
};

export const blogEntries: BlogPostEntry[] = [
  {
    meta: postWhat2YearsMeta,
    load: () =>
      import(
        "./what-2-years-in-tech-taught-me-about-scaling.mdx"
      ) as unknown as Promise<BlogPostModule>,
  },
];

export function getAllBlogEntries(): BlogPostEntry[] {
  return blogEntries
    .slice()
    .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getBlogEntryBySlug(slug: string): BlogPostEntry | undefined {
  return blogEntries.find((p) => p.meta.slug === slug);
}
