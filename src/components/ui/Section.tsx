"use client";

import { motion } from "framer-motion";
import { ElementType, ReactNode } from "react";
import { cn } from "@/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.div
      id={id}
      className={cn("py-24 md:py-32", className)}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
