import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';

const collections = [
  {
    id: 'elegant-planters',
    name: 'Elegant Planters',
    description: 'Discover our curated selection of premium planters',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 24
  },
  {
    id: 'home-decor',
    name: 'Home Décor',
    description: 'Nature-inspired pieces to elevate your space',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 18
  },
  {
    id: 'plant-gifts',
    name: 'Plant Gifts',
    description: 'Perfect green presents for your loved ones',
    image: 'https://images.unsplash.com/photo-1510505751526-76254482fd38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 15
  },
  {
    id: 'accessories',
    name: 'Plant Accessories',
    description: 'Essential tools and decorative items for plant care',
    image: 'https://images.unsplash.com/photo-1516048015710-7a3b4c86be43?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    itemCount: 32
  }
];

export default function Collections() {
  const breadcrumbItems = [
    { name: 'Collections', path: '/collections' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Collections</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our carefully curated collections of plants, planters, and accessories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((collection) => (
          <Link to={`/collection/${collection.id}`} key={collection.id}>
            <motion.div
              whileHover={{ y: -10 }}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <div className="relative h-80">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
                <p className="text-gray-200 mb-4">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm">{collection.itemCount} items</span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2"
                  >
                    <span>View Collection</span>
                    <FiArrowRight />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}