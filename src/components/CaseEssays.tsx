"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ProjectSpread } from "@/components/ui/ProjectSpread";
import { getProjects } from "@/lib/content";
import { useEffect, useState } from "react";
import { Project } from "@/types/content";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CaseEssays() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(
      getProjects()
        .filter((project) => project.featured)
        .slice(0, 2)
    );
  }, []);

  return (
    <Section id="projects" className="bg-background">
      <Container>
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-body text-subtext text-center max-w-2xl mx-auto">
            Case studies of systems I&apos;ve built, problems I&apos;ve solved,
            and impact I&apos;ve created.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectSpread key={project.slug} project={project} index={index} />
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
