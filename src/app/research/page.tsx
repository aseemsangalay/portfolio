import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Footer from "@/components/Footer";
import { writings } from "@/data/writings";
import Link from "next/link";

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-[#f4f2ee]">
            <Section className="bg-[#f4f2ee] text-[#111] pt-32 pb-48 selection:bg-[#111] selection:text-[#f4f2ee]">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-sans tracking-tight font-semibold mb-2 text-[#111]">
                                Research & Writings
                            </h2>
                            <p className="text-[12px] tracking-wide text-[#888] uppercase font-sans font-medium">
                                Academic work and distilled thinking on systems.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {writings.map((writing, index) => (
                                <div
                                    key={writing.slug}
                                    className={`py-10 ${index !== 0 ? "border-t border-[#d8d4cf]" : ""}`}
                                >
                                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                                        <h3 className="text-lg md:text-xl font-sans font-bold tracking-tight text-[#111]">
                                            <Link href={`/writings/${writing.slug}`} className="hover:text-[#666] transition-colors">
                                                {writing.title}
                                            </Link>
                                        </h3>
                                        <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#666] shrink-0">
                                            {writing.date}
                                        </span>
                                    </div>
                                    <p className="text-[15px] text-[#444] font-sans font-medium leading-relaxed mb-4">
                                        {writing.summary}
                                    </p>
                                    <div className="flex gap-4">
                                        {writing.tags.map(tag => (
                                            <span key={tag} className="text-[10px] tracking-[0.1em] font-bold text-[#888] uppercase">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
            <Footer />
        </main>
    );
}
