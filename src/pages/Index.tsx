
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import RatesSection from "@/components/RatesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gym-black text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <RatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
