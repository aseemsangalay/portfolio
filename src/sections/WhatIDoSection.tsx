"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { roles } from "@/data/roles";
import { Role } from "@/types";

interface WhatIDoSectionProps {
    data?: Role[];
}

export default function WhatIDoSection({
    data = roles,
}: WhatIDoSectionProps) {
    return (
        <Section id="what-i-do" className="bg-[#f4f2ee]">
            <Container>
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-display-bold text-foreground mb-6">
                            What I Do
                        </h2>
                        <p className="text-body max-w-2xl mx-auto leading-relaxed">
                            I build digital systems that solve real problems, with a focus on
                            clarity, elegance, and long-term thinking.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {data.map((role, index) => (
                            <motion.div
                                key={role.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.8,
                                    delay: index * 0.15,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-[#f4f2ee] border border-hairline rounded-2xl p-6 md:p-8 hover:border-accent/20 transition-all duration-500 hover-lift hover:shadow-lg hover:shadow-accent/5 h-full">
                                    <div className="text-3xl md:text-4xl mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500">
                                        {role.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-display font-semibold text-foreground mb-3 md:mb-4">
                                        {role.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-card leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
