
import { motion } from "framer-motion";
import Navigation from "../components/Layout/Navigation";

const Meetings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Navigation />
        <main className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900">MTSS Meetings</h1>
            <p className="mt-2 text-gray-600">Schedule and manage MTSS team meetings</p>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Meetings;
