import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, HardHat, Ruler, Hammer, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";

const Construction = () => {
  useEffect(() => {
    document.title = "Construction Services - Novella Ltd";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Novella Construction"
          subtitle="Every project has a story beyond the structure"
          ctaText="Contact Us"
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/4b387313-45b5-4968-9402-3b8c0271e5e9.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">
                  Construction Excellence
                </h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-6">
                  At Novella, construction is about more than just bricks and mortar – it's about creating
                  top-quality, enduring spaces where people can thrive. We don't simply rely on our
                  deep construction know-how; we incorporate insights gained from our experience
                  designing and operating buildings to create a better end result – greater impact and
                  lasting value for you.
                </p>
                <p className="text-gray-700 mb-6">
                  The Novella construction team takes a thoughtful and proactive approach, using what we know 
                  about you and your objectives to help realize your vision, not just accepting the status quo 
                  or serving as an order taker. We don't shy away from asking the tough questions to uncover 
                  opportunities that often get overlooked. That's why, we've been transforming raw materials into lasting stories.
                </p>
                <Link to="/contact">
                  <Button className="mt-2 bg-novella-red hover:bg-red-700 text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                  alt="Construction Services" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Construction Services" 
              subtitle="Comprehensive solutions for all your construction needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Building2 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Architectural Design</h3>
                <p className="text-gray-700 mb-6">
                  Our architectural design services blend creativity with functionality, creating spaces that are both 
                  aesthetically pleasing and practical for your specific needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Conceptual design development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>3D visualization and modeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Sustainable design solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <HardHat className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Project Management</h3>
                <p className="text-gray-700 mb-6">
                  Our experienced project managers ensure your construction project runs smoothly from start to finish,
                  maintaining quality, schedule, and budget.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Comprehensive planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Budget development and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Quality control and risk management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Ruler className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Civil Engineering</h3>
                <p className="text-gray-700 mb-6">
                  Our civil engineering team provides comprehensive solutions for infrastructure development,
                  ensuring structural integrity and compliance with regulations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Structural design and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Site development and grading</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Infrastructure planning and design</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Hammer className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Construction Management</h3>
                <p className="text-gray-700 mb-6">
                  Our construction management services oversee all aspects of the building process, 
                  coordinating contractors and ensuring efficient execution.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Contractor selection and management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Site supervision and coordination</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Progress monitoring and reporting</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ShieldCheck className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Safety & Compliance</h3>
                <p className="text-gray-700 mb-6">
                  We maintain the highest standards of safety and regulatory compliance throughout all our construction projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Safety program development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Regulatory compliance management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Safety training and monitoring</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ArrowRight className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Post-Construction</h3>
                <p className="text-gray-700 mb-6">
                  Our commitment extends beyond project completion, ensuring smooth handover and ongoing support.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Facility commissioning and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Documentation and warranty management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Ongoing maintenance support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Showcase */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Featured Construction Projects" 
              subtitle="A showcase of our expertise and dedication to quality"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="group overflow-hidden rounded-lg shadow-lg relative">
                <img 
                  src="/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png" 
                  alt="Commercial Project" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-novella-navy/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Modern Office Complex</h3>
                  <p className="text-white/80">Istanbul, Turkey</p>
                </div>
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg relative">
                <img 
                  src="/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png" 
                  alt="Residential Project" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-novella-navy/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Residential Tower</h3>
                  <p className="text-white/80">Istanbul, Turkey</p>
                </div>
              </div>
              
              <div className="group overflow-hidden rounded-lg shadow-lg relative">
                <img 
                  src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                  alt="Industrial Project" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-novella-navy/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Industrial Facility</h3>
                  <p className="text-white/80">Izmit, Turkey</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/projects">
                <Button variant="outline" className="border-novella-navy text-novella-navy hover:bg-novella-navy hover:text-white">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to Start Your Next Project?"
          subtitle="Whether you need construction, import & export services, or manufacturing solutions, we're here to help you achieve your goals."
          buttonText="Get a Free Consultation"
          buttonLink="/contact"
          backgroundImage="/lovable-uploads/d8980877-f8be-43e6-84cb-5abe8f6e70e5.png"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Construction;
