import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import CaseEssays from "@/components/CaseEssays";
import Brain from "@/components/Brain";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollNavigation from "@/components/layout/ScrollNavigation";

export default function Home() {
  return (
    <>
      <ScrollNavigation />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <WhatIDo />
        <CaseEssays />
        <Brain />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
