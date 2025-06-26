import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';

const brands = [
  {
    id: 1,
    name: 'Garden & Home',
    text: '"Best Plant Shop 2024"',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Plant Life Magazine',
    text: '"Top Rated Indoor Plants"',
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Botanical Review',
    text: '"Excellence in Sustainability"',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <FiAward className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
                    <p className="text-sm italic">{brand.text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}