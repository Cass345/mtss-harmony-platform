
import { motion } from "framer-motion";

const WelcomeHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
        MTSS Platform
      </span>
      <h1 className="text-4xl font-bold text-gray-900 mt-4">
        Welcome to your Dashboard
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        Access and manage all your MTSS resources in one place
      </p>
    </motion.div>
  );
};

export default WelcomeHeader;
