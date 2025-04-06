
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <div className={`${color} py-6 px-6`}>
        <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white text-center">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
