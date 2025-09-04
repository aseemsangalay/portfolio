"use client";

import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-screen-lg mx-auto">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-8 md:col-start-3">
            <motion.blockquote
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-quote text-black text-center leading-relaxed"
            >
              &ldquo;The best way to predict the future is to build it. Every
              line of code is a decision, every system a philosophy, every
              solution a step toward a better world.&rdquo;
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
