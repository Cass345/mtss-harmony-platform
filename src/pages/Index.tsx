import { useState } from "react";
import { HardDrive, FileSpreadsheet, FileText, Video, PieChart, Presentation, Globe, Search, Bell } from "lucide-react";
import Navigation from "../components/Layout/Navigation";
import ServiceCard from "../components/Dashboard/ServiceCard";
import WelcomeHeader from "../components/Dashboard/WelcomeHeader";
import QuickActions from "../components/Dashboard/QuickActions";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const services = [{
    title: "Google Drive",
    description: "Access and manage all MTSS documents",
    icon: <HardDrive className="w-6 h-6" />,
    link: "https://drive.google.com/drive/folders/1Njb0vtTrvAmNn-lZTHpl_t85pXS3X5PZ?usp=sharing"
  }, {
    title: "Google Forms",
    description: "Create and manage intervention forms",
    icon: <FileText className="w-6 h-6" />,
    link: "https://docs.google.com/forms/d/1G7wEy1YRRtJVl8jnv5iBJSiboaoehUSFYG6HS68pX2s/edit"
  }, {
    title: "Google Sheets",
    description: "Track student progress and data",
    icon: <FileSpreadsheet className="w-6 h-6" />,
    link: "https://docs.google.com/spreadsheets/d/1uQ494dcBx7aCa2TRQtduqbMVn3U6WWRO7r0DsHWC7_4/edit?usp=sharing"
  }, {
    title: "Google Meet",
    description: "Schedule and join MTSS meetings",
    icon: <Video className="w-6 h-6" />,
    link: "https://meet.google.com/drg-ssoo-psb"
  }, {
    title: "Data Studio",
    description: "Visualize and analyze MTSS data",
    icon: <PieChart className="w-6 h-6" />,
    link: "https://script.google.com/macros/s/AKfycbwZ_8w_lAgBL2xZ1W3bYdMzxMWxtTuAeKp9tOOTlyar6sW1FZqzvlRg33W4AZB7Ymlmmg/exec"
  }, {
    title: "Google Classroom",
    description: "Manage interventions and resources",
    icon: <Presentation className="w-6 h-6" />,
    link: "https://classroom.google.com/u/2/c/NzUzOTI0OTk1MTUx"
  }, {
    title: "Google Sites",
    description: "Access MTSS information portal",
    icon: <Globe className="w-6 h-6" />,
    link: "https://sites.google.com/d/1N5HPn6h7XdaDhR1JeoOzdiZMFrKxpCFu/p/1pDnf26Sw61CGrs2eAe6yLBHPeHNIXEcx/edit"
  }];
  const filteredServices = services.filter(service => service.title.toLowerCase().includes(searchQuery.toLowerCase()) || service.description.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Navigation />
        
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <WelcomeHeader />
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input type="search" placeholder="Search services..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 w-64" />
              </div>
              
            </div>
          </div>

          <QuickActions />

          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">
                Google Services Integration
              </h2>
              
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredServices.map((service, index) => <motion.div key={service.title} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: index * 0.1
            }} layout>
                  <ServiceCard title={service.title} description={service.description} icon={service.icon} onClick={() => {
                window.open(service.link, '_blank', 'noopener,noreferrer');
              }} />
                </motion.div>)}
            </motion.div>

            {filteredServices.length === 0 && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="text-center py-8 text-gray-500">
                No services found matching your search.
              </motion.div>}
          </section>
        </main>
      </div>
    </div>;
};
export default Index;