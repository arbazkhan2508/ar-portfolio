"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Globe,
  Sparkles,
  X,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Layers,
  Images,
  Grid,
} from "lucide-react";
import { PROJECTS, Project } from "@/lib/projects";
import ProjectCarousel from "@/components/project-carousel";

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "deck" | "list">("list");
  const [deckIndex, setDeckIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleNextDeck = () => {
    setDeckIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevDeck = () => {
    setDeckIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const currentDeckProject = filteredProjects[deckIndex] || filteredProjects[0];

  return (
    <section id="work" className="py-24 relative bg-[#09090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-6 border-b border-zinc-800 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 / FEATURED PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Work
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl">
              A selection of production projects, client applications, and technical builds I've architected and implemented.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle: Sticky Stack Deck (Default - Minimal Scroll), Compact Grid, Slider Deck */}
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono">
              <button
                onClick={() => setViewMode("list")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${viewMode === "list"
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                    : "text-zinc-400 hover:text-white"
                  }`}
                title="Sticky Stacking Cards (Minimal Scrolling)"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Sticky Stack Deck</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${viewMode === "grid"
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                    : "text-zinc-400 hover:text-white"
                  }`}
                title="Compact Studio Grid"
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Compact Grid</span>
              </button>

              <button
                onClick={() => setViewMode("deck")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all ${viewMode === "deck"
                    ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-500/20"
                    : "text-zinc-400 hover:text-white"
                  }`}
                title="Interactive Slider Deck"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Slider Deck</span>
              </button>
            </div>

            {/* Interactive Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["All", "Full-Stack", "Healthcare", "Enterprise", "SaaS", "E-Commerce"].map((catLabel) => {
                const fullCat =
                  catLabel === "All"
                    ? "All"
                    : catLabel === "Full-Stack"
                      ? "Full-Stack Web App"
                      : catLabel === "Healthcare"
                        ? "Healthcare SaaS Platform"
                        : catLabel === "Enterprise"
                          ? "Enterprise Web Platform"
                          : catLabel === "SaaS"
                            ? "SaaS Application"
                            : "E-Commerce & Digital Studio";

                const isSelected = activeCategory === fullCat;

                return (
                  <button
                    key={catLabel}
                    onClick={() => {
                      setActiveCategory(fullCat);
                      setDeckIndex(0);
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${isSelected
                        ? "bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20"
                        : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                      }`}
                  >
                    {catLabel}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* View Mode 1: Sticky Stacking Deck Accordion (MINIMAL SCROLLING & ZERO DEAD SPACE) */}
        {viewMode === "list" && (
          <div className="relative space-y-6 pb-12">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <div
                  key={project.slug}
                  className="sticky transition-all duration-500"
                  style={{
                    top: `${100 + index * 14}px`,
                    zIndex: 10 + index,
                  }}
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    onQuickView={() => setSelectedProject(project)}
                  />
                </div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* View Mode 2: Compact 2-Column Studio Grid */}
        {viewMode === "grid" && (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <CompactGridCard
                  key={project.slug}
                  project={project}
                  index={index}
                  onQuickView={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* View Mode 3: Interactive Showcase Deck Slider */}
        {viewMode === "deck" && currentDeckProject && (
          <div className="relative space-y-6">

            {/* Deck Navigation Controls Bar */}
            <div className="flex items-center justify-between px-4 py-2 rounded-2xl bg-zinc-900/80 border border-zinc-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-bold">
                  PROJECT {deckIndex + 1} OF {filteredProjects.length}
                </span>
                <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                  {currentDeckProject.title} — {currentDeckProject.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevDeck}
                  className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border border-zinc-700"
                  aria-label="Previous Project"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextDeck}
                  className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 border border-zinc-700"
                  aria-label="Next Project"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Deck Animated Card Presentation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDeckProject.slug}
                initial={{ opacity: 0, x: 50, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.98 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <ProjectCard
                  project={currentDeckProject}
                  index={deckIndex}
                  onQuickView={() => setSelectedProject(currentDeckProject)}
                />
              </motion.div>
            </AnimatePresence>

            {/* Pagination Bullet Indicators */}
            <div className="flex items-center justify-center gap-2 pt-4">
              {filteredProjects.map((p, idx) => (
                <button
                  key={p.slug}
                  onClick={() => setDeckIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === deckIndex
                      ? "w-8 bg-blue-500 shadow-md shadow-blue-500/50"
                      : "w-2 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                  aria-label={`Jump to project ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Interactive Quick View Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <QuickViewModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

{/* Compact 2-Column Grid Card Component */ }
function CompactGridCard({
  project,
  index,
  onQuickView,
}: {
  project: Project;
  index: number;
  onQuickView: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group relative rounded-2xl bg-zinc-900/90 border border-zinc-800/80 hover:border-blue-500/60 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between"
    >
      <div className="p-4 sm:p-5 space-y-4">

        {/* Browser Mockup Image Box */}
        <div
          onClick={onQuickView}
          className="cursor-pointer group/img relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-inner"
        >
          {/* Top Browser Toolbar */}
          <div className="flex items-center justify-between px-3 py-2 bg-zinc-900/95 border-b border-zinc-800/80">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
              <Globe className="w-2.5 h-2.5 text-blue-400" />
              {project.slug}.app
            </span>
            <span className="text-[10px] font-mono text-blue-400 font-bold flex items-center gap-0.5">
              <Images className="w-2.5 h-2.5 text-blue-400" />
              5 SCREENS
            </span>
          </div>

          {/* Screenshot Aspect Ratio */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60 group-hover/img:opacity-20 transition-opacity" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="px-2.5 py-0.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-[10px] font-mono text-zinc-300">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white text-zinc-950 text-[10px] font-bold shadow-md">
                Launch Gallery ↗
              </span>
            </div>
          </div>
        </div>

        {/* Compact Content Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-blue-400">
              {project.number} — {project.title}
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase">{project.role}</span>
          </div>

          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
            <Link href={`/work/${project.slug}`}>{project.subtitle}</Link>
          </h3>

          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1 pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>

      {/* Compact Action Footer */}
      <div className="px-4 py-3 bg-zinc-950/80 border-t border-zinc-800/80 flex items-center justify-between">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-blue-400 transition-colors"
        >
          <span>Live Site</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>

        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <span>Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
  onQuickView,
}: {
  project: Project;
  index: number;
  onQuickView: () => void;
}) {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / -25;
    const rotateY = (x - centerX) / 25;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <motion.article
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
      }}
      style={{ perspective: 1000 }}
      className="group relative rounded-3xl bg-zinc-900/95 border border-zinc-800/90 hover:border-blue-500/60 transition-all duration-500 overflow-hidden shadow-2xl backdrop-blur-xl"
    >
      {/* Ambient Radial Hover Glow Background */}
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-6 sm:p-8 lg:p-10 items-center relative z-10">

        {/* Visual Screenshot (12-col lg:col-span-7) */}
        <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <div
            onClick={onQuickView}
            className="cursor-pointer block group/img relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl"
          >
            {/* Top Browser Toolbar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/95 border-b border-zinc-800/80">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 bg-zinc-950/80 px-3 py-0.5 rounded-full border border-zinc-800">
                <Globe className="w-3 h-3 text-blue-400" />
                <span>{project.slug}.app</span>
              </div>
              <span className="text-[10px] font-mono text-blue-400 font-bold flex items-center gap-1">
                <Images className="w-3 h-3 text-blue-400" />
                5 SCREENS ↗
              </span>
            </div>

            {/* Main Image with Zoom Effect */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover group-hover/img:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-70 group-hover/img:opacity-30 transition-opacity duration-300" />

              {/* Floating Trigger Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-zinc-950/90 border border-zinc-800 text-xs font-mono text-zinc-200 backdrop-blur-md font-medium">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-bold shadow-xl group-hover/img:scale-105 transition-transform">
                  <span>Explore 5-Image Carousel</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Details (12-col lg:col-span-5) */}
        <div className={`lg:col-span-5 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>

          {/* Header Metadata */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-bold text-blue-400 tracking-widest uppercase">
                {project.number} — {project.category}
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
              <Link href={`/work/${project.slug}`}>
                {project.title}
              </Link>
            </h3>
            <p className="text-sm font-medium text-zinc-400">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-zinc-300 text-sm leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Arbaz's Contributions */}
          <div className="space-y-2 pt-2 border-t border-zinc-800/80">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Arbaz's Key Implementation Contributions:
            </span>
            <ul className="space-y-1.5">
              {project.contributions.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition-all shadow-md active:scale-95"
            >
              <span>View Live Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-xs border border-zinc-700/80 transition-all"
            >
              <span>View Full Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </Link>
          </div>

        </div>

      </div>
    </motion.article>
  );
}

{/* Signature WOW Quick Preview Modal with ProjectCarousel */ }
function QuickViewModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-400 font-mono text-xs font-bold">
              {project.number} / {project.category}
            </span>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">

          {/* Interactive Project Carousel */}
          <ProjectCarousel
            heroImage={project.heroImage}
            heroTitle={project.title}
            keyScreens={project.keyScreens}
          />

          {/* Description & Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="text-xs font-mono text-blue-400 uppercase font-bold">Overview & Business Purpose</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.description}</p>
              <div className="pt-2">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-1">Arbaz's Role:</span>
                <span className="text-sm font-semibold text-white">{project.role}</span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono text-blue-400 uppercase font-bold">Engineering Challenge</h4>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.challenge}</p>
            </div>
          </div>

          {/* Key Contributions List */}
          <div className="space-y-3 p-5 rounded-2xl bg-zinc-950 border border-zinc-800">
            <h4 className="text-xs font-mono text-white uppercase font-bold">Arbaz Khan's Key Implementation Contributions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.contributions.map((c, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 bg-zinc-950/90">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition-colors"
          >
            <span>Launch Live Build</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <Link
            href={`/work/${project.slug}`}
            onClick={onClose}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-500 transition-colors shadow-lg"
          >
            <span>Read Full Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
