import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ERP Products — Academic, HR, Finance & More | Beond Innovations",
  description:
    "Enterprise-grade ERP products built for schools, colleges, and businesses — Academic Management, Attendance, HR, Inventory, Finance, and Library Management systems.",
  keywords: [
    "beond innovations products",
    "beond ERP products",
    "beond ERP software",
    "beyond innovations products",
    "ERP software India",
    "ERP software Kerala",
    "ERP solution India",
    "ERP solution Kerala",
    "academic management system India",
    "academic management system Kerala",
    "school management software India",
    "school management software Kerala",
    "school ERP India",
    "school ERP Kerala",
    "college ERP India",
    "college management system India",
    "college management software Kerala",
    "education ERP India",
    "education ERP Kerala",
    "education management software India",
    "student management system India",
    "student portal India",
    "attendance management system India",
    "attendance management system Kerala",
    "attendance management software India",
    "biometric attendance software India",
    "staff attendance software India",
    "student attendance software India",
    "HR management system India",
    "HRMS India",
    "HR software India",
    "HR software Kerala",
    "payroll software India",
    "payroll management system India",
    "employee management software India",
    "inventory management software India",
    "asset management software India",
    "inventory management system India",
    "stock management software India",
    "finance ERP India",
    "accounting software India",
    "accounting ERP India",
    "GST software India",
    "GST accounting India",
    "finance management software India",
    "library management system India",
    "library management software India",
    "school library software India",
    "college library software India",
    "institution ERP India",
    "institute management software India",
    "custom ERP development India",
    "custom ERP Kerala",
    "ERP development company India",
    "ERP company Kerala",
    "buy ERP software India",
    "ERP demo India",
    "request ERP demo India",
    "affordable ERP India",
    "beond academic management",
    "beond attendance system",
    "beond HR system",
    "beond inventory system",
    "beond finance ERP",
    "beond library system",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "ERP Products — Academic, HR, Finance & More | Beond Innovations",
    description: "Enterprise-grade ERP products for schools, colleges, and businesses. Academic, Attendance, HR, Inventory, Finance, and Library management.",
    url: "https://beondinnovations.com/products",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beond Innovations ERP Products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Products — Beond Innovations",
    description: "Enterprise-grade ERP products for schools, colleges, and businesses — Academic, HR, Finance, and more.",
    images: ["/og-image.png"],
  },
};

const products = [
  {
    id: "academic-management",
    badge: "Education ERP",
    name: "Academic Management System",
    tagline: "The complete operating system for modern educational institutions.",
    desc: "Manage admissions, academics, examinations, fees, timetables, and parent communication from a single, unified platform. Built for schools, colleges, and coaching institutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    features: [
      "Student admission & enrollment",
      "Academic calendar & timetable",
      "Examination & result management",
      "Fee collection & receipts",
      "Parent & student portal",
      "Certificate & document generation",
    ],
    accent: "emerald",
    status: "Available",
  },
  {
    id: "attendance-management",
    badge: "HR · Education",
    name: "Attendance Management System",
    tagline: "Real-time attendance tracking for staff and students.",
    desc: "Biometric and app-based attendance for staff and students with instant reports, leave management, and automated notifications to parents and HR teams.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M9 16l2 2 4-4" />
      </svg>
    ),
    features: [
      "Biometric & QR code check-in",
      "Real-time dashboard",
      "Leave & permission management",
      "Automated parent/HR alerts",
      "Monthly & custom reports",
      "Multi-branch support",
    ],
    accent: "sky",
    status: "Available",
  },
  {
    id: "hr-management",
    badge: "Human Resources",
    name: "HR Management System",
    tagline: "End-to-end HR operations — from hire to retire.",
    desc: "Streamline recruitment, onboarding, payroll, performance reviews, and compliance tracking. Designed for institutions and businesses with multi-department structures.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    features: [
      "Employee records & org chart",
      "Recruitment & onboarding",
      "Payroll & salary processing",
      "Performance management",
      "Compliance & document tracking",
      "Leave & attendance integration",
    ],
    accent: "violet",
    status: "Available",
  },
  {
    id: "inventory-management",
    badge: "Operations",
    name: "Inventory & Asset Management",
    tagline: "Full visibility over your stock, assets, and procurement.",
    desc: "Track inventory levels, manage procurement workflows, monitor asset lifecycles, and generate audit-ready reports — for labs, libraries, stores, and warehouses.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    features: [
      "Stock tracking & alerts",
      "Purchase orders & vendors",
      "Asset lifecycle management",
      "Barcode & QR scanning",
      "Audit trails & reports",
      "Multi-location support",
    ],
    accent: "amber",
    status: "Available",
  },
  {
    id: "finance-erp",
    badge: "Finance",
    name: "Finance & Accounting ERP",
    tagline: "Accounts, budgets, and financial reporting — all in one place.",
    desc: "Complete accounting suite with general ledger, invoicing, budget tracking, GST-ready tax management, and financial dashboards tailored for institutions and SMEs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h2M10 15h4" />
      </svg>
    ),
    features: [
      "General ledger & journal entries",
      "Invoicing & billing",
      "Budget planning & tracking",
      "GST-ready tax management",
      "Financial statements & P&L",
      "Multi-entity & branch accounting",
    ],
    accent: "rose",
    status: "Available",
  },
  {
    id: "library-management",
    badge: "Education ERP",
    name: "Library Management System",
    tagline: "Smart library operations for schools and institutions.",
    desc: "Catalogue books, manage member accounts, track issue and return workflows, send due-date reminders, and generate circulation reports with ease.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        <path d="M8 7h8M8 11h6" />
      </svg>
    ),
    features: [
      "Book cataloguing & ISBN lookup",
      "Member & borrower management",
      "Issue, return & renewal",
      "Fine & overdue management",
      "Due-date SMS/email alerts",
      "Circulation & inventory reports",
    ],
    accent: "teal",
    status: "Available",
  },
];

const accentMap: Record<string, { bg: string; border: string; text: string; badge: string; badgeBorder: string; badgeText: string }> = {
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
    badge: "bg-emerald-50",
    badgeBorder: "border-emerald-200",
    badgeText: "text-emerald-700",
  },
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-100",
    text: "text-sky-600",
    badge: "bg-sky-50",
    badgeBorder: "border-sky-200",
    badgeText: "text-sky-700",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    text: "text-violet-600",
    badge: "bg-violet-50",
    badgeBorder: "border-violet-200",
    badgeText: "text-violet-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    text: "text-amber-600",
    badge: "bg-amber-50",
    badgeBorder: "border-amber-200",
    badgeText: "text-amber-700",
  },
  rose: {
    bg: "bg-rose-50",
    border: "border-rose-100",
    text: "text-rose-600",
    badge: "bg-rose-50",
    badgeBorder: "border-rose-200",
    badgeText: "text-rose-700",
  },
  teal: {
    bg: "bg-teal-50",
    border: "border-teal-100",
    text: "text-teal-600",
    badge: "bg-teal-50",
    badgeBorder: "border-teal-200",
    badgeText: "text-teal-700",
  },
};

const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://beondinnovations.com/products#webpage",
  url: "https://beondinnovations.com/products",
  name: "ERP Products — Beond Innovations",
  description: "Enterprise-grade ERP products built for educational institutions and businesses.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "Products", item: "https://beondinnovations.com/products" },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    name: "ERP Software Products by Beond Innovations",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "SoftwareApplication", name: "Academic Management System", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Manage admissions, academics, examinations, fees, and timetables from a unified platform.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } } },
      { "@type": "ListItem", position: 2, item: { "@type": "SoftwareApplication", name: "Attendance Management System", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Biometric and app-based attendance for staff and students with real-time reports.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } } },
      { "@type": "ListItem", position: 3, item: { "@type": "SoftwareApplication", name: "HR Management System", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "End-to-end HR operations — recruitment, payroll, performance reviews, and compliance.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } } },
      { "@type": "ListItem", position: 4, item: { "@type": "SoftwareApplication", name: "Inventory & Asset Management", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Track inventory, manage procurement, and monitor asset lifecycles.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } } },
      { "@type": "ListItem", position: 5, item: { "@type": "SoftwareApplication", name: "Finance & Accounting ERP", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "General ledger, invoicing, GST-ready tax management, and financial dashboards.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } } },
      { "@type": "ListItem", position: 6, item: { "@type": "SoftwareApplication", name: "Library Management System", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Catalogue books, manage members, track issue/return, and send due-date reminders.", offers: { "@type": "Offer", availability: "https://schema.org/InStock" } } },
    ],
  },
};

export default function ProductsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }} />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 bg-white overflow-hidden">
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
        <div className="absolute top-1/3 right-1/3 -z-10 w-[700px] h-[600px] rounded-full bg-emerald-400/10 blur-[140px] pointer-events-none" />
        <div className="absolute -top-32 -left-20 -z-10 w-[500px] h-[500px] rounded-full bg-emerald-200/20 blur-[100px] pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />

        <div className="relative w-full px-6 sm:px-8 lg:px-[5vw] py-20 lg:py-0 lg:pt-8 lg:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 lg:gap-16 xl:gap-24">

            {/* Left — Copy */}
            <div className="flex-1 lg:max-w-xl">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide mb-8">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  6 ERP products · Built in-house
                </div>
              </FadeUp>

              <FadeUp delay={80}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] lg:leading-[1.08] font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                  Software your institution{" "}
                  <span className="text-emerald-600">actually runs on.</span>
                </h1>
              </FadeUp>

              <FadeUp delay={160}>
                <p className="text-neutral-500 text-base sm:text-lg lg:text-xl leading-relaxed mb-10">
                  Purpose-built ERP systems — not generic platforms — designed for schools,
                  colleges, and businesses that need reliability, simplicity, and full ownership.
                </p>
              </FadeUp>

              <FadeUp delay={240}>
                <div className="flex flex-col sm:flex-row gap-3 mb-12">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-emerald-600 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Request a demo
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 7h10M8 3l4 4-4 4" />
                    </svg>
                  </Link>
                  <a
                    href="#products-grid"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-medium hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200"
                  >
                    Browse products
                  </a>
                </div>
              </FadeUp>

              {/* Trust row */}
              <FadeUp delay={320}>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {["Schools", "Colleges", "Institutes", "Businesses"].map((label, i) => (
                    <span key={label} className="flex items-center gap-1.5 text-xs text-neutral-400">
                      {i !== 0 && <span className="w-1 h-1 rounded-full bg-neutral-300" />}
                      {label}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>

            {/* Right — Product module visual */}
            <FadeUp delay={200} className="flex-1 w-full lg:max-w-[500px]">
              <div className="relative">
                {/* Floating stat chips */}
                <div className="hidden lg:flex absolute -left-10 top-12 bg-white rounded-2xl px-4 py-3 border border-neutral-100 shadow-lg shadow-neutral-100 items-center gap-3 z-10">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 leading-none mb-0.5">Fully integrated</p>
                    <p className="text-[10px] text-neutral-400">All modules connect</p>
                  </div>
                </div>

                <div className="hidden lg:flex absolute -right-10 bottom-12 bg-white rounded-2xl px-4 py-3 border border-neutral-100 shadow-lg shadow-neutral-100 items-center gap-3 z-10">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-neutral-900 leading-none mb-0.5">100% ownership</p>
                    <p className="text-[10px] text-neutral-400">You own every line</p>
                  </div>
                </div>

                {/* Main card */}
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl shadow-neutral-100 overflow-hidden">
                  {/* Card top bar */}
                  <div className="px-5 py-3.5 border-b border-neutral-100 bg-neutral-50 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                    </div>
                    <span className="text-[10px] font-mono text-neutral-400">beond erp suite</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      <span className="w-1 h-1 rounded-full bg-emerald-500" />
                      6 modules
                    </span>
                  </div>

                  {/* Module grid */}
                  <div className="p-4 grid grid-cols-2 gap-3">
                    {[
                      {
                        name: "Academic Management",
                        tag: "Education",
                        color: "#059669",
                        bg: "bg-emerald-50",
                        border: "border-emerald-100",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                          </svg>
                        ),
                      },
                      {
                        name: "Attendance",
                        tag: "HR · Education",
                        color: "#0284c7",
                        bg: "bg-sky-50",
                        border: "border-sky-100",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M9 16l2 2 4-4" />
                          </svg>
                        ),
                      },
                      {
                        name: "HR Management",
                        tag: "Human Resources",
                        color: "#7c3aed",
                        bg: "bg-violet-50",
                        border: "border-violet-100",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                          </svg>
                        ),
                      },
                      {
                        name: "Inventory & Assets",
                        tag: "Operations",
                        color: "#b45309",
                        bg: "bg-amber-50",
                        border: "border-amber-100",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2">
                            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                          </svg>
                        ),
                      },
                      {
                        name: "Finance & Accounts",
                        tag: "Finance",
                        color: "#be123c",
                        bg: "bg-rose-50",
                        border: "border-rose-100",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#be123c" strokeWidth="2">
                            <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                          </svg>
                        ),
                      },
                      {
                        name: "Library Management",
                        tag: "Education",
                        color: "#0f766e",
                        bg: "bg-teal-50",
                        border: "border-teal-100",
                        icon: (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2">
                            <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                          </svg>
                        ),
                      },
                    ].map((mod) => (
                      <div
                        key={mod.name}
                        className={`group/mod ${mod.bg} border ${mod.border} hover:brightness-95 rounded-xl p-3.5 transition-all duration-200 cursor-default`}
                      >
                        <div className="w-8 h-8 rounded-lg bg-white border border-white/80 flex items-center justify-center mb-2.5 shadow-sm">
                          {mod.icon}
                        </div>
                        <p className="text-[11px] font-bold text-neutral-800 leading-snug mb-1">{mod.name}</p>
                        <p className="text-[9px] font-semibold uppercase tracking-wide" style={{ color: mod.color }}>{mod.tag}</p>
                      </div>
                    ))}
                  </div>

                  {/* Card footer */}
                  <div className="px-5 py-3.5 border-t border-neutral-100 bg-neutral-50 flex items-center justify-between">
                    <span className="text-[10px] text-neutral-400">All modules · Fully connected</span>
                    <span className="text-[10px] font-semibold text-emerald-600">Custom modules available →</span>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* Products grid */}
      <section id="products-grid" className="py-16 lg:py-24 bg-neutral-50 border-t border-neutral-100">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, i) => {
              const a = accentMap[product.accent];
              return (
                <FadeUp key={product.id} delay={i * 80}>
                  <div className="group bg-white rounded-2xl border border-neutral-200 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-100 transition-all duration-300 overflow-hidden flex flex-col h-full">
                    {/* Card header */}
                    <div className={`${a.bg} border-b ${a.border} px-8 py-7 flex items-start gap-5`}>
                      <div className={`w-12 h-12 rounded-xl ${a.bg} border ${a.border} flex items-center justify-center ${a.text} flex-shrink-0`}>
                        {product.icon}
                      </div>
                      <div className="min-w-0">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide ${a.badge} border ${a.badgeBorder} ${a.badgeText} mb-2`}>
                          {product.badge}
                        </span>
                        <h2 className="text-xl font-bold text-neutral-900 leading-snug">{product.name}</h2>
                        <p className={`text-sm font-medium ${a.text} mt-0.5`}>{product.tagline}</p>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="px-8 py-7 flex flex-col flex-1">
                      <p className="text-neutral-500 text-sm sm:text-base leading-relaxed mb-7">
                        {product.desc}
                      </p>

                      {/* Features */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                            <svg className={`flex-shrink-0 mt-0.5 ${a.text}`} width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M3 8l3.5 3.5L13 4" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-5 border-t border-neutral-100 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                          </span>
                          {product.status}
                        </span>
                        <Link
                          href="/contact"
                          className={`inline-flex items-center gap-1.5 text-sm font-semibold ${a.text} hover:opacity-80 transition-opacity`}
                        >
                          Request demo
                          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M2 7h10M8 3l4 4-4 4" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-white border-t border-neutral-100">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp>
            <div className="relative bg-neutral-950 rounded-3xl px-8 md:px-16 py-16 md:py-20 overflow-hidden">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="text-center lg:text-left max-w-xl">
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
                    Custom ERP
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-[1.1] mb-4">
                    Need something tailored to your institution?
                  </h2>
                  <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                    We build custom ERP modules and integrations on top of any of these products — or from scratch.
                    Tell us what you need.
                  </p>
                </div>
                <div className="flex flex-col items-center lg:items-end gap-4 flex-shrink-0">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold text-base hover:bg-emerald-400 transition-all duration-200 hover:shadow-2xl hover:shadow-emerald-500/30 hover:-translate-y-0.5"
                  >
                    Let&apos;s talk
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                  <p className="text-neutral-600 text-xs text-center lg:text-right">
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
