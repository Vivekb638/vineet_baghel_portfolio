"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Globe, Cpu, Terminal, Layers, BarChart } from "lucide-react";

const SKILL_CATEGORIES = [
    {
        title: "Machine Learning & AI",
        icon: <BrainCircuit className="w-5 h-5" />,
        skills: ["TensorFlow", "Scikit-learn", "Deep Learning", "NLP"]
    },
    {
        title: "Programming Languages",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["Python", "C++", "Java", "JavaScript"]
    },
    {
        title: "Data Tools",
        icon: <Database className="w-5 h-5" />,
        skills: ["PowerBI", "SQL", "Pandas", "NumPy"]
    },
    {
        title: "Web & Deployment",
        icon: <Globe className="w-5 h-5" />,
        skills: ["FastAPI", "Streamlit", "Node.js", "Docker"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Core <span className="text-accent">Skills</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILL_CATEGORIES.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group p-8 rounded-2xl bg-card border border-white/5 hover:border-accent/50 transition-all duration-300 relative overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 rounded-lg bg-white/5 text-accent">
                                    {category.icon}
                                </div>
                                <h3 className="font-semibold text-lg">{category.title}</h3>
                            </div>

                            <ul className="space-y-3 mt-auto">
                                {category.skills.map(skill => (
                                    <li key={skill} className="flex items-center gap-2 text-foreground/70 group-hover:text-foreground/90 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
