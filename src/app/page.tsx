import HeroSection from "@/sections/HeroSection";
import BrainSection from "@/sections/BrainSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="main-content" className="w-full bg-[#f4f2ee] min-h-screen">
      <HeroSection />
      <BrainSection />
      <Footer />
    </main>
  );
}
