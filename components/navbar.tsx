"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Background blur scroll state
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section scroll-spy matching homepage section sequence
      const sections = ["work", "capabilities", "toolkit", "experience", "about", "contact"];
      const scrollPosition = window.scrollY + 250;

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-xl border-[#27272a]/60 py-3.5 shadow-2xl shadow-black/40"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Brand / Name */}
        <Link href="/" className="group flex items-center gap-3 text-left">
          <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/60 group-hover:border-blue-500/60 transition-colors">
            <span className="font-mono text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
              AK
            </span>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
          </div>
          <div>
            <div className="font-semibold text-base text-zinc-100 group-hover:text-white tracking-tight flex items-center gap-2">
              Arbaz Khan
            </div>
            <div className="text-[11px] font-mono text-zinc-400 tracking-wider uppercase">
              Web Developer · 3+ Yrs
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links (EXACT HOMEPAGE SEQUENCE + ACTIVE SCROLL-SPY) */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-zinc-900/70 border border-zinc-800/80 px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-3.5 py-1.5 text-xs font-mono transition-all duration-300 rounded-full",
                  isActive
                    ? "text-white bg-blue-600 font-bold shadow-md shadow-blue-500/25 scale-105"
                    : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/#contact"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-zinc-950 bg-gradient-to-r from-zinc-100 to-zinc-300 hover:from-white hover:to-zinc-200 transition-all duration-300 shadow-md shadow-zinc-100/10 hover:shadow-zinc-100/20 active:scale-95"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09090b]/95 backdrop-blur-2xl border-b border-zinc-800/80 px-6 py-6 transition-all animate-in slide-in-from-top-5">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-base font-mono py-2 border-b border-zinc-900 flex items-center justify-between transition-colors",
                    isActive ? "text-blue-400 font-bold" : "text-zinc-300 hover:text-white"
                  )}
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-zinc-500">0{navLinks.indexOf(link) + 1}</span>
                </Link>
              );
            })}
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-zinc-950 font-medium text-sm shadow-lg shadow-white/10"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
