import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Beond Innovations LLP | Software Development",
  description:
    "Beond Innovations builds high-quality software products — web apps, mobile apps, and custom digital solutions for businesses of all sizes.",
  keywords: ["software development", "web development", "mobile apps", "Beond Innovations"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
