"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/Container";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function ScrollNavigation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Show navbar after scrolling past hero
      setIsVisible(scrollY > heroHeight * 0.8);

      // Update active section
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-hairline"
        >
          <Container>
            <div className="flex items-center justify-between h-16">
              <Link
                href="/"
                className="text-xl font-display font-semibold text-foreground tracking-tight hover:text-accent transition-colors duration-300"
                onClick={closeMobileMenu}
              >
                AS.
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <ul className="flex items-center space-x-8">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={`text-sm font-medium transition-colors duration-300 underline-animate px-2 py-1 rounded-md ${
                          activeSection === item.href.replace("#", "") ||
                          (item.href === "/" && activeSection === "home")
                            ? "text-accent"
                            : "text-subtext hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <DarkModeToggle />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-foreground hover:text-accent transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="md:hidden border-t border-hairline"
                >
                  <ul className="py-4 space-y-2">
                    {siteConfig.navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`block px-4 py-3 text-base font-medium transition-colors duration-300 ${
                            activeSection === item.href.replace("#", "") ||
                            (item.href === "/" && activeSection === "home")
                              ? "text-accent bg-accent/5"
                              : "text-subtext hover:text-foreground hover:bg-hairline"
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </Container>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
