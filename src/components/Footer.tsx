"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f4f2ee] pb-12 pt-0">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#aaa]">
            © 2024 · AS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
