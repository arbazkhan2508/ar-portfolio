"use client";

import { motion } from "framer-motion";
import { Code2, Server, ShoppingBag, Database, Link2 } from "lucide-react";

export default function TechStack() {
  const groups = [
    {
      category: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion"],
    },
    {
      category: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "REST APIs", "Serverless", "JSON Web Tokens"],
    },
    {
      category: "E-Commerce",
      icon: ShoppingBag,
      skills: ["Shopify", "Liquid", "Storefront APIs", "Custom Checkout Flows"],
    },
    {
      category: "Database",
      icon: Database,
      skills: ["MongoDB", "Mongoose", "PostgreSQL Basics"],
    },
    {
      category: "Integrations & Tools",
      icon: Link2,
      skills: ["Cashfree Payments", "Stripe API", "Auth / JWT", "Git / GitHub", "Vercel", "Postman"],
    },
  ];

  return (
    <section id="toolkit" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
            <span>03 / TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            My Toolkit
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Technologies and frameworks I use daily to architect scalable, modern web applications.
          </p>
        </div>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 hover:border-zinc-700/80 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-800">
                  <div className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800/90 text-xs font-mono text-zinc-300 hover:text-white hover:border-blue-500/40 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
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
