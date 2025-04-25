
import { Building2, MapPin, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";

interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  type: string;
}

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "Modern Office Complex",
    location: "Istanbul, Turkey",
    price: "$2,500,000",
    image: "/lovable-uploads/217b0ff4-1cf2-4ecc-a3e3-5e9748d39c4e.png",
    type: "Commercial"
  },
  {
    id: "2",
    title: "Luxury Residential Tower",
    location: "Dubai, UAE",
    price: "$3,800,000",
    image: "/lovable-uploads/ea28938e-81de-49e8-95d9-befe8572af37.png",
    type: "Residential"
  },
  {
    id: "3",
    title: "Industrial Facility",
    location: "Abu Dhabi, UAE",
    price: "$1,900,000",
    image: "/lovable-uploads/4fa5f518-fa61-4305-829c-3bfec8dd5376.png",
    type: "Industrial"
  }
];

const RealEstateSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Featured Properties"
          subtitle="Discover our exclusive selection of premium properties"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
                  {property.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-novella-navy mb-2">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center text-novella-red font-bold mb-4">
                  <DollarSign className="w-4 h-4 mr-1" />
                  <span>{property.price}</span>
                </div>
                <Button className="w-full bg-novella-red hover:bg-red-700">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="outline" className="border-novella-red text-novella-red hover:bg-novella-red hover:text-white inline-flex items-center">
              View All Properties <Building2 className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RealEstateSection;
