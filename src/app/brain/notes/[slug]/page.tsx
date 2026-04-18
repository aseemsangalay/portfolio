import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { brainEntries } from "@/data/brain";
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
    const entry = brainEntries.find((e) => e.slug === slug);

    if (!entry) return {};

    const rawDescription = entry.content
        ? entry.content.replace(/[#*`_~\[\]]/g, "").trim().slice(0, 160)
        : entry.thesis.slice(0, 160);

    const url = `https://www.aseemsangalay.com/brain/notes/${slug}`;

    return {
        title: `${entry.title} | Aseem Sangalay`,
        description: rawDescription,
        openGraph: {
            title: entry.title,
            description: rawDescription,
            url,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: entry.title,
            description: rawDescription,
        },
    };
}

export default async function NoteDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const entry = brainEntries.find((e) => e.slug === slug);

    if (!entry) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#f4f2ee]">
            <Section className="text-[#111] pt-0 pb-24 md:pt-0 md:pb-32">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <Link href="/brain/notes" className="text-[11px] font-bold uppercase tracking-widest text-[#666] hover:text-[#111] transition-colors mb-16 inline-block">
                            &larr; Back to Index
                        </Link>

                        <div className="mb-16">
                            <div className="flex items-center gap-4 text-[11px] tracking-[0.2em] font-bold text-[#666] uppercase mb-4">
                                <span>{entry.entryType}</span>
                                <span className="w-1.5 h-px bg-[#d8d4cf]" />
                                <span>{entry.year}</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-[#111] uppercase leading-[0.92] md:leading-[0.88] mb-8">
                                {entry.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-[#444] font-sans font-medium italic leading-relaxed border-l-4 border-[#d8d4cf] pl-8">
                                &quot;{entry.thesis}&quot;
                            </p>
                        </div>

                        {entry.content ? (
                            <MarkdownRenderer content={entry.content} />
                        ) : (
                            <div className="space-y-12">
                                {entry.highlights.map((highlight, index) => (
                                    <div key={index} className="flex gap-8 group">
                                        <span className="text-[11px] font-black text-[#ccc] mt-1.5 tracking-tighter">
                                            0{index + 1}
                                        </span>
                                        <p className="text-lg md:text-xl text-[#222] font-sans leading-relaxed">
                                            {highlight}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
            <Footer />
        </main>
    );
}

export async function generateStaticParams() {
    return brainEntries.map((entry) => ({
        slug: entry.slug,
    }));
}
