"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Cpu, GraduationCap, Award, CheckCircle, Sparkles, MapPin, Mail, Phone } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Card & Education / Certifications (12-col lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative space-y-6"
          >
            <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 p-4 shadow-2xl">
              
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950">
                <Image
                  src="/my-photo.jpeg"
                  alt="Arbaz Khan — Frontend Engineer"
                  fill
                  className="object-cover object-top hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md space-y-1.5">
                  <div className="text-sm font-bold text-white">Arbaz Khan</div>
                  <div className="text-xs font-mono text-blue-400">Frontend Engineer | Full Stack Experience</div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-blue-400" />
                    <span>Bhopal, India · Open for Remote Client Projects</span>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-2xl bg-blue-600 text-white font-mono text-xs font-bold shadow-xl border border-blue-400/40">
                ~3 YRS EXPERIENCE
              </div>

            </div>

            {/* Resume Education & Certifications Card */}
            <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 space-y-4 shadow-xl">
              <div className="space-y-3 pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">B.Tech — Computer Science & Engineering</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Trinity Institute of Technology & Research (RGPV) · 2020 – 2024
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-bold">
                  <Award className="w-4 h-4" />
                  <span>CERTIFICATIONS</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Frontend & Full-Stack Development</h4>
                  <p className="text-xs text-zinc-400 font-mono mt-0.5">
                    Sheryians Coding School · React.js, Next.js, Node.js, Express, MongoDB
                  </p>
                </div>
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
                <Sparkles className="w-3.5 h-3.5" />
                <span>05 / PROFESSIONAL BACKGROUND</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                About Arbaz Khan
              </h2>
            </div>

            <p className="text-lg text-zinc-200 leading-relaxed font-normal">
              Frontend Engineer with <strong className="text-white">~3 years of experience</strong> building enterprise-grade web applications with React.js, TypeScript, Next.js, and modern JavaScript (ES6+).
            </p>

            <p className="text-zinc-400 text-base leading-relaxed">
              Specialized in designing scalable, component-driven frontend architectures, integrating REST APIs, and implementing authentication, authorization, and role-based access control (RBAC) for business-critical platforms including payment systems, procurement portals, and merchant administration dashboards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-800">
              <div className="space-y-2 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  Frontend & Component Systems
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  React 19, Next.js, TypeScript, Tailwind CSS, Shadcn UI, Radix UI, TanStack Query & Table, Redux Toolkit, Jotai.
                </p>
              </div>

              <div className="space-y-2 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-blue-400" />
                  Security, APIs & Backends
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Node.js, Express.js, REST APIs, MongoDB, JWT Auth, 2FA (OTP/Google Authenticator), JWE Encryption, Cashfree & Stripe.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Feature-Sliced Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Maker-Checker Workflows</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span>Clean Agile Code Reviews</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
