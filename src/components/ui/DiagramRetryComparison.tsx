export function DiagramRetryComparison() {
    const classicalSteps = [
        { label: "REQUEST", sub: "client sends operation" },
        { label: "NODE", sub: "deterministic execution", accent: false },
        { label: "NETWORK DROPS", sub: "timeout / silence", warn: true },
        { label: "RETRY", sub: "same request, same key" },
        { label: "SAME OUTPUT", sub: "hash matches — deduped", ok: true },
        { label: "SAFE", sub: "idempotency key holds", final: true, good: true },
    ];

    const agentSteps = [
        { label: "REQUEST", sub: "client sends operation" },
        { label: "NODE", sub: "stochastic reasoning", accent: true },
        { label: "NETWORK DROPS", sub: "timeout / silence", warn: true },
        { label: "RETRY", sub: "same trigger, fresh reasoning" },
        { label: "DIFFERENT PLAN", sub: "new tools, new args, new path", bad: true },
        { label: "UNSAFE", sub: "idempotency key has no match", final: true, good: false },
    ];

    return (
        <div className="my-10 border border-[#d8d4cf] bg-[#ebe8e0] overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-[#d8d4cf]">
                <div className="px-6 py-3 border-r border-[#d8d4cf]">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#888] uppercase">
                        Classical Retry
                    </span>
                </div>
                <div className="px-6 py-3">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#888] uppercase">
                        Agent Retry
                    </span>
                </div>
            </div>

            {/* Flow columns */}
            <div className="grid grid-cols-2">
                {/* Classical */}
                <div className="border-r border-[#d8d4cf] px-6 py-8 flex flex-col items-center gap-0">
                    {classicalSteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center w-full">
                            <div
                                className={[
                                    "w-full border px-3 py-2 text-center",
                                    step.final && step.good
                                        ? "border-[#111] bg-[#111] text-[#f4f2ee]"
                                        : step.warn
                                        ? "border-[#bbb] bg-[#e3e0d8]"
                                        : step.ok
                                        ? "border-[#888] bg-[#dddad2]"
                                        : "border-[#ccc9c2] bg-[#f4f2ee]",
                                ].join(" ")}
                            >
                                <div
                                    className={[
                                        "text-[11px] font-black tracking-[0.15em] uppercase",
                                        step.final && step.good ? "text-[#f4f2ee]" : "text-[#111]",
                                    ].join(" ")}
                                >
                                    {step.label}
                                </div>
                                <div
                                    className={[
                                        "text-[10px] font-medium mt-0.5",
                                        step.final && step.good ? "text-[#aaa]" : "text-[#888]",
                                    ].join(" ")}
                                >
                                    {step.sub}
                                </div>
                            </div>
                            {i < classicalSteps.length - 1 && (
                                <div className="flex flex-col items-center py-1">
                                    <div className="w-px h-3 bg-[#bbb]" />
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                                        <path d="M0 0L4 5L8 0" fill="#bbb" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Agent */}
                <div className="px-6 py-8 flex flex-col items-center gap-0">
                    {agentSteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center w-full">
                            <div
                                className={[
                                    "w-full border px-3 py-2 text-center",
                                    step.final && !step.good
                                        ? "border-[#888] bg-[#d8d4cc]"
                                        : step.accent
                                        ? "border-[#111] bg-[#111]"
                                        : step.bad
                                        ? "border-[#aaa] bg-[#e0ddd5]"
                                        : step.warn
                                        ? "border-[#bbb] bg-[#e3e0d8]"
                                        : "border-[#ccc9c2] bg-[#f4f2ee]",
                                ].join(" ")}
                            >
                                <div
                                    className={[
                                        "text-[11px] font-black tracking-[0.15em] uppercase",
                                        step.accent ? "text-[#f4f2ee]" : "text-[#111]",
                                    ].join(" ")}
                                >
                                    {step.label}
                                </div>
                                <div
                                    className={[
                                        "text-[10px] font-medium mt-0.5",
                                        step.accent ? "text-[#888]" : "text-[#888]",
                                    ].join(" ")}
                                >
                                    {step.sub}
                                </div>
                            </div>
                            {i < agentSteps.length - 1 && (
                                <div className="flex flex-col items-center py-1">
                                    <div className="w-px h-3 bg-[#bbb]" />
                                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
                                        <path d="M0 0L4 5L8 0" fill="#bbb" />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Caption */}
            <div className="border-t border-[#d8d4cf] px-6 py-3">
                <p className="text-[10px] text-[#aaa] font-sans tracking-[0.1em] uppercase">
                    Same trigger. Same idempotency key logic. Classical node reproduces the operation — agent reproduces a decision.
                </p>
            </div>
        </div>
    );
}
