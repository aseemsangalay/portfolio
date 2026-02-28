import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { readings } from "@/data/readings";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ReadingDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const reading = readings.find((r) => r.slug === slug);

    if (!reading) {
        notFound();
    }

    return (
        <Section className="text-[#111] pt-12 pb-16">
            <Container>
                <div className="max-w-3xl mx-auto">

                    {/* Breadcrumb */}
                    <div className="flex items-center gap-2 mb-12 text-[10px] font-bold uppercase tracking-[0.2em] text-[#aaa]">
                        <Link href="/brain/reading" className="hover:text-[#111] transition-colors">Brain</Link>
                        <span>/</span>
                        <Link href="/brain/reading" className="hover:text-[#111] transition-colors">Reading</Link>
                        <span>/</span>
                        <span className="text-[#888]">{reading.title}</span>
                    </div>

                    <div className="mb-20">
                        <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] font-bold text-[#999] uppercase mb-4">
                            <span>{reading.author}</span>
                            <span className="w-1.5 h-px bg-[#d8d4cf]" />
                            <span>{reading.year}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-[#111] uppercase leading-[0.9] mb-8">
                            {reading.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-[#666] font-sans font-medium leading-relaxed">
                            {reading.summary}
                        </p>
                    </div>

                    <div className="space-y-16 mb-32">
                        <h2 className="text-[11px] font-black tracking-[0.3em] text-[#aaa] uppercase border-b border-[#d8d4cf] pb-4">
                            INSIGHTS & IMPLICATIONS
                        </h2>
                        <div className="space-y-12">
                            {reading.insights?.map((insight, index) => (
                                <div key={index} className="flex gap-8 group">
                                    <span className="text-[11px] font-black text-[#ccc] mt-1.5 tracking-tighter">
                                        0{index + 1}
                                    </span>
                                    <p className="text-lg md:text-xl text-[#222] font-sans leading-relaxed">
                                        {insight}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Explore Footer */}
                    <div className="pt-12 border-t border-[#d8d4cf]">
                        <h3 className="text-[11px] font-black tracking-[0.3em] text-[#aaa] uppercase mb-6">
                            Explore
                        </h3>
                        <div className="flex flex-col gap-4">
                            <Link
                                href="/brain/notes"
                                className="flex items-center gap-3 text-sm font-sans font-bold text-[#111] uppercase group w-fit"
                            >
                                <span className="text-[#aaa] group-hover:text-[#111] transition-colors">•</span>
                                <span className="underline-animate">Systems Archive</span>
                            </Link>
                            <Link
                                href="/brain/reading"
                                className="flex items-center gap-3 text-sm font-sans font-bold text-[#111] uppercase group w-fit"
                            >
                                <span className="text-[#aaa] group-hover:text-[#111] transition-colors">•</span>
                                <span className="underline-animate">Reading Archive</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export async function generateStaticParams() {
    return readings.map((reading) => ({
        slug: reading.slug,
    }));
}
