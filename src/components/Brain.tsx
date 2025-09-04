'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { getWritings, getReadings } from '@/lib/content';
import { formatDateShort } from '@/lib/utils';

export default function Brain() {
  const [activeTab, setActiveTab] = useState('writings');
  const writings = getWritings().slice(0, 3);
  const readings = getReadings().slice(0, 3);

  return (
    <Section id="brain" className="bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-display-bold text-foreground mb-4">Brain</h2>
            <p className="text-body max-w-2xl mx-auto">
              Thoughts, learnings, and insights from building systems and solving problems.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-hairline rounded-full p-1">
              {[
                { id: 'writings', label: 'Writings' },
                { id: 'readings', label: 'Readings' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-subtext hover:text-foreground'
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
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {activeTab === 'writings' ? (
                <div className="space-y-6">
                  {writings.map((writing, index) => (
                    <motion.div
                      key={writing.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group"
                    >
                      <a
                        href={`/writings/${writing.slug}`}
                        className="block p-6 bg-background border border-hairline rounded-xl hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                            {writing.title}
                          </h3>
                          <span className="text-xs text-subtext">
                            {formatDateShort(writing.date)}
                          </span>
                        </div>
                        <p className="text-card mb-3">
                          {writing.summary}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-subtext">
                            {writing.readingTime}
                          </span>
                          <span className="text-xs text-accent">→</span>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                  <div className="text-center pt-4">
                    <a
                      href="/writings"
                      className="text-sm font-medium text-accent hover:text-foreground transition-colors"
                    >
                      View all writings →
                    </a>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {readings.map((reading, index) => (
                    <motion.div
                      key={reading.slug}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="group"
                    >
                      <a
                        href={reading.link || `/readings/${reading.slug}`}
                        target={reading.link ? '_blank' : undefined}
                        rel={reading.link ? 'noopener noreferrer' : undefined}
                        className="block p-6 bg-background border border-hairline rounded-xl hover:border-accent/20 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-accent transition-colors">
                            {reading.title}
                          </h3>
                          <span className="text-xs text-subtext">
                            {formatDateShort(reading.date)}
                          </span>
                        </div>
                        {reading.author && (
                          <p className="text-sm text-subtext mb-2">
                            by {reading.author}
                          </p>
                        )}
                        <p className="text-card mb-3">
                          {reading.summary}
                        </p>
                        <div className="flex items-center gap-2">
                          {reading.tags[0] && (
                            <span className="text-xs px-2 py-1 bg-hairline text-subtext rounded-sm">
                              {reading.tags[0]}
                            </span>
                          )}
                          <span className="text-xs text-accent">→</span>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                  <div className="text-center pt-4">
                    <a
                      href="/readings"
                      className="text-sm font-medium text-accent hover:text-foreground transition-colors"
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
