import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import { Analytics } from "@vercel/analytics/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://beondinnovations.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Beond Innovations",
    template: "%s | Beond Innovations",
  },
  description:
    "Beond Innovations is a website design and software development studio based in Kerala, India. We design and build web apps, mobile apps, APIs, and MVPs for startups and businesses globally — fast, clean, and production-ready.",
  keywords: [
    // ── Brand — exact-match, variations, common misspellings ──────────────────
    "beond",
    "beond innovations",
    "beond innovations website",
    "beond innovations company",
    "beond innovations studio",
    "beond innovations kerala",
    "beond innovations india",
    "beond innovations alappuzha",
    "beond innovations software",
    "beond software",
    "beond software development",
    "beond web design",
    "beond app development",
    "beond studio",
    "beond tech",
    "beondinnovations",
    "beondinnovations.com",
    "beond.in",
    // Common misspellings / alternate spellings
    "beyond innovations",
    "beyond innovations india",
    "beyond innovations kerala",
    "beyond innovations software",
    "beyond innovations studio",
    "beyond innovations web development",
    "beyond software development",
    "beyond software company india",
    "beyond tech india",
    "beyond innovations company",

    // ── Website design — India-wide ───────────────────────────────────────────
    "website design company India",
    "website design agency India",
    "website design services India",
    "website design and development India",
    "professional website design India",
    "website development company India",
    "website development agency India",
    "web design company India",
    "web design agency India",
    "web development company India",
    "web development agency India",
    "web development services India",
    "custom website design India",
    "responsive website design India",
    "business website design India",
    "landing page design India",
    "corporate website design India",
    "ecommerce website design India",
    "portfolio website design India",
    "startup website design India",
    "affordable website design India",
    "best website design company India",
    "top website design agency India",
    "website redesign India",
    "website revamp India",

    // ── Website design — Kerala ───────────────────────────────────────────────
    "website design company Kerala",
    "website design agency Kerala",
    "website design services Kerala",
    "website development company Kerala",
    "website development agency Kerala",
    "web design company Kerala",
    "web design agency Kerala",
    "web development company Kerala",
    "web development agency Kerala",
    "web development services Kerala",
    "custom website design Kerala",
    "responsive website design Kerala",
    "business website design Kerala",
    "startup website design Kerala",
    "affordable website design Kerala",
    "best website design company Kerala",
    "top website design company Kerala",
    "website design Alappuzha",
    "website design Kochi",
    "website design Ernakulam",
    "website design Trivandrum",
    "website design Thiruvananthapuram",
    "website design Thrissur",
    "website design Kozhikode",
    "website design Calicut",
    "website design Kollam",
    "website design Kannur",
    "website design Palakkad",
    "website design Malappuram",
    "website design Kasargod",
    "website design Pathanamthitta",
    "website design Idukki",
    "website design Wayanad",
    "website design Kottayam",
    "web development Kochi",
    "web development Ernakulam",
    "web development Trivandrum",
    "web development Thrissur",
    "web development Kozhikode",
    "web development Alappuzha",

    // ── App development — India ───────────────────────────────────────────────
    "app development company India",
    "mobile app development company India",
    "mobile app development agency India",
    "mobile app development services India",
    "iOS app development India",
    "Android app development India",
    "cross-platform app development India",
    "React Native app development India",
    "Flutter app development India",
    "hybrid app development India",
    "native app development India",
    "startup app development India",
    "MVP app development India",
    "SaaS app development India",
    "best mobile app development company India",
    "top mobile app development agency India",
    "affordable app development India",
    "hire app developer India",

    // ── App development — Kerala ──────────────────────────────────────────────
    "app development company Kerala",
    "mobile app development company Kerala",
    "mobile app development Kerala",
    "iOS app development Kerala",
    "Android app development Kerala",
    "React Native app development Kerala",
    "Flutter app development Kerala",
    "app development Kochi",
    "app development Alappuzha",
    "app development Trivandrum",
    "app development Thrissur",
    "mobile app company Kerala",

    // ── Software development — general ────────────────────────────────────────
    "software development company India",
    "software development studio India",
    "software development agency India",
    "software development studio Kerala",
    "custom software development India",
    "custom software development Kerala",
    "software company Kerala",
    "software company Alappuzha",
    "software company Kochi",
    "software studio India",
    "software agency India",
    "IT company Kerala",
    "Kerala IT company",
    "IT services Kerala",
    "IT services India",
    "software outsourcing India",
    "software outsourcing Kerala",
    "bespoke software development India",
    "enterprise software development India",
    "agile software development India",
    "best software company Kerala",
    "top software company Kerala",
    "top IT company Kerala",
    "software development Alappuzha",
    "software development Kochi",
    "software development Trivandrum",
    "software development Thrissur",
    "software development Ernakulam",
    "software company South India",
    "tech company Kerala",
    "tech startup Kerala",

    // ── Full-stack & web apps ─────────────────────────────────────────────────
    "full stack development India",
    "full stack development Kerala",
    "full stack developer India",
    "full stack web development India",
    "web app development India",
    "web app development Kerala",
    "web application development India",
    "web application development company India",
    "progressive web app development India",
    "PWA development India",
    "SaaS development India",
    "SaaS product development India",
    "SaaS application development India",
    "B2B SaaS development India",
    "B2C app development India",
    "marketplace development India",
    "portal development India",
    "dashboard development India",
    "admin panel development India",

    // ── MVP development ───────────────────────────────────────────────────────
    "MVP development India",
    "MVP development company India",
    "MVP development agency India",
    "MVP development services India",
    "MVP development services Kerala",
    "minimum viable product development India",
    "startup MVP development India",
    "rapid MVP development India",
    "MVP for startups India",
    "MVP builder India",
    "product development company India",
    "product development for startups India",
    "idea to product India",
    "concept to product India",
    "prototype development India",
    "proof of concept development India",
    "PoC development India",

    // ── API & backend ─────────────────────────────────────────────────────────
    "API development India",
    "API backend development India",
    "REST API development India",
    "GraphQL development India",
    "backend development India",
    "backend development company India",
    "Node.js development India",
    "Node.js backend India",
    "server-side development India",
    "microservices development India",
    "API integration India",
    "third-party API integration India",
    "cloud backend development India",
    "serverless development India",

    // ── UI/UX design ──────────────────────────────────────────────────────────
    "UI UX design India",
    "UI UX design company India",
    "UI UX design agency India",
    "UI UX design services India",
    "UI UX design Kerala",
    "UI UX design agency Kerala",
    "user interface design India",
    "user experience design India",
    "product design India",
    "app UI design India",
    "website UI design India",
    "Figma design agency India",
    "design system India",
    "mobile UI design India",
    "web UI design India",
    "interaction design India",
    "UX research India",
    "usability design India",

    // ── Tech consulting ───────────────────────────────────────────────────────
    "tech consulting India",
    "technology consulting India",
    "technology consulting company India",
    "tech consulting Kerala",
    "technology consulting Kerala",
    "IT consulting India",
    "IT consulting Kerala",
    "CTO as a service India",
    "fractional CTO India",
    "technical co-founder India",
    "startup tech consulting India",
    "architecture consulting India",
    "cloud consulting India",
    "digital transformation India",
    "digital transformation Kerala",
    "technology advisory India",

    // ── ERP products ──────────────────────────────────────────────────────────
    "ERP software India",
    "ERP solution India",
    "ERP development India",
    "ERP company Kerala",
    "school ERP India",
    "college ERP India",
    "education ERP India",
    "academic management system India",
    "school management software India",
    "college management system India",
    "attendance management system India",
    "HR management system India",
    "HRMS India",
    "payroll software India",
    "inventory management software India",
    "asset management software India",
    "library management system India",
    "LMS India",
    "finance ERP India",
    "accounting software India",
    "GST software India",

    // ── Technologies ──────────────────────────────────────────────────────────
    "Next.js development India",
    "Next.js development agency India",
    "Next.js development company India",
    "Next.js development Kerala",
    "React development India",
    "React development company India",
    "React development agency India",
    "React.js development India",
    "React Next.js development",
    "TypeScript development India",
    "Node.js development India",
    "Node.js company India",
    "PostgreSQL development India",
    "Tailwind CSS development India",
    "Supabase development India",
    "AWS development India",
    "Vercel deployment India",
    "React Native development India",
    "Flutter development India",
    "Python development India",
    "Django development India",
    "GraphQL API India",
    "REST API India",
    "Docker deployment India",
    "Kubernetes India",

    // ── Industry verticals ────────────────────────────────────────────────────
    "edtech development India",
    "fintech development India",
    "healthtech development India",
    "legaltech development India",
    "proptech development India",
    "logistics software India",
    "e-commerce development India",
    "e-learning platform development India",
    "telemedicine app development India",
    "real estate portal development India",
    "food delivery app development India",
    "on-demand app development India",
    "booking system development India",
    "CRM development India",
    "custom CRM India",

    // ── Client types × services ───────────────────────────────────────────────
    "software development for startups India",
    "software development for startups Kerala",
    "software partner for startups India",
    "technical partner for startups India",
    "startup software company India",
    "startup development agency India",
    "early-stage startup software India",
    "seed startup software development",
    "SME software development India",
    "small business software India",
    "software for small business India",
    "enterprise software India",

    // ── Intent-based searches ─────────────────────────────────────────────────
    "hire software developers India",
    "hire software developer Kerala",
    "hire web developer India",
    "hire web developer Kerala",
    "hire React developer India",
    "hire Next.js developer India",
    "hire Node.js developer India",
    "hire full stack developer India",
    "hire mobile app developer India",
    "outsource software development India",
    "outsource web development India",
    "outsource app development India",
    "outsource development Kerala",
    "find software company Kerala",
    "find web developer Kerala",
    "find app developer India",
    "best web development company Kerala",
    "best web development company India",
    "best software development company Kerala",
    "best app development company Kerala",
    "top web development company Kerala",
    "top software company India",
    "top mobile app development company India",
    "affordable web development India",
    "affordable software development India",
    "affordable app development India",
    "professional web development India",
    "professional software development India",
    "expert web developers India",
    "experienced software developers India",
    "senior developers India",
    "code ownership software India",
    "no middlemen software development",
    "direct developer communication India",

    // ── Question / long-tail ──────────────────────────────────────────────────
    "how to build a web app India",
    "how to build an MVP India",
    "web development company in kerala for startups",
    "best MVP development company india",
    "software development company in alappuzha",
    "web design company in alappuzha",
    "IT company in alappuzha",
    "app development company in kerala",
    "who builds software in kerala",
    "software agency in south india",
    "next js agency india",
    "react agency india",
    "software product development india",
    "software product studio india",
    "digital product studio india",
    "digital product studio kerala",
    "product engineering india",
    "product engineering company india",

    // ── Global / remote ───────────────────────────────────────────────────────
    "software development company remote India",
    "remote software team India",
    "remote development team Kerala",
    "offshore software development India",
    "offshore web development India",
    "nearshore development India",
    "software development for UK startups India",
    "software development for US startups India",
    "software development for Australian startups India",
    "software development for UAE startups India",
    "India software company for startups",
    "Kerala software company globally",
    "web development company working globally",
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
  telephone: "+919946846101",
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
  telephone: "+919946846101",
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
        <Analytics />
      </body>
    </html>
  );
}
