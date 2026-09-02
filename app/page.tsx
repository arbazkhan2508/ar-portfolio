import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProofStrip from "@/components/proof-strip";
import SelectedWork from "@/components/selected-work";
import Capabilities from "@/components/capabilities";
import TechStack from "@/components/tech-stack";
import Experience from "@/components/experience";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] relative selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      <Hero />
      <ProofStrip />
      <SelectedWork />
      <Capabilities />
      <TechStack />
      <Experience />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
