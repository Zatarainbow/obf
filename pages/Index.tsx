import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
