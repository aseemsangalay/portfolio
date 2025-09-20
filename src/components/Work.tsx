"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { workExperiences } from "@/data/work";

export default function Work() {
  return (
    <Section id="work" className="bg-background">
      <Container>
        <div className="max-w-[1100px] mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-display-bold text-foreground mb-6">
              Work Experience
            </h2>
            <p className="text-body text-subtext leading-relaxed max-w-2xl">
              Building products and systems that scale, with a focus on impact and growth.
            </p>
          </motion.div>

          <div className="space-y-12">
            {workExperiences.map((work, index) => (
              <motion.div
                key={work.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                viewport={{ once: true }}
                className="border-l-2 border-hairline pl-8 relative"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 bg-background border-2 border-hairline rounded-full" />
                
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-foreground">
                        {work.link ? (
                          <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-accent transition-colors duration-300 underline-animate"
                          >
                            {work.company}
                          </a>
                        ) : (
                          work.company
                        )}
                      </h3>
                      <p className="text-body text-subtext font-medium">
                        {work.role}
                      </p>
                    </div>
                    <span className="text-sm text-subtext font-medium">
                      {work.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {work.impacts.map((impact, impactIndex) => (
                      <li key={impactIndex} className="text-body text-subtext leading-relaxed flex items-start">
                        <span className="text-accent mr-2 mt-1">•</span>
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <a
              href="/resume"
              className="inline-flex items-center text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 underline-animate"
            >
              View résumé →
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
