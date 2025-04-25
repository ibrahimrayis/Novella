
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-novella-navy relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/7475093d-7db2-4197-a465-0f7845f8db24.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Next Project?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Whether you need construction, import/export services, or manufacturing solutions, we're here to help you achieve your goals.
        </p>
        <Link to="/contact">
          <Button className="bg-novella-red hover:bg-red-700 text-white px-8 py-6 text-lg">
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
