
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TechServicesSection from "@/components/tech/TechServicesSection";
import TechWhySection from "@/components/tech/TechWhySection";
import TechAboutSection from "@/components/tech/TechAboutSection";
import TechPricingSection from "@/components/tech/TechPricingSection";
import TechContactSection from "@/components/tech/TechContactSection";
import CTASection from "@/components/CTASection";

const NovellaTech = () => {
  useEffect(() => {
    document.title = "Novella Tech - Digital Growth Solutions";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Digital Growth Solutions"
          subtitle="We highlight your brand in the digital world with modern web technologies and creative design approach."
          ctaText="Get Started Today"
          ctaLink="#contact"
          backgroundImage="/lovable-uploads/0e699234-99c4-4ab4-bf5f-acdf31bf2cf0.png"
        />

        <TechAboutSection />
        <TechServicesSection />
        <TechWhySection />
        <TechPricingSection />
        <TechContactSection />

        <CTASection 
          title="Ready to Transform Your Digital Presence?"
          subtitle="Let's work together to create innovative solutions that drive your business growth in the digital world."
          buttonText="Start Your Project"
          buttonLink="#contact"
          backgroundImage="/lovable-uploads/259ac89e-f9dc-4539-a1d2-7140ab91439d.png"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default NovellaTech;
