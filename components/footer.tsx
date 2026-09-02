"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["work", "capabilities", "toolkit", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 350;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Links in exact sequence of homepage sections
  const navLinks = [
    { name: "Work", href: "/#work", id: "work" },
    { name: "What I Bring", href: "/#capabilities", id: "capabilities" },
    { name: "Toolkit", href: "/#toolkit", id: "toolkit" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <footer className="border-t border-zinc-800 bg-[#09090b] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand */}
          <div className="space-y-1 text-center md:text-left">
            <Link href="/" className="text-lg font-bold text-white tracking-tight">
              Arbaz Khan
            </Link>
            <div className="text-xs font-mono text-zinc-400">
              Web Developer · React, Next.js & Shopify
            </div>
          </div>

          {/* Quick Links (EXACT HOMEPAGE SEQUENCE + DYNAMIC SCROLL-SPY FOCUS) */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-zinc-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3 py-1 rounded-full transition-all duration-300",
                    isActive
                      ? "text-white bg-blue-600 font-bold shadow-md shadow-blue-500/25 scale-105"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Arbaz Khan. All rights reserved. Built with Next.js & Tailwind CSS.
          </div>

          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/arbazkhan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/arbazkhan-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:arbaz.dev.work@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email Direct"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
