import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Learn how Beond Innovations works: Discovery, Plan, Build, Launch. A transparent, structured process that keeps you informed at every step — no surprises.",
  keywords: [
    "beond innovations process",
    "beond process",
    "beyond innovations process",
    "how beond innovations works",
    "software development process India",
    "software development methodology India",
    "agile development process India",
    "how software is built India",
    "software project process India",
    "web development process India",
    "app development process India",
    "discovery phase software India",
    "software planning India",
    "iterative development India",
    "software delivery process India",
    "startup software process India",
    "MVP development process India",
    "transparent software development India",
    "software project management India",
    "software sprint planning India",
    "how we build software India",
    "software agency process India",
    "end-to-end development process India",
    "software development lifecycle India",
    "SDLC India",
    "beond innovations how it works",
    "beond development process",
  ],
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Our Process — How We Build Software | Beond Innovations",
    description: "Discovery, Plan, Build, Launch. A clear, transparent process that delivers working software on time.",
    url: "https://beondinnovations.com/process",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beond Innovations Process" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Process — Beond Innovations",
    description: "Discovery, Plan, Build, Launch. A transparent process that delivers working software on time.",
    images: ["/og-image.png"],
  },
};

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

const processSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://beondinnovations.com/process#webpage",
  url: "https://beondinnovations.com/process",
  name: "Our Process — How Beond Innovations Builds Software",
  description: "Discovery, Plan, Build, Launch — a transparent, structured software development process.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "Process", item: "https://beondinnovations.com/process" },
    ],
  },
  mainEntity: {
    "@type": "HowTo",
    name: "How Beond Innovations Delivers Software Projects",
    description: "A transparent, 4-step process: Discovery, Plan, Build, and Launch.",
    step: [
      { "@type": "HowToStep", position: 1, name: "Discovery", text: "We learn your business, goals, and constraints. No assumptions — just clear questions and sharp listening." },
      { "@type": "HowToStep", position: 2, name: "Plan", text: "We map out the architecture, timeline, and deliverables. You know exactly what we're building before a line of code is written." },
      { "@type": "HowToStep", position: 3, name: "Build", text: "Iterative development with regular check-ins. You see progress weekly, not just at the finish line." },
      { "@type": "HowToStep", position: 4, name: "Launch", text: "Deployment, testing, and handoff. We stay on hand post-launch to make sure everything runs smoothly." },
    ],
  },
};

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(processSchema) }} />
      <Navbar />

      <main className="pt-16 md:pt-20 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="px-6 sm:px-8 lg:px-[5vw] py-16 lg:py-24">
          <FadeUp className="mb-12 lg:mb-16">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
              How we work
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
              Our process
            </h1>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 100}>
                <div className="relative pl-5 border-l border-neutral-200 hover:border-emerald-400 transition-colors group">
                  <div className="text-emerald-600 font-mono text-sm font-bold mb-4 group-hover:text-emerald-500 transition-colors">
                    {step.num}
                  </div>
                  <h2 className="text-xl font-bold text-neutral-900 mb-3">{step.title}</h2>
                  <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={300} className="mt-16 lg:mt-24 text-center">
            <a
              href="mailto:beondinnovations@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold text-base hover:bg-emerald-400 transition-all duration-200 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Start your project
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </FadeUp>
        </div>
      </main>

      <Footer />
    </>
  );
}
