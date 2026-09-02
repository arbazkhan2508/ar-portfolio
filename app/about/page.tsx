import Navbar from "@/components/navbar";
import AboutSection from "@/components/about-section";
import Capabilities from "@/components/capabilities";
import Experience from "@/components/experience";
import Footer from "@/components/footer";

export const metadata = {
  title: "About — Arbaz Khan Portfolio",
  description: "Learn about Arbaz Khan's 3+ years of experience as a web developer specializing in React, Next.js, and Shopify.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <Navbar />
      <div className="pt-24" />
      <AboutSection />
      <Capabilities />
      <Experience />
      <Footer />
    </main>
  );
}
