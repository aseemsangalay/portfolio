import { Container } from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#f4f2ee] pb-12 pt-0">
      <Container>
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#aaa]">
            © 2026 · AS.
          </p>
        </div>
      </Container>
    </footer>
  );
}
