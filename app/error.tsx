"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center justify-center p-6 text-center">
      <div className="space-y-6 max-w-md">
        <div className="text-4xl font-bold text-red-500">Something went wrong</div>
        <p className="text-zinc-400 text-sm">
          An unexpected error occurred while loading this view.
        </p>
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-100 transition-all shadow-lg"
        >
          <span>Try Again</span>
        </button>
      </div>
    </main>
  );
}
