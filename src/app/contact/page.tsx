import ContactSection from "@/sections/ContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact | Aseem Sangalay",
  description:
    "Get in touch to discuss engineering roles, research collaborations, or distributed systems.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f4f2ee] pt-20 md:pt-24">
      <ContactSection />
      <Footer />
    </main>
  );
}
