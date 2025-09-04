/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-newsreader)", "serif"],
      },
      colors: {
        background: "#FAFAFA",
        foreground: "#0A0A0A",
        subtext: "#6B7280",
        accent: "#6366F1",
        "accent-light": "#A5B4FC",
        hairline: "rgba(10, 10, 10, 0.04)",
        glow: "rgba(99, 102, 241, 0.1)",
      },
      maxWidth: {
        container: "1100px",
      },
      gridTemplateColumns: {
        12: "repeat(12, minmax(0, 1fr))",
      },
      animation: {
        "fade-up": "fadeUp 0.2s ease-out",
        "fade-in": "fadeIn 0.16s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
