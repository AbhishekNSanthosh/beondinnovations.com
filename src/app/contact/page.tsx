import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Beond Innovations. Tell us about your project and we'll get back within 24 hours with honest thoughts and a clear path forward. Email: beondinnovations@gmail.com",
  keywords: [
    "contact beond innovations",
    "beond innovations contact",
    "hire beond innovations",
    "start project beond",
    "beyond innovations contact",
    "contact software company Kerala",
    "contact web development company India",
    "hire software developers India",
    "hire web developers Kerala",
    "hire React developer India",
    "hire Next.js developer India",
    "start software project India",
    "outsource software development India",
    "get a quote software development India",
    "software development quote India",
    "web development quote India",
    "contact IT company Kerala",
    "get in touch software company India",
    "software development inquiry India",
    "web development inquiry Kerala",
    "beond innovations email",
    "beondinnovations@gmail.com",
    "work with beond innovations",
    "partner with beond innovations",
    "work with software studio India",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us — Start Your Project | Beond Innovations",
    description: "Ready to build something great? Tell us about your project and we'll respond within 24 hours.",
    url: "https://beondinnovations.com/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Beond Innovations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Beond Innovations — Start Your Project",
    description: "Tell us about your project. We'll reply within 24 hours.",
    images: ["/og-image.png"],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://beondinnovations.com/contact#webpage",
  url: "https://beondinnovations.com/contact",
  name: "Contact Beond Innovations — Start a Project",
  description: "Get in touch with Beond Innovations to start your web, app, or software project.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://beondinnovations.com/contact" },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-neutral-50 min-h-screen">
        <div className="px-6 sm:px-8 lg:px-[5vw]">
          <FadeUp>
            <div className="relative bg-neutral-950 rounded-3xl px-8 md:px-16 py-16 md:py-20 overflow-hidden">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="text-center lg:text-left max-w-xl">
                  <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
                    Let&apos;s build together
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1] mb-5">
                    Ready to build something great?
                  </h1>
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
      </main>

      <Footer />
    </>
  );
}
