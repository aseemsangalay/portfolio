"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/config/site";

interface ContactSectionProps {
    title?: string;
    subtitle?: string;
}

export default function ContactSection({
    title = "If you’re building systems that matter, we should talk.",
    subtitle = "I work on systems, infrastructure, and ideas that compound.",
}: ContactSectionProps) {
    return (
        <Section id="contact" className="bg-[#f4f2ee] text-[#111] selection:bg-[#111] selection:text-[#f4f2ee] pb-24 md:pb-32">
            <Container>
                <div className="max-w-3xl mx-auto border-t border-[#d8d4cf] pt-12 md:pt-16">
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-2xl md:text-4xl font-sans tracking-tight font-bold mb-4 md:mb-2 text-[#111] leading-[1.3] md:leading-normal">
                            {title}
                        </h2>
                        <p className="text-[11px] md:text-[12px] tracking-wide text-[#888] uppercase font-sans font-medium">
                            {subtitle}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-12">
                        {/* Primary CTA */}
                        <motion.a
                            href={siteConfig.links.email}
                            className="px-8 py-4 bg-[#111] text-[#f4f2ee] text-[11px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#333] transition-all duration-300 w-fit shrink-0"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Contact via Email
                        </motion.a>

                        {/* Secondary Links */}
                        <div className="flex items-center gap-6 text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]">
                            <a
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#111] transition-colors underline-animate"
                            >
                                LinkedIn
                            </a>
                            <span className="w-2 h-px bg-[#d8d4cf]" />
                            <a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-[#111] transition-colors underline-animate"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
