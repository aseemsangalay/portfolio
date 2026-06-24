export function DiagramSplitBrain() {
    return (
        <div className="my-10 border border-[#d8d4cf] bg-[#ebe8e0] overflow-x-auto">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-[#d8d4cf]">
                <div className="px-6 py-3 border-r border-[#d8d4cf]">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#888] uppercase">
                        Classical Split-Brain
                    </span>
                </div>
                <div className="px-6 py-3">
                    <span className="text-[10px] font-black tracking-[0.25em] text-[#888] uppercase">
                        Semantic Split-Brain
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2">
                {/* Classical */}
                <div className="border-r border-[#d8d4cf] px-6 py-8 flex flex-col gap-4">
                    {/* Shared input */}
                    <div className="border border-[#ccc9c2] bg-[#f4f2ee] px-3 py-2 text-center">
                        <div className="text-[11px] font-black tracking-[0.15em] uppercase text-[#111]">SHARED STATE</div>
                        <div className="text-[10px] text-[#888] mt-0.5">last known good</div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-px h-3 bg-[#bbb]" />
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M0 0L4 5L8 0" fill="#bbb" /></svg>
                        </div>
                    </div>

                    {/* Two nodes + broken link */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 border border-[#ccc9c2] bg-[#f4f2ee] px-2 py-2 text-center">
                            <div className="text-[11px] font-black tracking-[0.1em] uppercase text-[#111]">NODE A</div>
                            <div className="text-[10px] text-[#888] mt-0.5">acts on stale view</div>
                        </div>

                        {/* Broken link */}
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                            <div className="w-4 h-px bg-[#bbb]" />
                            <div className="text-[9px] font-black text-[#aaa] tracking-widest">✕</div>
                            <div className="w-4 h-px bg-[#bbb]" />
                            <div className="text-[8px] text-[#aaa] uppercase tracking-[0.1em] text-center leading-tight mt-1">partition</div>
                        </div>

                        <div className="flex-1 border border-[#ccc9c2] bg-[#f4f2ee] px-2 py-2 text-center">
                            <div className="text-[11px] font-black tracking-[0.1em] uppercase text-[#111]">NODE B</div>
                            <div className="text-[10px] text-[#888] mt-0.5">acts on stale view</div>
                        </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-px h-3 bg-[#bbb]" />
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M0 0L4 5L8 0" fill="#bbb" /></svg>
                        </div>
                    </div>

                    {/* Conflict */}
                    <div className="border border-[#aaa] bg-[#dddad2] px-3 py-2 text-center">
                        <div className="text-[11px] font-black tracking-[0.15em] uppercase text-[#111]">CONFLICT</div>
                        <div className="text-[10px] text-[#888] mt-0.5">divergent writes on shared state</div>
                    </div>

                    {/* Cause label */}
                    <div className="text-center mt-1">
                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#aaa]">cause: network fault</span>
                    </div>
                </div>

                {/* Semantic / Agent */}
                <div className="px-6 py-8 flex flex-col gap-4">
                    {/* Shared input */}
                    <div className="border border-[#ccc9c2] bg-[#f4f2ee] px-3 py-2 text-center">
                        <div className="text-[11px] font-black tracking-[0.15em] uppercase text-[#111]">SAME INPUT</div>
                        <div className="text-[10px] text-[#888] mt-0.5">identical context, ambiguous spec</div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-px h-3 bg-[#bbb]" />
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M0 0L4 5L8 0" fill="#bbb" /></svg>
                        </div>
                    </div>

                    {/* Two agents + healthy link */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 border border-[#111] bg-[#111] px-2 py-2 text-center">
                            <div className="text-[11px] font-black tracking-[0.1em] uppercase text-[#f4f2ee]">AGENT A</div>
                            <div className="text-[10px] text-[#888] mt-0.5">healthy, honest</div>
                        </div>

                        {/* Healthy link */}
                        <div className="flex flex-col items-center gap-0.5 shrink-0">
                            <div className="w-4 h-px bg-[#888]" />
                            <div className="text-[8px] text-[#888] uppercase tracking-[0.1em] text-center leading-tight">intact</div>
                            <div className="w-4 h-px bg-[#888]" />
                        </div>

                        <div className="flex-1 border border-[#111] bg-[#111] px-2 py-2 text-center">
                            <div className="text-[11px] font-black tracking-[0.1em] uppercase text-[#f4f2ee]">AGENT B</div>
                            <div className="text-[10px] text-[#888] mt-0.5">healthy, honest</div>
                        </div>
                    </div>

                    {/* Arrow down */}
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center">
                            <div className="w-px h-3 bg-[#bbb]" />
                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none"><path d="M0 0L4 5L8 0" fill="#bbb" /></svg>
                        </div>
                    </div>

                    {/* Conflict */}
                    <div className="border border-[#aaa] bg-[#dddad2] px-3 py-2 text-center">
                        <div className="text-[11px] font-black tracking-[0.15em] uppercase text-[#111]">CONFLICT</div>
                        <div className="text-[10px] text-[#888] mt-0.5">divergent beliefs from same input</div>
                    </div>

                    {/* Cause label */}
                    <div className="text-center mt-1">
                        <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-[#aaa]">cause: ambiguity, not fault</span>
                    </div>
                </div>
            </div>

            {/* Caption */}
            <div className="border-t border-[#d8d4cf] px-6 py-3">
                <p className="text-[10px] text-[#aaa] font-sans tracking-[0.1em] uppercase">
                    Byzantine fault tolerance requires a broken node. Semantic split-brain requires only an ambiguous one.
                </p>
            </div>
        </div>
    );
}
