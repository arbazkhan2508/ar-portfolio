"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Github, Linkedin, Send, CheckCircle2, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
    } catch (err) {
      console.error("Form error:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline & Direct Contact Info (12-col lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
                <span>07 / INITIATE CONTACT</span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Have something <br className="hidden sm:inline" />
                <span className="text-gradient">in mind?</span>
              </h2>
              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                Tell me what you're building, improving, or launching. Let's discuss how I can help bring your digital vision to life.
              </p>
            </div>

            {/* Direct Links */}
            <div className="space-y-4 pt-4 border-t border-zinc-800">
              
              {/* Email Button */}
              <a
                href="mailto:arbaz.dev.work@gmail.com"
                className="group flex items-center justify-between p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-zinc-500 uppercase">Direct Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                      arbaz.dev.work@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Social Row */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/arbazkhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                    <span className="text-xs font-medium text-zinc-200">GitHub</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <a
                  href="https://linkedin.com/in/arbazkhan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-zinc-400 group-hover:text-white" />
                    <span className="text-xs font-medium text-zinc-200">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>

            </div>

            <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-900/40 text-xs text-blue-300 space-y-1">
              <div className="font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for New Client Projects
              </div>
              <p className="text-zinc-400 text-[11px]">
                Typical response time: Within 12–24 hours.
              </p>
            </div>

          </div>

          {/* Right Column: Lightweight Project Inquiry Form (12-col lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-900/80 border border-zinc-800/90 p-6 sm:p-8 lg:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Received!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formState.name}. I will review your project details and get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: "", email: "", project: "", budget: "", timeline: "" });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="flex items-center gap-2 mb-2 pb-3 border-b border-zinc-800">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-zinc-300 uppercase">Project Inquiry Form</span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase block">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase block">Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-zinc-400 uppercase block">Project Description *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about what you want to build, key features needed, or existing codebase status..."
                      value={formState.project}
                      onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Budget & Timeline Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase block">Estimated Budget (Optional)</label>
                      <select
                        value={formState.budget}
                        onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select range...</option>
                        <option value="<1.5k">Under $1,500</option>
                        <option value="1.5k-3k">$1,500 — $3,000</option>
                        <option value="3k-5k">$3,000 — $5,000</option>
                        <option value="5k+">$5,000+</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-zinc-400 uppercase block">Target Timeline (Optional)</label>
                      <select
                        value={formState.timeline}
                        onChange={(e) => setFormState({ ...formState, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-300 focus:outline-none focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select timeline...</option>
                        <option value="urgent">As soon as possible</option>
                        <option value="1-2-weeks">1 — 2 weeks</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="flexible">Flexible timeframe</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group relative flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-white to-zinc-200 hover:from-white hover:to-white text-zinc-950 font-bold text-sm transition-all duration-300 shadow-xl shadow-white/10 active:scale-98 disabled:opacity-50"
                  >
                    <span>{loading ? "Sending Message..." : "Start a Conversation"}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
