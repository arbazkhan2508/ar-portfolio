"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  ShoppingBag,
  Database,
  Link2,
  Zap,
  CheckCircle2,
  Flame,
} from "lucide-react";

export default function TechStack() {
  const toolGroups = [
    {
      category: "Frontend Core",
      icon: Code2,
      accent: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      skills: [
        { name: "Next.js 15", exp: "3+ Yrs", highlight: true },
        { name: "React 19", exp: "3+ Yrs", highlight: true },
        { name: "TypeScript", exp: "3+ Yrs", highlight: true },
        { name: "Tailwind CSS", exp: "3+ Yrs", highlight: true },
        { name: "Framer Motion", exp: "Production", highlight: false },
        { name: "JavaScript (ES6+)", exp: "3+ Yrs", highlight: false },
      ],
    },
    {
      category: "Backend Systems",
      icon: Server,
      accent: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      skills: [
        { name: "Node.js", exp: "3+ Yrs", highlight: true },
        { name: "Express.js", exp: "3+ Yrs", highlight: true },
        { name: "REST APIs", exp: "3+ Yrs", highlight: true },
        { name: "JWT Auth & Security", exp: "Production", highlight: false },
      ],
    },
    {
      category: "E-Commerce & Shopify",
      icon: ShoppingBag,
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      skills: [
        { name: "Shopify Liquid", exp: "Production", highlight: true },
        { name: "Storefront APIs", exp: "GraphQL", highlight: true },
        { name: "Custom Checkout UX", exp: "Production", highlight: false },
      ],
    },
    {
      category: "Databases & Storage",
      icon: Database,
      accent: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      skills: [
        { name: "MongoDB & Mongoose", exp: "3+ Yrs", highlight: true },
        { name: "PostgreSQL", exp: "Production", highlight: false },
      ],
    },
    {
      category: "Payments & Tools",
      icon: Link2,
      accent: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      skills: [
        { name: "Cashfree Payment API", exp: "Live Prod", highlight: true },
        { name: "Stripe API", exp: "Production", highlight: false },
        { name: "Vercel & Git CI/CD", exp: "Daily", highlight: true },
      ],
    },
  ];

  return (
    <section id="toolkit" className="py-20 relative bg-[#09090b] overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Compact Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-zinc-800/80 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
              <Zap className="w-3.5 h-3.5" />
              <span>03 / TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              My Toolkit
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-lg">
              Core technologies, frameworks, and integration tools I build production applications with daily.
            </p>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shrink-0">
            <Flame className="w-4 h-4 text-blue-400" />
            <span className="text-xs font-mono text-zinc-300 font-semibold">
              3+ Years Production Development Standard
            </span>
          </div>
        </div>

      </div>

      {/* FULL-BLEED ANGLED TECH MARQUEE TICKER (FULL SCREEN - ZERO MARGINS - SLIGHT TILT) */}
      <div className="w-full overflow-hidden py-3.5 bg-zinc-900/90 border-y border-zinc-800/90 -rotate-1 scale-105 my-6 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-10 whitespace-nowrap animate-marquee">
          {[
            "NEXT.JS 15",
            "REACT 19",
            "TYPESCRIPT",
            "TAILWIND CSS",
            "SHOPIFY LIQUID",
            "CASHFREE PAYMENTS",
            "NODE.JS",
            "EXPRESS",
            "MONGODB",
            "FRAMER MOTION",
            "VERCEL",
            "REST APIS",
          ].concat([
            "NEXT.JS 15",
            "REACT 19",
            "TYPESCRIPT",
            "TAILWIND CSS",
            "SHOPIFY LIQUID",
            "CASHFREE PAYMENTS",
            "NODE.JS",
            "EXPRESS",
            "MONGODB",
            "FRAMER MOTION",
            "VERCEL",
            "REST APIS",
          ]).map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-3 text-xs font-mono font-bold text-zinc-300 tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
        
        {/* Sleek, High-Density 3-Column Studio Tool Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-zinc-900/80 border border-zinc-800/80 p-5 hover:border-zinc-700/90 transition-all duration-300 shadow-xl backdrop-blur-xl flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-zinc-800/80">
                    <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${group.accent}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  {/* Compact Skill Badges Grid */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`group/badge inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all duration-200 cursor-default ${
                          skill.highlight
                            ? "bg-zinc-950 text-zinc-100 border-zinc-700/80 hover:border-blue-500/60 hover:text-white"
                            : "bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700"
                        }`}
                      >
                        <CheckCircle2 className={`w-3 h-3 ${skill.highlight ? "text-blue-400" : "text-zinc-500"}`} />
                        <span>{skill.name}</span>
                        <span className="text-[10px] text-zinc-500 font-sans group-hover/badge:text-zinc-400">
                          · {skill.exp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/60 text-[10px] font-mono text-zinc-500 flex items-center justify-between">
                  <span>{group.skills.length} Core Modules</span>
                  <span className="text-blue-400/80">Verified Stack ↗</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
