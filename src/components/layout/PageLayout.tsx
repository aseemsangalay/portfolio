interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({
    children,
}: PageLayoutProps) {
    return (
        <>
            <main id="main-content" className="flex-1 flex flex-col pt-16">
                {children}
            </main>
        </>
    );
}
