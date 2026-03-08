"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const metaFields = [
    { label: "BASED IN", value: "HYDERABAD, IN" },
    { label: "FOCUS", value: "DIST. SYSTEMS" },
    { label: "EXPERIENCE", value: "2+ YEARS" },
    { label: "RESEARCH", value: "3 PUBLICATIONS" },
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
        <section id="hero" className="w-full bg-[#f4f2ee] text-[#111] min-h-screen flex flex-col overflow-hidden">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto w-full max-w-[1280px] px-[24px] md:px-[96px] pt-[80px] md:pt-[140px] flex-1 flex flex-col"
            >
                {/* 1. STRUCTURAL GRID */}
                <div className="flex flex-col md:flex-row items-start justify-between">
                    {/* Left Column - Content */}
                    <div className="flex-1 w-full">
                        <motion.h1
                            variants={itemVariants}
                            className="text-[42px] sm:text-[52px] md:text-[82px] font-sans font-semibold leading-[1.05] tracking-tight text-[#111] mb-[20px] md:mb-[28px]"
                        >
                            Aseem Sangalay
                        </motion.h1>

                        <motion.h2
                            variants={itemVariants}
                            className="text-[22px] md:text-[34px] font-serif italic text-[#222] leading-[1.3] mb-[32px] md:mb-[42px]"
                        >
                            Designing systems that endure.
                        </motion.h2>

                        <motion.p
                            variants={itemVariants}
                            className="text-[11px] md:text-[12px] tracking-[0.15em] text-[#888] uppercase font-sans font-medium mb-[40px] md:mb-[46px]"
                        >
                            SOFTWARE ENGINEER &middot; DISTRIBUTED SYSTEMS &middot; RESEARCH
                        </motion.p>

                        <div className="flex flex-row justify-between items-start md:block">
                            {/* Links Column */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col md:flex-row gap-[16px] md:gap-[56px] text-[13px] md:text-[14px] font-bold tracking-[0.05em]"
                            >
                                <Link
                                    href="/experience"
                                    className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 w-fit"
                                >
                                    Experience &rarr;
                                </Link>
                                <Link
                                    href="/projects"
                                    className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 w-fit"
                                >
                                    Projects &rarr;
                                </Link>
                                <Link
                                    href="/research"
                                    className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 w-fit"
                                >
                                    Research &rarr;
                                </Link>
                                <Link
                                    href="/brain"
                                    className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 w-fit"
                                >
                                    Brain &rarr;
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 w-fit"
                                >
                                    Contact &rarr;
                                </Link>
                            </motion.div>

                            {/* Mobile Meta Column (Visible only on small screens) */}
                            <div className="flex md:hidden flex-col space-y-[24px] text-right">
                                {metaFields.map((field) => (
                                    <motion.div key={field.label} variants={itemVariants} className="flex flex-col items-end">
                                        <span className="text-[10px] tracking-[0.2em] font-black text-[#777] uppercase mb-[2px] leading-none font-mono">
                                            {field.label}
                                        </span>
                                        <span className="text-[12px] font-sans text-[#444] tracking-tight uppercase font-medium">
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
                                <span className="text-[11px] tracking-[0.2em] font-black text-[#777] uppercase mb-[2px] leading-none font-mono">
                                    {field.label}
                                </span>
                                <span className="text-[14px] font-sans text-[#444] tracking-tight uppercase font-medium">
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
                    <div className="border-t border-[#d8d4cf] w-full h-[1px]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
