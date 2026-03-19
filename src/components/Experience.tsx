"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const EXPERIENCES = [
    {
        role: "Undergraduate Student (3rd Year)",
        company: "University Degree",
        period: "2023 - Present",
        description: "Currently pursuing my degree with a strong focus on Data Science and Machine Learning. Actively building predictive models, exploring deep learning architectures, and mastering modern data stacks.",
        skills: ["Machine Learning", "Data Structures", "Algorithms"]
    },
    {
        role: "Machine Learning Enthusiast",
        company: "Self-Driven Learning & Projects",
        period: "2024 - Present",
        description: "Developed end-to-end ML pipelines including a real-time churn prediction system and medical image classifier. Specialized in model optimization and deployment using cutting-edge tools.",
        skills: ["Python", "TensorFlow", "Scikit-learn", "FastAPI"]
    },
    {
        role: "Active Coder & Tech Contributor",
        company: "College Communities & Hackathons",
        period: "2023 - Present",
        description: "Collaborated with peers on data-driven research, participated in tech events, and continually improved my software engineering skills to build scalable AI solutions.",
        skills: ["Problem Solving", "Web Development", "Team Collaboration"]
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Education & <span className="text-accent">Journey</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </motion.div>

            <div className="relative pl-4 md:pl-8">
                {/* Timeline Line */}
                <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-px bg-white/10" />

                <div className="space-y-12">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={exp.role}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="relative pl-12 md:pl-16"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border-2 border-accent flex items-center justify-center -ml-4 md:-ml-8 z-10 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                                <div className="w-2 h-2 rounded-full bg-accent" />
                            </div>

                            {/* Content Card */}
                            <div className="bg-card border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <div className="flex items-center gap-2 text-accent mt-1">
                                            <GraduationCap className="w-4 h-4" />
                                            <span className="font-medium">{exp.company}</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-foreground/50 bg-white/5 py-1 px-3 rounded-full self-start md:self-auto">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-foreground/70 mb-6 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.skills.map(skill => (
                                        <span key={skill} className="px-3 py-1 text-xs font-medium border border-white/10 rounded-full text-foreground/70">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
