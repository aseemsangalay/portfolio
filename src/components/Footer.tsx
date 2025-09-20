"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true }}
      className="border-t border-hairline bg-background"
    >
      <Container>
        <div className="py-12 text-center">
          <div className="mb-6">
            <Link
              href="/contact"
              className="inline-flex items-center text-lg font-medium text-foreground hover:text-accent transition-colors duration-300 underline-animate"
            >
              Write. Don&apos;t wait. →
            </Link>
          </div>
          <p className="text-sm text-subtext font-medium">
            Systems over chaos. Clarity over noise.
          </p>
        </div>
      </Container>
    </motion.footer>
  );
}



