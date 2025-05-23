
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import RealEstateSection from "@/components/RealEstateSection";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import SectionTitle from "@/components/SectionTitle";

const Home = () => {
  useEffect(() => {
    document.title = "Novella Ltd - Construction, Import/Export & Manufacturing";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Designing Innovation, Building Success"
          subtitle="At Novella, we combine vision with expertise to deliver exceptional construction, manufacturing, and international trade solutions—tailored to your unique needs."
          ctaText="Discover Our Services"
          ctaLink="/services/construction"
          backgroundImage="/lovable-uploads/0e699234-99c4-4ab4-bf5f-acdf31bf2cf0.png"
        />

        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <RealEstateSection />

        {/* Testimonials */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Client Testimonials" 
              subtitle="What our clients say about our services and commitment to excellence"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <TestimonialCard
                content="Novella's approach to our office building project was exceptional. They understood our vision and delivered beyond our expectations, on time and within budget."
                author="Ali Yilmaz"
                role="CEO"
                company="TechSphere Solutions"
              />
              
              <TestimonialCard
                content="Working with Novella for our import/export needs has transformed our supply chain. Their expertise and global network have been invaluable to our business growth."
                author="Sophia Chen"
                role="Operations Director"
                company="Global Trade Inc."
              />
              
              <TestimonialCard
                content="The manufacturing facilities developed by Novella for our company have significantly improved our production efficiency. Their attention to detail and quality is outstanding."
                author="Mehmet Kaya"
                role="Production Manager"
                company="Industrial Innovations"
              />
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Start Your Construction Project?"
          subtitle="Whether you need construction, import/export services, or manufacturing solutions, we're here to help you achieve your goals."
          buttonText="Contact Us Today"
          buttonLink="/contact"
          backgroundImage="/lovable-uploads/2fe1e116-a36d-4499-8574-b3de6b14e9d2.png"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
