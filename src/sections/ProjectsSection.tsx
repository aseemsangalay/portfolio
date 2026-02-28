import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Project } from "@/types";
import { projects as allProjects } from "@/data/projects";
import Link from "next/link";

interface ProjectsSectionProps {
    data?: Project[];
}

function formatProjectImpact(text: string) {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return (
                <strong key={i} className="font-bold text-[#111]">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return part;
    });
}

export default function ProjectsSection({ data }: ProjectsSectionProps) {
    const projects = data ?? allProjects;

    return (
        <Section id="projects" className="bg-[#f4f2ee] text-[#111] pt-20 pb-32 md:pt-32 md:pb-48 selection:bg-[#111] selection:text-[#f4f2ee]">
            <Container>
                <div className="max-w-3xl mx-auto">

                    <div className="mb-10 md:mb-14">
                        <h2 className="text-[28px] md:text-4xl font-sans tracking-tight font-semibold mb-2 text-[#111]">
                            Selected Projects
                        </h2>
                        <p className="text-[11px] md:text-[12px] tracking-wide text-[#888] uppercase font-sans font-medium">
                            Systems built beyond job requirements.
                        </p>
                    </div>

                    <div className="flex flex-col">
                        {projects.map((project, index) => (
                            <div
                                key={project.slug}
                                className={`py-8 md:py-10 ${index !== 0 ? "border-t border-[#d8d4cf]" : ""}`}
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-2">
                                    <h3 className="text-xl md:text-2xl font-sans font-black tracking-tight text-[#111] uppercase">
                                        {project.title}
                                    </h3>
                                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.1em] uppercase text-[#666] shrink-0">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 gap-3 md:gap-2">
                                    <p className="text-[14px] md:text-[15px] text-[#444] font-sans font-medium">
                                        {project.summary}
                                    </p>
                                    <div className="flex gap-4 text-[9px] md:text-[10px] tracking-[0.15em] font-bold text-[#999] uppercase shrink-0">
                                        {project.status && (
                                            <span>STATUS: {project.status}</span>
                                        )}
                                        {project.projectType && (
                                            <span>TYPE: {project.projectType}</span>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4 border-y border-[#e8e6e2] py-3 md:py-2">
                                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-[#999] uppercase">
                                        STACK: {project.stack.join(" · ").toUpperCase()}
                                    </div>
                                    <div className="flex gap-6 shrink-0">
                                        {project.links.repo && (
                                            <a
                                                href={project.links.repo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors"
                                            >
                                                View Code &rarr;
                                            </a>
                                        )}
                                        {project.links.demo && (
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-[10px] font-bold uppercase tracking-widest text-[#888] hover:text-[#111] transition-colors"
                                            >
                                                Notes &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <ul className="space-y-2.5 mb-8">
                                    {project.highlights?.map((highlight, hIndex) => (
                                        <li
                                            key={hIndex}
                                            className="text-[14px] md:text-[15px] text-[#222] font-sans leading-[1.5] md:leading-[1.4] pl-4 relative"
                                        >
                                            <span className="absolute left-0 top-[0.6em] w-1.5 h-[1.5px] bg-[#bbb] rounded-sm"></span>
                                            {formatProjectImpact(highlight)}
                                        </li>
                                    ))}
                                </ul>


                            </div>
                        ))}
                    </div>

                    <div className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-[#d8d4cf] flex flex-wrap gap-8">
                        <Link
                            href="https://github.com/aseemsangalay"
                            target="_blank"
                            className="text-[11px] font-bold uppercase tracking-widest text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 inline-block"
                        >
                            GitHub &rarr;
                        </Link>
                        <Link
                            href="/writings"
                            className="text-[11px] font-bold uppercase tracking-widest text-[#111] hover:text-[#666] transition-colors border-b border-transparent hover:border-[#ccc] pb-1 inline-block"
                        >
                            Research Notes &rarr;
                        </Link>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
