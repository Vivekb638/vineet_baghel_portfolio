"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";

const ROLES = ["Data Scientist", "Machine Learner", "Data Analyst"];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 2500); // role changes every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-12 w-full max-w-7xl mx-auto">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full z-10">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                            Hi, I'm <span className="text-accent">Vineet Baghel</span>
                        </h1>

                        {/* Animated Role Text */}
                        <div className="h-10 md:h-12 overflow-hidden relative w-full flex items-center">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={roleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-2xl md:text-3xl font-medium text-foreground/80 absolute inset-0"
                                >
                                    {ROLES[roleIndex]}
                                </motion.h2>
                            </AnimatePresence>
                        </div>

                        <p className="text-lg md:text-xl text-foreground/60 max-w-xl leading-relaxed mt-2">
                            Building intelligent systems that transform complex data into real-world impact.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Link
                            href="#projects"
                            className="group flex items-center gap-2 bg-accent text-black px-8 py-3.5 rounded-full font-medium transition-all hover:bg-[#0f9183] hover:scale-105 active:scale-95"
                        >
                            Explore My Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            className="group flex items-center gap-2 bg-white/5 border border-white/10 text-foreground px-8 py-3.5 rounded-full font-medium transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </Link>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                        <Link
                            href="https://github.com/Vivekb638"
                            target="_blank"
                            className="text-foreground/60 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/5"
                        >
                            <Github className="w-6 h-6" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/baghel-vineet/"
                            target="_blank"
                            className="text-foreground/60 hover:text-accent transition-colors p-2 rounded-full hover:bg-white/5"
                        >
                            <Linkedin className="w-6 h-6" />
                        </Link>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative w-72 h-72 md:w-96 md:h-96"
                    >
                        {/* Image Glow */}
                        <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full" />

                        <div className="absolute inset-0 rounded-full border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(20,184,166,0.15)] bg-card">
                            <Image
                                src="/vineet-hero.png"
                                alt="Vineet Baghel - Data Scientist"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
