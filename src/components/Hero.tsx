'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { siteConfig } from '@/lib/site-config';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid vignette">
      {/* Soft gradient glow behind text */}
      <div className="absolute inset-0 gradient-glow" />

      {/* Content */}
      <div className="text-center z-10 max-w-5xl mx-auto px-8">
        <motion.h1
          style={{ y }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-display text-foreground mb-8"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="space-y-2"
        >
          <p className="text-subtitle">
            {siteConfig.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}