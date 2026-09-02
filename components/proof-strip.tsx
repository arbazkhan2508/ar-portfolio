"use client";

import { CheckCircle2, ShieldCheck, Zap, Layers, CreditCard } from "lucide-react";

export default function ProofStrip() {
  const items = [
    { label: "3+ YEARS PRODUCTION EXPERIENCE", icon: ShieldCheck },
    { label: "REAL-WORLD PROJECTS", icon: CheckCircle2 },
    { label: "WEB APPLICATIONS", icon: Layers },
    { label: "E-COMMERCE & SHOPIFY", icon: Zap },
    { label: "PAYMENT & API INTEGRATIONS", icon: CreditCard },
  ];

  return (
    <section className="relative z-20 border-y border-zinc-800/80 bg-zinc-950/90 py-5 overflow-hidden backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 text-xs font-mono tracking-widest text-zinc-400 uppercase hover:text-zinc-200 transition-colors"
              >
                <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-semibold">{item.label}</span>
                {idx < items.length - 1 && (
                  <span className="hidden lg:inline-block ml-4 text-zinc-700">/</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
