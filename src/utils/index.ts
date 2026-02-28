import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely — resolves conflicts via tailwind-merge. */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/** Format a date string as "Month Day, Year" — e.g. "January 15, 2024". */
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

/** Format a date string as "Mon Day, Year" — e.g. "Jan 15, 2024". */
export function formatDateShort(date: string): string {
    return new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}
