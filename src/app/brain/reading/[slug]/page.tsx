import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { readings } from "@/data/readings";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const reading = readings.find((r) => r.slug === slug);

    if (!reading) return {};

    const description = reading.summary ?? reading.insights?.[0] ?? "";
    const url = `https://aseemsangalay.com/brain/reading/${slug}`;

    return {
        title: `${reading.title} — ${reading.author} | Aseem Sangalay`,
        description,
        openGraph: { title: reading.title, description, url, type: "article" },
        twitter: { card: "summary_large_image", title: reading.title, description },
    };
}

export default async function ReadingDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const reading = readings.find((r) => r.slug === slug);

    if (!reading) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f4f2ee]">
            <Section className="text-[#111] pt-0 pb-24 md:pt-0 md:pb-32">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Link href="/brain/reading" className="text-[11px] font-bold uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors mb-16 inline-block">
                            &larr; Back to Index
                        </Link>

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

                        <div className="space-y-16">
                            <h2 className="text-[11px] font-black tracking-[0.3em] text-[#aaa] uppercase border-b border-[#d8d4cf] pb-4">
                                INSIGHTS & IMPLICATIONS
                            </h2>
                            <div className="space-y-12">
                                {reading.insights?.map((insight, index) => (
                                    <div key={index} className="flex gap-8">
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
                    </div>
                </Container>
            </Section>
            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return readings.map((reading) => ({
        slug: reading.slug,
    }));
}
