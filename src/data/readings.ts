import { Reading } from "@/types";

export const readings: Reading[] = [
    {
        slug: "ddia",
        title: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        date: "2024-05-20",
        year: "2024",
        tags: ["Distributed Systems", "Database", "Architecture"],
        summary: "The definitive guide to the architecture of data systems.",
        insights: [
            "Data is at the center of modern applications, and the tools we use to manage it have profound architectural consequences.",
            "Understanding the tradeoffs between consistency, availability, and partitioning is non-negotiable for system designers.",
            "Implication: Always lead with data-flow modeling before reaching for a specific database vendor."
        ]
    },
    {
        slug: "high-output-management",
        title: "High Output Management",
        author: "Andrew Grove",
        date: "2024-03-15",
        year: "2024",
        tags: ["Management", "Scaling", "Execution"],
        summary: "Practical advice for engineering management and operational leverage.",
        insights: [
            "A manager's output is the output of the units under their supervision or influence.",
            "Leverage comes from focusing on the activities that create the most significant measurable change.",
            "Takeaway: Apply engineering logic (batching, bottlenecks, and indicators) to human systems and workflows."
        ]
    },
    {
        slug: "clean-architecture",
        title: "Clean Architecture",
        author: "Robert C. Martin",
        date: "2023-11-10",
        year: "2023",
        tags: ["Architecture", "Design Patterns"],
        summary: "A craftsman's guide to software structure and design.",
        insights: [
            "Architecture is the art of drawing lines that separate policy from detail.",
            "The goal of software architecture is to minimize the human resources required to build and maintain the system.",
            "Design Decision: Prioritize decoupling systems so they can be independently tested and replaced without cascading failure."
        ]
    }
];
