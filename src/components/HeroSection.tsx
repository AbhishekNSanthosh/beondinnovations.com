"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-heading", { opacity: 0, y: 44, duration: 0.85 }, "-=0.35")
        .from(".hero-sub", { opacity: 0, y: 28, duration: 0.7 }, "-=0.45")
        .from(".hero-btn", { opacity: 0, y: 18, duration: 0.55, stagger: 0.12 }, "-=0.35")
        .from(
          ".hero-terminal",
          { opacity: 0, y: 40, duration: 0.9, ease: "power4.out" },
          "-=0.5"
        )
        .from(
          ".hero-chip-1",
          { opacity: 0, scale: 0.65, duration: 0.55, ease: "back.out(1.8)" },
          "-=0.45"
        )
        .from(
          ".hero-chip-2",
          { opacity: 0, scale: 0.65, duration: 0.55, ease: "back.out(1.8)" },
          "-=0.35"
        );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/50 via-white/75 to-white" />
      {/* Glow blobs */}
      <div className="absolute top-1/3 right-1/3 -z-10 w-[700px] h-[700px] rounded-full bg-emerald-400/10 blur-[140px]" />
      <div className="absolute -top-32 -left-32 -z-10 w-[500px] h-[500px] rounded-full bg-emerald-200/20 blur-[100px]" />

      <div className="w-full px-6 sm:px-8 lg:px-[5vw] py-16 lg:py-0 lg:pt-10 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-12 xl:gap-20">

          {/* ── Copy ── */}
          <div className="flex-1 lg:max-w-2xl pt-6 lg:pt-0">

            <div className="hero-badge inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6 lg:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Available for new projects
            </div>

            <h1 className="hero-heading text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-[4.25rem] lg:leading-[1.08] font-bold tracking-tight text-neutral-900 mb-4 lg:mb-6">
              We build software{" "}
              <span className="text-emerald-600">that moves</span>{" "}
              your business forward.
            </h1>

            <p className="hero-sub text-[0.95rem] sm:text-lg lg:text-xl text-neutral-500 leading-relaxed mb-7 lg:mb-10 max-w-lg">
              Beond Innovations partners with startups and businesses to design
              and build high-quality digital products — fast, clean, and built
              to scale.
            </p>

            <div className="flex items-center gap-3 lg:justify-start">
              <a
                href="#contact"
                className="hero-btn flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-emerald-600 transition-all duration-200 hover:-translate-y-0.5"
              >
                Start a project
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
              <a
                href="#services"
                className="hero-btn flex-1 lg:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200"
              >
                Our services
              </a>
            </div>

            {/* Mobile-only dashboard card */}
            <div className="mt-7 lg:hidden rounded-2xl bg-neutral-950 border border-neutral-800 p-4 overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center gap-1.5 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                <div className="ml-2 flex-1 h-5 rounded-md bg-neutral-800 flex items-center px-2">
                  <span className="text-[9px] text-neutral-500 font-mono">beondinnovations.com</span>
                </div>
              </div>
              {/* Content rows */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-24 bg-neutral-700 rounded-full mb-1.5" />
                    <div className="h-1.5 w-16 bg-neutral-800 rounded-full" />
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Live</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 w-20 bg-neutral-700 rounded-full mb-1.5" />
                    <div className="h-1.5 w-28 bg-neutral-800 rounded-full" />
                  </div>
                  <span className="text-[10px] font-semibold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">v2.4</span>
                </div>
                {/* Bar chart row */}
                <div className="mt-1 pt-3 border-t border-neutral-800 flex items-end gap-1 h-10">
                  {[40, 65, 50, 80, 60, 90, 75].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background: i === 5 ? "#10b981" : "#262626",
                      }}
                    />
                  ))}
                </div>
                <p className="text-[10px] text-neutral-600 font-mono">Weekly deployments · 7 this month</p>
              </div>
            </div>
          </div>

          {/* ── Bento grid — desktop only ── */}
          <div className="hero-terminal hidden lg:flex w-full lg:flex-1 relative lg:items-center lg:justify-center lg:min-h-[500px]">
            <div className="absolute inset-0 bg-emerald-400/8 blur-3xl rounded-3xl scale-95 hidden lg:block" />

            {/* Floating chips — desktop only */}
            <div className="hero-chip-1 hidden lg:flex absolute -left-10 top-[30%] bg-white rounded-2xl px-4 py-3 border border-neutral-100 items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900 leading-none mb-0.5">8 weeks avg.</p>
                <p className="text-[10px] text-neutral-500">Idea to launch</p>
              </div>
            </div>

            <div className="hero-chip-2 hidden lg:flex absolute -right-10 bottom-[28%] bg-white rounded-2xl px-4 py-3 border border-neutral-100 items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-900 leading-none mb-0.5">100% ownership</p>
                <p className="text-[10px] text-neutral-500">You own every line</p>
              </div>
            </div>

            {/* Grid: 2×2 equal on mobile, asymmetric on desktop */}
            <div className="grid grid-cols-2 gap-2.5 lg:gap-3 w-full lg:max-w-[400px]">

              {/* Cell 1 — Mobile App */}
              <div className="lg:row-span-2 bg-neutral-950 rounded-2xl p-4 flex flex-col justify-between border border-neutral-800">
                <div>
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-3">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </div>
                  <p className="text-xs font-bold text-white mb-0.5">Mobile App</p>
                  <p className="text-[10px] text-neutral-500 leading-relaxed">iOS & Android</p>
                </div>
                {/* Phone UI — desktop only to avoid tall cell on mobile */}
                <div className="hidden lg:block mt-4 bg-neutral-900 rounded-xl border border-neutral-800 p-2.5 space-y-1.5">
                  <div className="h-1.5 w-3/4 bg-emerald-500/40 rounded-full" />
                  <div className="h-1.5 w-1/2 bg-neutral-700 rounded-full" />
                  <div className="h-6 w-full bg-emerald-500/20 rounded-lg mt-2 flex items-center px-2">
                    <div className="h-1 w-1 rounded-full bg-emerald-400" />
                    <div className="h-1 w-8 bg-neutral-700 rounded-full ml-1.5" />
                  </div>
                  <div className="h-6 w-full bg-neutral-800 rounded-lg flex items-center px-2">
                    <div className="h-1 w-1 rounded-full bg-neutral-600" />
                    <div className="h-1 w-10 bg-neutral-700 rounded-full ml-1.5" />
                  </div>
                </div>
              </div>

              {/* Cell 2 — Web Platform */}
              <div className="bg-white rounded-2xl p-4 border border-neutral-100">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <path d="M8 21h8M12 17v4" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-neutral-900 mb-0.5">Web Platform</p>
                <div className="mt-2 flex items-end gap-1 h-7">
                  {[3, 5, 4, 7, 6, 8, 7].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-100 rounded-sm" style={{ height: `${h * 3.5}px` }} />
                  ))}
                </div>
              </div>

              {/* Cell 3 — Backend & API */}
              <div className="bg-emerald-500 rounded-2xl p-4">
                <div className="w-8 h-8 rounded-xl bg-emerald-400/40 flex items-center justify-center mb-3">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12H19M12 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-xs font-bold text-white mb-0.5">Backend & API</p>
                <p className="text-[10px] text-emerald-100/80 leading-relaxed">Scalable, secure, fast</p>
              </div>

              {/* Cell 4 — Brand & Design */}
              <div className="col-span-2 bg-white rounded-2xl px-4 py-3 border border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-neutral-900 mb-0.5">Brand & Design</p>
                  <p className="text-[10px] text-neutral-400">UI/UX · Design systems</p>
                </div>
                <div className="flex gap-1.5">
                  {["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#8b5cf6"].map((c) => (
                    <span key={c} className="w-4 h-4 lg:w-5 lg:h-5 rounded-full border-2 border-white" style={{ background: c }} />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
