import { Project } from "@/types";

export const projects: Project[] = [
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
