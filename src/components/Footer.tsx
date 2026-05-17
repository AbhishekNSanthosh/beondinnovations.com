const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/beondinnovations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/beondinnovations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/beondinnovations",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:beondinnovations@gmail.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-neutral-400 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-3xl" />

      {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
      <div className="lg:hidden relative flex flex-col items-center text-center px-6 pt-12 pb-8 gap-8">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-3">
          <a href="#" className="inline-flex items-baseline gap-0.5">
            <span className="text-white font-black text-2xl tracking-tight">beond</span>
            <span className="text-emerald-500 text-2xl font-black">.</span>
          </a>
          <p className="text-sm leading-relaxed text-neutral-500 max-w-[260px]">
            Building software that moves businesses beyond what&apos;s possible today.
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-[10px] text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            Available for new projects
          </div>
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-neutral-950 text-sm font-semibold active:scale-95 transition-all duration-150"
        >
          Let&apos;s work together
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 7h10M7 2l5 5-5 5" />
          </svg>
        </a>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-neutral-800 text-neutral-500 active:text-emerald-400 active:border-emerald-500/40 transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Nav chips */}
        <div className="w-full flex gap-2 flex-wrap justify-center">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="px-3.5 py-1.5 rounded-full border border-neutral-800 text-xs text-neutral-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center gap-2 w-full">
          <a
            href="mailto:beondinnovations@gmail.com"
            className="flex items-center gap-2 text-xs text-neutral-500"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-emerald-500 shrink-0">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" />
            </svg>
            beondinnovations@gmail.com
          </a>
          <a
            href="tel:+917907247909"
            className="flex items-center gap-2 text-xs text-neutral-500"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-emerald-500 shrink-0">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.5 19.78 19.78 0 01.07 4.91 2 2 0 012 2.69h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.1a16 16 0 006.22 6.22l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 7907247909
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800/60" />

        {/* Copyright */}
        <div className="flex flex-col items-center gap-1">
          <p className="text-[10px] text-neutral-600">
            &copy; {new Date().getFullYear()} Beond Innovations LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-600">
            <span>Innovation, Beyond Limits.</span>
          </div>
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden below lg) ── */}
      <div className="hidden lg:block">
        {/* Watermark wordmark */}
        <div
          className="pointer-events-none select-none absolute bottom-10 right-[3vw] text-[14vw] font-black leading-none tracking-tighter text-white/[0.025] whitespace-nowrap"
          aria-hidden
        >
          beond.
        </div>

        <div className="relative px-[5vw] pt-20 pb-14">
          <div className="flex flex-row justify-between gap-14">
            {/* Brand column */}
            <div className="max-w-sm">
              <a href="#" className="inline-flex items-baseline gap-0.5 group">
                <span className="text-white font-black text-3xl tracking-tight">beond</span>
                <span className="text-emerald-500 text-3xl font-black group-hover:text-emerald-400 transition-colors">.</span>
              </a>
              <p className="text-sm leading-relaxed mt-4 text-neutral-400 max-w-[260px]">
                Building software that moves businesses beyond what&apos;s possible today.
              </p>
              <div className="flex items-center gap-2.5 mt-7">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="group/icon w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-800 text-neutral-500 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/8 transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              <div className="mt-7 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-xs text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                Available for new projects
              </div>
            </div>

            {/* Link columns */}
            <div className="grid grid-cols-3 gap-20">
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Navigate</p>
                <ul className="space-y-3.5">
                  {navLinks.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-neutral-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group/link">
                        <span className="w-0 group-hover/link:w-3 h-px bg-emerald-500 transition-all duration-200 overflow-hidden" />
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Services</p>
                <ul className="space-y-3.5">
                  {["Web Development", "Mobile Apps", "API & Backend", "UI/UX Design"].map((s) => (
                    <li key={s}>
                      <a href="#services" className="text-sm text-neutral-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 group/link">
                        <span className="w-0 group-hover/link:w-3 h-px bg-emerald-500 transition-all duration-200 overflow-hidden" />
                        {s}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-white text-xs font-semibold uppercase tracking-widest mb-5">Office</p>
                <address className="not-italic text-sm leading-relaxed text-neutral-500 space-y-1">
                  <p>PB102, Carmel College of</p>
                  <p>Engineering & Technology</p>
                  <p>Punnapra, Alappuzha</p>
                  <p>Kerala – 688004, India</p>
                </address>
                <a href="mailto:beondinnovations@gmail.com" className="inline-flex items-center gap-1 mt-4 text-xs text-emerald-500 hover:text-emerald-400 transition-colors">
                  beondinnovations@gmail.com
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1.5 8.5l7-7M8.5 1.5H3M8.5 1.5v5.5" />
                  </svg>
                </a>
                <a href="tel:+917907247909" className="inline-flex items-center gap-1 mt-2 text-xs text-emerald-500 hover:text-emerald-400 transition-colors">
                  +91 7907247909
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M1.5 8.5l7-7M8.5 1.5H3M8.5 1.5v5.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative px-[5vw]">
          <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent" />
        </div>
        <div className="relative px-[5vw] py-6 flex flex-row justify-between items-center">
          <p className="text-xs text-neutral-600">
            &copy; {new Date().getFullYear()} Beond Innovations LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-neutral-600">
            <span>Innovation, Beyond Limits.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
