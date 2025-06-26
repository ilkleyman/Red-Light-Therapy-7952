import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart, FiFilter, FiX } from 'react-icons/fi';
import { useState } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import { collectionsData } from '../data/collectionsData';

export default function CollectionPage() {
  const { collectionId } = useParams();
  const collection = collectionsData[collectionId];
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');

  if (!collection) {
    return <div>Collection not found</div>;
  }

  const breadcrumbItems = [
    { name: 'Collections', path: '/collections' },
    { name: collection.name, path: `/collection/${collectionId}` }
  ];

  const filteredProducts = collection.products
    .filter(product => 
      selectedFilters.length === 0 || selectedFilters.includes(product.type)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${collection.heroImage})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="h-full max-w-7xl mx-auto px-4 flex items-center">
              <div className="text-white">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl font-bold mb-4"
                >
                  {collection.name}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl"
                >
                  {collection.description}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={breadcrumbItems} />

        {/* Filters and Sort */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 border rounded-lg"
          >
            <FiFilter />
            <span>Filter</span>
          </button>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gray-50 p-4 rounded-lg mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Filter By Type</h3>
              <button onClick={() => setShowFilters(false)}>
                <FiX />
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {collection.filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => {
                    if (selectedFilters.includes(filter)) {
                      setSelectedFilters(selectedFilters.filter(f => f !== filter));
                    } else {
                      setSelectedFilters([...selectedFilters, filter]);
                    }
                  }}
                  className={`px-3 py-1 rounded-full ${
                    selectedFilters.includes(filter)
                      ? 'bg-primary text-white'
                      : 'bg-white border'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.sustainable && (
                    <span className="absolute top-4 right-4 bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      Eco-Friendly
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400'
                              : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                      <span className="ml-2 text-sm text-gray-600">
                        ({product.reviews})
                      </span>
                    </div>
                    <span className={`text-sm ${
                      product.stock > 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 border rounded-full hover:bg-gray-50">
                        <FiHeart className="w-5 h-5" />
                      </button>
                      <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300">
                        <FiShoppingCart />
                        <span>Add to Cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}