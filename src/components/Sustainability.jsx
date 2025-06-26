import { motion } from 'framer-motion';
import { FiGift, FiBox, FiRefreshCw } from 'react-icons/fi';

export default function Sustainability() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Commitment to Sustainability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6"
          >
            <FiGift className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Eco-Friendly Products</h3>
            <p className="text-gray-200">All our products are sourced and produced with environmental consciousness</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6"
          >
            <FiBox className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sustainable Packaging</h3>
            <p className="text-gray-200">We use 100% recyclable materials in our packaging</p>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6"
          >
            <FiRefreshCw className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Circular Economy</h3>
            <p className="text-gray-200">Supporting plant recycling and composting initiatives</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}