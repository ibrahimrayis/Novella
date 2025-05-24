
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: ReactNode;
  description: string;
  icon: ReactNode;
  link: string;
  isExternalLink?: boolean;
}

const ServiceCard = ({ title, description, icon, link, isExternalLink = false }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl">
      <div className="text-novella-red mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-novella-navy">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      {isExternalLink ? (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex"
        >
          <Button variant="outline" className="border-novella-red text-novella-red hover:bg-novella-red hover:text-white flex items-center">
            Learn More <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </a>
      ) : (
        <Link to={link}>
          <Button variant="outline" className="border-novella-red text-novella-red hover:bg-novella-red hover:text-white flex items-center">
            Learn More <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
