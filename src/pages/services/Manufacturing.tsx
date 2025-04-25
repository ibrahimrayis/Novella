
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Factory, Settings, Microscope, Recycle, Server, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

const Manufacturing = () => {
  useEffect(() => {
    document.title = "Manufacturing Services - Novella Ltd";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Novella Manufacturing"
          subtitle="Where Quality Takes Shape"
          ctaText="Contact Us"
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">
                  Manufacturing Excellence
                </h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Novella Manufacturing Division is dedicated to precision, innovation, and excellence in
                  manufacturing. With state-of-the-art facilities, cutting-edge technology, and a highly
                  skilled workforce, we specialize in producing top-quality products across various
                  industries.
                </p>
                <p className="text-gray-700 mb-6">
                  Our commitment to quality control, sustainable practices, and efficient
                  production processes ensures that we deliver exceptional results every time. Whether
                  it's manufacturing components, equipment, or customized solutions, Novella's
                  Manufacturing Division is your trusted partner for superior manufacturing services.
                </p>
                <Link to="/contact">
                  <Button className="mt-2 bg-novella-red hover:bg-red-700 text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/13fbcb36-849b-4270-b6bc-ba5ad9639f11.png" 
                  alt="Manufacturing Facility" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="py-16 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Markets
              </h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                We serve diverse industries with tailored manufacturing solutions
              </p>
              <div className="h-1 w-24 bg-novella-red mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Server className="h-12 w-12 text-novella-red mx-auto mb-4" />
                <h3 className="font-bold text-novella-navy">Data Centers</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                <h3 className="font-bold text-novella-navy">Education</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
                <h3 className="font-bold text-novella-navy">Food Products</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                </svg>
                <h3 className="font-bold text-novella-navy">Consumer Goods</h3>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <svg className="h-12 w-12 text-novella-red mx-auto mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
                  <path d="M10 10L8 12l2 2M14 10l2 2-2 2"></path>
                </svg>
                <h3 className="font-bold text-novella-navy">Clothing</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Manufacturing Services" 
              subtitle="Comprehensive solutions for all your manufacturing needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Factory className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Production Management</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive production management services ensure efficient manufacturing processes 
                  and optimal resource utilization.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Lean manufacturing implementation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Production planning and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Workflow optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Settings className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Product Engineering</h3>
                <p className="text-gray-700 mb-6">
                  Our product engineering services help transform concepts into manufacturable products 
                  with optimal design for manufacturing.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Product design optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Material selection and testing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Prototyping and validation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Microscope className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Quality Assurance</h3>
                <p className="text-gray-700 mb-6">
                  Our rigorous quality assurance processes ensure that all products meet the highest standards 
                  and specifications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Comprehensive inspection protocols</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Statistical process control</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Continuous improvement programs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Recycle className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Sustainable Manufacturing</h3>
                <p className="text-gray-700 mb-6">
                  Our sustainable manufacturing practices reduce environmental impact while maintaining 
                  high-quality production standards.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Energy-efficient processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Waste reduction strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Eco-friendly material sourcing</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <svg className="h-12 w-12 text-novella-red mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Supply Chain Management</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive supply chain management ensures reliable material sourcing, inventory control, 
                  and efficient distribution.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Supplier relationship management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Inventory optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Logistics coordination</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ArrowRight className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Custom Solutions</h3>
                <p className="text-gray-700 mb-6">
                  We develop tailored manufacturing solutions to meet your specific product requirements 
                  and business objectives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Specialized production processes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Customized equipment solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Bespoke quality control systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Manufacturing Facilities" 
              subtitle="State-of-the-art equipment and technology for superior production capabilities"
            />
            
            <div className="mt-12">
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-novella-navy">Advanced Production Capability</h3>
                    <p className="text-gray-700 mb-6">
                      Our manufacturing facilities feature cutting-edge technology and equipment, enabling us to 
                      deliver high-quality products with precision and efficiency. From automated production lines 
                      to sophisticated testing equipment, we invest in the best tools to ensure superior results.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>25,000 m² total manufacturing space</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Multiple automated production lines</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Cutting-edge testing and quality control lab</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 text-novella-red flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>ISO 9001:2015 certified facilities</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-0">
                    <img 
                      src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                      alt="Manufacturing Facility" 
                      className="h-full object-cover"
                    />
                    <img 
                      src="/lovable-uploads/8952e562-8a43-4f85-8290-8f6282dd237d.png" 
                      alt="Production Line" 
                      className="h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-novella-navy relative">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Manufacture with Excellence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our manufacturing capabilities can meet your production needs with precision and quality.
            </p>
            <Link to="/contact">
              <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
                Request a Manufacturing Quote
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Manufacturing;
