export default function BrainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-[#f4f2ee] flex flex-col">
            <main id="main-content" className="flex-1 pt-20 md:pt-24">
                {children}
            </main>
        </div>
    );
}
