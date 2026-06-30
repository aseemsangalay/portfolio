"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Project } from "@/types";
import { projects as allProjects } from "@/data/projects";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectsSectionProps {
    data?: Project[];
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
    const projects = data ?? allProjects;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <Section id="projects" className="bg-[#f4f2ee] text-[#111] pt-0 pb-24 md:pt-0 md:pb-32 selection:bg-[#111] selection:text-[#f4f2ee]">
            <Container>
                <div className="max-w-3xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-10 md:mb-14"
                    >
                        <h2 className="text-[28px] md:text-4xl font-sans tracking-tight font-semibold text-[#111]">
                            Projects
                        </h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                variants={itemVariants}
                                className={`py-8 md:py-10 ${index !== 0 ? "border-t border-[#d8d4cf]" : ""}`}
                            >
                                <div className="flex items-baseline justify-between mb-3">
                                    <h3 className="text-[17px] md:text-[19px] font-sans font-semibold tracking-tight text-[#111]">
                                        {project.title}
                                    </h3>
                                    <span className="text-[11px] font-mono text-[#999] shrink-0 ml-4">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="text-[14px] md:text-[15px] text-[#555] font-sans leading-relaxed mb-5">
                                    {project.summary}
                                </p>

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                    <p className="text-[11px] font-mono text-[#aaa] tracking-wide">
                                        {project.stack.join(" · ")}
                                    </p>
                                    <div className="flex gap-5 shrink-0">
                                        {project.links.repo && (
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-mono text-[#888] hover:text-[#111] transition-colors"
                                            >
                                                GitHub →
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[11px] font-mono text-[#888] hover:text-[#111] transition-colors"
                                            >
                                                Live →
                                            </a>
                                        )}
                                        {project.links.caseStudy && (
                                            <Link
                                                href={project.links.caseStudy}
                                                className="text-[11px] font-mono text-[#888] hover:text-[#111] transition-colors"
                                            >
                                                Case Study →
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#d8d4cf] flex flex-wrap gap-8"
                    >
                        <Link
                            href="https://github.com/aseemsangalay"
                            target="_blank"
                            className="text-[11px] font-mono text-[#888] hover:text-[#111] transition-colors"
                        >
                            GitHub →
                        </Link>
                        <Link
                            href="/brain/notes"
                            className="text-[11px] font-mono text-[#888] hover:text-[#111] transition-colors"
                        >
                            Research Notes →
                        </Link>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
