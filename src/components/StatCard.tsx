
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
      <div className="text-novella-red mb-4">
        {icon}
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold text-novella-navy mb-2">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatCard;
