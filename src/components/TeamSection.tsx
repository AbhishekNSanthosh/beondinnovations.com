"use client";

import { useEffect, useRef, useState } from "react";
import FadeUp from "@/components/FadeUp";

const team = [
  {
    id: "ARC-001",
    alias: "The Architect",
    handle: "@arc",
    specialty: "Full-Stack · Product",
    bio: "Builds from idea to deployment without switching gears. Thinks in products, not features — and writes code that holds up long after the first ship.",
    tags: ["React", "React Native", "Next.js", "Node.js", "APIs", "Databases","Cybersecurity"],
    c: {
      headerBg: "bg-emerald-50",
      silhouette: "#10b981",
      silhouetteBg: "bg-emerald-100/70",
      specialty: "text-emerald-600",
      tagBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
      redactBar: "bg-emerald-100 text-emerald-300",
      badge: "bg-emerald-100 text-emerald-600",
      fileId: "text-emerald-500",
      fadeFrom: "from-white",
    },
  },
  {
    id: "CRF-002",
    alias: "The Craftsman",
    handle: "@craft",
    specialty: "Full-Stack · Product",
    bio: "Cares as much about why something is being built as how. Switches between backend logic and product decisions without missing a beat — and ships things people actually use.",
    tags: ["React", "React Native", "Next.js", "TypeScript", "Node.js", "DevOps"],
    c: {
      headerBg: "bg-indigo-50",
      silhouette: "#6366f1",
      silhouetteBg: "bg-indigo-100/70",
      specialty: "text-indigo-500",
      tagBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
      redactBar: "bg-indigo-100 text-indigo-300",
      badge: "bg-indigo-100 text-indigo-600",
      fileId: "text-indigo-500",
      fadeFrom: "from-white",
    },
  },
  {
    id: "WVR-003",
    alias: "The Weaver",
    handle: "@weave",
    specialty: "Design · UI/UX",
    bio: "Turns rough ideas into interfaces people actually enjoy using. Equally at home in Figma and a brand deck. Has an opinion on every pixel — and is usually right.",
    tags: ["UI/UX", "Figma", "Graphics", "Branding"],
    c: {
      headerBg: "bg-rose-50",
      silhouette: "#f43f5e",
      silhouetteBg: "bg-rose-100/70",
      specialty: "text-rose-500",
      tagBg: "bg-rose-50 text-rose-700 border-rose-100",
      redactBar: "bg-rose-100 text-rose-300",
      badge: "bg-rose-100 text-rose-600",
      fileId: "text-rose-500",
      fadeFrom: "from-white",
    },
  },
];

function TagsMarquee({ tags, tagBg }: { tags: string[]; tagBg: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const wrapper = wrapperRef.current;
      const measure = measureRef.current;
      if (!wrapper || !measure) return;
      setOverflows(measure.offsetWidth > wrapper.clientWidth);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!overflows) return;
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let alive = true;

    const scroll = () => {
      if (!alive) return;
      const oneLoop = track.scrollWidth / 2;

      // Snap to start (invisible — content repeats), then animate
      track.style.transition = "none";
      track.style.transform = "translateX(0px)";
      void track.offsetHeight;

      track.style.transition = "transform 8s linear";
      track.style.transform = `translateX(-${oneLoop}px)`;

      // Pause at the end position, then snap back and repeat
      track.addEventListener(
        "transitionend",
        () => {
          if (!alive) return;
          timeoutId = setTimeout(scroll, 2_000);
        },
        { once: true }
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(scroll, 2_000);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(wrapper);

    return () => {
      alive = false;
      observer.disconnect();
      clearTimeout(timeoutId);
      if (track) {
        track.style.transition = "none";
        track.style.transform = "";
      }
    };
  }, [overflows]);

  return (
    <div ref={wrapperRef} className="relative mb-4">
      {/* Hidden single-line ruler */}
      <div
        ref={measureRef}
        aria-hidden="true"
        className="absolute top-0 left-0 invisible pointer-events-none flex gap-2"
        style={{ width: "max-content" }}
      >
        {tags.map((tag, idx) => (
          <span key={idx} className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${tagBg}`}>
            {tag}
          </span>
        ))}
      </div>

      <div className="relative overflow-hidden -mx-6">
        {overflows && (
          <>
            <div className="absolute inset-y-0 left-0 w-15 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-15 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          </>
        )}
        <div
          ref={trackRef}
          className={`flex gap-2 ${overflows ? "px-6" : "flex-wrap px-6"}`}
        >
          {(overflows ? [...tags, ...tags] : tags).map((tag, idx) => (
            <span
              key={idx}
              className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap ${tagBg}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="py-12 lg:py-24 bg-white border-t border-neutral-100">
      <div className="px-[5vw]">
        {/* Header */}
        <FadeUp className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-emerald-600 text-sm font-semibold uppercase tracking-widest mb-4">
              The people
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Three masterbrains.{" "}
              <span className="text-emerald-600">No egos.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-xs lg:text-right font-mono">
            Identities withheld by design.<br />
            The work is the only introduction needed.
          </p>
        </FadeUp>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => {
            const c = member.c;
            return (
              <FadeUp key={member.id} delay={i * 100}>
                <div className="group bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100 transition-all duration-300 flex flex-col h-full overflow-hidden">

                  {/* Accent header zone */}
                  <div className={`${c.headerBg} px-6 pt-7 pb-6 flex flex-col gap-5`}>
                    <div className={`w-[72px] h-[72px] rounded-2xl ${c.silhouetteBg} flex items-center justify-end overflow-hidden`}>
                      <svg width="68" height="68" viewBox="0 0 80 80" fill="none">
                        <circle cx="40" cy="26" r="15" fill={c.silhouette} fillOpacity="0.35" />
                        <path d="M4 80 C4 52 76 52 76 80" fill={c.silhouette} fillOpacity="0.25" />
                      </svg>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <div className={`h-6 flex-1 ${c.redactBar} rounded flex items-center px-3`}>
                        <span className="font-mono text-[10px] tracking-[0.2em] select-none">
                          ████████████
                        </span>
                      </div>
                      <span className={`font-mono text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded ${c.badge} flex-shrink-0`}>
                        withheld
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="px-6 pt-5 flex flex-col flex-1">
                    <div className="mb-4">
                      <p className="text-neutral-900 font-bold text-xl leading-tight mb-1">
                        {member.alias}
                      </p>
                      <p className={`text-xs font-semibold uppercase tracking-widest ${c.specialty}`}>
                        {member.specialty}
                      </p>
                    </div>

                    <p className="text-neutral-500 text-sm leading-relaxed flex-1">
                      {member.bio}
                    </p>

                    <div className="pt-5 pb-6 border-t border-neutral-100 mt-5">
                      <TagsMarquee tags={member.tags} tagBg={c.tagBg} />
                      <div className="flex items-center justify-between">
                        <span className={`font-mono text-[9px] font-bold uppercase tracking-widest ${c.fileId} opacity-60`}>
                          {member.id}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-400">
                          {member.handle}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* Footer note */}
        <FadeUp delay={350} className="mt-10 flex justify-center">
          <p className="font-mono text-[10px] text-neutral-400 text-center max-w-sm leading-relaxed uppercase tracking-widest">
            No LinkedIn links. No headshots. No titles.<br />
            Just people who build things that last.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
