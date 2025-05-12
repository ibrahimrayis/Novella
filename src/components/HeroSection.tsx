
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
  backgroundImage = "/lovable-uploads/bc577194-c7cb-446d-a633-f38688dcd47d.png"
}: HeroSectionProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center", 
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay filter with blue tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            {subtitle}
          </p>
          <Link to={ctaLink}>
            <Button className="bg-novella-red hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg flex items-center">
              {ctaText} <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
