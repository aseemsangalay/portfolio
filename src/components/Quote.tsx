'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function Quote() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-quote text-foreground leading-relaxed"
          >
            &ldquo;Build things that compound: skills, systems, trust.&rdquo;
          </motion.blockquote>
        </div>
      </Container>
    </Section>
  );
}

