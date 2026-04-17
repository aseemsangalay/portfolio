import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <main className="min-h-screen bg-[#f4f2ee]">
      <Container>
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            {/* Loading skeleton */}
            <div className="animate-pulse">
              <div className="h-8 bg-hairline rounded mb-4 w-1/3"></div>
              <div className="h-4 bg-hairline rounded mb-2 w-2/3"></div>
              <div className="h-4 bg-hairline rounded mb-8 w-1/2"></div>

              <div className="space-y-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="border-b border-hairline pb-8">
                    <div className="h-6 bg-hairline rounded mb-4 w-1/2"></div>
                    <div className="h-4 bg-hairline rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-hairline rounded mb-4 w-1/2"></div>
                    <div className="flex gap-2">
                      <div className="h-6 bg-hairline rounded-full w-16"></div>
                      <div className="h-6 bg-hairline rounded-full w-20"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

