
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  LayoutDashboard, 
  BriefcaseBusiness,
  Handshake, 
  TrendingUp, 
  FileCode, 
  Search,
  Layers,
  Smartphone,
  Zap,
  Languages,
  Database,
  Flag,
  Users,
  Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { motion } from "@/components/ui/motion";
import CTASection from "@/components/CTASection";
import B2BServiceCard from "@/components/B2BServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";

const B2B = () => {
  useEffect(() => {
    document.title = "B2B Services | Novella Ltd";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ 
              backgroundImage: `url('/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center center", 
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-novella-navy/90 to-novella-navy/70"></div>
          </div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-script">
                Digital Excellence for <span className="text-novella-red">Business Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Empower your business with cutting-edge digital solutions designed to enhance your market presence, drive customer engagement, and accelerate growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-novella-red hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link to="#services">
                  <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white px-6 py-3 rounded-md text-lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="section-padding bg-novella-navy/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-novella-navy mb-6 font-script">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                  At Novella, we specialize in transforming business visions into powerful digital realities. With years of industry experience, our team of experts combines technical excellence with creative innovation to deliver tailored solutions that drive meaningful results.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our mission is to empower businesses with the digital tools and strategies they need to thrive in today's competitive landscape. We believe in building lasting partnerships based on trust, transparency, and exceptional outcomes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/about">
                    <Button className="bg-novella-navy hover:bg-novella-darkNavy text-white">
                      Learn More About Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute -inset-4 bg-novella-red/10 rounded-lg blur-lg"></div>
                  <img 
                    src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                    alt="Novella B2B Team" 
                    className="relative rounded-lg shadow-xl w-full max-w-lg" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-novella-navy text-white">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Why Choose Us" 
              subtitle="Partner with us to transform your digital presence and drive exceptional business growth"
              align="center"
              className="text-white"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <div className="text-novella-red mb-4">
                  <LayoutDashboard size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Stand Out in Your Market</h3>
                <p className="text-white/80">
                  Differentiate your business with custom digital solutions designed to capture attention and create lasting impressions.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <div className="text-novella-red mb-4">
                  <TrendingUp size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Increase Sales</h3>
                <p className="text-white/80">
                  Boost your revenue with optimized digital marketing strategies and SEO techniques that drive qualified traffic to your business.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <div className="text-novella-red mb-4">
                  <Handshake size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Build Trust</h3>
                <p className="text-white/80">
                  Establish credibility with professional design that reflects your brand values and resonates with your target audience.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <div className="text-novella-red mb-4">
                  <Smartphone size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">24/7 Accessibility</h3>
                <p className="text-white/80">
                  Reach your customers anytime, anywhere with mobile-first design that ensures optimal experience across all devices.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <div className="text-novella-red mb-4">
                  <BriefcaseBusiness size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Fully Custom Solutions</h3>
                <p className="text-white/80">
                  Get tailored digital solutions perfectly aligned with your brand identity and business objectives.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/15 transition-all duration-300">
                <div className="text-novella-red mb-4">
                  <Flag size={40} />
                </div>
                <h3 className="text-xl font-bold mb-2">Focus on Growth</h3>
                <p className="text-white/80">
                  Concentrate on your core business while we handle all aspects of your digital presence with expertise and precision.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section id="services" className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our B2B Services" 
              subtitle="Comprehensive solutions tailored to elevate your business and drive sustainable growth"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <B2BServiceCard 
                icon={<FileCode size={40} />}
                title="Website Design & Development"
                description="Custom websites built using modern technologies to deliver exceptional user experiences and drive business results."
              />
              
              <B2BServiceCard 
                icon={<Search size={40} />}
                title="SEO Optimization"
                description="Strategic optimization to improve your search rankings and increase organic traffic to your business website."
              />
              
              <B2BServiceCard 
                icon={<Layers size={40} />}
                title="UI/UX Design"
                description="User-centered design that creates intuitive, engaging interfaces to enhance customer satisfaction and conversion rates."
              />
              
              <B2BServiceCard 
                icon={<Smartphone size={40} />}
                title="Mobile Responsiveness"
                description="Ensure your digital presence works flawlessly across all devices with our responsive design approach."
              />
              
              <B2BServiceCard 
                icon={<Zap size={40} />}
                title="Custom Animations"
                description="Engaging animations and interactive elements that bring your website to life and create memorable user experiences."
              />
              
              <B2BServiceCard 
                icon={<Languages size={40} />}
                title="Multi-language Support"
                description="Expand your global reach with websites that support multiple languages and cater to diverse markets."
              />
              
              <B2BServiceCard 
                icon={<Database size={40} />}
                title="Hosting & Maintenance"
                description="Reliable hosting solutions and ongoing maintenance to ensure your website remains secure and performs optimally."
              />
              
              <B2BServiceCard 
                icon={<Flag size={40} />}
                title="Branding & Strategy"
                description="Comprehensive branding and strategic planning to position your business effectively in the marketplace."
              />
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Technologies We Use" 
              subtitle="Cutting-edge tools and platforms that power our innovative digital solutions"
            />
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png" alt="React" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">React</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/797ea2b3-dd4c-485b-abe2-c444b2e40db9.png" alt="Next.js" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/a37276e8-d5b1-4fce-967f-f2bf01f89703.png" alt="Tailwind CSS" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/b0d8d188-c702-44ee-bb3e-ee71e40194d2.png" alt="Figma" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">Figma</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/bb41439a-2952-4312-848e-6afc7f1f7428.png" alt="Framer" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">Framer</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/8952e562-8a43-4f85-8290-8f6282dd237d.png" alt="Node.js" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png" alt="GitHub" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">GitHub</span>
              </div>
              
              <div className="flex flex-col items-center">
                <img src="/lovable-uploads/6c78052e-6ec1-48bb-823e-b7fae9a01826.png" alt="Vercel" className="h-16 mb-2 grayscale hover:grayscale-0 transition-all" />
                <span className="text-sm font-medium">Vercel</span>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Client Testimonials" 
              subtitle="What our business partners say about our services and solutions"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <TestimonialCard
                content="Novella transformed our outdated website into a modern, responsive platform that has dramatically increased our lead generation. Their team's expertise and professionalism exceeded all our expectations."
                author="Michael Johnson"
                role="CEO"
                company="TechSolutions Inc."
              />
              
              <TestimonialCard
                content="The SEO optimization services provided by Novella helped us achieve first-page rankings for our key industry terms. Within three months, we saw a 120% increase in organic traffic and 45% higher conversion rates."
                author="Sarah Williams"
                role="Marketing Director"
                company="Global Innovations"
              />
              
              <TestimonialCard
                content="Working with Novella on our brand refresh and website redesign was an excellent decision. Their creative approach and technical knowledge delivered exactly what our business needed to stand out in a competitive market."
                author="David Chen"
                role="Operations Manager"
                company="Nexus Systems"
              />
            </div>
            
            <div className="mt-12 flex justify-center">
              <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl text-center">
                <h3 className="text-2xl font-bold mb-6">Client Satisfaction</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-novella-red text-4xl font-bold">97%</div>
                    <p className="text-gray-600">Satisfaction Rate</p>
                  </div>
                  <div>
                    <div className="text-novella-red text-4xl font-bold">85+</div>
                    <p className="text-gray-600">B2B Clients</p>
                  </div>
                  <div>
                    <div className="text-novella-red text-4xl font-bold">94%</div>
                    <p className="text-gray-600">Retention Rate</p>
                  </div>
                  <div>
                    <div className="text-novella-red text-4xl font-bold">42%</div>
                    <p className="text-gray-600">Avg. ROI Increase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="section-padding bg-novella-navy text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 font-script">Get In Touch</h2>
                <p className="text-lg mb-8 text-white/90">
                  Ready to transform your business's digital presence? Contact our team of experts today to discuss your project and discover how we can help you achieve your goals.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-novella-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-white/80">info@novella.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Users className="text-novella-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">24/7 Priority Support</h3>
                      <p className="text-white/80">Dedicated team available round the clock for our business clients</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <h3 className="text-xl font-bold mb-4">WhatsApp Business Support</h3>
                    <p className="mb-4 text-white/90">Connect with our support team instantly via WhatsApp</p>
                    <Button className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full">
                      Connect on WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-novella-navy">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Elevate Your Business?" 
          description="Partner with Novella for innovative digital solutions that drive growth"
          buttonText="Start Your Project"
          buttonLink="/contact"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default B2B;
