import { motion } from 'framer-motion';
import { FiPackage } from 'react-icons/fi';

export default function StockIndicator({ stock }) {
  const getStockStatus = () => {
    if (stock === 0) return { color: 'red', text: 'Out of Stock' };
    if (stock < 5) return { color: 'orange', text: 'Low Stock' };
    return { color: 'green', text: 'In Stock' };
  };

  const status = getStockStatus();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center space-x-3"
    >
      <FiPackage className={`text-${status.color}-500 w-5 h-5`} />
      <div>
        <span className={`text-${status.color}-500 font-medium`}>
          {status.text}
        </span>
        {stock > 0 && (
          <span className="text-gray-500 text-sm ml-2">
            ({stock} units available)
          </span>
        )}
      </div>
    </motion.div>
  );
}