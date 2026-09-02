import type { Metadata } from "next";
import CustomCursor from "@/components/custom-cursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arbaz Khan — Web Developer | React, Next.js & Shopify",
  description:
    "Production-ready personal developer portfolio of Arbaz Khan, web developer with 3+ years of experience specializing in React, Next.js, Shopify, Node.js and modern full-stack web applications.",
  keywords: [
    "Arbaz Khan",
    "Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "Shopify Developer",
    "Full-Stack Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Arbaz Khan" }],
  creator: "Arbaz Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arbazkhan.dev",
    title: "Arbaz Khan — Web Developer | React, Next.js & Shopify",
    description:
      "Production-ready personal developer portfolio of Arbaz Khan. Discover real-world projects, travel marketplace apps, healthcare SaaS, cybersecurity platforms, and custom client web solutions.",
    siteName: "Arbaz Khan Portfolio",
    images: [
      {
        url: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Arbaz Khan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbaz Khan — Web Developer | React, Next.js & Shopify",
    description:
      "Production-ready developer portfolio of Arbaz Khan. 3+ years experience building modern web applications, e-commerce stores, and custom APIs.",
    creator: "@arbazkhan_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased selection:bg-blue-500/30 selection:text-blue-200">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
