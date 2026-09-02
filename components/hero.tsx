"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import DraggableCards from "@/components/draggable-cards";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-grid-pattern bg-radial-gradient">
      {/* Ambient background glow spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Editorial Headline & Credentials */}
          <div className="lg:col-span-7 space-y-8 text-left">

            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-inner"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="tracking-widest uppercase text-[11px] font-semibold text-zinc-300">
                WEB DEVELOPER · FRONTEND / FULL-STACK
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                I build modern web <br className="hidden sm:inline" />
                <span className="text-gradient">experiences & applications.</span>
              </h1>
              <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
                Web developer specializing in <strong className="text-zinc-200 font-medium">React, Next.js, Shopify</strong> and modern web applications — focused on building fast, responsive and production-ready digital experiences.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="#work"
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-100 transition-all duration-300 shadow-xl shadow-white/10 active:scale-95"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 hover:border-zinc-700 font-medium text-sm transition-all duration-300"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-zinc-400 group-hover:text-white" />
              </Link>
            </motion.div>

            {/* Credibility Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg"
            >
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">3+ Yrs</div>
                <div className="text-xs text-zinc-400 font-medium">Production Experience</div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">100%</div>
                <div className="text-xs text-zinc-400 font-medium">Real-World Builds</div>
              </div>

              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">Next.js</div>
                <div className="text-xs text-zinc-400 font-medium">React · Shopify · APIs</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Layered Draggable & Interactive Cards Playground */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <DraggableCards />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
