import { Writing, Reading, Project } from "@/types/content";

export function getWritings(): Writing[] {
  return [
    {
      slug: "systems-thinking",
      title: "The Art of Systems Thinking",
      date: "2024-01-15",
      tags: ["systems", "thinking", "productivity"],
      summary: "How to approach complex problems with a systems mindset",
      content: "",
      readingTime: "5 min read",
    },
    {
      slug: "compound-effects",
      title: "The Power of Compound Effects",
      date: "2024-02-20",
      tags: ["productivity", "habits", "growth"],
      summary: "How small actions compound into massive results over time",
      content: "",
      readingTime: "6 min read",
    },
  ];
}

export function getReadings(): Reading[] {
  return [
    {
      slug: "atomic-habits",
      title: "Atomic Habits",
      author: "James Clear",
      date: "2024-01-10",
      tags: ["habits", "productivity", "psychology"],
      link: "https://jamesclear.com/atomic-habits",
      summary: "Tiny changes, remarkable results",
    },
    {
      slug: "thinking-fast-and-slow",
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      date: "2024-02-15",
      tags: ["psychology", "decision-making", "cognitive-bias"],
      link: "https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow",
      summary: "Understanding the two systems that drive the way we think",
    },
  ];
}

export function getProjects(): Project[] {
  return [
    {
      slug: "book-brain",
      title: "Book Brain",
      date: "2024-01-15",
      tags: ["AI", "PKM", "Productivity"],
      summary:
        "Reading → remembering. A PKM that turns highlights into prompts and actions.",
      problem: "How to retain and act on insights from books",
      approach:
        "AI-powered knowledge management system that processes highlights and generates actionable prompts",
      impact: "Increased retention by 40% and action rate by 60%",
      stack: ["Next.js", "OpenAI", "PostgreSQL", "Vercel"],
      links: {
        repo: "https://github.com/aseemsangalay/book-brain",
        demo: "https://book-brain.vercel.app",
      },
      image: "/projects/book-brain.jpg",
      featured: true,
    },
    {
      slug: "trace",
      title: "TRACE",
      date: "2024-02-20",
      tags: ["Productivity", "Habits", "Analytics"],
      summary:
        "Momentum is identity. Built a daily execution logger; 21-day streak ↑ task completion 37%.",
      problem:
        "Lack of consistent daily execution tracking and momentum building",
      approach:
        "Minimal daily logging system with streak analytics and habit formation",
      impact: "21-day streak achieved, task completion increased by 37%",
      stack: ["React", "Node.js", "MongoDB", "Chart.js"],
      links: {
        repo: "https://github.com/aseemsangalay/trace",
        demo: "https://trace-app.vercel.app",
      },
      image: "/projects/trace.jpg",
      featured: true,
    },
    {
      slug: "leavehack",
      title: "LeaveHack",
      date: "2024-03-10",
      tags: ["Travel", "Optimization", "India"],
      summary:
        "Travel like a game. Optimizes Indian holidays for max days off with min leave.",
      problem:
        "Complex Indian holiday calendar makes vacation planning inefficient",
      approach:
        "Algorithm that optimizes leave days around holidays and weekends",
      impact: "Users save 3-5 leave days per year on average",
      stack: ["Python", "FastAPI", "React", "PostgreSQL"],
      links: {
        repo: "https://github.com/aseemsangalay/leavehack",
        demo: "https://leavehack.com",
      },
      image: "/projects/leavehack.jpg",
      featured: true,
    },
  ];
}

export function getWritingBySlug(slug: string): Writing | null {
  const writings = getWritings();
  return writings.find((writing) => writing.slug === slug) || null;
}

export function getReadingBySlug(slug: string): Reading | null {
  const readings = getReadings();
  return readings.find((reading) => reading.slug === slug) || null;
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getProjects();
  return projects.find((project) => project.slug === slug) || null;
}
