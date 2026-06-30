import { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "genai-arch-reviewer",
        title: "GenAI Architecture Reviewer",
        date: "2026-06-01",
        year: "2026",
        tags: ["AI", "GenAI", "RAG", "Architecture", "AWS Bedrock"],
        summary: "Single-prompt AI tool that gives senior-architect-level critique of any GenAI system design — scorecard, risks with confidence scores, and a killer insight.",
        problem: "Developers building RAG pipelines and AI agents get generic feedback; no tool gives structured, architecture-aware critique",
        approach: "One optimized system prompt to Claude via AWS Bedrock returns a validated JSON schema: scorecard, assumptions, risks, strengths, and a non-obvious killer insight",
        impact: "Produces expert-level GenAI architecture reviews in under 15 seconds with zero hallucinated metrics",
        stack: ["AWS Bedrock", "Claude", "React", "FastAPI", "TypeScript"],
        links: {
            repo: "https://github.com/aseemsangalay/genai-arch-reviewer",
            demo: "https://genai-arch-reviewer.vercel.app/",
            caseStudy: "/projects/genai-arch-reviewer/case-study",
        },
        image: "/projects/genai-arch-reviewer.jpg",
        featured: true,
        status: "IN_DEVELOPMENT",
        projectType: "PERSONAL",
        distilling: true,
        highlights: [
            "Engineered a single-call Bedrock prompt that returns structured JSON: scorecard, critical risks with confidence levels, strengths, and a killer insight.",
            "Enforced a **concreteness rule** — every risk must reference a specific architectural choice the user mentioned, eliminating generic AI feedback.",
            "Designed multi-dimensional **scorecard** (scalability, reliability, security, cost efficiency) with per-dimension justifications.",
            "Built full-stack with React frontend + FastAPI backend; stateless, no auth, no persistence — ships as a pure portfolio demo.",
        ],
    },
];
