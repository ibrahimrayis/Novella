
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
