import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Link from "next/link";

export default function BrainSection() {
    return (
        <Section id="brain" className="bg-[#f4f2ee] text-[#111] pt-0 pb-24 md:pt-0 md:pb-32 selection:bg-[#111] selection:text-[#f4f2ee]">
            <Container>
                <div className="max-w-4xl mx-auto">

                    {/* --- TOP SECTION --- */}
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-black mb-2 text-[#111] uppercase">
                            Brain
                        </h2>
                        <p className="text-[11px] md:text-[12px] tracking-[0.1em] text-[#888] uppercase font-sans font-medium">
                            Notes on systems and media shaping my thinking.
                        </p>
                    </div>

                    <div className="border-t border-[#d8d4cf] mb-0" />

                    {/* --- MAIN SECTION (SPLIT LAYOUT) --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 relative group overflow-hidden border-b border-[#d8d4cf]">

                        {/* Vertical Divider */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-[#d8d4cf] -translate-x-1/2 opacity-60 z-10" />

                        {/* Left Column: Systems Notes */}
                        <Link
                            href="/brain/notes"
                            className="flex flex-col py-16 md:py-24 px-6 md:px-12 group/col hover:bg-[#eceae4] transition-all duration-700 relative border-b md:border-b-0 border-[#d8d4cf]"
                        >
                            <div className="relative z-20">
                                <h3 className="text-2xl md:text-4xl font-sans font-black tracking-tight text-[#111] uppercase mb-1">
                                    Notes
                                </h3>
                                <p className="text-[14px] md:text-[16px] text-[#444] font-sans font-medium leading-relaxed mb-6 md:mb-8">
                                    Engineering judgment, distilled.
                                </p>

                                <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-12">
                                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-bold text-[#aaa] uppercase">
                                        2 ESSAYS
                                    </span>
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#111] md:opacity-50 md:group-hover/col:opacity-100 transition-all duration-500 md:translate-x-0 md:group-hover/col:translate-x-1">
                                        Enter &rarr;
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Right Column: Reading & Media */}
                        <Link
                            href="/brain/reading"
                            className="flex flex-col py-16 md:py-24 px-6 md:px-12 group/col hover:bg-[#eceae4] transition-all duration-700 relative"
                        >
                            <div className="relative z-20">
                                <h3 className="text-2xl md:text-4xl font-sans font-black tracking-tight text-[#111] uppercase mb-1">
                                    Reading & Media
                                </h3>
                                <p className="text-[14px] md:text-[16px] text-[#444] font-sans font-medium leading-relaxed mb-6 md:mb-8">
                                    Books and ideas shaping my decisions.
                                </p>

                                <div className="flex flex-col gap-6 md:gap-8 mt-8 md:mt-12">
                                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] font-bold text-[#aaa] uppercase">
                                        14 BOOKS
                                    </span>
                                    <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#111] md:opacity-50 md:group-hover/col:opacity-100 transition-all duration-500 md:translate-x-0 md:group-hover/col:translate-x-1">
                                        Explore &rarr;
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </Container>
        </Section>
    );
}
