"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { WorkExperience } from "@/types";
import { workExperiences } from "@/data/work";
import { motion } from "framer-motion";

interface WorkSectionProps {
    data?: WorkExperience[];
}

// Helper to bold markdown-style metrics
function formatImpact(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={i} className="font-semibold text-[#111]">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
}

export default function WorkSection({ data = workExperiences }: WorkSectionProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <Section id="work" className="bg-[#f4f2ee] text-[#111] pt-20 pb-32 md:pt-32 md:pb-48 selection:bg-[#111] selection:text-[#f4f2ee]">
            <Container>
                <div className="max-w-3xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 md:mb-16"
                    >
                        <h2 className="text-[28px] md:text-4xl font-sans tracking-tight font-semibold mb-2 text-[#111]">
                            Experience
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col"
                    >
                        {data.map((work, index) => (
                            <motion.div
                                key={work.company}
                                variants={itemVariants}
                                className={`py-8 md:py-10 ${index !== 0 ? "border-t border-[#d8d4cf]" : ""}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                                    <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
                                        <h3 className="text-lg md:text-xl font-sans font-bold tracking-tight text-[#111]">
                                            {work.role}
                                        </h3>
                                        <span className="text-[14px] md:text-[15px] font-sans font-medium text-[#777]">
                                            {work.company}
                                        </span>
                                    </div>
                                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase text-[#666] shrink-0 font-mono">
                                        {work.period}
                                    </span>
                                </div>

                                <ul className="space-y-2 md:space-y-1.5">
                                    {work.impacts.map((impact, impactIndex) => (
                                        <li
                                            key={impactIndex}
                                            className="text-[14px] md:text-[15px] text-[#222] font-sans leading-[1.5] md:leading-[1.4] pl-4 relative"
                                        >
                                            <span className="absolute left-0 top-[0.6em] w-1.5 h-[1.5px] bg-[#999] rounded-sm"></span>
                                            {formatImpact(impact)}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-8 md:mt-12 pt-8 md:pt-10 border-t border-[#d8d4cf]"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-widest text-[#888] cursor-not-allowed border-b border-transparent pb-1 inline-block">
                            View Full Résumé (Coming Soon)
                        </span>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
