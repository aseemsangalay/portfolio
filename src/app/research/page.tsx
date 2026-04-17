import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Footer from "@/components/Footer";
import { ComingSoonPage } from "@/components/ui/ComingSoon";

export const metadata = {
  title: "Research | Aseem Sangalay",
  description:
    "Published research across distributed systems, consensus protocols, and systems performance — 3 publications.",
};

export default function ResearchPage() {
    return (
        <main className="bg-[#f4f2ee] pt-20 md:pt-24">
            <Section className="bg-[#f4f2ee] text-[#111] pt-0 pb-24 md:pt-0 md:pb-32 selection:bg-[#111] selection:text-[#f4f2ee]">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <ComingSoonPage />
                    </div>
                </Container>
            </Section>
            <Footer />
        </main>
    );
}
