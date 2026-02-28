"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Navigation() {
  const activeSection = useActiveSection(100);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-hairline"
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-lg font-semibold text-foreground">
            {siteConfig.name}
          </Link>

          <ul className="flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${activeSection === item.href.replace("#", "") ||
                      (item.href === "/" && activeSection === "home")
                      ? "text-accent"
                      : "text-subtext"
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
  );
}
