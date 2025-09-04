'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { Container } from '@/components/ui/Container';

export default function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navbar after scrolling past hero
      setIsVisible(scrollY > heroHeight * 0.8);

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-hairline"
        >
          <Container>
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-lg font-display font-medium text-foreground">
                {siteConfig.name}
              </Link>
              
              <ul className="flex items-center space-x-8">
                {siteConfig.navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-accent ${
                        activeSection === item.href.replace('#', '') ||
                        (item.href === '/' && activeSection === 'home')
                          ? 'text-accent'
                          : 'text-subtext'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
