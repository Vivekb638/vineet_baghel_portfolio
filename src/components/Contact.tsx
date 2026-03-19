"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export default function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Web3Forms API Integration
    const onSubmit = async (data: FormInputs) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "96c42e72-f387-4625-b68e-5940bd1c944a",
                    name: data.name,
                    email: data.email,
                    subject: data.subject,
                    message: data.message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setIsSuccess(true);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-16 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
                    Get In <span className="text-accent">Touch</span>
                </h2>
                <div className="h-1 w-20 bg-accent rounded-full mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Let's connect</h3>
                        <p className="text-foreground/70 leading-relaxed max-w-md">
                            Whether you have a question, a project proposal, or just want to say hi,
                            I'll try my best to get back to you! My inbox is always open.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-card border border-white/5 rounded-full text-accent">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">Email</p>
                                <a href="mailto:contact@vineetbaghel.com" className="text-lg font-medium hover:text-accent transition-colors">
                                    contact@vineetbaghel.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-4 bg-card border border-white/5 rounded-full text-accent">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">Location</p>
                                <p className="text-lg font-medium">Agra, Uttar Pradesh</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 flex items-center gap-4 border-t border-white/5">
                        <Link
                            href="https://github.com/Vivekb638"
                            target="_blank"
                            className="p-3 bg-card border border-white/5 rounded-full text-foreground/70 hover:text-accent hover:border-accent/30 transition-all font-medium flex items-center gap-3 w-full justify-center md:w-auto md:px-6"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/baghel-vineet/"
                            target="_blank"
                            className="p-3 bg-card border border-white/5 rounded-full text-foreground/70 hover:text-accent hover:border-accent/30 transition-all font-medium flex items-center gap-3 w-full justify-center md:w-auto md:px-6"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </Link>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {isSuccess ? (
                        <div className="h-full bg-card border border-white/5 rounded-2xl p-12 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mb-6">
                                <Send className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                            <p className="text-foreground/70">
                                Thank you for reaching out. I'll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="mt-8 px-6 py-2 bg-white/5 hover:bg-white/10 rounded-full font-medium transition-colors"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card border border-white/5 p-8 rounded-2xl shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-foreground/80">Full Name</label>
                                    <input
                                        id="name"
                                        {...register("name", { required: true })}
                                        className={`w-full bg-[#0a0a0a] border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all`}
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email Address</label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", { required: true })}
                                        className={`w-full bg-[#0a0a0a] border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all`}
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                                <input
                                    id="subject"
                                    {...register("subject", { required: true })}
                                    className={`w-full bg-[#0a0a0a] border ${errors.subject ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all`}
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    {...register("message", { required: true })}
                                    className={`w-full bg-[#0a0a0a] border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none`}
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex items-center justify-center gap-2 bg-accent text-black font-semibold px-6 py-4 rounded-lg hover:bg-[#0f9183] transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
