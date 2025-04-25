
import { useEffect } from "react";
import { Home, Check, Star, MapPin, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";

const RealEstate = () => {
  useEffect(() => {
    document.title = "Real Estate Services - Novella Ltd";
  }, []);

  const features = [
    "Premium Residential Properties",
    "Commercial Real Estate",
    "Property Management",
    "Investment Consultation",
    "Real Estate Development",
    "Property Valuation Services"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Real Estate Services"
          subtitle="Exceptional properties and comprehensive real estate solutions tailored to your needs"
          ctaText="Contact Us"
          ctaLink="/contact"
          backgroundImage="/lovable-uploads/8952e562-8a43-4f85-8290-8f6282dd237d.png"
        />

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="Real Estate Services" 
                  subtitle="Delivering exceptional real estate solutions with integrity and expertise"
                  align="left"
                  className="mb-6"
                />
                <p className="text-gray-700 mb-6">
                  At Novella, we provide comprehensive real estate services for both residential and commercial properties. 
                  Our team of experienced professionals is dedicated to helping you find the perfect property, 
                  manage your real estate investments, and maximize your returns.
                </p>
                <p className="text-gray-700 mb-8">
                  Whether you're looking to buy, sell, or invest in property, our experts will guide you through 
                  every step of the process, ensuring a smooth and successful transaction.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-novella-red mr-2" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png" 
                  alt="Real Estate Services" 
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 bg-novella-red text-white p-4 rounded shadow-lg hidden md:block">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5 mr-1" />
                    <Star className="h-5 w-5" />
                  </div>
                  <p className="mt-1">Trusted by 1000+ clients</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Detail */}
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <SectionTitle
              title="Our Real Estate Offerings"
              subtitle="Comprehensive solutions for all your real estate needs"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Home className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-novella-navy">Residential Properties</h3>
                <p className="text-gray-600 mb-4">
                  Discover your dream home with our exclusive collection of residential properties, 
                  ranging from luxury apartments to family houses.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Premium Locations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Modern Amenities</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Flexible Financing Options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <Building2 className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-novella-navy">Commercial Real Estate</h3>
                <p className="text-gray-600 mb-4">
                  Elevate your business with our strategic commercial properties designed 
                  to meet your operational needs and growth objectives.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Prime Business Locations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Customizable Office Spaces</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Retail and Industrial Properties</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <MapPin className="h-12 w-12 text-novella-red mb-4" />
                <h3 className="text-xl font-bold mb-2 text-novella-navy">Property Management</h3>
                <p className="text-gray-600 mb-4">
                  Maximize your investment potential with our comprehensive property 
                  management services tailored to your specific needs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Tenant Acquisition & Screening</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Property Maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-novella-red mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Financial Reporting & Analysis</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default RealEstate;
