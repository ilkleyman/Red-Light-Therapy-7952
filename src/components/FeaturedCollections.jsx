import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const collections = [
  {
    id: 'elegant-planters',
    name: 'Elegant Planters',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Stylish containers for your green companions'
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Nature-inspired decorative pieces'
  },
  {
    id: 'plant-gifts',
    name: 'Plant Gifts',
    image: 'https://images.unsplash.com/photo-1510505751526-76254482fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Perfect green gifts for your loved ones'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: 'https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Essential tools for plant care'
  }
];

export default function FeaturedCollections() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <Link to={`/collection/${collection.id}`} key={collection.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{collection.name}</h3>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}