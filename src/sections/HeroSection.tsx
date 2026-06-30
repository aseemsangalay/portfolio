"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const metaFields = [
    { label: "BASED IN", value: "HYDERABAD, IN" },
    { label: "FOCUS", value: "AI ENGINEERING" },
    { label: "EXPERIENCE", value: "3+ YEARS" },
    { label: "RESEARCH", value: "3+ PUBLICATIONS" },
];

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <section id="hero" className="w-full bg-[#f4f2ee] text-foreground min-h-screen flex flex-col overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 md:px-8 pt-[80px] md:pt-[140px] flex-1 flex flex-col"
            >
                {/* 1. STRUCTURAL GRID */}
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left Column - Content */}
                    <div className="flex-1 w-full">
                        <motion.h1
                            variants={itemVariants}
                            className="text-display font-semibold text-foreground mb-[20px] md:mb-[28px]"
                        >
                            Aseem Sangalay
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-[22px] md:text-[34px] font-serif italic text-foreground-muted leading-[1.3] mb-[32px] md:mb-[42px]"
                        >
                            Designing systems that endure.
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-[11px] md:text-[12px] tracking-[0.15em] text-subtext uppercase font-sans font-medium mb-[40px] md:mb-[46px]"
                        >
                            SENIOR SOFTWARE ENGINEER &middot; AI ENGINEERING &middot; RESEARCH
                        </motion.p>

                        <div className="flex flex-row justify-between items-start md:block">
                            {/* Links Column */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col md:flex-row gap-[16px] md:gap-[56px] text-[13px] md:text-[14px] font-bold tracking-[0.05em]"
                            >
                                <Link
                                    href="/experience"
                                    className="inline-flex items-center text-foreground hover:text-subtext transition-colors border-b border-transparent hover:border-border pb-1 w-fit"
                                >
                                    Experience &rarr;
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center text-foreground hover:text-subtext transition-colors border-b border-transparent hover:border-border pb-1 w-fit"
                                >
                                    Projects &rarr;
                                </Link>
                                <Link
                                    href="/research"
                                    className="inline-flex items-center text-foreground hover:text-subtext transition-colors border-b border-transparent hover:border-border pb-1 w-fit"
                                >
                                    Research &rarr;
                                </Link>
                                <Link
                                    href="/brain"
                                    className="inline-flex items-center text-foreground hover:text-subtext transition-colors border-b border-transparent hover:border-border pb-1 w-fit"
                                >
                                    Brain &rarr;
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-foreground hover:text-subtext transition-colors border-b border-transparent hover:border-border pb-1 w-fit"
                                >
                                    Contact &rarr;
                                </Link>
                            </motion.div>

                            {/* Featured project — desktop only */}
                            <motion.div
                                variants={itemVariants}
                                className="hidden md:flex mt-[40px] md:mt-[48px]"
                            >
                                <Link
                                    href="/projects/genai-arch-reviewer/case-study"
                                    className="inline-flex items-center gap-3 group"
                                >
                                    <span className="text-[9px] font-black tracking-[0.25em] uppercase text-subtext">
                                        FEATURED
                                    </span>
                                    <span className="w-6 h-px bg-border group-hover:w-10 transition-all duration-300" />
                                    <span className="text-[12px] md:text-[13px] font-medium text-foreground-muted group-hover:text-foreground transition-colors">
                                        GenAI Architecture Reviewer — senior-architect critique from a single prompt
                                    </span>
                                </Link>
                            </motion.div>

                            {/* Mobile Meta Column (Visible only on small screens) */}
                            <div className="flex md:hidden flex-col space-y-[24px] text-right">
                                {metaFields.map((field) => (
                                    <motion.div key={field.label} variants={itemVariants} className="flex flex-col items-end">
                                        <span className="text-[12px] tracking-[0.2em] font-black text-subtext uppercase mb-[2px] leading-none font-mono">
                                            {field.label}
                                        </span>
                                        <span className="text-[12px] font-sans text-foreground-muted tracking-tight uppercase font-medium">
                                            {field.value}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop Meta Column (Visible only on medium+ screens) */}
                    <div className="hidden md:flex flex-col space-y-[44px] pt-[14px] shrink-0 text-right w-[300px]">
                        {metaFields.map((field) => (
                            <motion.div key={field.label} variants={itemVariants} className="flex flex-col items-end">
                                <span className="text-[11px] tracking-[0.2em] font-black text-subtext uppercase mb-[2px] leading-none font-mono">
                                    {field.label}
                                </span>
                                <span className="text-[14px] font-sans text-foreground-muted tracking-tight uppercase font-medium">
                                    {field.value}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. DIVIDER */}
                <motion.div
                    variants={itemVariants}
                    className="mt-auto mb-[8vh] w-full"
                >
                    <div className="border-t border-hairline w-full h-[1px]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
