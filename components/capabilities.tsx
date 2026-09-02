"use client";

import { motion } from "framer-motion";
import { Lightbulb, Rocket, Layout, ShieldCheck, Check } from "lucide-react";

export default function Capabilities() {
  const capabilities = [
    {
      icon: Lightbulb,
      title: "Product Thinking",
      tagline: "Strategy Before Code",
      description:
        "I don't just write code — I seek to thoroughly understand business goals, target user flows, and product constraints before building.",
      highlights: [
        "User workflow mapping",
        "Business goal alignment",
        "Feature prioritization",
      ],
    },
    {
      icon: Rocket,
      title: "Production Experience",
      tagline: "Tested in the Real World",
      description:
        "3+ years of experience shipping production web applications, custom API integrations, payment webhooks, and live client software.",
      highlights: [
        "Payment & auth integrations",
        "API architecture & state",
        "Sub-second loading times",
      ],
    },
    {
      icon: Layout,
      title: "Pixel-Perfect UI",
      tagline: "Design & UX Rigor",
      description:
        "Specialized in crafting clean, responsive, high-converting interfaces with meticulous attention to spacing, typography, motion, and mobile feel.",
      highlights: [
        "Mobile-first responsive layouts",
        "Fluid typography & dark themes",
        "Subtle micro-animations",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Reliable Development",
      tagline: "Maintainable & Scalable",
      description:
        "Clean TypeScript codebase, modular component structures, semantic HTML5, and strict adherence to modern web standards.",
      highlights: [
        "Strong TypeScript typing",
        "Modular React architecture",
        "Vercel production setup",
      ],
    },
  ];

  return (
    <section id="capabilities" className="py-24 relative bg-zinc-950/60 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
            <span>02 / CLIENT VALUE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            What I Bring
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Engineering discipline combined with strong design awareness to turn ideas into reliable production platforms.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-zinc-900/80 border border-zinc-800/80 p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <div>
                    <span className="text-[11px] font-mono text-zinc-500 tracking-wider uppercase block">
                      {cap.tagline}
                    </span>
                    <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                      {cap.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="pt-6 mt-6 border-t border-zinc-800/80 space-y-2">
                  {cap.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
