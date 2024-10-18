import { Certificates } from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data/myData";

export default function Home() {
  return (
    <div className="bg-black">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}
