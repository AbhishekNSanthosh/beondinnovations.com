import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore projects built by Beond Innovations — web apps, mobile apps, and SaaS products for startups and businesses. See how we turn ideas into production-ready software.",
  keywords: [
    "beond innovations portfolio",
    "beond innovations work",
    "beond innovations projects",
    "beyond innovations portfolio",
    "software portfolio India",
    "web development portfolio India",
    "web development portfolio Kerala",
    "app development portfolio India",
    "software projects India",
    "software case studies India",
    "web development case studies India",
    "software projects Kerala",
    "software company projects Kerala",
    "web app projects India",
    "SaaS projects India",
    "startup software projects India",
    "Next.js projects India",
    "React projects India",
    "education web app India",
    "school web app Kerala",
    "production software India",
    "client projects software India",
    "beond case study",
    "beond projects",
    "NSS Kavalam web app",
    "software development examples India",
    "web development examples India",
    "software company work India",
  ],
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — Featured Projects | Beond Innovations",
    description: "Projects we're proud of. Web apps, mobile apps, and SaaS products built for startups and businesses globally.",
    url: "https://beondinnovations.com/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beond Innovations Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Work — Beond Innovations",
    description: "Web apps, mobile apps, and SaaS products built for startups and businesses globally.",
    images: ["/og-image.png"],
  },
};

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
];

const workSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://beondinnovations.com/work#webpage",
  url: "https://beondinnovations.com/work",
  name: "Our Work — Featured Projects by Beond Innovations",
  description: "Explore web apps, mobile apps, and SaaS products built by Beond Innovations for startups and businesses.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "Work", item: "https://beondinnovations.com/work" },
    ],
  },
};

export default function WorkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }} />
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-white min-h-screen">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp className="mb-12 lg:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-6">
                Featured work
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.1]">
                Projects we&apos;re proud of
              </h1>
            </div>
            <a
              href="mailto:beondinnovations@gmail.com"
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

                  <div className="w-full sm:w-3/5 bg-white px-6 py-6 lg:px-8 lg:py-7 flex flex-col justify-between">
                    <div>
                      <p className="text-emerald-600 text-[11px] font-semibold uppercase tracking-wider mb-2">
                        {p.category}
                      </p>
                      <h2 className="font-bold text-xl sm:text-2xl text-neutral-900 mb-2 leading-snug">{p.name}</h2>
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
      </main>

      <Footer />
    </>
  );
}
