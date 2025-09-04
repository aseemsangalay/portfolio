"use client";

import { motion } from "framer-motion";
import { Container, GridContainer } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getWritings, getReadings } from "@/lib/content";
import { formatDateShort } from "@/lib/utils";

export default function LibrarySlice() {
  const writings = getWritings().slice(0, 3);
  const readings = getReadings().slice(0, 3);

  return (
    <Section className="bg-background">
      <Container>
        <GridContainer>
          {/* Latest Writings */}
          <div className="col-span-12 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                Latest Writings
              </h3>
              <div className="space-y-4">
                {writings.map((writing) => (
                  <motion.div
                    key={writing.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <a
                      href={`/writings/${writing.slug}`}
                      className="block space-y-1 group-hover:text-accent transition-colors"
                    >
                      <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {writing.title}
                      </h4>
                      <p className="text-sm text-subtext line-clamp-2">
                        {writing.summary}
                      </p>
                      <p className="text-xs text-subtext">
                        {formatDateShort(writing.date)}
                      </p>
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="/writings"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                View all writings →
              </motion.a>
            </motion.div>
          </div>

          {/* Current Readings */}
          <div className="col-span-12 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">
                Current Readings
              </h3>
              <div className="space-y-4">
                {readings.map((reading) => (
                  <motion.div
                    key={reading.slug}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <a
                      href={reading.link || `/readings/${reading.slug}`}
                      target={reading.link ? "_blank" : undefined}
                      rel={reading.link ? "noopener noreferrer" : undefined}
                      className="block space-y-1 group-hover:text-accent transition-colors"
                    >
                      <h4 className="font-medium text-foreground group-hover:text-accent transition-colors">
                        {reading.title}
                      </h4>
                      {reading.author && (
                        <p className="text-sm text-subtext">
                          by {reading.author}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-subtext">
                          {formatDateShort(reading.date)}
                        </span>
                        {reading.tags[0] && (
                          <span className="text-xs px-2 py-1 bg-hairline text-subtext rounded-sm">
                            {reading.tags[0]}
                          </span>
                        )}
                      </div>
                    </a>
                  </motion.div>
                ))}
              </div>
              <motion.a
                href="/readings"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-foreground transition-colors"
                whileHover={{ x: 4 }}
              >
                View all readings →
              </motion.a>
            </motion.div>
          </div>
        </GridContainer>
      </Container>
    </Section>
  );
}
