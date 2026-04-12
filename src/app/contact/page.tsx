import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Aseem Sangalay",
  description:
    "Get in touch to discuss engineering roles, research collaborations, or distributed systems.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f4f2ee] pt-24 md:pt-32">
      <ContactSection />
      <Footer />
    </main>
  );
}
