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
    title = "Let's build together.",
    subtitle = "I'm always interested in new opportunities and meaningful conversations about systems, engineering, and building things that matter.",
}: ContactSectionProps) {
    return (
        <Section id="contact" className="bg-background">
            <Container>
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="space-y-6">
                            <h2 className="text-display-bold text-foreground">
                                {title}
                            </h2>
                            <p className="text-body max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                            {Object.entries(siteConfig.links).map(([name, href]) => (
                                <motion.a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="px-6 py-3 bg-surface border border-hairline rounded-full text-sm font-medium text-foreground hover:bg-surface-hover hover:border-border transition-all duration-300 hover-lift min-h-[44px] flex items-center justify-center">
                                        {name.charAt(0).toUpperCase() + name.slice(1)}
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <div className="pt-8">
                            <p className="text-sm text-subtext">
                                {siteConfig.brand.manifesto}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
