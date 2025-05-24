
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { direction } = useLanguage();
  
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image with improved mobile quality */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center center", 
          backgroundRepeat: "no-repeat",
          transform: "scale(1.01)", // Slight scale to prevent white edges during transitions
          willChange: "transform", // Optimization hint for browsers
        }}
      >
        {/* Enhanced gradient overlay for better text readability - optimized for mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/85 backdrop-blur-[1px]"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className={`max-w-3xl animate-fade-in-up ${direction === 'rtl' ? 'text-right' : ''}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-xl">
            {title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 drop-shadow-lg">
            {subtitle}
          </p>
          <Link to={ctaLink}>
            <Button className={`bg-novella-red hover:bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg flex items-center shadow-lg ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
              {ctaText} 
              <ChevronRight className={`${direction === 'rtl' ? 'mr-2 ml-0 transform rotate-180' : 'ml-2'} h-4 w-4 sm:h-5 sm:w-5`} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
