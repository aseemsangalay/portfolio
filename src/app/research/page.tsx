import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Footer from "@/components/Footer";
import { ComingSoonPage } from "@/components/ui/ComingSoon";

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-[#f4f2ee]">
            <Section className="bg-[#f4f2ee] text-[#111] pt-32 pb-48 selection:bg-[#111] selection:text-[#f4f2ee]">
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
