import WorkSection from "@/sections/WorkSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Experience | Aseem Sangalay",
  description:
    "Professional engineering experience across distributed systems, backend infrastructure, and research.",
};

export default function ExperiencePage() {
    return (
        <main className="min-h-screen bg-[#f4f2ee] pt-20 md:pt-24">
            <WorkSection />
            <Footer />
        </main>
    );
}
