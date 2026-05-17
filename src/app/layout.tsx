import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://beondinnovations.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beond Innovations — Software Development Studio",
    template: "%s | Beond Innovations",
  },
  description:
    "Beond Innovations is a software development studio based in Kerala, India. We build web apps, mobile apps, APIs, and MVPs — fast, clean, and production-ready.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "MVP development",
    "React",
    "Next.js",
    "React Native",
    "Kerala software company",
    "India software studio",
    "Beond Innovations",
  ],
  authors: [{ name: "Beond Innovations", url: siteUrl }],
  creator: "Beond Innovations",
  publisher: "Beond Innovations",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Beond Innovations",
    title: "Beond Innovations — Software Development Studio",
    description:
      "We build web apps, mobile apps, APIs, and MVPs — fast, clean, and production-ready. Based in Kerala, India. Working globally.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beond Innovations — Software Development Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beond Innovations — Software Development Studio",
    description:
      "We build web apps, mobile apps, APIs, and MVPs — fast, clean, and production-ready.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Beond Innovations",
  legalName: "Beond Innovations LLP",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: "hello@beondinnovations.com",
  foundingLocation: {
    "@type": "Place",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [],
  description:
    "Beond Innovations is a software development studio building web apps, mobile apps, APIs, and MVPs for startups and businesses globally.",
  knowsAbout: [
    "Web Development",
    "Mobile App Development",
    "API Development",
    "MVP Development",
    "UI/UX Design",
    "Tech Consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-neutral-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
