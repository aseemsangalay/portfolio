"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectSpread } from "@/components/ui/ProjectSpread";
import { Project } from "@/types";
import { projects as allProjects } from "@/data/projects";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectsSectionProps {
    data?: Project[];
    title?: string;
    subtitle?: string;
}

export default function ProjectsSection({
    data,
    title = "Featured Projects",
    subtitle = "Case studies of systems I've built, problems I've solved, and impact I've created.",
}: ProjectsSectionProps) {
    const projects = data ?? allProjects.filter((p) => p.featured).slice(0, 2);

    return (
        <Section id="projects" className="bg-background">
            <Container>
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
                        {title}
                    </h2>
                    <p className="text-body text-subtext text-center max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="space-y-24">
                    {projects.map((project) => (
                        <ProjectSpread key={project.slug} project={project} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 underline-animate"
                    >
                        View all projects →
                    </Link>
                </motion.div>
            </Container>
        </Section>
    );
}
