"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
    {
        title: "Security Event Logger & Analyzer",
        description: "A comprehensive tool to log and analyze security events, providing insights into system vulnerabilities and activities.",
        image: "/project-sentiment.png",
        tags: ["Log Analysis", "Security", "Python"],
        liveUrl: "https://github.com/Vivekb638/Security_Event_logger_and_Analyzer-master",
        githubUrl: "https://github.com/Vivekb638/Security_Event_logger_and_Analyzer-master"
    },
    {
        title: "Real-Time Churn Prediction System",
        description: "Machine learning pipeline deployed to predict customer churn in real-time, enabling proactive retention strategies.",
        image: "/project-churn.png",
        tags: ["Scikit-learn", "Machine Learning", "Python"],
        liveUrl: "https://github.com/Vivekb638/Real-Time-Churn-Prediction-System",
        githubUrl: "https://github.com/Vivekb638/Real-Time-Churn-Prediction-System"
    },
    {
        title: "Vineet Fashion Store",
        description: "Modern e-commerce platform built for fashion retail, featuring a responsive UI and seamless shopping checkout experience.",
        image: "/project-sales.png",
        tags: ["E-Commerce", "Web Development", "UI/UX"],
        liveUrl: "https://github.com/Vivekb638/Vineet-Fashion-Store",
        githubUrl: "https://github.com/Vivekb638/Vineet-Fashion-Store"
    },
    {
        title: "Social Media Impact Analysis",
        description: "Data-driven research project analyzing the correlation and impact of social media usage on student academic performance.",
        image: "/project-medical.png",
        tags: ["Data Analysis", "Research", "Pandas"],
        liveUrl: "https://github.com/Vivekb638/Impact-of-Social-media-on-academic-performance",
        githubUrl: "https://github.com/Vivekb638/Impact-of-Social-media-on-academic-performance"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Featured <span className="text-accent">Projects</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all shadow-lg"
                    >
                        {/* Project Image */}
                        <div className="relative w-full aspect-video overflow-hidden bg-[#0d0d0d]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-8">
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-foreground/70 mb-6 flex-1 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4 mt-auto">
                                <Link
                                    href={project.liveUrl}
                                    className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg transition-colors"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    Live Demo
                                </Link>
                                <Link
                                    href={project.githubUrl}
                                    className="flex items-center gap-2 text-sm font-medium bg-white/5 hover:bg-white/10 px-5 py-2.5 rounded-lg transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    View Code
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
