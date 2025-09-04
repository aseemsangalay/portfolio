'use client';

import { motion } from 'framer-motion';
import { Project } from '@/types/content';
import { GridContainer } from './Container';

interface ProjectSpreadProps {
  project: Project;
  index: number;
}

export function ProjectSpread({ project, index }: ProjectSpreadProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <GridContainer>
        {/* Project content - alternating layout */}
        <div
          className={`col-span-12 md:col-span-5 ${
            isEven ? '' : 'md:col-start-8'
          }`}
        >
          <div className="space-y-6">
            <div className="text-sm font-medium text-accent uppercase tracking-wider">
              {project.tags[0]}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {project.title}
            </h3>
            <p className="text-body text-subtext leading-relaxed">
              {project.summary}
            </p>
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium text-foreground">Problem:</span>
                <p className="text-sm text-subtext mt-1">{project.problem}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Approach:</span>
                <p className="text-sm text-subtext mt-1">{project.approach}</p>
              </div>
              <div>
                <span className="text-sm font-medium text-foreground">Impact:</span>
                <p className="text-sm text-subtext mt-1">{project.impact}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-4">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-hairline text-subtext rounded-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <motion.a
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm font-medium text-accent hover:text-foreground transition-colors"
              whileHover={{ x: 4 }}
            >
              Read case essay →
            </motion.a>
          </div>
        </div>

        {/* Project image */}
        <div
          className={`col-span-12 md:col-span-6 ${
            isEven ? 'md:col-start-7' : 'md:col-start-1'
          }`}
        >
          <motion.div
            className="aspect-[4/3] bg-hairline border border-hairline rounded-md overflow-hidden"
            whileHover={{ 
              rotate: 1.5,
              boxShadow: '0 1px 0 rgba(0,0,0,0.06)',
              transition: { duration: 0.2 }
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center text-subtext">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-sm font-medium">{project.title}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </GridContainer>
    </motion.div>
  );
}

