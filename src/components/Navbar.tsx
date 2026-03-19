"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";

const NAV_LINKS = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll to add backdrop blur
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold tracking-tight z-50 relative">
                    Vineet Baghel<span className="text-accent">.</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Socials */}
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="https://github.com/Vivekb638"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/baghel-vineet/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 relative p-2 -mr-2 text-foreground/80 hover:text-accent focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl py-6 flex flex-col items-center gap-6 md:hidden"
                        >
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground/80 hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5 w-1/2 justify-center">
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    className="text-foreground/80 hover:text-accent"
                                >
                                    <Github className="w-6 h-6" />
                                </Link>
                                <Link
                                    href="https://linkedin.com"
                                    target="_blank"
                                    className="text-foreground/80 hover:text-accent"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
