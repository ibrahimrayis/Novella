
import { Briefcase, Users, Award, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";
import StatCard from "./StatCard";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-novella-navy relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/aa0dc49a-7bf9-4cf0-9d0e-d488fd9d0539.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title={t("stats.title")}
          subtitle={t("stats.subtitle")}
          className="text-white"
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
