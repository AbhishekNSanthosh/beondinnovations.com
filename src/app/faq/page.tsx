import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions | Beond Innovations",
  description:
    "Answers to common questions about working with Beond Innovations — project timelines, code ownership, day-to-day collaboration, pricing, and more.",
  keywords: [
    "beond innovations FAQ",
    "beond innovations questions",
    "beond FAQ",
    "beyond innovations FAQ",
    "software development FAQ India",
    "web development FAQ India",
    "how long does software development take India",
    "software development cost India",
    "web development cost India",
    "app development cost India",
    "MVP development cost India",
    "do I own my code India",
    "code ownership software company India",
    "how to work with software company India",
    "software development process India",
    "how software projects work India",
    "startup software questions India",
    "software agency FAQ India",
    "beond innovations pricing",
    "beond innovations timeline",
    "beond innovations process",
    "beond innovations ownership",
    "software development for startups FAQ",
    "what is beond innovations",
    "beond innovations review",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ — Frequently Asked Questions | Beond Innovations",
    description: "Everything you want to know before starting a project with Beond Innovations. Timelines, ownership, process, and more.",
    url: "https://beondinnovations.com/faq",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beond Innovations FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ — Beond Innovations",
    description: "Common questions about timelines, ownership, process, and working with Beond Innovations.",
    images: ["/og-image.png"],
  },
};

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://beondinnovations.com/faq#webpage",
  url: "https://beondinnovations.com/faq",
  name: "FAQ — Frequently Asked Questions | Beond Innovations",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "FAQ", item: "https://beondinnovations.com/faq" },
    ],
  },
};

export default function FAQPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen">
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
