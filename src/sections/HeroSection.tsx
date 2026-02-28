import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="hero" className="w-full bg-[#f4f2ee] text-[#111] overflow-hidden">
            <div className="mx-auto w-full max-w-[1280px] px-[96px] pt-[140px] pb-[100px]">
                {/* 1. STRUCTURAL GRID */}
                <div className="flex flex-row items-start justify-between">
                    {/* Left Column - Content */}
                    <div className="flex-1">
                        <h1 className="text-[88px] font-sans font-semibold leading-[1.05] tracking-tight text-[#111] mb-[28px]">
                            Aseem Sangalay
                        </h1>

                        <h2 className="text-[34px] font-serif italic text-[#333] leading-[1.3] mb-[42px]">
                            Designing systems that endure.
                        </h2>

                        <p className="text-[12px] tracking-[0.18em] text-[#888] uppercase font-sans font-medium mb-[56px]">
                            SOFTWARE ENGINEER &middot; DISTRIBUTED SYSTEMS &middot; RESEARCH
                        </p>

                        <div className="flex flex-row gap-[56px] text-[14px] font-bold tracking-[0.05em]">
                            <Link
                                href="/experience"
                                className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1"
                            >
                                View Experience &rarr;
                            </Link>
                            <Link
                                href="/projects"
                                className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1"
                            >
                                View Projects &rarr;
                            </Link>
                            <Link
                                href="/research"
                                className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1"
                            >
                                Research &rarr;
                            </Link>
                        </div>
                    </div>

                    {/* Right Column - Meta Column */}
                    <div className="flex flex-col space-y-[44px] pt-[14px] shrink-0 text-right w-[300px]">
                        <div className="flex flex-col items-end">
                            <span className="text-[11px] tracking-[0.2em] font-black text-[#aaa] uppercase mb-1 leading-none">BASED IN</span>
                            <span className="text-[14px] font-sans text-[#444] tracking-tight uppercase font-medium">NEW YORK, NY</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[11px] tracking-[0.2em] font-black text-[#aaa] uppercase mb-1 leading-none">FOCUS</span>
                            <span className="text-[14px] font-sans text-[#444] tracking-tight uppercase font-medium">DIST. SYSTEMS</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[11px] tracking-[0.2em] font-black text-[#aaa] uppercase mb-1 leading-none">EXPERIENCE</span>
                            <span className="text-[14px] font-sans text-[#444] tracking-tight uppercase font-medium">2+ YEARS</span>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-[11px] tracking-[0.2em] font-black text-[#aaa] uppercase mb-1 leading-none">RESEARCH</span>
                            <span className="text-[14px] font-sans text-[#444] tracking-tight uppercase font-medium">3 PUBLICATIONS</span>
                        </div>
                    </div>
                </div>

                {/* 2. DIVIDER */}
                <div className="mt-[60px] w-full">
                    <div className="border-t border-[#d8d4cf] w-full h-[1px]" />
                </div>
            </div>
        </section>
    );
}
