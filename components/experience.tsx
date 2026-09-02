"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2, MapPin, Sparkles } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "React Developer",
      company: "LincPay Solutions Pvt. Ltd",
      location: "Bhopal, India",
      period: "May 2025 — Present",
      type: "Fintech & Payment Platforms",
      description:
        "Architecting enterprise-grade Payment Gateway Admin Panels, multi-tenant Switch portals, and merchant onboarding platforms using React 19, TypeScript, and modern component systems.",
      techStack: ["React 19", "TypeScript", "Tailwind CSS", "Shadcn UI", "Redux Toolkit", "React Hook Form", "Zod", "Axios", "JWT", "RBAC", "Recharts"],
      achievements: [
        "Developed Payment Gateway Admin Panel managing high-volume transactions, settlements, and merchant configurations",
        "Built a reusable React component library with Tailwind CSS and Shadcn UI, standardizing UI patterns platform-wide",
        "Implemented authentication and role-based access control (RBAC) flows with JWT & 2FA security",
        "Integrated REST APIs using Axios, handling loading, error, and edge-case states for real-time transaction data",
        "Designed dynamic, validated forms with React Hook Form & Zod, improving merchant onboarding data integrity",
        "Managed complex application state with Redux Toolkit for multi-step admin workflows",
      ],
    },
    {
      role: "Software Developer",
      company: "MAH IT Software & Development",
      location: "Bhopal, India",
      period: "Jan 2025 — Apr 2025",
      type: "Enterprise ERP & Operations",
      description:
        "Developed frontend architectures for Procurement Management and Transport Management Systems, translating complex business workflows into intuitive user interfaces.",
      techStack: ["React", "TypeScript", "Tailwind CSS", "React Hook Form", "Zod", "REST APIs", "Git"],
      achievements: [
        "Developed Procurement Management System frontend, translating complex approval & inventory workflows into clean UI",
        "Architected scalable, feature-based frontend structure for Procurement and Transport Management Systems",
        "Built reusable CRUD modules and admin dashboards enabling consistent operations across business entities",
        "Created dynamic forms with React Hook Form & Zod validation, streamlining procurement data entry",
        "Refactored legacy components into typed, reusable React components, improving team velocity",
      ],
    },
    {
      role: "MERN Stack Developer",
      company: "Eulogik Pvt. Ltd",
      location: "Bhopal, India",
      period: "Sep 2023 — Dec 2024",
      type: "Full-Stack Development",
      description:
        "Delivered end-to-end features for Merchant Portals, engineering React.js frontends and supporting Node.js/Express.js backend endpoints with MongoDB databases.",
      techStack: ["React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Redux Toolkit", "JWT", "REST APIs"],
      achievements: [
        "Delivered end-to-end features for Merchant Portal, building React.js frontends and supporting Node.js/Express backend services",
        "Implemented secure JWT authentication and authorization systems with RBAC across user roles",
        "Designed & consumed REST APIs connecting React interfaces to Express services backed by MongoDB & Mongoose",
        "Managed shared application state with Redux Toolkit and handled routing with React Router across authenticated views",
        "Diagnosed and fixed production stack bugs, improving application stability and user feedback loops",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative bg-zinc-950/90 border-t border-zinc-800/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-6 border-b border-zinc-800 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>04 / PROFESSIONAL TRACK RECORD</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Work Experience
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
              ~3 years of hands-on professional frontend & full-stack development building business-critical enterprise platforms.
            </p>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span>Full-Stack Development Experience</span>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-zinc-800/80 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.12 }}
              className="relative group"
            >
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all shadow-md shadow-blue-500/20" />

              <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800/80 p-6 sm:p-8 space-y-6 hover:border-blue-500/40 transition-all duration-300 shadow-xl backdrop-blur-xl">
                
                {/* Role Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-zinc-800/80">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] font-bold">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 mt-1.5">
                      <div className="flex items-center gap-1.5 text-zinc-200 font-semibold">
                        <Building2 className="w-3.5 h-3.5 text-blue-400" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1 text-zinc-400">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start lg:self-auto">
                    <span className="px-3.5 py-1.5 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-200 font-bold">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-bold">
                    Key Impact & Engineering Contributions:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
