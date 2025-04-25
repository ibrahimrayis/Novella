
import { Briefcase, Users, Award, Clock } from "lucide-react";
import SectionTitle from "./SectionTitle";
import StatCard from "./StatCard";

const StatsSection = () => {
  return (
    <section className="py-20 bg-novella-navy relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/efaa69c5-e65a-4e42-8cab-698f8db85e6e.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Our Impact" 
          subtitle="We take pride in the numbers that showcase our dedication and success"
          className="text-white"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <StatCard
            icon={<Briefcase size={40} />}
            value="250+"
            label="Projects Completed"
          />
          
          <StatCard
            icon={<Users size={40} />}
            value="120+"
            label="Expert Team Members"
          />
          
          <StatCard
            icon={<Award size={40} />}
            value="15+"
            label="Industry Awards"
          />
          
          <StatCard
            icon={<Clock size={40} />}
            value="98%"
            label="On-Time Delivery"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
