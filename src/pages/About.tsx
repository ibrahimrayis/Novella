
import { useEffect } from "react";
import { Shield, CheckCircle, Briefcase, Users, Award, Clock, ChevronRight, Building2, Globe, Factory } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Novella Ltd";
  }, []);

  const values = [
    {
      title: "Client-Centric Approach",
      description: "We prioritize close personal relationships with clients, working diligently to ensure exceptional service.",
      icon: <Users className="h-10 w-10" />
    },
    {
      title: "Clear Communication",
      description: "We maintain open, swift, and transparent communication, ensuring our clients always know they can rely on us.",
      icon: <CheckCircle className="h-10 w-10" />
    },
    {
      title: "Unwavering Commitment",
      description: "We deliver what we promise and go the extra mile, every day, for each and every client.",
      icon: <Shield className="h-10 w-10" />
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="About Novella Ltd"
          subtitle="Learn about our journey, values, and vision for the future"
          ctaText="Contact Us"
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/df6dc53e-eafa-4252-89b7-88b52e732bf6.png"
        />

        {/* Our Story Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">Our Story</h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-4">
                  Novella Construction and Imports/Exports and Manufacturing Ltd serves as the leading division within 
                  the extensive Novella Group Alliance, renowned for its steadfast dedication to delivering exceptional 
                  construction and design services.
                </p>
                <p className="text-gray-700 mb-4">
                  Established in 2020, right from our inception, we swiftly gained prominence within the industry, 
                  positioning ourselves at the forefront of innovation, and prioritizing accountability and integrity.
                </p>
                <p className="text-gray-700">
                  Through the integration of cutting-edge technologies and a commitment to Safety, Quality and 
                  Sustainability, we are establishing new standards for excellence. Our unwavering commitment 
                  to innovative solutions, professionalism, and ensuring client satisfaction sets us apart in 
                  the market.
                </p>
              </div>
              <div className="space-y-6">
                <img 
                  src="/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png" 
                  alt="Novella Office Building" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Mission & Values" 
              subtitle="The principles that guide us in delivering excellence to our clients"
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
              <div>
                <p className="text-gray-700 mb-6">
                  Constructed from dedication and grit, our vision and core values represent Novella as a
                  company as well as each individual that makes our landmark projects possible.
                  At Novella, we have a clear mission and set of values that guide our every endeavor.
                  Our mission is to provide outstanding construction and design services, tailored to the
                  unique needs of our clients.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-novella-red mb-4">{value.icon}</div>
                      <h3 className="text-xl font-bold mb-2 text-novella-navy">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <img 
                src="/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png" 
                alt="Our Values" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7e0223e0-6cd9-4061-b0e0-71d84dc6a4f6.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <SectionTitle 
              title="Our Achievements" 
              subtitle="The numbers that reflect our dedication and success"
              className="text-white"
              titleClassName="text-white"
              subtitleClassName="text-white"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Briefcase className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">250+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">120+</h3>
                <p className="text-gray-600">Expert Team Members</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Award className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">15+</h3>
                <p className="text-gray-600">Industry Awards</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-novella-red mb-4" />
                <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">98%</h3>
                <p className="text-gray-600">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Overview */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="What We Do" 
              subtitle="Our comprehensive range of services designed to meet your diverse needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red h-full">
                <Building2 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-novella-navy">Construction</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Architectural & Interior Design</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Civil Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>High Environmental Standards</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Seamless Close-out & Turnover</span>
                  </li>
                </ul>
                <Link to="/services/construction">
                  <Button variant="outline" className="w-full mt-auto border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red h-full">
                <Globe className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-novella-navy">Import & Export</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Global Trade Network</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Regulatory Compliance Support</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Supply Chain Management</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Trade Finance Solutions</span>
                  </li>
                </ul>
                <Link to="/services/import-export">
                  <Button variant="outline" className="w-full mt-auto border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red h-full">
                <Factory className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-novella-navy">Manufacturing</h3>
                <ul className="space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>State-of-the-art Production</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Quality Control Systems</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Customized Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-novella-red flex-shrink-0 mr-2 mt-0.5" />
                    <span>Sustainable Manufacturing</span>
                  </li>
                </ul>
                <Link to="/services/manufacturing">
                  <Button variant="outline" className="w-full mt-auto border-novella-red text-novella-red hover:bg-novella-red hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-novella-red relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Collaborate with Us?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss how Novella can help bring your vision to life with our expertise and dedication to excellence.
            </p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-novella-red font-medium px-8 py-3 text-lg">
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

export default About;
