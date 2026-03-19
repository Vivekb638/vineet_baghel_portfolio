"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CERTIFICATIONS = [
    {
        title: "Oracle Certified AI Foundations",
        issuer: "Oracle University",
        date: "Sept 2025",
        description: "Achieved foundational certification demonstrating knowledge of Artificial Intelligence concepts.",
        image: "/oracle-cert.png",
        link: "/oracle-cert.png"
    },
    {
        title: "Cloud Computing (Elite)",
        issuer: "NPTEL (IIT Kharagpur)",
        date: "Oct 2025",
        description: "Successfully completed a 12-week comprehensive proctored course on Cloud Computing technologies.",
        image: "/nptel-cert.png",
        link: "/nptel-cert.png"
    },
    {
        title: "JavaScript (Intermediate)",
        issuer: "HackerRank",
        date: "Nov 2025",
        description: "Validated intermediate-level proficiency in JavaScript, covering fundamental design patterns.",
        image: "/hackerrank-cert.png",
        link: "/hackerrank-cert.png"
    }
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Licenses & <span className="text-accent">Certifications</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.div
                        key={cert.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group flex flex-col bg-card rounded-3xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all shadow-xl h-full"
                    >
                        {/* Certificate Image Preview */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0a0a0a]">
                            <Image
                                src={cert.image}
                                alt={cert.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-90" />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-8">
                            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                                {cert.title}
                            </h3>
                            <p className="text-sm font-medium text-accent/80 mb-4 flex items-center gap-2">
                                {cert.issuer}
                                <span className="text-white/20">•</span>
                                <span className="text-foreground/50">{cert.date}</span>
                            </p>
                            <p className="text-foreground/70 leading-relaxed text-sm flex-1 mb-8">
                                {cert.description}
                            </p>

                            <Link
                                href={cert.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors mt-auto w-fit bg-white/5 px-5 py-2.5 rounded-xl hover:bg-white/10"
                            >
                                View Certificate
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
