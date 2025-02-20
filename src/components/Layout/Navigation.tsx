
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  FileText,
  PieChart,
  Calendar,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Dashboard", path: "/" },
    { icon: <Users className="w-5 h-5" />, label: "Students", path: "/students" },
    { icon: <FileText className="w-5 h-5" />, label: "Forms", path: "/forms" },
    {
      icon: <PieChart className="w-5 h-5" />,
      label: "Analytics",
      path: "/analytics",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Meetings",
      path: "/meetings",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      label: "Settings",
      path: "/settings",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-full bg-white shadow-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <motion.nav
        initial={false}
        animate={{
          width: isOpen ? "100%" : "0%",
          opacity: isOpen ? 1 : 0,
        }}
        className={`fixed lg:relative lg:opacity-100 lg:w-64 h-full bg-white border-r border-gray-200 z-40 overflow-hidden`}
      >
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-xl font-bold text-gray-900">MTSS Platform</h1>
          </div>

          <div className="space-y-2">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.path}
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navigation;
