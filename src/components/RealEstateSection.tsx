
import { Building2, MapPin, DollarSign, Calendar, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Property {
  id: string;
  title: string;
  location: string;
  price?: string;
  image: string;
  type: string;
  description: string;
  deliveryDate?: string;
  features?: string[];
}

const featuredProperties: Property[] = [
  {
    id: "1",
    title: "SELVI PARK",
    location: "Bağcılar, Istanbul",
    image: "/lovable-uploads/c2d3c0ca-753b-4a98-afca-7ef9890dcd22.png",
    type: "Residential",
    description: "Covers an area of 11,500 square meters and includes 6 residential blocks with 586 apartment units and 8 stores.",
    deliveryDate: "April 30, 2024",
    features: ["Various apartment types", "Extensive amenities", "Design-Build Approach"]
  },
  {
    id: "2",
    title: "BAHARYAKA",
    location: "Bağcılar, Istanbul",
    image: "/lovable-uploads/e6d71d7a-a12e-422f-8042-d51d3b2ef4e0.png",
    type: "Residential",
    description: "Located next to the Golden Horn in a central area. Consists of 27 blocks with various apartment types and extensive social facilities, covering an area of 120,000 square meters.",
    features: ["Central location", "Social facilities", "Design-Build Approach"]
  },
  {
    id: "3",
    title: "MEGA GARDEN",
    location: "Istanbul, Zeytinburnu",
    image: "/lovable-uploads/c9b49626-f18c-4dbf-a2de-a6e89645ec27.png",
    type: "Residential",
    description: "Consists of 4 blocks, 528 units, and 11 floors. Conveniently located near Aqua Florya, Marmara Forum Shopping Center, and various transportation options.",
    deliveryDate: "March 2024",
    features: ["Convenient location", "Modern design", "Design-Build Approach"]
  },
  {
    id: "4",
    title: "NIVO ISTANBUL",
    location: "Küçükçekmece district, Istanbul, European side",
    image: "/lovable-uploads/35a35189-1081-4b7f-8d9a-752d623087bc.png",
    type: "Commercial",
    description: "Located in the commercial center on Basin Express, near a metro station and Atatürk International Airport.",
    features: ["Prime commercial location", "Metro accessibility", "Design-Build Approach"]
  }
];

const RealEstateSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Featured Properties"
          subtitle="Discover our exclusive selection of premium properties across Istanbul"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {featuredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </AspectRatio>
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-novella-navy mb-3">{property.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-novella-red" />
                  <span className="text-sm">{property.location}</span>
                </div>
                {property.deliveryDate && (
                  <div className="flex items-center text-gray-600 mb-2">
                    <Calendar className="w-4 h-4 mr-2 text-novella-red" />
                    <span className="text-sm">Delivery: {property.deliveryDate}</span>
                  </div>
                )}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>
                
                {property.features && property.features.length > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                <Link to={`/projects/${property.id}`} className="block">
                  <Button className="w-full bg-novella-red hover:bg-red-700 transition-colors">
                    View Details
                  </Button>
                </Link>
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
