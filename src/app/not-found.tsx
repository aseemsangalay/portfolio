import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Container>
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-display-bold text-foreground mb-4">404</h1>
              <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
                Page not found
              </h2>
              <p className="text-body text-subtext leading-relaxed mb-8">
                The page you&apos;re looking for doesn&apos;t exist or has been
                moved.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
              >
                Go home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
              >
                Contact me
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
