import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'panels',
    name: 'LED Panels',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878438225-PRO-PLUS-S-Shape-PDP-2000x2000px.jpg',
    description: 'Full-body treatment panels for comprehensive therapy'
  },
  {
    id: 'handheld',
    name: 'Handheld Devices',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878442341-5005LD_navy_5__89730.jpg',
    description: 'Portable devices for targeted treatment areas'
  },
  {
    id: 'accessories',
    name: 'Face Masks',
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878426850-360_F_1043256953_r55mxvtTZuyIUFSFzH3oE2TIVquTVbyB.jpg',
    description: 'Specialized masks for facial rejuvenation'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center text-center p-4">
                  <h3 className="text-white text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white text-sm opacity-90">{category.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}