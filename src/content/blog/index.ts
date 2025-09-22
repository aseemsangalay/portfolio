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
  default: ComponentType<any>;
  meta: BlogPostMeta;
}

import What2YearsPost, {
  meta as what2YearsMeta,
} from "./what-2-years-in-tech-taught-me-about-scaling.mdx";

export const blogPosts: BlogPostModule[] = [
  { default: What2YearsPost, meta: what2YearsMeta },
];

export function getAllBlogPosts(): BlogPostModule[] {
  return blogPosts.slice().sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPostModule | undefined {
  return blogPosts.find((p) => p.meta.slug === slug);
}
