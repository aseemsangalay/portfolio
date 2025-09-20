"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

// Cycling taglines
const taglines = [
  "Engineer · Builder · Systems Thinker",
  "Reader · Writer · Founder",
  "Clarity · Systems · Leverage",
];

// Breathing Rings Component
function BreathingRings({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.04 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Concentric breathing rings */}
        {[1, 2, 3, 4].map((ring, index) => (
          <motion.circle
            key={ring}
            cx="100"
            cy="100"
            r={20 + index * 15}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.02, 0.06, 0.02],
            }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

// Paper Texture Component
function PaperTexture({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)
        `,
        backgroundSize: "20px 20px",
        opacity: 0.03,
      }}
    />
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const spiralRef = useRef<HTMLDivElement>(null);
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "3%"]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  // Cycle through taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const isTouchDevice = window.matchMedia("(hover: none)").matches;
        const intensity = isTouchDevice ? 0.01 : 0.05;

        const deltaX = (e.clientX - centerX) * intensity;
        const deltaY = (e.clientY - centerY) * intensity;

        mouseX.set(deltaX);
        mouseY.set(deltaY);
      }
    };

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "#FAFAFA" }}
    >
      <PaperTexture />

      <motion.div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          x: springX,
          y: springY,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        ref={spiralRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ color: "#0B0B0B" }}
      >
        <BreathingRings className="w-96 h-96 md:w-[500px] md:h-[500px]" />
      </motion.div>

      <div className="absolute inset-0 gradient-glow" />

      <motion.div
        style={{ y }}
        className="text-center z-10 max-w-6xl mx-auto px-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40, letterSpacing: "0.1em" }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "-0.03em",
          }}
          transition={{
            duration: 1.4,
            ease: [0.25, 0.46, 0.45, 0.94],
            letterSpacing: { delay: 0.8, duration: 0.8 },
          }}
          className="text-6xl md:text-7xl font-bold mb-8"
          style={{
            color: "#0B0B0B",
            fontFamily: "var(--font-inter), system-ui, sans-serif",
            fontWeight: 700,
          }}
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <div className="relative h-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentTaglineIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-lg md:text-xl tracking-wide absolute inset-0 flex items-center justify-center"
                style={{ color: "#6B7280" }}
              >
                {taglines[currentTaglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      />
    </section>
  );
}
