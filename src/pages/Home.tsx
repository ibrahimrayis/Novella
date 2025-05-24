
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
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t("home.pageTitle");
  }, [t]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title={t("home.hero.title")}
          subtitle={t("home.hero.subtitle")}
          ctaText={t("home.hero.ctaText")}
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
              title={t("home.testimonials.title")} 
              subtitle={t("home.testimonials.subtitle")}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <TestimonialCard
                content={t("home.testimonials.testimonial1.content")}
                author={t("home.testimonials.testimonial1.author")}
                role={t("home.testimonials.testimonial1.role")}
                company={t("home.testimonials.testimonial1.company")}
              />
              
              <TestimonialCard
                content={t("home.testimonials.testimonial2.content")}
                author={t("home.testimonials.testimonial2.author")}
                role={t("home.testimonials.testimonial2.role")}
                company={t("home.testimonials.testimonial2.company")}
              />
              
              <TestimonialCard
                content={t("home.testimonials.testimonial3.content")}
                author={t("home.testimonials.testimonial3.author")}
                role={t("home.testimonials.testimonial3.role")}
                company={t("home.testimonials.testimonial3.company")}
              />
            </div>
          </div>
        </section>

        <CTASection 
          title={t("home.cta.title")}
          subtitle={t("home.cta.subtitle")}
          buttonText={t("home.cta.buttonText")}
          buttonLink="/contact"
          backgroundImage="/lovable-uploads/259ac89e-f9dc-4539-a1d2-7140ab91439d.png"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
