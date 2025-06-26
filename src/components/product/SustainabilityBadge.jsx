import { motion } from 'framer-motion';
import { FiDroplet } from 'react-icons/fi';

export default function SustainabilityBadge({ features }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-green-50 p-4 rounded-lg"
    >
      <div className="flex items-center space-x-2 mb-3">
        <FiDroplet className="text-green-600 w-5 h-5" />
        <h3 className="text-lg font-semibold text-green-800">
          Sustainability Features
        </h3>
      </div>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center space-x-2 text-green-700"
          >
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
            <span className="text-sm">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}