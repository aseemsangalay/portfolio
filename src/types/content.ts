export interface BaseContent {
  title: string;
  date: string;
  tags: string[];
  slug: string;
}

export interface Writing extends BaseContent {
  summary: string;
  content: string;
  readingTime: string;
}

export interface Reading extends BaseContent {
  link?: string;
  author?: string;
  summary?: string;
}

export interface Project extends BaseContent {
  summary: string;
  problem: string;
  approach: string;
  impact: string;
  stack: string[];
  links: {
    repo?: string;
    demo?: string;
  };
  image: string;
  featured: boolean;
}

export interface NavigationItem {
  name: string;
  href: string;
  current?: boolean;
}

