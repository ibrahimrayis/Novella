
import { Building2, Globe, Factory } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Services" 
          subtitle="We provide comprehensive solutions across construction, import/export, and manufacturing sectors"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <ServiceCard
            title="Construction"
            description="We create top-quality, enduring spaces where people can thrive, transforming raw materials into lasting stories."
            icon={<Building2 size={40} />}
            link="/services/construction"
          />
          
          <ServiceCard
            title="Import & Export"
            description="Ensuring smooth flow of import and export activities for businesses across diverse industries with our global network."
            icon={<Globe size={40} />}
            link="/services/import-export"
          />
          
          <ServiceCard
            title="Manufacturing"
            description="Dedicated to precision, innovation, and excellence in manufacturing with state-of-the-art facilities and skilled workforce."
            icon={<Factory size={40} />}
            link="/services/manufacturing"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
