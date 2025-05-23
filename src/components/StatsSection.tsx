
import { Briefcase, Users, Award, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";
import StatCard from "./StatCard";
import { useLanguage } from "@/contexts/LanguageContext";

interface StatsSectionProps {
  backgroundImage?: string;
}

const StatsSection = ({ backgroundImage = "/lovable-uploads/e36d4e81-034e-4caf-bee3-0ca66ec3036b.png" }: StatsSectionProps) => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-novella-navy relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title={t("stats.title")}
          subtitle={t("stats.subtitle")}
          className="text-white"
          titleClassName="text-white"
          subtitleClassName="text-white"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <StatCard
            icon={<Briefcase size={40} />}
            value="250+"
            label={t("stats.projectsCompleted")}
          />
          
          <StatCard
            icon={<Users size={40} />}
            value="120+"
            label={t("stats.expertTeam")}
          />
          
          <StatCard
            icon={<Award size={40} />}
            value="15+"
            label={t("stats.industryAwards")}
          />
          
          <StatCard
            icon={<Clock size={40} />}
            value="98%"
            label={t("stats.onTimeDelivery")}
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
