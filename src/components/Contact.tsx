'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" className="bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-display-bold text-foreground mb-6">
                Let&apos;s build together.
              </h2>
              <p className="text-body max-w-lg mx-auto">
                I&apos;m always interested in new challenges and meaningful collaborations. 
                Let&apos;s discuss how we can create something great.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={siteConfig.links.email}
                className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full hover:bg-accent transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </motion.a>

              <motion.a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </motion.a>

              <motion.a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">GitHub</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}