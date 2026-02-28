"use client";

import { useState, useEffect } from "react";

/**
 * Tracks which section is currently in view based on scroll position.
 *
 * @param offset - Pixels from the top used as the "active" threshold (default: 100)
 * @returns The id of the currently active section
 */
export function useActiveSection(offset = 100): string {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>("section[id]");
            const scrollPosition = window.scrollY + offset;

            sections.forEach((section) => {
                const { offsetTop, offsetHeight } = section;
                const sectionId = section.getAttribute("id") ?? "";

                if (
                    scrollPosition >= offsetTop &&
                    scrollPosition < offsetTop + offsetHeight
                ) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [offset]);

    return activeSection;
}
