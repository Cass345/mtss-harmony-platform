
import { FileText, Users, PieChart, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const QuickActions = () => {
  const actions = [
    {
      title: "Student Data",
      icon: <Users className="w-5 h-5" />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Forms",
      icon: <FileText className="w-5 h-5" />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Analytics",
      icon: <PieChart className="w-5 h-5" />,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Meetings",
      icon: <Calendar className="w-5 h-5" />,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {actions.map((action, index) => (
        <motion.button
          key={action.title}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${action.color} p-4 rounded-lg flex flex-col items-center justify-center space-y-2 transition-colors duration-200`}
        >
          {action.icon}
          <span className="text-sm font-medium">{action.title}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default QuickActions;
