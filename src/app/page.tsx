import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Work from "@/components/Work";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Work />
      <Pricing />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
