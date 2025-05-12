
import { ReactNode } from "react";

interface B2BServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const B2BServiceCard = ({ icon, title, description }: B2BServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col transition-all duration-300 hover:shadow-xl border border-gray-100 hover:border-novella-red/20">
      <div className="text-novella-red mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-novella-navy">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

export default B2BServiceCard;
