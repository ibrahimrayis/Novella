
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/98 via-black/85 to-black/98"></div>
      </div>
      {/* SVG linear gradient overlay on top of the image and below content */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 820 400" // Responsive vector space
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{
          mixBlendMode: "screen",
        }}
      >
        <defs>
          <linearGradient
            id="hero-gradient"
            x1="80"
            y1="10"
            x2="700"
            y2="390"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.025" stopColor="#FF8E63"/>
            <stop offset="0.56" stopColor="#FF7EB0"/>
            <stop offset="0.95" stopColor="#6AC7FF"/>
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-gradient)" fillOpacity="0.44"/>
      </svg>
      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 drop-shadow-xl">
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

