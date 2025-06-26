import { motion } from 'framer-motion';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { shopProducts } from '../../data/shopProducts';

export default function ProductGrid({ sortBy, selectedCategories, searchQuery }) {
  let filteredProducts = [...shopProducts];

  // Apply category filter
  if (selectedCategories.length > 0) {
    filteredProducts = filteredProducts.filter(product =>
      selectedCategories.includes(product.category)
    );
  }

  // Apply search filter
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Apply sorting
  switch (sortBy) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    default:
      // 'featured' or any other case
      break;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map(product => (
        <motion.div
          key={product.id}
          whileHover={{ y: -5 }}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <Link to={`/product/${product.id}`} className="relative block">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            {product.onSale && (
              <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                SALE
              </span>
            )}
          </Link>
          <div className="p-4">
            <Link to={`/product/${product.id}`}>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            </Link>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xl font-bold text-primary">
                  £{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    £{product.originalPrice}
                  </span>
                )}
              </div>
              <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-full flex items-center space-x-2 transition duration-300">
                <FiShoppingCart />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}