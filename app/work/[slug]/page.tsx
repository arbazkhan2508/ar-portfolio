import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, ArrowRight, CheckCircle2, Globe } from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectCarousel from "@/components/project-carousel";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study | Arbaz Khan`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  // Find next project for bottom navigation
  const currentIndex = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <Navbar />

      {/* Header Spacer */}
      <div className="pt-28" />

      {/* Case Study Hero Section */}
      <section className="relative py-12 lg:py-16 bg-grid-pattern bg-radial-gradient border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Back Navigation Button */}
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Work</span>
          </Link>

          {/* Title & Metadata */}
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold">
                {project.number} / {project.category.toUpperCase()}
              </span>
              <span className="text-xs font-mono text-zinc-500">PRODUCTION CASE STUDY</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-zinc-300 font-medium">
              {project.subtitle}
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block">Role</span>
              <span className="text-sm font-semibold text-white mt-1 block">{project.role}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block">Category</span>
              <span className="text-sm font-semibold text-white mt-1 block">{project.category}</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block">Primary Tech</span>
              <span className="text-sm font-semibold text-white mt-1 block">
                {project.technologies.slice(0, 2).join(", ")}
              </span>
            </div>
            <div className="flex items-center justify-end">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-100 transition-colors shadow-lg"
              >
                <span>View Live Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Main Browser Mockup Preview */}
          <div className="rounded-3xl bg-zinc-900 border border-zinc-800 p-2 sm:p-4 shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 rounded-t-2xl border-b border-zinc-800 mb-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                {project.liveUrl}
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                LIVE PRODUCTION
              </span>
            </div>

            <div className="relative aspect-[16/9] rounded-b-2xl overflow-hidden border border-zinc-800/60">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Section 1: The Challenge & Role */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5 space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">01 / CONTEXT</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">The Challenge</h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-zinc-300 text-base leading-relaxed">
            <p>{project.challenge}</p>
            
            <div className="p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">My Exact Role & Responsibilities</h4>
              <ul className="space-y-2">
                {project.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Architecture & What I Built */}
        <div className="space-y-10 pt-12 border-t border-zinc-800/80">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">02 / IMPLEMENTATION</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">What I Built & Technical Architecture</h2>
            <p className="text-zinc-400 text-sm">
              Key engineering decisions and structural implementations crafted for performance, reliability, and client scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {project.architecture.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 p-6 space-y-2 hover:border-zinc-700 transition-colors"
              >
                <div className="text-xs font-mono text-blue-400 font-bold">MODULE 0{idx + 1}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Visual Showcase / Interactive Image Carousel */}
        <div className="space-y-10 pt-12 border-t border-zinc-800/80">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">03 / VISUAL SHOWCASE CAROUSEL</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Interactive Key Screen Carousel</h2>
            <p className="text-zinc-400 text-sm">
              Browse through high-resolution captures using the arrows, thumbnail bar, or touch controls below.
            </p>
          </div>

          {/* Interactive Project Carousel */}
          <ProjectCarousel
            heroImage={project.heroImage}
            heroTitle={project.title}
            keyScreens={project.keyScreens}
          />
        </div>

        {/* Section 4: Technology & Outcome */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pt-12 border-t border-zinc-800/80">
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">04 / STACK & RESULT</span>
              <h2 className="text-3xl font-bold text-white tracking-tight">Technologies & Impact</h2>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase block">Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-blue-950/20 border border-blue-900/50 space-y-4">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block font-bold">PROJECT OUTCOME</span>
              <p className="text-zinc-200 text-base leading-relaxed font-medium">
                {project.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Next Project Banner */}
        <div className="pt-16 border-t border-zinc-800">
          <div className="rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono text-zinc-500 uppercase">NEXT CASE STUDY</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{nextProject.title}</h3>
              <p className="text-xs text-zinc-400">{nextProject.subtitle}</p>
            </div>

            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition-all shadow-xl active:scale-95 shrink-0"
            >
              <span>Explore Next Build</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}
