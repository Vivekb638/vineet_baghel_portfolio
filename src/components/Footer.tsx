import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-foreground/60 text-sm">
                    © {new Date().getFullYear()} Vineet Baghel. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/Vivekb638"
                        target="_blank"
                        className="text-foreground/60 hover:text-accent transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/baghel-vineet/"
                        target="_blank"
                        className="text-foreground/60 hover:text-accent transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </Link>
                    <Link
                        href="mailto:contact@baghel.com"
                        className="text-foreground/60 hover:text-accent transition-colors"
                        aria-label="Email"
                    >
                        <Mail className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
