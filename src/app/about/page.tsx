import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Beond Innovations is a software development studio based in Kerala, India. We work closely with clients as a technical co-founder you can trust — senior-level expertise, fast turnarounds, and code you're proud to ship.",
  keywords: [
    "about beond innovations",
    "beond innovations about",
    "who is beond innovations",
    "beond innovations kerala",
    "beond innovations alappuzha",
    "beond innovations team",
    "beond innovations studio",
    "beyond innovations about",
    "software development studio Kerala",
    "software studio India",
    "software company Kerala India",
    "IT company Kerala India",
    "tech studio Kerala",
    "software development company Kerala",
    "small software team India",
    "senior software developers India",
    "software development studio India",
    "technical co-founder India",
    "technical partner India",
    "software partner startups India",
    "startup technical partner India",
    "code ownership India",
    "no middlemen software India",
    "direct developer India",
    "software company with senior developers India",
    "fast software delivery India",
    "quality software development India",
    "software company values India",
    "best software team Kerala",
    "software agency Kerala India",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us — Small Team, Big Outcomes | Beond Innovations",
    description:
      "A small team building software that actually solves problems. Based in Kerala, India. Working globally with startups and businesses.",
    url: "https://beondinnovations.com/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Beond Innovations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Beond Innovations — Small Team, Big Outcomes",
    description: "A small software studio based in Kerala, India. Working globally with startups and businesses.",
    images: ["/og-image.png"],
  },
};

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

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://beondinnovations.com/about#webpage",
  url: "https://beondinnovations.com/about",
  name: "About Beond Innovations — Software Development Studio Kerala",
  description: "Beond Innovations is a software development studio based in Kerala, India, working closely with startups and businesses globally.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://beondinnovations.com/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <Navbar />

      <main className="pt-16 md:pt-12 min-h-screen">
        {/* About */}
        <section className="py-16 lg:py-24">
          <div className="px-6 sm:px-8 lg:px-[5vw]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                  About us
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                  Small team.{" "}
                  <span className="text-emerald-600">Big outcomes.</span>
                </h1>
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
                <div className="rounded-2xl bg-neutral-950 p-8 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle, #34d399 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/50 via-transparent to-emerald-900/20" />

                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-white font-black text-2xl tracking-tight">beond<span className="text-emerald-500">.</span></span>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold uppercase tracking-wider">Studio</span>
                    </div>

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

        {/* Beliefs */}
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="px-6 sm:px-8 lg:px-[5vw]">
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

            <div className="border-t border-neutral-100">
              {whyUs.map((item, i) => (
                <FadeUp key={item.title} delay={i * 100}>
                  <div className="group border-b border-neutral-100 py-10 lg:py-14 grid grid-cols-1 lg:grid-cols-[96px_1fr_56px] gap-y-5 gap-x-10 xl:gap-x-16 items-center -mx-[5vw] px-[5vw] hover:bg-emerald-50/40 transition-colors duration-300">
                    <span className="font-mono text-5xl lg:text-6xl font-black text-neutral-100 group-hover:text-emerald-100 transition-colors duration-300 select-none leading-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-3 leading-tight group-hover:text-emerald-700 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm sm:text-base leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                    <div className="text-neutral-200 group-hover:text-emerald-400 transition-colors duration-300 flex-shrink-0 hidden lg:block">
                      {item.icon}
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
