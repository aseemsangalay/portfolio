'use client';

import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'Writings', href: '/writings' },
  { name: 'Readings', href: '/readings' },
];

export default function NavSlice() {
  return (
    <Section className="bg-background">
      <Container>
        <div className="flex justify-center">
          <div className="flex space-x-1 bg-hairline rounded-full p-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="px-6 py-2 text-sm font-medium text-subtext hover:text-foreground transition-colors rounded-full hover:bg-background"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

