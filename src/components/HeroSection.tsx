
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText = "Contact Us",
  ctaLink = "/contact",
  backgroundImage = "/lovable-uploads/0e699234-99c4-4ab4-bf5f-acdf31bf2cf0.png"
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center", 
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Enhanced gradient overlay for better text readability - made darker for industrial images */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 backdrop-blur-[1px]"></div>
      </div>
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-lg">
            {subtitle}
          </p>
          <Link to={ctaLink}>
            <Button className="bg-novella-red hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg flex items-center shadow-lg">
              {ctaText} <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
