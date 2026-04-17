import BrainSection from "@/sections/BrainSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Brain | Aseem Sangalay",
  description:
    "A public second brain — systems notes, architectural logs, and a reading archive of engineering theory.",
};

export default function BrainPage() {
    return (
        <main className="min-h-screen bg-[#f4f2ee]">
            <BrainSection />
            <Footer />
        </main>
    );
}
