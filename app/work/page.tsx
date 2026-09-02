import Link from "next/link";
import Navbar from "@/components/navbar";
import SelectedWork from "@/components/selected-work";
import Footer from "@/components/footer";

export const metadata = {
  title: "Selected Work — Arbaz Khan Portfolio",
  description: "Explore production projects, e-commerce platforms, travel marketplaces, and healthcare applications built by Arbaz Khan.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      <Navbar />
      <div className="pt-24" />
      <SelectedWork />
      <Footer />
    </main>
  );
}
