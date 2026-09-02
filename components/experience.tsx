"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Frontend & Full-Stack Developer",
      company: "Independent Client & Contract Engineering",
      period: "2023 — Present",
      type: "Full-Time Client Builds",
      description:
        "Building production-ready web applications, e-commerce stores, and enterprise SaaS dashboards for clients across travel, healthcare, cybersecurity, and manufacturing sectors.",
      achievements: [
        "Architected TravQuest travel marketplace with Cashfree payment gateway integration and vendor management",
        "Lead frontend development for Klick Niramaya HMS (OPD/IPD queues, EHR, doctor desks)",
        "Built Ehresmann Engineering platform delivering 98+ Lighthouse performance scores",
        "Developed zero-knowledge client-side encryption tool Encriptify using Web Crypto API",
      ],
    },
    {
      role: "Web Application Developer",
      company: "Digital Product Studio",
      period: "2021 — 2023",
      type: "Frontend & API Integration",
      description:
        "Focused on building modern React web apps, Shopify custom liquid themes, REST API endpoints, and responsive user interfaces.",
      achievements: [
        "Delivered 15+ responsive web builds using React, Next.js, JavaScript, and CSS Tailwind systems",
        "Integrated third-party payment gateways, authentication providers, and head-less CMS backends",
        "Optimized client asset delivery, mobile touch performance, and cross-browser accessibility",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-zinc-950/80 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
            <span>04 / PROFESSIONAL TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Experience
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            3+ years of hands-on production engineering across client software and web platforms.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-900 border-2 border-blue-500 group-hover:scale-125 transition-transform" />

              <div className="rounded-2xl bg-zinc-900/70 border border-zinc-800/80 p-6 sm:p-8 space-y-4 hover:border-zinc-700 transition-colors">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start sm:self-auto">
                    <span className="px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    Key Accomplishments:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
