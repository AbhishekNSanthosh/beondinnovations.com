import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import HeroSection from "@/components/HeroSection";
import FAQSection from "@/components/FAQSection";
import TeamSection from "@/components/TeamSection";

const services = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Web Development",
    desc: "Full-stack web applications built with modern frameworks — fast, scalable, and production-ready.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
      </svg>
    ),
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile applications for iOS and Android that users love.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "API & Backend",
    desc: "Robust APIs and backend systems designed for performance, security, and easy integration.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "MVP Development",
    desc: "Ship your product idea quickly with a focused MVP — validated, testable, and ready for investors.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces grounded in user research — every screen designed with purpose.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Tech Consulting",
    desc: "Strategic technology guidance to help your team make the right architectural and tool decisions.",
  },
];

const projects = [
  {
    name: "NSS Kavalam",
    url: "nsshsskavalam.in",
    category: "Education · Web App",
    desc: "The official digital presence for NSS Higher Secondary School Kavalam — built to connect students, parents, and staff with school news, events, and academic updates. Designed with a focus on clarity and mobile accessibility.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: null,
    logo: "/projects/nss.png",
    gradient: "from-orange-950 via-orange-900 to-amber-950",
    accent: "#ea580c",
    letter: "N",
    stat: "Live in production",
    statIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    name: "GrabUrPass",
    url: "graburpass.com",
    category: "Events · Mobile + Web",
    desc: "A seamless event pass management platform — attendees grab and store digital passes, organizers manage check-ins in real time. Built for speed, scale, and zero paper.",
    tags: ["Next.js", "React Native", "Supabase"],
    image: null,
    logo: "/projects/graburpass_brandLogo.png",
    gradient: "from-red-950 via-red-900 to-rose-950",
    accent: "#ef4444",
    letter: "G",
    stat: "In development",
    statIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  // Sam Select — hidden for now
  // {
  //   name: "Sam Select",
  //   url: "samselect.app",
  //   category: "Photography · SaaS",
  //   desc: "A private gallery platform for photographers to share event photos with clients who can shortlist, download, and order prints — all without friction. Clean, fast, and purpose-built for event photographers.",
  //   tags: ["Next.js", "TypeScript", "PostgreSQL"],
  //   image: null,
  //   gradient: "from-sky-950 via-sky-900 to-cyan-950",
  //   accent: "#0ea5e9",
  //   letter: "S",
  //   stat: "In development",
  // },
  {
    name: "Edumate",
    url: "edumate.app",
    category: "EdTech · Platform",
    desc: "An all-in-one institute management system — covering admissions, attendance, CRM, and department workflows. Built for schools and coaching centres that need structure without the enterprise price tag.",
    tags: ["Next.js", "Firebase"],
    image: null,
    logo: "/projects/Edumate.svg",
    gradient: "from-blue-950 via-blue-900 to-indigo-950",
    accent: "#1F75FE",
    letter: "E",
    stat: "In development",
    statIcon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Projects delivered" },
  { value: "8 wks", label: "Average time to launch" },
  { value: "100%", label: "Code ownership — always" },
  { value: "0", label: "Middlemen between us" },
];

const beliefs = [
  {
    headline: "Good software is invisible.",
    sub: "When a product just works, users don't think about the code underneath. That's the goal — craftsmanship that disappears into the experience.",
  },
  {
    headline: "Speed without shortcuts.",
    sub: "Shipping fast and cutting corners are not the same thing. We move quickly because we've solved these problems before — not because we're skipping steps.",
  },
  {
    headline: "Simplicity is the hardest thing to build.",
    sub: "Complex systems are easy to justify. Simple ones take real discipline. We fight for clarity in every decision — architecture, UI, communication.",
  },
  {
    headline: "You should always know what you're paying for.",
    sub: "No black boxes. No jargon shields. Every decision we make, we can explain in plain language — and we do.",
  },
];

const whyUs = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "We ship fast — without cutting corners.",
    desc: "Speed and quality aren't opposites. Our opinionated stack, clear processes, and senior-level execution mean you get working software quickly — and code that holds up under pressure.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "You talk to the people doing the work.",
    desc: "No account managers in the middle, no offshore hand-offs. You work directly with our engineers. Communication is clear, decisions get made fast, and nothing gets lost in translation.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "You own everything. Always.",
    desc: "Every line of code, every design file, every deployment — it's yours from day one. Clean handoffs, thorough documentation, and zero lock-in to us or any proprietary platform.",
  },
];

const testimonials = [
  {
    quote:
      "Beond took our idea from a rough spec to a fully deployed product in under 8 weeks. The code quality was exceptional and the communication throughout was refreshingly clear.",
    name: "Rahul Nair",
    role: "Founder, LogStack",
    initials: "RN",
  },
  {
    quote:
      "Most agencies over-promise and under-deliver. Beond did the opposite — they told us what was realistic, then beat the timeline. Exactly the kind of partner an early-stage startup needs.",
    name: "Priya Menon",
    role: "Co-founder, Kinnect",
    initials: "PM",
  },
  {
    quote:
      "We handed them a messy legacy codebase and they turned it around without breaking anything. Senior engineers who actually care about the product — hard to find.",
    name: "Arun Thomas",
    role: "CTO, Fincraft",
    initials: "AT",
  },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We learn your business, goals, and constraints. No assumptions — just clear questions and sharp listening.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "We map out the architecture, timeline, and deliverables. You know exactly what we're building before a line of code is written.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Iterative development with regular check-ins. You see progress weekly, not just at the finish line.",
  },
  {
    num: "04",
    title: "Launch",
    desc: "Deployment, testing, and handoff. We stay on hand post-launch to make sure everything runs smoothly.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      {/* Services */}
      <section id="services" className="py-16 lg:py-24 bg-emerald-50/40 border-y border-emerald-100/60">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          {/* Header */}
          <FadeUp className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                What we do
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Services
              </h2>
            </div>
            <p className="text-neutral-500 text-[0.95rem] sm:text-lg lg:text-xl leading-relaxed max-w-sm lg:text-right">
              End-to-end software development — one team, not five vendors.
            </p>
          </FadeUp>

          {/* Grid */}
          <div className="border border-emerald-100 rounded-2xl overflow-hidden shadow-emerald-100/50">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-emerald-100/70">
              {services.slice(0, 3).map((s, i) => (
                <FadeUp key={s.title} delay={i * 70}>
                  <div className="group relative bg-white p-8 lg:p-10 hover:bg-emerald-50/60 transition-colors h-full flex flex-col">
                    <span className="absolute top-7 right-8 font-mono text-xs font-bold text-emerald-200 group-hover:text-emerald-400 transition-colors select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 group-hover:bg-emerald-100 group-hover:border-emerald-200 flex items-center justify-center text-emerald-500 group-hover:text-emerald-700 transition-all mb-6 flex-shrink-0">
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-xl text-neutral-900 mb-3 leading-snug">{s.title}</h3>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center gap-1.5 mt-6 text-sm font-semibold text-emerald-300 group-hover:text-emerald-600 transition-colors">
                      Learn more
                      <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M2 7h10M8 3l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-emerald-100/70" />

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-emerald-100/70">
              {services.slice(3).map((s, i) => (
                <FadeUp key={s.title} delay={(i + 3) * 70}>
                  <div className="group relative bg-white p-8 lg:p-10 hover:bg-emerald-50/60 transition-colors h-full flex flex-col">
                    <span className="absolute top-7 right-8 font-mono text-xs font-bold text-emerald-200 group-hover:text-emerald-400 transition-colors select-none">
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 group-hover:bg-emerald-100 group-hover:border-emerald-200 flex items-center justify-center text-emerald-500 group-hover:text-emerald-700 transition-all mb-6 flex-shrink-0">
                      {s.icon}
                    </div>
                    <h3 className="font-bold text-xl text-neutral-900 mb-3 leading-snug">{s.title}</h3>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed flex-1">{s.desc}</p>
                    <div className="flex items-center gap-1.5 mt-6 text-sm font-semibold text-emerald-300 group-hover:text-emerald-600 transition-colors">
                      Learn more
                      <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M2 7h10M8 3l4 4-4 4" />
                      </svg>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <FadeUp delay={200} className="mt-10 flex items-center justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600/70 hover:text-emerald-700 transition-colors"
            >
              Have something specific in mind? Let&apos;s talk
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          </FadeUp>
        </div>
      </section>

      {/* Featured Work */}
      <section id="work" className="py-16 lg:py-24 bg-white">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                Featured work
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Projects we&apos;re proud of
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex-shrink-0 pb-1"
            >
              Start your project
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          </FadeUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((p, i) => (
              <FadeUp key={p.name} delay={i * 100}>
                <div className="rounded-2xl overflow-hidden border border-neutral-200 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100 transition-all duration-300 group flex flex-col sm:flex-row h-full">
                  {/* Screenshot / visual side */}
                  <div className="w-full h-34 sm:h-auto sm:w-2/5 flex-shrink-0 flex flex-col border-b sm:border-b-0 sm:border-r border-neutral-200">
                    <div className="bg-neutral-50 px-2 py-2 flex items-center gap-1 flex-shrink-0 border-b border-neutral-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    </div>
                    <div className="flex-1 overflow-hidden bg-neutral-100">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
                          {p.logo ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={p.logo} alt={p.name} className="relative w-2/3 max-w-[120px] object-contain" />
                          ) : (
                            <span className="relative text-5xl font-black opacity-20 select-none" style={{ color: p.accent }}>
                              {p.letter}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info side */}
                  <div className="w-full sm:w-3/5 bg-white px-6 py-6 lg:px-8 lg:py-7 flex flex-col justify-between">
                    <div>
                      <p className="text-emerald-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
                        {p.category}
                      </p>
                      <h3 className="font-bold text-xl sm:text-2xl text-neutral-900 mb-2 leading-snug">{p.name}</h3>
                      <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-4">{p.desc}</p>
                    </div>

                    <div className="mt-4 pt-3.5 border-t border-neutral-100">
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {p.tags.map((tag) => (
                          <span
                              key={tag}
                              className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center pt-3 justify-between">
                        <div className="flex items-center gap-1 text-xs font-semibold text-neutral-400">
                          <span className="text-emerald-500">{p.statIcon}</span>
                          {p.stat}
                        </div>
                        <a
                          href={`https://${p.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                        >
                          View site
                          <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M2 7h10M8 3l4 4-4 4" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 lg:py-16 bg-neutral-950 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

        <div className="relative z-10 px-6 sm:px-8 lg:px-[5vw]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800/60 rounded-2xl overflow-hidden border border-neutral-800/60">
            {stats.map((s, i) => (
              <FadeUp key={s.label} delay={i * 80}>
                <div className="bg-neutral-950/40 backdrop-blur-sm px-8 py-10 flex flex-col items-center text-center">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">{s.value}</p>
                  <p className="text-neutral-500 text-sm mt-2 leading-snug">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 lg:py-24">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeUp>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                About us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                Small team.{" "}
                <span className="text-emerald-600">Big outcomes.</span>
              </h2>
              <p className="text-neutral-500 text-[0.95rem] sm:text-lg lg:text-xl leading-relaxed mb-5">
                Beond Innovations is a software development studio focused on building
                products that actually solve problems. We work closely with clients —
                not as a vendor, but as a technical co-founder you can trust.
              </p>
              <p className="text-neutral-500 text-[0.95rem] sm:text-lg lg:text-xl leading-relaxed mb-8">
                We keep teams lean and communication direct. You get senior-level
                expertise, fast turnarounds, and code you&apos;re proud to ship.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-center sm:items-start">
                <div className="text-center sm:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900">10+</p>
                  <p className="text-sm text-neutral-500 mt-1">Projects delivered</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900">100%</p>
                  <p className="text-sm text-neutral-500 mt-1">Client satisfaction</p>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-neutral-900">Fast</p>
                  <p className="text-sm text-neutral-500 mt-1">Turnaround</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={150} className="relative">
              {/* Studio visual card */}
              <div className="rounded-2xl bg-neutral-950 p-8 relative overflow-hidden">
                {/* Background dot grid */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/50 via-transparent to-emerald-900/20" />

                <div className="relative space-y-4">
                  {/* Header row */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-white font-black text-2xl tracking-tight">beond<span className="text-emerald-500">.</span></span>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">Studio</span>
                  </div>

                  {/* Stat cards grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <p className="text-emerald-400 text-2xl font-black">10+</p>
                      <p className="text-neutral-500 text-xs mt-1">Products shipped</p>
                    </div>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-4">
                      <p className="text-white text-2xl font-black">8 wks</p>
                      <p className="text-neutral-500 text-xs mt-1">Avg. time to launch</p>
                    </div>
                    <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                        </span>
                        <p className="text-emerald-400 text-xs font-semibold">Currently accepting projects</p>
                      </div>
                      <p className="text-neutral-400 text-xs leading-relaxed">
                        Based in Kerala, India · Working globally with startups and businesses
                      </p>
                    </div>
                  </div>

                  {/* Tech pillars */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Web", "Mobile", "API", "Design", "Consulting"].map((t) => (
                      <span key={t} className="text-[11px] text-neutral-500 border border-neutral-800 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-emerald-600 -z-10" />
            </FadeUp>
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Manifesto */}
      <section className="py-16 lg:py-24 bg-white border-y border-neutral-100">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp className="mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
              What we believe
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              We believe...
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100 rounded-2xl overflow-hidden border border-neutral-200">
            {beliefs.map((belief, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="bg-white p-10 lg:p-12 group h-full hover:bg-emerald-50/40 transition-colors duration-300">
                  <span className="text-neutral-300 font-mono text-xs font-bold select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-neutral-900 text-xl md:text-2xl lg:text-3xl font-bold leading-snug mt-4 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                    {belief.headline}
                  </p>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">{belief.sub}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="why" className="py-16 lg:py-24 bg-white">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          {/* Header */}
          <FadeUp className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                Why us
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                What makes us<br className="hidden sm:block" /> different
              </h2>
            </div>
            <p className="text-neutral-500 text-[0.95rem] sm:text-lg lg:text-xl leading-relaxed max-w-xs lg:text-right">
              Not just another agency. Here&apos;s why founders and CTOs choose to work with us.
            </p>
          </FadeUp>

          {/* Items — editorial horizontal list */}
          <div className="border-t border-neutral-100">
            {whyUs.map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="group border-b border-neutral-100 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[96px_1fr_56px] gap-y-5 gap-x-10 xl:gap-x-16 items-center -mx-[5vw] px-[5vw] hover:bg-emerald-50/40 transition-colors duration-300">
                  {/* Number */}
                  <span className="font-mono text-5xl lg:text-6xl font-black text-neutral-100 group-hover:text-emerald-100 transition-colors duration-300 select-none leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Text */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>
                  </div>

                  {/* Icon */}
                  <div className="text-neutral-200 group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0 hidden lg:block">
                    {item.icon}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 lg:py-24 bg-neutral-950 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

        <div className="relative z-10 px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp className="mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
              How we work
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Our process
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 100}>
                <div className="relative pl-5 border-l border-neutral-800 hover:border-emerald-500/50 transition-colors group">
                  <div className="text-emerald-500 font-mono text-sm font-bold mb-4 group-hover:text-emerald-400 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-neutral-50">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp className="mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
              Client stories
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              What clients say
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeUp key={t.name} delay={i * 100}>
                <div className="bg-white rounded-2xl p-8 border border-neutral-200 flex flex-col h-full hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all">
                  <svg className="text-emerald-200 mb-6 flex-shrink-0" width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7.5C7.5 12.067 9.067 10.5 11 10.5V8h-1zm14 0c-3.314 0-6 2.686-6 6v10h10V14h-6.5c0-1.933 1.567-3.5 3.5-3.5V8h-1z"/>
                  </svg>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed flex-1 mb-8">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA / Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-neutral-50">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp>
            <div className="relative bg-neutral-950 rounded-3xl px-8 md:px-16 py-16 md:py-20 overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="text-center lg:text-left max-w-xl">
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
                    Let&apos;s build together
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
                    Ready to build something great?
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Tell us about your project. We&apos;ll get back to you within 24 hours with
                    honest thoughts and a clear path forward.
                  </p>
                </div>

                <div className="flex flex-col items-center lg:items-end gap-4 flex-shrink-0">
                  <a
                    href="mailto:beondinnovations@gmail.com"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold text-base hover:bg-emerald-400 transition-all duration-200 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    Start a conversation
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </a>
                  <p className="text-neutral-600 text-xs text-center lg:text-right mt-2">
                    beondinnovations@gmail.com · Usually replies within hours
                  </p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
