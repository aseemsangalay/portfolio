'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const roles = [
  {
    title: 'Engineer',
    description: 'Building systems that scale, solving complex problems with elegant code.',
    icon: '⚙️',
  },
  {
    title: 'Builder',
    description: 'Creating products that matter, from concept to deployment.',
    icon: '🔨',
  },
  {
    title: 'Systems Thinker',
    description: 'Understanding how everything connects, designing for the long term.',
    icon: '🧠',
  },
];

export default function WhatIDo() {
  return (
    <Section id="what-i-do" className="bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-display-bold text-foreground mb-4">What I Do</h2>
            <p className="text-body max-w-2xl mx-auto">
              I build digital systems that solve real problems, with a focus on clarity, 
              elegance, and long-term thinking.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-background border border-hairline rounded-2xl p-8 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {role.title}
                  </h3>
                  <p className="text-card">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
