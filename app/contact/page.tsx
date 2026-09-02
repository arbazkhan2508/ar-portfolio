import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "Contact — Arbaz Khan Portfolio",
  description: "Start a conversation with Arbaz Khan for new web development projects, custom applications, and e-commerce stores.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <Navbar />
      <div className="pt-24" />
      <ContactSection />
      <Footer />
    </main>
  );
}
