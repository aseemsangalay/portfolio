"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Neural Code Assistant",
    category: "Generative AI",
    description:
      "An intelligent coding assistant that understands context, suggests optimizations, and learns from your coding patterns. Built with transformer architectures and fine-tuned on code repositories.",
    tech: ["Python", "PyTorch", "Transformers", "FastAPI"],
    image: "/api/placeholder/600/400",
  },
  {
    id: 2,
    title: "Distributed Task Queue",
    category: "Full Stack Engineering",
    description:
      "A high-performance task queue system designed for microservices architecture. Handles millions of jobs with sub-millisecond latency and 99.9% uptime.",
    tech: ["Go", "Redis", "PostgreSQL", "Docker"],
    image: "/api/placeholder/600/400",
  },
  {
    id: 3,
    title: "Real-time Analytics Platform",
    category: "Data Engineering",
    description:
      "Stream processing platform that ingests, processes, and visualizes real-time data from multiple sources. Powers decision-making for enterprise clients.",
    tech: ["Kafka", "Apache Flink", "React", "D3.js"],
    image: "/api/placeholder/600/400",
  },
];

export default function Projects() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid-12 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="col-span-12 grid-12 gap-8 items-center"
            >
              {/* Project content - alternating layout */}
              <div
                className={`col-span-12 md:col-span-5 ${
                  index % 2 === 1 ? "md:col-start-8" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="text-sm font-mono text-accent uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-body text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-gray-100 text-gray-700 rounded-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project image */}
              <div
                className={`col-span-12 md:col-span-6 ${
                  index % 2 === 1 ? "md:col-start-1" : "md:col-start-7"
                }`}
              >
                <div className="aspect-[4/3] bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-sm font-mono">Project Screenshot</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

