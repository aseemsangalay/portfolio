import { Container } from "@/components/ui/Container";
import { readings } from "@/data/readings";
import Link from "next/link";

export default function ReadingLogPage() {
    return (
        <section className="pt-24 md:pt-32 pb-24 selection:bg-[#111] selection:text-[#f4f2ee]">
            <Container>
                <div className="max-w-4xl mx-auto">

                    <div className="mb-10">
                        <h1 className="text-3xl font-sans font-bold tracking-tight text-[#111] uppercase mb-2">
                            Reading Archive
                        </h1>
                        <p className="text-sm text-[#888] font-sans">
                            Curated logs of books and engineering theory.
                        </p>
                    </div>

                    <div className="w-full">
                        {/* Table Header — desktop only */}
                        <div className="hidden md:grid grid-cols-[100px_1fr_120px] pb-4 border-b border-[#d8d4cf] px-2 pl-4">
                            <span className="text-[10px] tracking-[0.2em] font-black text-[#aaa] uppercase">Year</span>
                            <span className="text-[10px] tracking-[0.2em] font-black text-[#aaa] uppercase">Title</span>
                            <span className="text-[10px] tracking-[0.2em] font-black text-[#aaa] uppercase text-right">Topic</span>
                        </div>

                        {/* Table Rows */}
                        <div className="flex flex-col">
                            {readings.map((reading) => (
                                <Link
                                    key={reading.slug}
                                    href={`/brain/reading/${reading.slug}`}
                                    className="group relative border-b border-[#d8d4cf]/60 border-l-2 border-transparent hover:border-[#111] hover:bg-[#111]/[0.02] transition-all duration-300
                                        flex flex-col gap-1 py-4 pl-4 pr-2
                                        md:grid md:grid-cols-[100px_1fr_120px] md:items-center md:py-3"
                                >
                                    {/* Year */}
                                    <span className="text-[11px] text-[#888] font-sans font-medium tabular-nums uppercase tracking-[0.1em]">
                                        {reading.year}
                                    </span>

                                    {/* Title + Author */}
                                    <div className="flex flex-col">
                                        <span className="text-[15px] text-[#111] font-sans font-bold uppercase tracking-tight underline-animate inline-block w-fit">
                                            {reading.title}
                                        </span>
                                        <span className="text-[11px] text-[#aaa] font-sans font-medium uppercase mt-0.5">
                                            {reading.author}
                                        </span>
                                    </div>

                                    {/* Tag — badge on mobile, plain text on desktop */}
                                    <span className="inline-flex w-fit md:w-auto md:justify-end">
                                        <span className="text-[10px] font-black uppercase tracking-[0.15em] text-[#888] bg-[#111]/[0.06] px-2 py-0.5 rounded
                                            md:bg-transparent md:px-0 md:py-0 md:text-[11px] md:text-[#aaa] md:tracking-[0.1em] md:text-right md:pr-2">
                                            {reading.tags?.[0] || 'RESEARCH'}
                                        </span>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
