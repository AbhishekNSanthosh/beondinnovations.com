"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      history.pushState({ drawerOpen: true }, "");
      const onPopState = (e: PopStateEvent) => {
        if (e.state?.drawerOpen) return;
        setOpen(false);
      };
      window.addEventListener("popstate", onPopState);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("popstate", onPopState);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled || open
            ? "bg-white/95 backdrop-blur-sm border-neutral-100"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav className="px-5 md:px-[5vw] h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl tracking-tight text-neutral-900">
            beond<span className="text-emerald-600">.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
          >
            Get in touch
          </a>

          <button
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl text-neutral-700 active:bg-neutral-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute block w-5 h-px bg-neutral-800 transition-all duration-300 ${
                open ? "rotate-45 translate-y-0" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute block w-5 h-px bg-neutral-800 transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block w-5 h-px bg-neutral-800 transition-all duration-300 ${
                open ? "-rotate-45 translate-y-0" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Drawer overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-neutral-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bottom-0 bg-white flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Spacer for navbar height */}
          <div className="h-16 shrink-0" />

          <div className="flex-1 px-5 pt-6 pb-8 flex flex-col gap-0 overflow-y-auto">
            {/* Nav links */}
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 border-b border-neutral-100 group"
                  style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                >
                  <span className="text-base font-semibold text-neutral-800 group-active:text-emerald-600 transition-colors">
                    {l.label}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    className="text-neutral-300 group-active:text-emerald-500 transition-colors"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              ))}
            </nav>

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-neutral-900 text-white text-sm font-semibold active:bg-emerald-600 transition-colors"
            >
              Start a project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>

            {/* Footer note */}
            <div className="mt-auto pt-8 flex flex-col items-center gap-1">
              <p className="text-[10px] text-neutral-400">
                &copy; {new Date().getFullYear()} Beond Innovations LLP. All rights reserved.
              </p>
              <p className="text-[10px] text-neutral-400">Innovation, Beyond Limits.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
