import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Globe, Factory, Users, Award, Briefcase, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import StatCard from "@/components/StatCard";
import TestimonialCard from "@/components/TestimonialCard";
import RealEstateSection from "@/components/RealEstateSection";
import ProjectCard from "@/components/ProjectCard";

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

        {/* About Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">
                  Who We Are?
                </h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Novella serves as the leading division within the extensive Novella Group Alliance, 
                  renowned for its steadfast dedication to delivering exceptional construction and design services. 
                  Established in 2020, right from our inception, we swiftly gained prominence within the industry, 
                  positioning ourselves at the forefront of innovation, and prioritizing accountability and integrity.
                </p>
                <p className="text-gray-700 mb-6">
                  Through the integration of cutting-edge technologies and a commitment to Safety, Quality and Sustainability, 
                  we are establishing new standards for excellence. Our unwavering commitment to innovative solutions, 
                  professionalism, and ensuring client satisfaction sets us apart in the market.
                </p>
                <Link to="/about">
                  <Button variant="outline" className="mt-2 border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png" 
                  alt="Novella Company" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-novella-red text-white p-4 rounded shadow-lg hidden md:block">
                  <p className="text-xl font-bold">Since 2020</p>
                  <p>Excellence is all that we deliver</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Services" 
              subtitle="We provide comprehensive solutions across construction, import/export, and manufacturing sectors"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <ServiceCard
                title="Construction"
                description="We create top-quality, enduring spaces where people can thrive, transforming raw materials into lasting stories."
                icon={<Building2 size={40} />}
                link="/services/construction"
              />
              
              <ServiceCard
                title="Import & Export"
                description="Ensuring smooth flow of import and export activities for businesses across diverse industries with our global network."
                icon={<Globe size={40} />}
                link="/services/import-export"
              />
              
              <ServiceCard
                title="Manufacturing"
                description="Dedicated to precision, innovation, and excellence in manufacturing with state-of-the-art facilities and skilled workforce."
                icon={<Factory size={40} />}
                link="/services/manufacturing"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionTitle 
              title="Our Impact" 
              subtitle="We take pride in the numbers that showcase our dedication and success"
              className="text-white"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <StatCard
                icon={<Briefcase size={40} />}
                value="250+"
                label="Projects Completed"
              />
              
              <StatCard
                icon={<Users size={40} />}
                value="120+"
                label="Expert Team Members"
              />
              
              <StatCard
                icon={<Award size={40} />}
                value="15+"
                label="Industry Awards"
              />
              
              <StatCard
                icon={<Clock size={40} />}
                value="98%"
                label="On-Time Delivery"
              />
            </div>
          </div>
        </section>

        {/* Real Estate Section */}
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

        {/* CTA Section */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Whether you need construction, import/export services, or manufacturing solutions, we're here to help you achieve your goals.
            </p>
            <Link to="/contact">
              <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
