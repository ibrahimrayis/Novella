
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Globe, ShoppingBag, Truck, BarChart4, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

const ImportExport = () => {
  useEffect(() => {
    document.title = "Import & Export Services - Novella Ltd";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Novella Import & Export"
          subtitle="Excellence is all that we deliver"
          ctaText="Contact Us"
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/d0cf6519-7cc2-4a38-9fda-22271d15a3dd.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-novella-navy">
                  Global Trade Excellence
                </h2>
                <div className="h-1 w-24 bg-novella-red mb-6"></div>
                <p className="text-gray-700 mb-6">
                  Novella is dedicated to ensuring the smooth flow of import and export activities for
                  businesses spanning diverse industries. Our team of experts, coupled with an extensive
                  global network of partners, allows us to deliver holistic solutions aimed at streamlining
                  supply chains, simplifying logistics, and boosting trade effectiveness.
                </p>
                <p className="text-gray-700 mb-6">
                  We stand as the top choice for enterprises aiming to broaden their footprint in the international market.
                  Whether the need is to secure high-quality goods, navigate intricate regulatory
                  landscapes, or guarantee punctual deliveries, Novella's Imports and Exports Division is
                  the dependable companion in the realm of global trade.
                </p>
                <Link to="/contact">
                  <Button className="mt-2 bg-novella-red hover:bg-red-700 text-white">
                    Get in Touch
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png" 
                  alt="Import & Export Services" 
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
              title="Our Import & Export Services" 
              subtitle="Comprehensive solutions for all your international trade needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Globe className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">International Trade</h3>
                <p className="text-gray-700 mb-6">
                  Our international trade services connect businesses with global markets, facilitating seamless 
                  cross-border transactions and expanding your market reach.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Market entry strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Trade partner identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Contract negotiation support</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ShoppingBag className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Sourcing & Procurement</h3>
                <p className="text-gray-700 mb-6">
                  Our sourcing and procurement services help you find reliable suppliers and high-quality products 
                  that meet your specific requirements.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Supplier identification and verification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Product quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Price negotiation and optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <Truck className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Logistics Management</h3>
                <p className="text-gray-700 mb-6">
                  Our logistics management services ensure the efficient movement of goods across borders, 
                  optimizing transportation costs and delivery times.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Freight forwarding services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Customs clearance management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Supply chain optimization</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <BarChart4 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Market Studies</h3>
                <p className="text-gray-700 mb-6">
                  Our comprehensive market studies provide valuable insights to inform your international trade decisions 
                  and identify growth opportunities.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Market demand analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Competitor and pricing research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Regulatory environment assessment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <FileText className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Regulatory Compliance</h3>
                <p className="text-gray-700 mb-6">
                  We help navigate the complex world of international trade regulations, ensuring your operations 
                  remain compliant across all jurisdictions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Import/export documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Compliance audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Regulatory updates and training</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-novella-red">
                <ArrowRight className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-4 text-novella-navy">Trade Finance</h3>
                <p className="text-gray-700 mb-6">
                  Our trade finance solutions help secure the funding needed for international trade operations, 
                  minimizing risk and optimizing cash flow.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Letters of credit management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Trade credit insurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-novella-red rounded-full mt-2 mr-3"></span>
                    <span>Working capital solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Our Global Network" 
              subtitle="Strategic partnerships around the world to facilitate your international trade needs"
            />
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden mt-12">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-novella-navy">Strong International Presence</h3>
                <p className="text-gray-700 mb-6">
                  The cornerstone of our success lies in the enduring connections we've cultivated over numerous
                  decades. Novella has nurtured prosperous partnerships with clients and financial backers, thanks to
                  our extensive, time-tested history of collaborating effectively with lenders, government bodies,
                  organizations, and property owners across various sectors.
                </p>
                <p className="text-gray-700 mb-6">
                  Our standing and extensive network pave the path, ensuring your international trade endeavors secure 
                  the necessary support and offers unmatched value with unwavering confidence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2">
                <img 
                  src="/lovable-uploads/b0d8d188-c702-44ee-bb3e-ee71e40194d2.png" 
                  alt="Global Network" 
                  className="h-full object-cover"
                />
                <div className="bg-novella-navy p-8 text-white">
                  <h4 className="text-xl font-bold mb-6">Our Key Partners Around the World</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/ac6b367c-d090-4f17-980d-01406c970c60.png" 
                        alt="Partner Logo" 
                        className="w-16 h-16 rounded bg-white p-2 mr-4 object-contain"
                      />
                      <div>
                        <p className="font-semibold">MAB Turkey</p>
                        <p className="text-sm text-white/70">Strategic Trade Partner</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/0103f198-663c-4ebc-bca1-c82c0e506ef9.png" 
                        alt="Partner Logo" 
                        className="w-16 h-16 rounded bg-white p-2 mr-4 object-contain"
                      />
                      <div>
                        <p className="font-semibold">DEIK</p>
                        <p className="text-sm text-white/70">Foreign Economic Relations</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <img 
                        src="/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png" 
                        alt="Partner Logo" 
                        className="w-16 h-16 rounded bg-white p-2 mr-4 object-contain"
                      />
                      <div>
                        <p className="font-semibold">TİKA</p>
                        <p className="text-sm text-white/70">Development Cooperation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle 
              title="Why Choose Novella Import & Export" 
              subtitle="What sets us apart in the global trade industry"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">Global Reach</h3>
                <p className="text-gray-600">
                  Extensive network of partners and agents across key markets worldwide
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">Expert Team</h3>
                <p className="text-gray-600">
                  Specialists with deep knowledge of international trade regulations and practices
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">Integrated Solutions</h3>
                <p className="text-gray-600">
                  Comprehensive services that cover every aspect of the import/export process
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-16 h-16 bg-novella-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart4 className="h-8 w-8 text-novella-red" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-novella-navy">Market Intelligence</h3>
                <p className="text-gray-600">
                  Real-time data and insights to inform strategic trade decisions
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-novella-red relative">
          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Expand Your Global Reach?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our import and export services can help your business thrive in the international market.
            </p>
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-100 text-novella-red font-medium px-8 py-6 text-lg">
                Contact Our Trade Specialists
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ImportExport;
