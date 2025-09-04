"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { siteConfig } from "@/lib/site-config";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // Check if device supports hover (not touch)
        const isTouchDevice = window.matchMedia("(hover: none)").matches;
        const intensity = isTouchDevice ? 0.01 : 0.03;

        // Subtle parallax movement
        const deltaX = (e.clientX - centerX) * intensity;
        const deltaY = (e.clientY - centerY) * intensity;

        mouseX.set(deltaX);
        mouseY.set(deltaY);
      }
    };

    // Only add mouse move listener on non-touch devices
    if (!window.matchMedia("(hover: none)").matches) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      {/* Subtle parallax grid */}
      <motion.div
        ref={gridRef}
        className="absolute inset-0 parallax-grid pointer-events-none"
        style={{
          x: springX,
          y: springY,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Soft gradient glow behind text */}
      <div className="absolute inset-0 gradient-glow" />

      {/* Content */}
      <motion.div
        style={{ y }}
        className="text-center z-10 max-w-6xl mx-auto px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-display text-foreground mb-8 font-light"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="space-y-3"
        >
          <p className="text-subtitle tracking-wide">{siteConfig.tagline}</p>
        </motion.div>
      </motion.div>

      {/* Fade transition to next section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  );
}
