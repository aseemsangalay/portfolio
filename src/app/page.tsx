import HeroSection from "@/sections/HeroSection";
import WhatIDoSection from "@/sections/WhatIDoSection";
import WorkSection from "@/sections/WorkSection";
import ProjectsSection from "@/sections/ProjectsSection";
import BrainSection from "@/sections/BrainSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";
import ScrollNavigation from "@/components/layout/ScrollNavigation";

export default function Home() {
  return (
    <>
      <ScrollNavigation />
      <main id="main-content" className="min-h-screen">
        <HeroSection />
        <WhatIDoSection />
        <WorkSection />
        <ProjectsSection />
        <BrainSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
