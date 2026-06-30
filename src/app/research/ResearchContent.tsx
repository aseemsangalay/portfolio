"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const publications = [
    {
        title: "An Exploratory Study on Fine-Tuning Large Language Models for Secure Code Generation",
        venue: "Empirical Software Engineering, Springer — Vol. 31, Issue 4",
        venueExpanded: "Empirical Software Engineering",
        location: "Vol. 31, Issue 4",
        year: "2026",
        doi: "10.1007/s10664-026-10803-9",
        doiUrl: "https://link.springer.com/article/10.1007/s10664-026-10803-9",
        arxivUrl: "https://arxiv.org/abs/2408.09078",
        authors: "Junjie Li, Fazle Rabbi, Cheng Cheng, Aseem Sangalay, Yuan Tian, Jinqiu Yang",
        tags: ["LLM", "Security", "Fine-tuning", "LoRA", "CodeLlama"],
        summary:
            "Extended journal study examining whether fine-tuning pre-trained LLMs on vulnerability-fixing commits promotes secure code generation. Applied LoRA and IA3 parameter-efficient fine-tuning on multiple LLMs including CodeLlama across a dataset of 14,622 C/C++ files. Found that larger fine-tuning datasets produce more secure output without degrading correctness — CodeLlama showed a 2% PASS@1 improvement under HumanEval CPP with secure fine-tuning.",
    },
    {
        title: "Fine Tuning Large Language Model for Secure Code Generation",
        venue: "IEEE/ACM FORGE '24",
        venueExpanded: "1st International Conference on AI Foundation Models and Software Engineering",
        location: "Lisbon, Portugal — pp. 86–90",
        year: "2024",
        doi: "10.1145/3650105.3652299",
        doiUrl: "https://dl.acm.org/doi/10.1145/3650105.3652299",
        authors: "Junjie Li, Aseem Sangalay, Cheng Cheng, Yuan Tian, Jinqiu Yang",
        tags: ["LLM", "Security", "Code Generation", "GPT-J", "Fine-tuning"],
        summary:
            "Conference paper demonstrating that fine-tuning GPT-J on real-world vulnerability fixes steers LLM code generation away from insecure patterns. Achieved ~10% increase in vulnerability-free C code output, showing targeted fine-tuning on security-relevant data meaningfully shifts model behaviour without sacrificing generation quality.",
    },
    {
        title: "Software Defect Prediction Using Abstract Syntax Trees Features and Object-Oriented Metrics",
        venue: "Springer — Reliability Engineering for Industrial Processes",
        venueExpanded: "Springer Series in Reliability Engineering",
        location: "pp. 189–201",
        year: "2024",
        doi: "10.1007/978-3-031-55048-5_13",
        doiUrl: "https://doi.org/10.1007/978-3-031-55048-5_13",
        authors: "A. Sethi, A. Sangalay, R. Malhotra",
        tags: ["Deep Learning", "AST", "Defect Prediction", "LSTM", "CNN"],
        summary:
            "Framed software bug prediction as a regression problem and compared LSTM and CNN models trained on Abstract Syntax Tree features and object-oriented code metrics against classical ML baselines. AST-based structural representations outperform flat OO metrics alone for predicting defect-prone modules.",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
};

export default function ResearchContent() {
    return (
        <main className="bg-[#f4f2ee] pt-20 md:pt-24">
            <Section className="bg-[#f4f2ee] text-[#111] pt-0 pb-24 md:pt-0 md:pb-32 selection:bg-[#111] selection:text-[#f4f2ee]">
                <Container>
                    <div className="max-w-3xl mx-auto">

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6 md:mb-10"
                        >
                            <h1 className="text-[28px] md:text-4xl font-sans tracking-tight font-semibold mb-2 text-[#111]">
                                Research
                            </h1>
                            <p className="text-[14px] md:text-[15px] text-[#666] font-sans leading-relaxed">
                                Peer-reviewed publications on AI safety, LLM behaviour, and software reliability.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col"
                        >
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={pub.doi}
                                    variants={itemVariants}
                                    className={`py-8 md:py-10 ${index !== 0 ? "border-t border-[#d8d4cf]" : ""}`}
                                >
                                    <div className="flex flex-col gap-3">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                            <h2 className="text-[16px] md:text-[18px] font-sans font-bold tracking-tight text-[#111] leading-snug max-w-xl">
                                                {pub.title}
                                            </h2>
                                            <div className="flex gap-3 shrink-0">
                                                <a
                                                    href={pub.doiUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#666] border-b border-[#d8d4cf] hover:border-[#111] hover:text-[#111] transition-colors pb-px w-fit"
                                                >
                                                    DOI ↗
                                                </a>
                                                {"arxivUrl" in pub && (
                                                    <a
                                                        href={(pub as typeof pub & { arxivUrl: string }).arxivUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[10px] font-bold tracking-[0.1em] uppercase text-[#666] border-b border-[#d8d4cf] hover:border-[#111] hover:text-[#111] transition-colors pb-px w-fit"
                                                    >
                                                        arXiv ↗
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-[13px] font-semibold text-[#444] font-sans">
                                                {pub.venue}
                                            </span>
                                            <span className="text-[12px] text-[#888] font-sans">
                                                {pub.venueExpanded} · {pub.location} · {pub.year}
                                            </span>
                                        </div>

                                        <p className="text-[12px] text-[#777] font-sans italic">
                                            {pub.authors}
                                        </p>

                                        <p className="text-[14px] md:text-[15px] text-[#333] font-sans leading-[1.6]">
                                            {pub.summary}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-1">
                                            {pub.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#666] border border-[#d8d4cf] px-2 py-0.5 rounded-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </Container>
            </Section>
            <Footer />
        </main>
    );
}
