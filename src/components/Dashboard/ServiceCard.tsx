
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  onClick: () => void;
}

const ServiceCard = ({ title, description, icon, onClick }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-6 rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full bg-secondary/10 text-secondary">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-lg text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
