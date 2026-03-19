"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Laptop, Sparkles } from "lucide-react";

const ABOUT_CARDS = [
    {
        title: "My Background",
        icon: <GraduationCap className="w-6 h-6" />,
        description: "I am a driven 3rd-year undergraduate student heavily specializing in Data Science and Machine Learning. My academic journey is fueled by a deep curiosity for how algorithms can uncover hidden patterns in complex, messy data.",
        span: "col-span-1 md:col-span-2",
    },
    {
        title: "My Mission",
        icon: <Target className="w-6 h-6" />,
        description: "To bridge the gap between raw data and actionable intelligence by building scalable, efficient AI systems that solve real-world problems.",
        span: "col-span-1",
    },
    {
        title: "What I Do",
        icon: <Laptop className="w-6 h-6" />,
        description: "When I'm not studying for my core courses, I'm competing in hackathons, exploring powerful deep learning architectures, and building end-to-end ML pipelines from scratch.",
        span: "col-span-1",
    },
    {
        title: "Tech Philosophy",
        icon: <Sparkles className="w-6 h-6" />,
        description: "I passionately believe that the best data scientists don't just write algorithms—they tell compelling visual stories with data and build intelligent tools that empower human decisions.",
        span: "col-span-1 md:col-span-2",
    }
];

export default function About() {
    return (
        <section id="about" className="py-32 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16 flex flex-col items-center text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    About <span className="text-accent">Me</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full mb-6" />
                <p className="text-foreground/60 max-w-2xl text-lg">
                    A glimpse into who I am, what drives me forward, and how I approach the world of Data Science.
                </p>
            </motion.div>

            {/* Bento Box Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ABOUT_CARDS.map((card, index) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`group relative bg-card border border-white/5 p-8 md:p-10 rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 shadow-lg ${card.span}`}
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-8 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500">
                                {card.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed text-lg flex-1">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
