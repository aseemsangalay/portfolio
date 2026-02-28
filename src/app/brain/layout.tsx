export default function BrainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#f4f2ee] min-h-screen flex flex-col">
            <main id="main-content" className="flex-1 pt-16">
                {children}
            </main>
        </div>
    );
}
