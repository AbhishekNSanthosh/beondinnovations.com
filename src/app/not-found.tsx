import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist. Head back to Beond Innovations.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-5 sm:px-8 py-20 sm:py-24">
      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/50 via-white/75 to-white" />
      {/* Glow blobs — scaled down on mobile */}
      <div className="absolute top-1/3 right-1/3 -z-10 w-72 h-72 sm:w-[600px] sm:h-[600px] rounded-full bg-emerald-400/10 blur-[100px] sm:blur-[140px]" />
      <div className="absolute -top-20 -left-20 -z-10 w-64 h-64 sm:w-[500px] sm:h-[500px] rounded-full bg-emerald-200/20 blur-[80px] sm:blur-[100px]" />

      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">

        {/* Terminal card */}
        <div className="w-full rounded-2xl bg-neutral-950 border border-neutral-800 p-4 sm:p-5 text-left overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 mb-4 sm:mb-5">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/70 flex-shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/70 flex-shrink-0" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/70 flex-shrink-0" />
            <div className="ml-2 sm:ml-3 flex-1 min-w-0 h-5 rounded-md bg-neutral-800 flex items-center px-2 sm:px-3">
              <span className="text-[9px] sm:text-[10px] text-neutral-500 font-mono truncate">
                beondinnovations.com/???
              </span>
            </div>
          </div>

          {/* Terminal lines */}
          <div className="font-mono space-y-2">
            <p className="text-[11px] sm:text-sm text-neutral-500 break-all">
              <span className="text-emerald-400">$</span>{" "}
              <span className="hidden xs:inline">curl -I </span>beondinnovations.com/???
            </p>
            <p className="text-[11px] sm:text-sm text-red-400 font-semibold">HTTP/2 404 Not Found</p>
            <p className="text-[11px] sm:text-sm text-neutral-600">Content-Type: text/html</p>
            <p className="text-[11px] sm:text-sm text-neutral-600">Server: beond/1.0</p>
            <div className="pt-2 border-t border-neutral-800 mt-2 sm:mt-3">
              <p className="text-neutral-400 text-[10px] sm:text-xs leading-relaxed">
                <span className="text-emerald-400 font-semibold">→</span>{" "}
                This route doesn&apos;t exist. The page was moved, deleted, or never existed.
              </p>
            </div>
          </div>
        </div>

        {/* 404 heading */}
        <div className="px-1">
          <p className="text-emerald-600 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            Error 404
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-3 sm:mb-4 leading-tight">
            Page not found.
          </h1>
          <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
            Looks like this URL took a wrong turn. Let&apos;s get you back somewhere useful.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-emerald-600 active:bg-emerald-700 transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 8H3M7 4l-4 4 4 4" />
            </svg>
            Back to home
          </Link>
          <a
            href="mailto:beondinnovations@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 active:bg-neutral-100 transition-all duration-200"
          >
            Contact us
          </a>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { label: "Services", href: "/#services" },
            { label: "Work", href: "/#work" },
            { label: "About", href: "/#about" },
            { label: "FAQ", href: "/#faq" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3.5 py-2 rounded-full border border-neutral-200 text-xs text-neutral-500 hover:border-emerald-300 hover:text-emerald-600 active:text-emerald-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
