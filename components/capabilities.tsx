"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Layout,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";

export default function Capabilities() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const pillars = [
    {
      number: "01",
      icon: Lightbulb,
      title: "Strategic Product Architecture",
      subtitle: "Business Goals & User Flow Alignment",
      description:
        "I don't just write lines of code — I analyze business requirements, map out seamless user journeys, and architect clean Next.js systems built for conversion.",
      highlights: [
        "User workflow mapping & UI wireframing",
        "Business metric alignment & feature scoping",
        "Scalable component & state architecture",
      ],
      tag: "STRATEGY & SCOPE",
    },
    {
      number: "02",
      icon: Rocket,
      title: "Production Execution & API Integrations",
      subtitle: "Payment Gateways & Live Systems",
      description:
        "3+ years of experience shipping production web platforms. Expertise in Cashfree & Stripe payment gateways, custom webhooks, RESTful APIs, and Vercel CI/CD.",
      highlights: [
        "Cashfree & Stripe API webhooks",
        "REST API architecture & error handling",
        "Vercel automated deployment pipelines",
      ],
      tag: "PRODUCTION READY",
    },
    {
      number: "03",
      icon: Layout,
      title: "High-Impact UI & Motion UX",
      tagline: "PIXEL-PERFECT DESIGN RIGOR",
      subtitle: "Fluid Layouts & Micro-Animations",
      description:
        "Specialized in crafting clean, responsive dark-mode interfaces with zero layout shift, fluid typography, and hardware-accelerated Framer Motion spring physics.",
      highlights: [
        "Mobile-first responsive layouts",
        "Framer Motion spring physics & drag",
        "Modern dark-mode glassmorphism aesthetics",
      ],
      tag: "DESIGN & MOTION",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Technical Reliability & Clean Code",
      subtitle: "Sub-Second Speed & TypeScript Rigor",
      description:
        "Strict TypeScript typing, modular React component architecture, optimized asset pipelines, and adherence to 98+ Lighthouse Core Web Vitals.",
      highlights: [
        "Strict TypeScript type safety",
        "Sub-second page load performance",
        "Maintainable, clean codebase setup",
      ],
      tag: "PERFORMANCE & CODE",
    },
  ];

  return (
    <section id="capabilities" className="py-24 relative bg-zinc-950 border-t border-zinc-800/80 overflow-hidden">
      
      {/* Subtle ambient lighting blur */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header (No Cards) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800/80 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>02 / VALUE PROPOSITION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              What I Bring
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
              Engineering discipline combined with design awareness to build high-converting, reliable production software.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden lg:block">
            ✦ NO COMPROMISE PRODUCTION STANDARDS
          </div>
        </div>

        {/* Clean Editorial Accordion List (NO CARDS / NO BOXES) */}
        <div className="space-y-0 border-t border-zinc-800/80">
          {pillars.map((item, index) => {
            const isOpen = activeItem === index;
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="border-b border-zinc-800/80 transition-colors duration-300 group"
              >
                {/* Main Interactive Row Header */}
                <button
                  onClick={() => setActiveItem(isOpen ? null : index)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group-hover:px-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-6 sm:gap-10">
                    <span className={`font-mono text-xl sm:text-2xl font-bold transition-colors ${
                      isOpen ? "text-blue-400" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}>
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                          isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}>
                          {item.title}
                        </h3>
                        <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-blue-400 font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 font-mono mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                    isOpen
                      ? "bg-blue-600 border-blue-500 text-white rotate-180"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 group-hover:text-white group-hover:border-zinc-700"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content Body */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-12 sm:pl-20 pr-4 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                        
                        {/* Left: Description */}
                        <div className="lg:col-span-7 space-y-4">
                          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                            {item.description}
                          </p>
                        </div>

                        {/* Right: Highlights List */}
                        <div className="lg:col-span-5 bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80 space-y-2.5">
                          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold block mb-1">
                            Key Deliverables & Standards:
                          </span>
                          {item.highlights.map((h, i) => (
                            <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
