"use client";

import { ReactNode, ElementType } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
}

export function Section({
  children,
  className,
  id,
  as: Component = "section",
}: SectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Component id={id} className={cn("py-24", className)}>
        {children}
      </Component>
    </motion.div>
  );
}
