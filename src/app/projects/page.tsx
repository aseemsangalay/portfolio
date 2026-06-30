import Footer from "@/components/Footer";
import ProjectsSection from "@/sections/ProjectsSection";

export const metadata = {
  title: "Projects | Aseem Sangalay",
  description: "Projects by Aseem Sangalay.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#f4f2ee] pt-20 md:pt-24">
      <ProjectsSection />
      <Footer />
    </main>
  );
}
