
import { useState } from "react";
import {
  HardDrive,
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
      icon: <HardDrive className="w-6 h-6" />,
      link: "https://drive.google.com/drive/folders/1Njb0vtTrvAmNn-lZTHpl_t85pXS3X5PZ?usp=sharing",
    },
    {
      title: "Google Forms",
      description: "Create and manage intervention forms",
      icon: <FileText className="w-6 h-6" />,
      link: "https://docs.google.com/forms/d/1G7wEy1YRRtJVl8jnv5iBJSiboaoehUSFYG6HS68pX2s/edit",
    },
    {
      title: "Google Sheets",
      description: "Track student progress and data",
      icon: <FileSpreadsheet className="w-6 h-6" />,
      link: "https://docs.google.com/spreadsheets/d/1uQ494dcBx7aCa2TRQtduqbMVn3U6WWRO7r0DsHWC7_4/edit?usp=sharing",
    },
    {
      title: "Google Meet",
      description: "Schedule and join MTSS meetings",
      icon: <Video className="w-6 h-6" />,
      link: "https://meet.google.com/drg-ssoo-psb",
    },
    {
      title: "Data Studio",
      description: "Visualize and analyze MTSS data",
      icon: <PieChart className="w-6 h-6" />,
      link: "https://script.google.com/macros/s/AKfycbwZ_8w_lAgBL2xZ1W3bYdMzxMWxtTuAeKp9tOOTlyar6sW1FZqzvlRg33W4AZB7Ymlmmg/exec",
    },
    {
      title: "Google Classroom",
      description: "Manage interventions and resources",
      icon: <Presentation className="w-6 h-6" />,
      link: "https://classroom.google.com/u/2/c/NzUzOTI0OTk1MTUx",
    },
    {
      title: "Google Sites",
      description: "Access MTSS information portal",
      icon: <Globe className="w-6 h-6" />,
      link: "https://sites.google.com/d/1N5HPn6h7XdaDhR1JeoOzdiZMFrKxpCFu/p/1pDnf26Sw61CGrs2eAe6yLBHPeHNIXEcx/edit",
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
                      window.open(service.link, '_blank', 'noopener,noreferrer');
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
