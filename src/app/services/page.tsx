import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Beond Innovations offers end-to-end software development services: web development, mobile app development, API & backend, MVP development, UI/UX design, and tech consulting. Based in Kerala, India, working globally.",
  keywords: [
    "software development services India",
    "software development services Kerala",
    "web development services India",
    "web development services Kerala",
    "mobile app development services India",
    "mobile app development services Kerala",
    "API development services India",
    "backend development services India",
    "MVP development services India",
    "MVP development services Kerala",
    "UI UX design services India",
    "UI UX design services Kerala",
    "tech consulting services India",
    "technology consulting services India",
    "full stack development services India",
    "end-to-end software development India",
    "software services for startups India",
    "web app development services India",
    "SaaS development services India",
    "custom web development India",
    "custom app development India",
    "React development services India",
    "Next.js development services India",
    "Node.js development services India",
    "React Native development services India",
    "beond services",
    "beond innovations services",
    "beyond innovations services",
    "beyond innovations web development",
    "software services company Kerala",
    "IT services company Kerala",
    "what services does beond innovations offer",
    "beond web development",
    "beond app development",
    "beond UI UX",
    "beond MVP",
    "beond consulting",
    "hire web developer India",
    "hire app developer India",
    "hire React developer India",
    "hire Next.js developer India",
    "hire full stack developer India",
    "software development one team India",
    "offshore software services India",
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Web Development, Mobile Apps, MVP & More | Beond Innovations",
    description:
      "End-to-end software development — one team, not five vendors. Web apps, mobile apps, APIs, MVPs, UI/UX design, and tech consulting. Based in Kerala, India.",
    url: "https://beondinnovations.com/services",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beond Innovations Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — Beond Innovations",
    description: "End-to-end software development — one team, not five vendors.",
    images: ["/og-image.png"],
  },
};

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

const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://beondinnovations.com/services#webpage",
  url: "https://beondinnovations.com/services",
  name: "Software Development Services — Beond Innovations",
  description:
    "End-to-end software development services: web development, mobile app development, API & backend, MVP development, UI/UX design, and tech consulting.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://beondinnovations.com/services" },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Service", name: "Web Development", description: "Full-stack web applications built with modern frameworks — fast, scalable, and production-ready.", provider: { "@type": "Organization", name: "Beond Innovations" }, serviceType: "Web Development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 2, item: { "@type": "Service", name: "Mobile App Development", description: "Native and cross-platform mobile applications for iOS and Android that users love.", provider: { "@type": "Organization", name: "Beond Innovations" }, serviceType: "Mobile App Development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 3, item: { "@type": "Service", name: "API & Backend Development", description: "Robust APIs and backend systems designed for performance, security, and easy integration.", provider: { "@type": "Organization", name: "Beond Innovations" }, serviceType: "API Development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 4, item: { "@type": "Service", name: "MVP Development", description: "Ship your product idea quickly with a focused MVP — validated, testable, and ready for investors.", provider: { "@type": "Organization", name: "Beond Innovations" }, serviceType: "MVP Development", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 5, item: { "@type": "Service", name: "UI/UX Design", description: "Clean, intuitive interfaces grounded in user research — every screen designed with purpose.", provider: { "@type": "Organization", name: "Beond Innovations" }, serviceType: "UI/UX Design", areaServed: "Worldwide" } },
      { "@type": "ListItem", position: 6, item: { "@type": "Service", name: "Tech Consulting", description: "Strategic technology guidance to help your team make the right architectural and tool decisions.", provider: { "@type": "Organization", name: "Beond Innovations" }, serviceType: "Technology Consulting", areaServed: "Worldwide" } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }} />
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-emerald-50/40 border-b border-emerald-100/60 min-h-screen">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                What we do
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Services
              </h1>
            </div>
            <p className="text-neutral-500 text-[0.95rem] sm:text-lg lg:text-xl leading-relaxed max-w-sm lg:text-right">
              End-to-end software development — one team, not five vendors.
            </p>
          </FadeUp>

          <div className="border border-emerald-100 rounded-2xl overflow-hidden shadow-emerald-100/50">
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
                    <h2 className="font-bold text-xl text-neutral-900 mb-3 leading-snug">{s.title}</h2>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <div className="border-t border-emerald-100/70" />

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
                    <h2 className="font-bold text-xl text-neutral-900 mb-3 leading-snug">{s.title}</h2>
                    <p className="text-neutral-500 text-sm sm:text-base leading-relaxed flex-1">{s.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          <FadeUp delay={200} className="mt-10 flex items-center justify-center">
            <a
              href="mailto:beondinnovations@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600/70 hover:text-emerald-700 transition-colors"
            >
              Have something specific in mind? Let&apos;s talk
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </a>
          </FadeUp>
        </div>
      </main>

      <Footer />
    </>
  );
}
