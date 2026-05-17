"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
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
      history.pushState({ drawerOpen: true }, "");
      const onPopState = (e: PopStateEvent) => {
        if (e.state?.drawerOpen) return;
        setOpen(false);
      };
      window.addEventListener("popstate", onPopState);
      return () => window.removeEventListener("popstate", onPopState);
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 flex flex-col ${
        open ? "bg-white" : ""
      } ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-neutral-100"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav className="px-[5vw] h-16 flex items-center justify-between">
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
          className="md:hidden p-2 text-neutral-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`md:hidden bg-white border-t border-neutral-100 px-[5vw] flex flex-col gap-3 overflow-hidden transition-[height,opacity] duration-300 ease-in-out ${
          open ? "py-4 opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ height: open ? "calc(100vh - 4rem)" : "0px" }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-2 inline-flex justify-center items-center px-4 py-2 rounded-lg bg-neutral-900 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
        >
          Get in touch
        </a>

        <div className="mt-2 absolute bottom-0 left-0 right-0 pt-4 pb-2 border-t border-neutral-100 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Beond Innovations LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-400">
            <span>Crafted with</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>in Kerala, India</span>
          </div>
        </div>
      </div>
    </header>
  );
}
