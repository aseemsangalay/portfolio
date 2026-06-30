import PageLayout from "@/components/layout/PageLayout";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "GenAI Architecture Reviewer — Case Study | Aseem Sangalay",
  description:
    "How I engineered a system prompt that produces senior-architect-level GenAI critiques: 13 failure mode rules, structured JSON output via tool_use, and zero hallucinated benchmarks.",
};

const decisions = [
  {
    decision: "AWS Bedrock over direct Anthropic/OpenAI",
    chosen: "AWS Bedrock (Claude model via boto3)",
    rejected: "Direct Anthropic API, OpenAI",
    reasoning:
      "Portfolio differentiation — demonstrates AWS depth, not just 'call OpenAI.' Bedrock abstracts model provider; multi-model support falls out naturally.",
  },
  {
    decision: "Single model call, no chains",
    chosen: "One prompt in, one structured JSON out",
    rejected: "Multi-step chains, LangGraph, retries-with-improve-quality",
    reasoning:
      "Chains add latency, cost, and failure surfaces without proportional quality gain for this task. If output is bad, fix the prompt — not the architecture.",
  },
  {
    decision: "Strict output schema with named fields",
    chosen:
      "JSON schema: critical_risks, killer_insight, review_confidence, key_unresolved_decisions, architecture_diagram",
    rejected: "Free-form markdown review, prose output",
    reasoning:
      "Schema forces complete structured output; schema fields encode domain knowledge. review_confidence with missing-fields list surfaces 'this review is 55% confident because you didn't specify your auth model.'",
  },
  {
    decision: "Tool use for structured output",
    chosen: "Bedrock tool_use with tool_choice: {type: tool} + full JSON Schema",
    rejected:
      "Instructing the model to 'output valid JSON', string parsing",
    reasoning:
      "Instruction-based JSON compliance fails under token pressure — model truncates mid-structure. Tool use forces the API to validate schema compliance before returning.",
  },
  {
    decision: "Access gate: open demo, verified custom input",
    chosen:
      "Demo runs canonical example freely; custom input verified server-side via X-Access-Code header",
    rejected: "Fully open (cost exposure), fully closed (no demo value)",
    reasoning:
      "Each review call costs real money. Original REACT_APP_ACCESS_CODE approach was a security failure — code in JS bundle, extractable from DevTools in under 60s. Fixed: code moved to server env var.",
  },
];

const failureModes = [
  {
    rule: "Rule 1: CONCRETENESS",
    failure: "Generic risks not tied to stated components",
    fix: "Every critical_risks item must name at least one specific component the user mentioned. 'Retrieval can be slow' = failed output. 'Synchronous Pinecone retrieval will compound tail latency as corpus grows' = correct.",
  },
  {
    rule: "Rule 2: NO INVENTED NUMBERS",
    failure: "Fabricated benchmarks presented as fact",
    fix: "Never output invented benchmarks. Reference real numbers the user provided, or reason directionally: 'as rows grow, Y becomes bottleneck because Z' — not 'Y fails at 250 QPS.'",
  },
  {
    rule: "Rule 6b: STRENGTHS RULE",
    failure: "Praising tool capabilities instead of user decisions",
    fix: "'GPT-4 provides high-quality generation' is not a strength. Only list a strength if it reflects an explicit architectural decision the user stated. 2 honest strengths beat 3 invented ones.",
  },
  {
    rule: "Rule 8: CONSERVATIVE SCORING",
    failure: "Optimistic scoring on underspecified dimensions",
    fix: "Never award above 3/5 when critical information is missing. Missing info must reduce the score, not be silently assumed away. Security can't exceed 3 without auth strategy + tenant isolation + data residency + audit logging.",
  },
  {
    rule: "Rule 12: NEVER INVENT TOPOLOGY",
    failure: "Inventing pod/shard counts and criticizing them",
    fix: "Explicit prohibition on pod count, shard count, replica count, namespace count, region configuration — any infrastructure-level specifics not provided by the user.",
  },
  {
    rule: "Rule 13: KILLER INSIGHT QUALITY BAR",
    failure: "Killer insight duplicating top critical_risk or stating the obvious",
    fix: "Counterintuitive means contradicts what a competent non-expert would naturally focus on. 'The sub-2s SLA is more likely broken by GPT-4 generation latency than by retrieval latency' passes. 'You need monitoring' fails.",
  },
];

const stackRows = [
  { layer: "Frontend", choice: "React (CRA), plain CSS", why: "No complexity; CSS variables for theming; no component library to fight" },
  { layer: "Backend", choice: "FastAPI (Python) on Vercel Serverless", why: "Thin API layer; Python natural for Bedrock boto3" },
  { layer: "Model access", choice: "AWS Bedrock Runtime via boto3", why: "Vendor abstraction; Claude primary, DeepSeek/Llama/Nova supported" },
  { layer: "Structured output", choice: "Claude tool_use (JSON Schema)", why: "Forces schema compliance at API level, not instruction level" },
  { layer: "Diagrams", choice: "Mermaid.js (dynamic import)", why: "Model outputs Mermaid syntax; client renders; zero server cost" },
  { layer: "Auth", choice: "Server-side env var, X-Access-Code header", why: "Secret never in JS bundle" },
];

export default function GenAICaseStudyPage() {
  return (
    <PageLayout>
      <Section className="py-16 bg-[#f4f2ee] min-h-screen">
        <Container>
          <div className="max-w-3xl mx-auto">

            <Link
              href="/projects/genai-arch-reviewer"
              className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors mb-10"
            >
              ← GenAI Architecture Reviewer
            </Link>

            {/* Header */}
            <div className="mb-16 border-b border-[#d8d4cf] pb-12">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-4">
                CASE STUDY · 2026
              </p>
              <h1 className="text-[28px] md:text-4xl font-sans tracking-tight font-semibold text-[#111] mb-6">
                How I Engineered a Prompt That Reviews GenAI Architecture Like a Senior Engineer
              </h1>
              <p className="text-[15px] md:text-[16px] text-[#444] font-sans leading-relaxed">
                Getting senior architect feedback on GenAI system designs is slow and typically generic. Most &ldquo;review my architecture&rdquo; outputs produce platitudes: &ldquo;make sure you handle scaling,&rdquo; &ldquo;add monitoring,&rdquo; &ldquo;consider security.&rdquo; These are useless to an engineer who already knows those exist.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] font-sans leading-relaxed mt-4">
                GenAI systems have a distinct failure mode taxonomy that general-purpose reviewers miss — API quota exhaustion across tenants, context-window cost economics, embedding staleness, reranker latency tradeoffs. I built a single-prompt system with 13 explicit constraints to eliminate these failure modes by name.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="https://genai-arch-reviewer.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-widest text-[#111] hover:text-[#666] transition-colors border-b border-[#111] hover:border-[#ccc] pb-1"
                >
                  Live Demo &rarr;
                </a>
                <a
                  href="https://github.com/aseemsangalay/genai-arch-reviewer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors border-b border-[#d8d4cf] hover:border-[#111] pb-1"
                >
                  GitHub &rarr;
                </a>
              </div>
            </div>

            {/* The core insight */}
            <div className="mb-16">
              <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-6">
                THE CORE INSIGHT
              </h2>
              <blockquote className="border-l-2 border-[#111] pl-6 py-1">
                <p className="text-[17px] md:text-[18px] font-sans font-medium text-[#111] leading-relaxed italic">
                  &ldquo;A prompt is a wasted week.&rdquo; Build order: prompt quality first, frontend last. Reviews fail in specific, nameable ways. Each failure mode needs an explicit rule — not a general instruction to &lsquo;be accurate&rsquo; — but &lsquo;this specific pattern is a failed output.&rsquo;&rdquo;
                </p>
              </blockquote>
            </div>

            {/* Key decisions */}
            <div className="mb-16">
              <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-8">
                KEY DECISIONS
              </h2>
              <div className="space-y-0">
                {decisions.map((d, i) => (
                  <div key={i} className={`py-7 ${i !== 0 ? "border-t border-[#e8e6e2]" : ""}`}>
                    <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#aaa] font-mono mb-3">
                      DECISION {i + 1}
                    </p>
                    <h3 className="text-[15px] font-sans font-bold text-[#111] mb-4">{d.decision}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                      <div className="bg-[#eceae4] px-4 py-3">
                        <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#888] font-mono mb-1.5">CHOSEN</p>
                        <p className="text-[13px] text-[#222] font-sans">{d.chosen}</p>
                      </div>
                      <div className="px-4 py-3 border border-[#e0ddd8]">
                        <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#bbb] font-mono mb-1.5">REJECTED</p>
                        <p className="text-[13px] text-[#666] font-sans">{d.rejected}</p>
                      </div>
                    </div>
                    <p className="text-[14px] text-[#444] font-sans leading-relaxed">{d.reasoning}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-16">
              <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-6">
                TECHNICAL ARCHITECTURE
              </h2>
              <div className="border border-[#d8d4cf] overflow-hidden">
                <div className="grid grid-cols-3 bg-[#eceae4] px-4 py-2 border-b border-[#d8d4cf]">
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#888] font-mono">LAYER</p>
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#888] font-mono">CHOICE</p>
                  <p className="text-[9px] font-bold tracking-[0.15em] uppercase text-[#888] font-mono">WHY</p>
                </div>
                {stackRows.map((row, i) => (
                  <div key={i} className={`grid grid-cols-3 gap-4 px-4 py-3 text-[13px] font-sans ${i !== 0 ? "border-t border-[#e8e6e2]" : ""}`}>
                    <p className="text-[#111] font-medium">{row.layer}</p>
                    <p className="text-[#444]">{row.choice}</p>
                    <p className="text-[#666]">{row.why}</p>
                  </div>
                ))}
              </div>
              <p className="text-[12px] text-[#999] font-mono mt-3">
                Stateless — no DB, no session, no user accounts. Split endpoints: /api/review/demo (open, IP rate-limited 5 req/60s) vs /api/review (code required).
              </p>
            </div>

            {/* Failure modes */}
            <div className="mb-16">
              <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-3">
                PROMPT ENGINEERING: 13 FAILURE MODE RULES
              </h2>
              <p className="text-[14px] text-[#666] font-sans mb-8">
                Each rule was added in response to a specific, observed failure. The naive prompt produces the same generic output for every system — these rules are what make the output discriminating.
              </p>
              <div className="space-y-0">
                {failureModes.map((fm, i) => (
                  <div key={i} className={`py-6 ${i !== 0 ? "border-t border-[#e8e6e2]" : ""}`}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#111] font-mono">{fm.rule}</p>
                    </div>
                    <p className="text-[12px] text-[#aaa] font-mono mb-2">Failure: {fm.failure}</p>
                    <p className="text-[14px] text-[#444] font-sans leading-relaxed">{fm.fix}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The discriminating test */}
            <div className="mb-16 bg-[#111] px-8 py-8">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#666] font-mono mb-4">
                THE DISCRIMINATING TEST
              </p>
              <p className="text-[15px] font-sans text-[#f4f2ee] leading-relaxed mb-4">
                On the canonical input (1M users, OpenAI embeddings + Pinecone + GPT-4, 10K DAU, sub-2s SLA), the output must surface:
              </p>
              <p className="text-[15px] font-sans text-[#f4f2ee] leading-relaxed italic border-l-2 border-[#666] pl-4">
                &ldquo;The sub-2-second SLA is more likely broken by GPT-4 generation latency than by retrieval latency.&rdquo;
              </p>
              <p className="text-[14px] text-[#888] font-sans mt-4">
                This is what a mid-level engineer focused on Pinecone optimization would miss. Swap the system prompt with &ldquo;please review my GenAI architecture&rdquo; and the output degrades immediately to generic. The 13 rules are doing real work.
              </p>
            </div>

            {/* Domain knowledge encoded */}
            <div className="mb-16">
              <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-6">
                DOMAIN KNOWLEDGE ENCODED IN THE PROMPT
              </h2>
              <ul className="space-y-3">
                {[
                  "Vector DB behavior: API quota exhaustion hits before infrastructure limits at DAU scale",
                  "Retrieval contamination: shared index namespaces leak tenant data in multi-tenant deployments",
                  "Cost structure: generation token cost dominates infrastructure cost; chunking strategy controls unit economics more than retrieval tuning",
                  "Embedding drift: corpus changes make index stale; retrieval quality degrades invisibly",
                  "Reranker tradeoff: synchronous reranking adds tail latency under load, often not worth the precision gain",
                  "Compliance: customer data sent to external model providers may violate DPA/data residency requirements",
                ].map((item, i) => (
                  <li key={i} className="text-[14px] text-[#333] font-sans pl-4 relative leading-relaxed">
                    <span className="absolute left-0 top-[0.6em] w-1.5 h-[1.5px] bg-[#bbb] rounded-sm"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What was explicitly deferred */}
            <div className="mb-16 border-t border-[#d8d4cf] pt-10">
              <h2 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#999] font-mono mb-6">
                EXPLICITLY DEFERRED TO V2
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  "Streaming response (currently 15s blank loading state)",
                  "Automated evals / regression harness",
                  "Persistent review history",
                  "Multi-turn refinement",
                  "Diagram upload / IaC parsing",
                  "Mobile-optimized layout",
                  "Error telemetry",
                  "Adversarial input handling",
                ].map((item, i) => (
                  <p key={i} className="text-[13px] text-[#888] font-mono py-2 border-b border-[#e8e6e2]">
                    — {item}
                  </p>
                ))}
              </div>
              <p className="text-[13px] text-[#aaa] font-mono mt-4">
                12-day portfolio/demo project. Scope was deliberate.
              </p>
            </div>

            {/* Footer links */}
            <div className="border-t border-[#d8d4cf] pt-10 flex flex-wrap gap-8">
              <a
                href="https://genai-arch-reviewer.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold uppercase tracking-widest text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1"
              >
                Try the Demo &rarr;
              </a>
              <a
                href="https://github.com/aseemsangalay/genai-arch-reviewer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold uppercase tracking-widest text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1"
              >
                View Code &rarr;
              </a>
              <Link
                href="/projects"
                className="text-[11px] font-bold uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors border-b border-transparent hover:border-[#ccc] pb-1"
              >
                All Projects &rarr;
              </Link>
            </div>

          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
