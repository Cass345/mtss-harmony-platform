
import { useState } from "react";
import {
  Drive,
  FileSpreadsheet,
  FileText,
  Video,
  PieChart,
  Presentation,
  Globe,
} from "lucide-react";
import Navigation from "../components/Layout/Navigation";
import ServiceCard from "../components/Dashboard/ServiceCard";
import WelcomeHeader from "../components/Dashboard/WelcomeHeader";
import QuickActions from "../components/Dashboard/QuickActions";
import { motion } from "framer-motion";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const services = [
    {
      title: "Google Drive",
      description: "Access and manage all MTSS documents",
      icon: <Drive className="w-6 h-6" />,
    },
    {
      title: "Google Forms",
      description: "Create and manage intervention forms",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Google Sheets",
      description: "Track student progress and data",
      icon: <FileSpreadsheet className="w-6 h-6" />,
    },
    {
      title: "Google Meet",
      description: "Schedule and join MTSS meetings",
      icon: <Video className="w-6 h-6" />,
    },
    {
      title: "Data Studio",
      description: "Visualize and analyze MTSS data",
      icon: <PieChart className="w-6 h-6" />,
    },
    {
      title: "Google Classroom",
      description: "Manage interventions and resources",
      icon: <Presentation className="w-6 h-6" />,
    },
    {
      title: "Google Sites",
      description: "Access MTSS information portal",
      icon: <Globe className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Navigation />
        
        <main className="flex-1 p-8">
          <WelcomeHeader />
          <QuickActions />

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Google Services Integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    onClick={() => {
                      // Handle service click
                      console.log(`Clicked ${service.title}`);
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Index;
