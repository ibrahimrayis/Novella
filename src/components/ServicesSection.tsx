
import { Building2, Globe, Factory, Home, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { motion } from "./ui/motion";

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Services"
          subtitle="Comprehensive solutions for all your business needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          <ServiceCard
            title="Construction"
            description="Premier construction services with focus on quality and timely delivery"
            icon={<Building2 size={40} />}
            link="/services/construction"
          />
          
          <ServiceCard
            title="Import & Export"
            description="Global trade solutions connecting businesses worldwide"
            icon={<Globe size={40} />}
            link="/services/import-export"
          />
          
          <ServiceCard
            title="Manufacturing"
            description="High-quality manufacturing with innovative production techniques"
            icon={<Factory size={40} />}
            link="/services/manufacturing"
          />
          
          <ServiceCard
            title="Real Estate"
            description="Premium real estate development and investment opportunities"
            icon={<Home size={40} />}
            link="/services/real-estate"
          />
          
          <ServiceCard
            title={
              <span>
                Novella{" "}
                <motion.div 
                  className="inline-block relative"
                  delay={300}
                  duration={700}
                >
                  <span className="text-amber-600 font-bold relative z-10">
                    Tech
                    <span className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-amber-500 to-amber-700 opacity-20 blur-sm"></span>
                    <span className="absolute -top-1 left-1 text-yellow-300 opacity-70">✦</span>
                    <span className="absolute top-0 right-0 text-yellow-300 opacity-60">✧</span>
                    <span className="absolute -bottom-1 right-2 text-yellow-300 opacity-50">✦</span>
                  </span>
                </motion.div>
              </span>
            }
            description="Tailored technology solutions to boost your company's growth"
            icon={<Code size={40} />}
            link="https://github.com/ibrahimrayis/novella-digital-growth.git"
            isExternalLink={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
