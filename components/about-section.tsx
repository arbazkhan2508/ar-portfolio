"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Compass, Cpu, HeartHandshake, CheckCircle } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Stats Visual (12-col lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-4 shadow-2xl">
              
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
                  alt="Arbaz Khan — Web Developer"
                  fill
                  className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md space-y-1">
                  <div className="text-sm font-bold text-white">Arbaz Khan</div>
                  <div className="text-xs font-mono text-blue-400">Web Developer & Engineer</div>
                  <div className="text-[11px] text-zinc-400">Based in India · Open to Remote Client Projects</div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-blue-600 text-white font-mono text-xs font-bold shadow-xl border border-blue-400/40">
                3+ YEARS EXP
              </div>

            </div>
          </motion.div>

          {/* Right Column: Editorial Bio (12-col lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
                <span>05 / BACKGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                A little about me.
              </h2>
            </div>

            <p className="text-lg text-zinc-300 leading-relaxed">
              I'm <strong className="text-white">Arbaz Khan</strong>, a web developer focused on building modern, responsive, and production-ready digital experiences that help businesses succeed online.
            </p>

            <p className="text-zinc-400 text-base leading-relaxed">
              Over the past 3+ years, I have worked across travel marketplaces, healthcare portals, industrial platforms, cybersecurity tools, and boutique e-commerce stores. I specialize in bridging the gap between high-end UI design and dependable backend API architecture.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  Frontend & UI Craft
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building responsive layouts with Next.js, React, Tailwind CSS, and Framer Motion that look expensive and load instantly.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  APIs & Payments
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Integrating payment gateways (Cashfree/Stripe), authentication workflows, and robust REST APIs that handle real transaction volumes.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Production Ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Clean TypeScript</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Client-First Communication</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
