"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getWritings, getReadings } from "@/lib/content";
import { formatDateShort } from "@/lib/utils";
import { Writing, Reading } from "@/types/content";
import Link from "next/link";

export default function Brain() {
  const [activeTab, setActiveTab] = useState("writings");
  const [writings, setWritings] = useState<Writing[]>([]);
  const [readings, setReadings] = useState<Reading[]>([]);

  useEffect(() => {
    const sorted = getWritings()
      .slice()
      .sort((a, b) => (a.date < b.date ? 1 : -1))
      .slice(0, 2);
    setWritings(sorted);
    setReadings(getReadings().slice(0, 3));
  }, []);

  return (
    <Section id="brain" className="bg-background">
      <Container>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-bold text-foreground mb-6">Brain</h2>
            <p className="text-body max-w-2xl mx-auto leading-relaxed">
              Thoughts, learnings, and insights from building systems and
              solving problems.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="flex bg-hairline rounded-full p-1">
              {[
                { id: "writings", label: "Writings" },
                { id: "readings", label: "Readings" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 md:px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 min-h-[44px] ${
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-sm"
                      : "text-subtext hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {activeTab === "writings" ? (
                <div className="space-y-6">
                  {writings.map((writing, index) => (
                    <motion.div
                      key={writing.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link
                        href={`/writings/${writing.slug}`}
                        className="block p-6 md:p-8 bg-surface border border-hairline rounded-xl hover:bg-surface-hover hover:border-border hover:shadow-lg hover:shadow-shadow transition-all duration-500 hover-lift"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                          <h3 className="text-base md:text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                            {writing.title}
                          </h3>
                          <span className="text-xs text-subtext font-medium">
                            {formatDateShort(writing.date)}
                          </span>
                        </div>
                        <p className="text-sm md:text-base text-card mb-4 leading-relaxed">
                          {writing.summary}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-subtext">
                            {writing.readingTime}
                          </span>
                          <span className="text-xs text-accent">→</span>
                        </div>
                      </Link>
                      {index < writings.length - 1 && (
                        <div className="h-px bg-hairline my-6" />
                      )}
                    </motion.div>
                  ))}
                  <div className="text-center pt-8">
                    <Link
                      href="/writings"
                      className="text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 underline-animate"
                    >
                      View all writings →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {readings.map((reading, index) => (
                    <motion.div
                      key={reading.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group"
                    >
                      <a
                        href={reading.link || `/readings/${reading.slug}`}
                        target={reading.link ? "_blank" : undefined}
                        rel={reading.link ? "noopener noreferrer" : undefined}
                        className="block p-6 md:p-8 bg-surface border border-hairline rounded-xl hover:bg-surface-hover hover:border-border hover:shadow-lg hover:shadow-shadow transition-all duration-500 hover-lift"
                      >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                          <h3 className="text-base md:text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                            {reading.title}
                          </h3>
                          <span className="text-xs text-subtext font-medium">
                            {formatDateShort(reading.date)}
                          </span>
                        </div>
                        {reading.author && (
                          <p className="text-sm text-subtext mb-3 font-medium">
                            by {reading.author}
                          </p>
                        )}
                        <p className="text-sm md:text-base text-card mb-4 leading-relaxed">
                          {reading.summary}
                        </p>
                        <div className="flex items-center gap-3">
                          {reading.tags[0] && (
                            <span className="text-xs px-2 py-1 bg-hairline text-subtext rounded-full">
                              {reading.tags[0]}
                            </span>
                          )}
                          <span className="text-xs text-accent">→</span>
                        </div>
                      </a>
                      {index < readings.length - 1 && (
                        <div className="h-px bg-hairline my-6" />
                      )}
                    </motion.div>
                  ))}
                  <div className="text-center pt-8">
                    <a
                      href="/readings"
                      className="text-sm font-medium text-accent hover:text-foreground transition-colors duration-300 underline-animate"
                    >
                      View all readings →
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </Section>
  );
}
