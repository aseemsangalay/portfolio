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
    {
        slug: "ai-agents-break-hidden-assumption-distributed-systems",
        title: "AI Agents Break a Hidden Assumption in Distributed Systems",
        year: "2026",
        thesis: "Distributed systems gave us fifty years of answers for nodes that fail. AI engineering is the first discipline that has to answer for nodes that decide.",
        entryType: "SYSTEMS",
        highlights: [
            "Every classical reliability pattern — idempotency, retries, consensus — assumes a deterministic node. AI agents violate that assumption by default.",
            "Idempotency keys break when the node is a model: retry the same step, get a different plan. There's no stable 'same request' to key against.",
            "Split-brain no longer requires a network fault. Two healthy agents reasoning over the same ambiguous context can arrive at conflicting, equally defensible beliefs.",
            "Pushing determinism to the execution layer closes the execution problem, not the planning problem. Verification and split-brain live above it.",
        ],
        content: `Distributed systems theory has a quiet assumption baked into almost every pattern it ever produced: a node, if it runs at all, runs deterministically. Same input, same output, every time. Crash it, retry it, replay it — the computation itself never wavers. Idempotency keys, retries, consensus, exactly-once semantics — the entire fifty-year toolkit is built on top of that one assumption.

That assumption was never absolute. Human-in-the-loop approval chains, manual review steps in workflow engines, financial sign-off systems — stochastic decision-makers have sat inside distributed systems for decades. But they were always the exception the protocol was designed *around*: isolated, slow, walled off with manual fallback paths, never the default unit of computation.

AI agents flip that. The stochastic node isn't the exception anymore — it's the architecture itself. Every step is now a decision rather than a deterministic computation, and that's the actual break: not that non-determinism is new, but that it just became the rule instead of the edge case.

## The industry already noticed the resemblance — but stopped one layer short

A consistent realization has been building across the industry: production AI agents fail like distributed systems, not like models. The reliability problems showing up in agent systems aren't model problems — they're the same partial-failure and inconsistent-state problems distributed systems engineers have spent two decades solving, just never consistently applied to agents.

The pattern repeats everywhere: retries causing duplicate emails, duplicate charges, duplicate bookings; teams reaching for circuit breakers, idempotency keys, and saga-style compensation logic borrowed straight from distributed transactions, because an agent retry without one will double the side effect.

All of this is correct. All of this is also half the picture.

## What the resemblance misses

Every fix above — idempotency key, circuit breaker, saga compensation — depends on being able to answer one question cheaply: *is this a retry of the same thing, or a different thing?*

\`\`\`diagram
retry-comparison
\`\`\`

In classical distributed systems, that question is trivial. A retried request is the same request. You can hash it, version it, dedupe it.

In an agentic system, the "node" doing the work is a model deciding what to do, not executing a fixed instruction. Retry the same step, and the agent may reason its way to a different plan — different tool, different arguments, different number of steps — not because anything failed, but because that's what a stochastic decision-maker does when asked the same question twice. Your idempotency key was built to catch "the same action, attempted again." It has no concept for "a different action, in response to the same trigger." There may not even be a stable notion of "the same request" to key against.

This isn't entirely unprecedented. Consensus systems already have a mechanism for invalidating stale decisions — fencing tokens and epoch numbers in Raft-style protocols reject a leader's action once a newer term has superseded it. The precedent exists, but only at the level of "is this decision-maker still authoritative," not "is this decision-maker's *output* still the same as before." Fencing tells you whether to trust the source. It says nothing about whether two outputs from a trusted, healthy source actually agree with each other. That's the gap nothing in the existing toolkit closes.

This breaks more than retries.

**Verification stops being cheap.** Classical systems verify a retry's success with a checksum, a version number, a status flag — fast, deterministic checks. You cannot checksum whether an agent's decision was *correct*. That requires an eval, a judgment call, sometimes a human — orders of magnitude more expensive than the check it's replacing. The fast-path verification distributed systems were designed around doesn't exist for stochastic decisions.

**Split-brain stops requiring a fault.** Classical split-brain comes from a network partition: two nodes lose contact, each acts on a stale view of shared state. Distributed systems theory does have a literature for nodes disagreeing: Byzantine fault tolerance, going back to Lamport's Byzantine Generals problem, handles nodes that give conflicting or false information. But it handles that disagreement as a *fault* — a broken, lying, or malicious node that the protocol must detect and outvote. Multi-agent systems can produce the same conflicting-state outcome with every node fully healthy, fully honest, and the network fully intact — two agents independently reasoning over the same ambiguous context and arriving at different, equally defensible beliefs about what's true. No partition. No failure. No bad actor. Byzantine fault tolerance has no protocol for two correctly-functioning nodes that simply interpreted the same input differently — because that was never framed as a fault to tolerate.

\`\`\`diagram
split-brain
\`\`\`

## The obvious counter, and why it only half-works

The standard answer to all of this is architectural discipline: keep the model's non-determinism confined to planning, and force every side-effecting action through a deterministic, idempotent execution layer. The model can think however it wants; the tool call it ultimately fires is fixed, fenced, and safe to retry.

This genuinely closes the execution-layer problem. It does not close the planning-layer problem. The plan itself is still a judgment, made fresh each time, and two runs of the same planning step can produce two different, individually reasonable plans before either one ever reaches the deterministic execution boundary. Constraining execution tells you the *action*, once chosen, is safe to retry. It says nothing about whether the *choice* of action was the right one, or whether two agents reasoning over the same context chose differently. Verification and split-brain are planning-layer problems. Pushing determinism down to the execution layer is necessary, well worth doing, and does not touch either one.

## The actual gap

The industry's current move — "treat the agent like a distributed system" — is necessary and still incomplete. It imports a toolkit built for nodes that don't change their mind, and applies it to nodes that do. Some of the toolkit transfers cleanly. Some of it silently doesn't, and nobody notices until production tells them.

The next layer of this discipline isn't relearning idempotency and circuit breakers — that work is already underway, and it's good work. It's recognizing which classical guarantees were never designed to survive a decision-maker in the loop, and building the layer of correctness checking that has to exist *above* the old reliability patterns, not as a replacement for them.

The practical consequence reaches past agent design into the infrastructure underneath it. Cloud platforms have spent two decades becoming extremely good at operating fleets of deterministic software — autoscaling, orchestration, observability, all built for services that behave the same way twice. That substrate is now being asked to host something different: fleets of reasoning processes, not fleets of services. We already know how to operate fleets of software reliably. The open problem is learning to operate fleets of reasoning.

Distributed systems gave us fifty years of answers for nodes that fail. AI engineering is the first discipline that has to answer for nodes that decide.`,
    },
];
