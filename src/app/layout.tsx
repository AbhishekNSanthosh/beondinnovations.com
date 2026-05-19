import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://beondinnovations.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beond Innovations — Website Design & Software Development Studio | Kerala, India",
    template: "%s | Beond Innovations",
  },
  description:
    "Beond Innovations is a website design and software development studio based in Kerala, India. We design and build web apps, mobile apps, APIs, and MVPs for startups and businesses globally — fast, clean, and production-ready.",
  keywords: [
    // Brand keywords — exact-match and variations
    "beond",
    "beond innovations",
    "beond innovations website",
    "beond innovations company",
    "beond innovations studio",
    "beond software",
    "beond software development",
    "beond web design",
    "beond app development",
    "beondinnovations",
    "beondinnovations.com",
    // Website design keywords
    "website design company India",
    "website design company Kerala",
    "website design agency India",
    "website design agency Kerala",
    "website design and development India",
    "professional website design India",
    "website design services India",
    "website design services Kerala",
    "website development company India",
    "website development company Kerala",
    "website development agency India",
    "website development agency Kerala",
    "web design company India",
    "web design company Kerala",
    "web design agency India",
    "web design agency Kerala",
    "web development company India",
    "web development agency India",
    "web development services Kerala",
    // App development
    "app development company India",
    "app development company Kerala",
    "mobile app development India",
    "mobile app development Kerala",
    "iOS app development India",
    "Android app development India",
    "cross-platform app development India",
    "React Native app development India",
    // Software development
    "software development company India",
    "software development studio Kerala",
    "software development agency India",
    "custom software development India",
    "software company Kerala",
    "software company Alappuzha",
    "IT company Kerala",
    "Kerala IT company",
    "software studio India",
    "software agency India",
    // Specific services
    "web app development India",
    "MVP development India",
    "MVP development services",
    "API backend development India",
    "UI UX design India",
    "UI UX design Kerala",
    "UI UX design agency India",
    "tech consulting India",
    "technology consulting Kerala",
    "SaaS development India",
    "startup software development India",
    "full stack development India",
    "full stack development Kerala",
    // Technologies
    "Next.js development agency India",
    "React development company India",
    "React Next.js development",
    "Node.js development India",
    // Intent-based
    "hire software developers India",
    "hire web developers Kerala",
    "outsource software development India",
    "software development for startups India",
    "best software company Kerala",
    "top web development company Kerala",
  ],
  authors: [{ name: "Beond Innovations", url: siteUrl }],
  creator: "Beond Innovations",
  publisher: "Beond Innovations",
  category: "Technology",
  classification: "Software Development",
  applicationName: "Beond Innovations",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Beond Innovations",
    title: "Beond Innovations — Website Design & Software Development Studio | Kerala, India",
    description:
      "Beond Innovations designs and builds web apps, mobile apps, APIs, and MVPs for startups and businesses globally — fast, clean, and production-ready. Based in Kerala, India.",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beond Innovations — Website Design & Software Development Studio in Kerala, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@beondinnovations",
    creator: "@beondinnovations",
    title: "Beond Innovations — Website Design & Software Development",
    description:
      "We design and build web apps, mobile apps, APIs, and MVPs — fast, clean, and production-ready. Based in Kerala, India. Working globally.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
  },
};

const socialProfiles = [
  "https://github.com/beondinnovations",
  "https://linkedin.com/company/beondinnovations",
  "https://x.com/beondinnovations",
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Beond Innovations",
  alternateName: ["Beond", "beond", "Beond Studio", "Beond Software", "beondinnovations"],
  legalName: "Beond Innovations LLP",
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/icon.png`,
    width: 512,
    height: 512,
  },
  image: `${siteUrl}/og-image.png`,
  email: "beondinnovations@gmail.com",
  telephone: "+917907247909",
  address: {
    "@type": "PostalAddress",
    streetAddress: "PB102, Carmel College of Engineering & Technology, Punnapra",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    postalCode: "688004",
    addressCountry: "IN",
  },
  foundingLocation: {
    "@type": "Place",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: socialProfiles,
  description:
    "Beond Innovations is a website design and software development studio building web apps, mobile apps, APIs, and MVPs for startups and businesses globally. Based in Kerala, India.",
  knowsAbout: [
    "Website Design",
    "Web Development",
    "Mobile App Development",
    "API Development",
    "MVP Development",
    "UI/UX Design",
    "Tech Consulting",
    "Software Development",
    "React",
    "Next.js",
    "React Native",
    "Node.js",
    "PostgreSQL",
    "TypeScript",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${siteUrl}/#localbusiness`,
  name: "Beond Innovations",
  alternateName: ["Beond", "beond", "Beond Studio"],
  image: `${siteUrl}/og-image.png`,
  url: siteUrl,
  telephone: "+917907247909",
  email: "beondinnovations@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "INR, USD",
  paymentAccepted: "Bank Transfer, UPI",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "AdministrativeArea", name: "Kerala" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "PB102, Carmel College of Engineering & Technology, Punnapra",
    addressLocality: "Alappuzha",
    addressRegion: "Kerala",
    postalCode: "688004",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 9.5312,
    longitude: 76.3418,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: socialProfiles,
  description:
    "Beond Innovations is a website design and software development studio in Kerala, India. Building web apps, mobile apps, APIs, and MVPs for startups and businesses worldwide.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Website Design & Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design", serviceType: "Website Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", serviceType: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development", serviceType: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development", serviceType: "MVP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design", serviceType: "UI/UX Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tech Consulting", serviceType: "Technology Consulting" } },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Beond Innovations",
  alternateName: ["Beond", "beond innovations", "Beond Studio"],
  description:
    "Website design and software development studio in Kerala, India. Building web apps, mobile apps, APIs, and MVPs for startups and businesses globally.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Website Design & Software Development Services by Beond Innovations",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Website Design",
        description:
          "Professional website design services — clean, modern, and conversion-focused. Every site is custom designed for your brand and audience.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Website Design",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Web Development",
        description:
          "Full-stack web applications built with modern frameworks — fast, scalable, and production-ready.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Web Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications for iOS and Android that users love.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Mobile App Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "API & Backend Development",
        description:
          "Robust APIs and backend systems designed for performance, security, and easy integration.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "API Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "MVP Development",
        description:
          "Ship your product idea quickly with a focused MVP — validated, testable, and ready for investors.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "MVP Development",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "UI/UX Design",
        description:
          "Clean, intuitive interfaces grounded in user research — every screen designed with purpose.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "UI/UX Design",
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Tech Consulting",
        description:
          "Strategic technology guidance to help your team make the right architectural and tool decisions.",
        provider: { "@id": `${siteUrl}/#organization` },
        serviceType: "Technology Consulting",
        areaServed: "Worldwide",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Beond Innovations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beond Innovations (also known as 'Beond') is a website design and software development studio based in Kerala, India. We build web apps, mobile apps, APIs, and MVPs for startups and businesses globally.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Beond Innovations offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beond Innovations offers website design, web development, mobile app development (iOS & Android), API and backend development, MVP development, UI/UX design, and tech consulting. We work with startups and businesses globally.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Beond Innovations located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Beond Innovations is based in Alappuzha, Kerala, India. We work with clients globally across India, USA, UK, and other countries.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects take between 6–12 weeks from kickoff to launch. MVPs and focused feature builds can be done in as little as 4 weeks. We'll give you an honest timeline estimate during discovery — before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do I own the code once the project is done?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 100%. You get full ownership of all source code, design files, and assets from day one. No licensing fees, no lock-in, and no dependency on us to keep things running.",
      },
    },
    {
      "@type": "Question",
      name: "What does working with Beond Innovations look like day to day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll have direct access to the engineers doing the work — no middlemen. We do weekly syncs, share progress in a shared Slack or Notion space, and you can review the code at any time. Decisions get made fast.",
      },
    },
    {
      "@type": "Question",
      name: "Does Beond Innovations work with early-stage startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, both startups and established businesses. We've helped founders take ideas from whiteboard to launched product, and we've helped established teams modernize legacy systems. The common thread: clients who want quality work done with clear communication.",
      },
    },
    {
      "@type": "Question",
      name: "How do we get started with Beond Innovations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send us a brief overview of what you're building at beondinnovations@gmail.com. We'll schedule a 30-minute call, and follow up with honest thoughts and a proposed scope — no sales fluff.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
