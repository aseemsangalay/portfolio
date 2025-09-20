export const siteConfig = {
  name: "Aseem Sangalay",
  tagline: "Engineer · Builder · Systems Thinker",
  description: "Personal portfolio showcasing engineering projects and systems thinking approach to building digital solutions.",
  url: "https://aseemsangalay.com",
  ogImage: "https://aseemsangalay.com/og.jpg",
  links: {
    email: "mailto:aseem@example.com",
    linkedin: "https://linkedin.com/in/aseemsangalay",
    github: "https://github.com/aseemsangalay",
    twitter: "https://twitter.com/aseemsangalay",
  },
  brand: {
    manifesto: "Systems over chaos. Clarity over noise.",
  },
  navigation: [
    { name: "Home", href: "/" },
    { name: "What I Do", href: "#what-i-do" },
    { name: "Work", href: "#work" },
    { name: "Projects", href: "#projects" },
    { name: "Brain", href: "#brain" },
    { name: "Contact", href: "#contact" },
  ],
} as const;

