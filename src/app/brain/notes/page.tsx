import { Container } from "@/components/ui/Container";
import { brainEntries } from "@/data/brain";
import Link from "next/link";

export default function SystemsNotesPage() {
    return (
        <section className="pt-12 pb-24 selection:bg-[#111] selection:text-[#f4f2ee]">
            <Container>
                <div className="max-w-4xl mx-auto">

                    <div className="mb-10">
                        <h1 className="text-3xl font-sans font-bold tracking-tight text-[#111] uppercase mb-2">
                            Systems Archive
                        </h1>
                        <p className="text-sm text-[#888] font-sans">
                            Engineering intelligence and architectural logs.
                        </p>
                    </div>

                    <div className="w-full">
                        {/* Table Header */}
                        <div className="grid grid-cols-[100px_1fr_120px] pb-4 border-b border-[#d8d4cf] px-2 pl-4">
                            <span className="text-[10px] tracking-[0.2em] font-black text-[#aaa] uppercase">Date</span>
                            <span className="text-[10px] tracking-[0.2em] font-black text-[#aaa] uppercase">Title</span>
                            <span className="text-[10px] tracking-[0.2em] font-black text-[#aaa] uppercase text-right">Category</span>
                        </div>

                        {/* Table Rows */}
                        <div className="flex flex-col">
                            {brainEntries.map((entry) => (
                                <Link
                                    key={entry.slug}
                                    href={`/brain/notes/${entry.slug}`}
                                    className="grid grid-cols-[100px_1fr_120px] py-3 border-b border-[#d8d4cf]/60 hover:bg-[#111]/[0.02] transition-all duration-300 pl-4 pr-2 group relative border-l-2 border-transparent hover:border-[#111]"
                                >
                                    <span className="text-[13px] text-[#888] font-sans font-medium tabular-nums">
                                        {entry.year}
                                    </span>
                                    <span className="text-[15px] text-[#111] font-sans font-bold uppercase tracking-tight transition-colors underline-animate inline-block w-fit">
                                        {entry.title}
                                    </span>
                                    <span className="text-[11px] text-[#aaa] font-sans font-medium uppercase tracking-[0.1em] text-right pr-2">
                                        {entry.entryType}
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
