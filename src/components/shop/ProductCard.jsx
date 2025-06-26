import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiHeart, FiEye } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              NEW
            </span>
          )}
          {product.onSale && (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              SAVE {discountPercentage}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
            <FiHeart className="w-4 h-4 text-gray-600" />
          </button>
          <Link
            to={`/product/${product.id}`}
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <FiEye className="w-4 h-4 text-gray-600" />
          </Link>
        </div>

        {/* Stock indicator */}
        {product.stock <= 5 && product.stock > 0 && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              Only {product.stock} left!
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Features */}
        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {product.features.slice(0, 2).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
            {product.features.length > 2 && (
              <span className="text-xs text-gray-500">
                +{product.features.length - 2} more
              </span>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FiStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              £{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                £{product.originalPrice}
              </span>
            )}
          </div>
          
          <button 
            className={`p-2 rounded-full transition-colors ${
              product.stock > 0
                ? 'bg-primary hover:bg-primary-dark text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={product.stock === 0}
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {product.stock === 0 && (
          <div className="mt-2">
            <span className="text-red-500 text-sm font-medium">Out of Stock</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}