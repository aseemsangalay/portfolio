// ─── Base ────────────────────────────────────────────────────────────────────

export interface BaseContent {
    title: string;
    date: string;
    tags: string[];
    slug: string;
}

// ─── Domain models ───────────────────────────────────────────────────────────

export interface Reading extends BaseContent {
    link?: string;
    author?: string;
    summary?: string;
    year?: string;
    insights?: string[];
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
    status?: "PRODUCTION" | "LIVE" | "ARCHIVED" | "IN_DEVELOPMENT";
    projectType?: "PERSONAL" | "RESEARCH" | "STARTUP" | "OPEN_SOURCE";
    year?: string;
    highlights?: string[];
    distilling?: boolean;
}

export interface WorkExperience {
    company: string;
    role: string;
    period: string;
    impacts: string[];
    link?: string;
}

export interface Role {
    title: string;
    description: string;
    icon: string;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavigationItem {
    name: string;
    href: string;
    current?: boolean;
}

export interface BrainEntry {
    slug: string;
    title: string;
    year: string;
    thesis: string;
    entryType: "SYSTEMS" | "ARCHITECTURE" | "SCALING" | "PRODUCT" | "ENGINEERING";
    highlights: string[];
    content?: string;
}
