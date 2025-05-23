
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const CTASection = ({ 
  title = "Ready to Start Your Next Project?",
  subtitle = "Whether you need construction, import/export services, or manufacturing solutions, we're here to help you achieve your goals.",
  buttonText = "Contact Us Today",
  buttonLink = "/contact",
  backgroundImage = "/lovable-uploads/aa0dc49a-7bf9-4cf0-9d0e-d488fd9d0539.png"
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-novella-navy relative">
      <div className={`absolute inset-0 bg-[url('${backgroundImage}')] bg-cover bg-center opacity-20`}></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link to={buttonLink}>
          <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
            {buttonText}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
