import { motion } from 'framer-motion';
import { FiStar, FiShoppingCart, FiHeart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const bestsellers = [
  {
    id: 'rlt-panel-pro',
    name: 'RedGlow Pro Panel',
    price: 299.99,
    rating: 4.9,
    reviews: 287,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878438225-PRO-PLUS-S-Shape-PDP-2000x2000px.jpg',
    description: 'Professional-grade LED panel with 660nm and 850nm wavelengths',
    stock: 15,
    features: ['660nm + 850nm LEDs', 'Timer Function', 'FDA Cleared']
  },
  {
    id: 'rlt-handheld-max',
    name: 'RedGlow Handheld Max',
    price: 149.99,
    rating: 4.8,
    reviews: 412,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878442341-5005LD_navy_5__89730.jpg',
    description: 'Portable device perfect for targeted pain relief and skin treatment',
    stock: 23,
    features: ['Portable Design', 'Multiple Intensities', 'Rechargeable']
  },
  {
    id: 'rlt-mini-spot',
    name: 'RedGlow Mini Spot',
    price: 79.99,
    rating: 4.7,
    reviews: 156,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878426850-360_F_1043256953_r55mxvtTZuyIUFSFzH3oE2TIVquTVbyB.jpg',
    description: 'Compact device for precise treatment of small areas',
    stock: 31,
    features: ['Compact Size', 'Easy to Use', 'Travel Friendly']
  }
];

export default function Bestsellers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Best-Selling Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestsellers.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-50 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                  <div className="mb-4">
                    {product.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <div className="flex space-x-2">
                      <button className="p-2 border border-red-200 rounded-full hover:bg-red-50 transition duration-200">
                        <FiHeart className="w-5 h-5 text-red-500" />
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
    </section>
  );
}