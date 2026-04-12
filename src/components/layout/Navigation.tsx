"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Move focus to first link when menu opens; return focus on close
  useEffect(() => {
    if (isOpen) {
      // Wait for animation frame so the element is visible before focusing
      const id = requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
      return () => cancelAnimationFrame(id);
    } else {
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  // Focus trap: keep Tab/Shift+Tab cycling inside the open menu
  const handleMenuKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (e.key !== "Tab") return;

      const menu = menuRef.current;
      if (!menu) return;

      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    },
    [isOpen]
  );

  const isVisible = pathname !== "/";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.nav
            initial={pathname === "/" ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10 ${isOpen ? "h-screen" : "h-16"
              } md:h-16 transition-[height] duration-300`}
          >
            <Container>
              <div className="flex items-center justify-between h-16">
                <Link href="/" className="text-xl font-black tracking-tighter text-white z-50">
                  AS.
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center space-x-8">
                  {siteConfig.navigation.map((item) => {
                    const isActive =
                      pathname === item.href ||
                      (item.href !== "/" && pathname?.startsWith(item.href));

                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-sm font-medium transition-colors hover:text-white ${isActive ? "text-white" : "text-white/60"
                            }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile Toggle */}
                <button
                  ref={hamburgerRef}
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden z-50 text-white p-2"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  aria-controls="mobile-menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>

              {/* Mobile Menu Overlay */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    ref={menuRef}
                    id="mobile-menu"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Navigation menu"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden flex flex-col items-start pt-12 space-y-6"
                    onKeyDown={handleMenuKeyDown}
                  >
                    {siteConfig.navigation.map((item, index) => {
                      const isActive =
                        pathname === item.href ||
                        (item.href !== "/" && pathname?.startsWith(item.href));

                      return (
                        <Link
                          key={item.name}
                          ref={index === 0 ? firstLinkRef : undefined}
                          href={item.href}
                          className={`text-2xl font-bold tracking-tight transition-colors ${isActive ? "text-white" : "text-white/40"
                            }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </Container>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
