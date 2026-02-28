import Navigation from "./Navigation";
import Footer from "../Footer";

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navigation />
            <main id="main-content" className="flex-1 flex flex-col min-h-screen pt-16">
                {children}
            </main>
            <Footer />
        </>
    );
}
