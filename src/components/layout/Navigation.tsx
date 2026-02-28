"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export default function Navigation() {
  const pathname = usePathname();

  const isVisible = pathname !== "/";

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={pathname === "/" ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/10"
        >
          <Container>
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-black tracking-tighter text-white">
                AS.
              </Link>

              <ul className="flex items-center space-x-8">
                {siteConfig.navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname?.startsWith(item.href));

                  const href = item.href;

                  return (
                    <li key={item.name}>
                      <Link
                        href={href}
                        className={`text-sm font-medium transition-colors hover:text-white ${isActive ? "text-white" : "text-white/60"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Container>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
