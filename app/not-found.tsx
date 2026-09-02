import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="text-6xl font-bold font-mono text-blue-500">404</div>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-zinc-400 text-sm">
          The page or project case study you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-100 transition-all shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </main>
  );
}
