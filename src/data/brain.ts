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
    {
        slug: "systems-notes-1-code-that-survives",
        title: "Systems Notes #1 — Code That Works vs Code That Survives",
        year: "2026",
        thesis: "Most code works. Very little survives.",
        entryType: "SYSTEMS",
        highlights: [
            "Surviving code is idempotent — retries are treated as load multipliers, not edge cases.",
            "Partial failures are expected, not exceptional. State boundaries are explicit. Concurrency is designed for.",
            "Reliability isn't patched later. It's chosen at design time.",
            "Engineering maturity isn't measured by what your code can do, but by what it can withstand.",
        ],
        content: `Most code works. Very little survives.

Working code passes tests, handles expected inputs, and ships on time. It assumes stable networks, predictable traffic, and cooperative dependencies.

Surviving code assumes the opposite.

It's idempotent. Retries are treated as load multipliers. Partial failures are expected, not exceptional. State boundaries are explicit. Concurrency is designed for, not discovered in production.

The shift isn't about writing more code. It's about designing for entropy.

When systems process millions of events or serve high-throughput workflows, "works on my machine" becomes irrelevant.

The real questions change:

- What happens if this runs twice?
- What breaks under 10,000 concurrent requests?
- How does it degrade?
- Where's the blast radius?

Reliability isn't patched later. It's chosen at design time.

Engineering maturity isn't measured by what your code can do, but by what it can withstand.`,
    },
    {
        slug: "systems-thinking",
        title: "The Art of Systems Thinking",
        year: "2024",
        thesis: "Systems thinking isn't a methodology — it's a lens that reveals the invisible structure beneath every complex problem.",
        entryType: "SYSTEMS",
        highlights: [],
        content: "",
    },
    {
        slug: "compound-effects",
        title: "The Power of Compound Effects",
        year: "2024",
        thesis: "Small actions compounding over time produce results that feel impossible until the moment they become inevitable.",
        entryType: "ENGINEERING",
        highlights: [],
        content: "",
    },
    {
        slug: "what-2-years-in-tech-taught-me-about-scaling",
        title: "What 2 Years in Tech Taught Me About Scaling",
        year: "2025",
        thesis: "Lessons on scaling, system design, and leadership from two years in tech — before the senior engineer title.",
        entryType: "SCALING",
        highlights: [],
        content: "",
    },
    {
        slug: "the-network-will-lie-to-you",
        title: "Systems Notes #2 — The Network Will Lie to You",
        year: "2026",
        thesis: "A dropped connection doesn't tell you when it dropped — before the operation, during it, or after. From the client's perspective, all three look identical: silence.",
        entryType: "SYSTEMS",
        highlights: [
            "Networks fail ambiguously, not cleanly — retrying without idempotency guarantees is damage, not resilience.",
            "Stripe's Idempotency-Key header is a receipt system: same key, no matter how many retries, one outcome.",
            "Three distinct failure scenarios require three different recovery paths behind one consistent external behavior.",
            "Exponential backoff with jitter is the complement to idempotency — correctness needs both.",
        ],
        content: `At 2:47 AM, a customer clicks "Pay."

The request leaves their browser. Crosses three network hops. Hits your payment server. The charge processes. $299 debited.

Then the connection drops.

The server never sends the response. The client sees a timeout. Standard retry logic kicks in. The request fires again.

The charge processes again.

$299 debited. Twice.

Your system worked exactly as designed. And it just robbed someone.

---

This isn't a bug story. It's a distributed systems reality.

Networks don't fail cleanly. They fail ambiguously. A dropped connection doesn't tell you *when* it dropped — before the operation, during it, or after it completed successfully. From the client's perspective, all three look identical: silence.

So you retry. Because that's what resilient systems do.

But if your operation isn't designed to handle being called twice, retrying isn't resilience. It's damage.

This is the problem idempotency solves.

## What Idempotency Actually Means

The word comes from mathematics. An operation is idempotent if applying it multiple times produces the same result as applying it once.

\`\`\`
f(f(x)) = f(x)
\`\`\`

In distributed systems, it means this: no matter how many times a client sends the same request, the outcome is identical to sending it once.

Not "probably the same." Not "usually safe." *Identical. Guaranteed.*

This guarantee has to be designed in — it doesn't emerge from careful coding. It requires a deliberate contract between caller and server.

## How Stripe Implemented It

Stripe didn't invent idempotency. But their public documentation of how they implemented it in a production payments API is one of the clearest engineering case studies available.

Their solution: the \`Idempotency-Key\` header.

When a client makes a mutating request — a charge, a refund, a transfer — it generates a unique key and attaches it:

\`\`\`bash
curl https://api.stripe.com/v1/charges \\
  -H "Idempotency-Key: your-unique-key-here" \\
  -d amount=2000 \\
  -d currency=usd
\`\`\`

The server stores this key alongside the operation result. On every incoming request, it checks: have I seen this key before?

- **If yes** — it returns the cached result. No re-execution. No second charge.
- **If no** — it processes normally, stores the result against the key.

The network can lie as many times as it wants. The outcome doesn't change.

## The Three Failure Scenarios

Here's what Stripe's documentation makes explicit that most engineers skip over:

Network failures aren't one thing. They're three distinct scenarios, each requiring different recovery logic:

**Scenario 1: Connection failure before the server receives the request.** Safe to retry. The operation never started. The idempotency key hasn't been stored. Server processes it fresh.

**Scenario 2: Failure midway through processing.** The server received the request, started processing, then something crashed. The idempotency key is stored but the operation is incomplete. Recovery logic must detect this state and either roll back cleanly or resume — then return the final result on retry.

**Scenario 3: Failure after success, before response delivery.** This is the dangerous one. The operation completed. Money moved. The client never got confirmation. On retry, the server sees the idempotency key, finds the completed result, and returns it without re-executing. The client finally gets its answer. No double charge.

Same key. Three different internal paths. One consistent external behavior.

That's the engineering sophistication behind a single HTTP header.

## The Thundering Herd — The Problem Inside the Solution

Idempotency makes retries safe. But it doesn't make them smart.

When a server goes down, every client that was mid-request sees a failure simultaneously. With naive retry logic — retry immediately on failure — every client hammers the server at the same instant. The server, already struggling, gets crushed by synchronized load. It never recovers.

This is the thundering herd problem.

The fix is two layers:

**Exponential backoff:** Each retry waits proportionally longer than the last. First retry at 1s, then 2s, then 4s, then 8s. The server gets breathing room.

**Jitter:** Add randomness to each client's wait time. If 10,000 clients all back off to exactly 4 seconds, you still get a synchronized spike. Jitter spreads retries across a window, turning a thundering herd into a steady trickle.

Idempotency handles correctness. Backoff with jitter handles recovery. You need both.

## The Mental Model

Think of an idempotency key as a receipt number.

When you submit a tax return, the government assigns it a receipt number. If you accidentally submit it twice, they don't process it twice — they look up the receipt and say "we already have this one."

The operation is a fact. Not a request that might run again.

Design your systems so every consequential operation is a fact with a receipt. The network can drop it, duplicate it, delay it. The outcome doesn't change.

## What This Means At Design Time

Idempotency isn't something you add when bugs appear. It's a decision you make at API design time, when you're choosing what a retry *means*.

If a retry can re-execute the operation — you're one network blip away from corrupted state.

If a retry is safe by design — your system can recover from anything the network throws at it.

Surviving code doesn't hope the network behaves. It's designed for when it doesn't.`,
    },
];
