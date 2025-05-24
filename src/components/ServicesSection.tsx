
import { Building2, Globe, Factory, Home, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
import { motion } from "./ui/motion";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
          <ServiceCard
            title={t("services.construction")}
            description={t("services.constructionDesc")}
            icon={<Building2 size={40} />}
            link="/services/construction"
          />
          
          <ServiceCard
            title={t("services.importExport")}
            description={t("services.importExportDesc")}
            icon={<Globe size={40} />}
            link="/services/import-export"
          />
          
          <ServiceCard
            title={t("services.manufacturing")}
            description={t("services.manufacturingDesc")}
            icon={<Factory size={40} />}
            link="/services/manufacturing"
          />
          
          <ServiceCard
            title={t("services.realEstate")}
            description={t("services.realEstateDesc")}
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
                    <span className="absolute -top-3 left-11 text-yellow-300 opacity-60">✧</span>
                  </span>
                </motion.div>
              </span>
            }
            description={t("services.b2bDesc")}
            icon={<Code size={40} />}
            link="https://novellaltd.tech"
            isExternalLink={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
