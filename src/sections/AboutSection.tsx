"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Mail, Linkedin, Github } from "lucide-react";

export default function AboutSection() {
    return (
        <Section id="about" className="bg-background">
            <Container>
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <p className="text-body text-subtext leading-relaxed">
                            I am a systems engineer who believes in the power of thoughtful
                            design and robust architecture. My work spans the intersection
                            of artificial intelligence, distributed systems, and user
                            experience—always with an eye toward creating solutions that are
                            not just functional, but elegant.
                        </p>

                        <p className="text-sm font-medium text-accent">
                            {siteConfig.brand.manifesto}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                            <motion.a
                                href={siteConfig.links.email}
                                className="group flex items-center gap-3 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Mail className="w-4 h-4" />
                                <span className="font-medium">Email</span>
                            </motion.a>

                            <motion.a
                                href={siteConfig.links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Linkedin className="w-4 h-4" />
                                <span className="font-medium">LinkedIn</span>
                            </motion.a>

                            <motion.a
                                href={siteConfig.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-200"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Github className="w-4 h-4" />
                                <span className="font-medium">GitHub</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
