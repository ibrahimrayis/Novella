
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
          subtitle="At Novella, we combine vision with expertise to deliver exceptional construction, import/export, and manufacturing solutions tailored to your unique needs."
          ctaText="Discover Our Services"
          ctaLink="/services/construction"
          backgroundImage="/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png"
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

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
