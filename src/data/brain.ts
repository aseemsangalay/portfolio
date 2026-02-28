import { BrainEntry } from "@/types";

export const brainEntries: BrainEntry[] = [
    {
        slug: "designing-for-failure-first",
        title: "Designing for Failure First",
        year: "2024",
        thesis: "Resilience is not a feature; it is a constraint.",
        entryType: "SYSTEMS",
        highlights: [
            "Failure modes must be modeled before happy paths to prevent cascading outages.",
            "Latency tradeoffs are acceptable when observability is strong enough to isolate bottlenecks.",
            "Systems that fail loudly and predictably scale better than those that fail silently.",
        ],
    },
    {
        slug: "the-zero-invariants-principle",
        title: "The Zero-Invariants Principle",
        year: "2024",
        thesis: "Assumptions are the primary source of technical debt in distributed systems.",
        entryType: "ARCHITECTURE",
        highlights: [
            "Never trust the state of a remote node; verify through idempotent operations.",
            "Invariants should be enforced at the storage layer, never just in application logic.",
            "Code that handles 'impossible' edge cases is the only code that survives production load.",
        ],
    },
    {
        slug: "architecting-for-observability",
        title: "Architecting for Observability",
        year: "2023",
        thesis: "Logging is noise; telemetry is the only source of truth.",
        entryType: "SCALING",
        highlights: [
            "Metrics should follow the four golden signals: Latency, Traffic, Errors, and Saturation.",
            "Context-aware tracing is superior to grep-based debugging for microservice interactions.",
            "High-cardinality data is expensive but necessary for identifying p99 anomalies.",
        ],
    },
];
