
import { Building2, Globe, Factory, Home, LayoutDashboard } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";
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
            title={t("services.b2b")}
            description={t("services.b2bDesc")}
            icon={<LayoutDashboard size={40} />}
            link="/services/b2b"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
