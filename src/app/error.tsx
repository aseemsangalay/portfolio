"use client";

import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background">
      <Container>
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-display-bold text-foreground mb-4">
                Something went wrong
              </h1>
              <p className="text-body text-subtext leading-relaxed mb-8">
                We encountered an unexpected error. Please try again or contact
                me if the problem persists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={reset}
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground bg-hairline hover:bg-accent hover:text-background transition-colors duration-300 rounded-full"
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
