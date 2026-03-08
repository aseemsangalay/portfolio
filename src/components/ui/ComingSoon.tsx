import React from 'react';

export function ComingSoon({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative group">
            <div className="opacity-40 pointer-events-none select-none">
                {children}
            </div>
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <div className="bg-[#111] text-[#f4f2ee] px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transform -rotate-2 shadow-xl border border-white/10">
                    Coming Soon
                </div>
            </div>
        </div>
    );
}

export function ComingSoonPage() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111] mb-6">
                Coming Soon
            </h1>
            <p className="max-w-md text-sm md:text-base text-[#666] font-medium leading-relaxed mb-12">
                I&apos;m currently distilling my research and updating my portfolio.
                This section will be live shortly.
            </p>
            <div className="w-12 h-px bg-[#d8d4cf]" />
        </div>
    );
}
