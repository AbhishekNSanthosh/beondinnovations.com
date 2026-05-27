import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the engineers and designers at Beond Innovations. A small, senior team building software for startups and businesses worldwide from Kerala, India.",
  keywords: [
    "beond innovations team",
    "beond team",
    "beond innovations engineers",
    "beond innovations developers",
    "beyond innovations team",
    "software developers Kerala India",
    "software engineers Kerala",
    "web developers Kerala India",
    "app developers Kerala India",
    "software development team India",
    "software studio team Kerala",
    "senior developers India",
    "senior engineers Kerala",
    "React developers India",
    "Next.js developers India",
    "full stack developers India",
    "full stack developers Kerala",
    "UI UX designers India",
    "software designers Kerala",
    "beond innovations founders",
    "beond innovations people",
    "who built beond",
    "beond innovations Kerala engineers",
    "Indian software developers",
    "Kerala software engineers",
  ],
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team — Meet the People Behind Beond Innovations",
    description: "Meet the senior engineers and designers at Beond Innovations — based in Kerala, India, building software globally.",
    url: "https://beondinnovations.com/team",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Beond Innovations Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team — Beond Innovations",
    description: "A senior team of engineers and designers based in Kerala, India.",
    images: ["/og-image.png"],
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://beondinnovations.com/team#webpage",
  url: "https://beondinnovations.com/team",
  name: "Our Team — Beond Innovations",
  description: "Meet the engineers and designers at Beond Innovations — a senior team based in Kerala, India.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://beondinnovations.com" },
      { "@type": "ListItem", position: 2, name: "Team", item: "https://beondinnovations.com/team" },
    ],
  },
};

export default function TeamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />
      <Navbar />
      <main className="pt-16 md:pt-20 min-h-screen">
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
