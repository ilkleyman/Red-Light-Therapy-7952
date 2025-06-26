import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';

const relatedProducts = [
  {
    id: 2,
    name: 'RedGlow Handheld Pro',
    price: 199.99,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878442341-5005LD_navy_5__89730.jpg'
  },
  {
    id: 3,
    name: 'RedGlow LED Face Mask',
    price: 299.99,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878426850-360_F_1043256953_r55mxvtTZuyIUFSFzH3oE2TIVquTVbyB.jpg'
  },
  {
    id: 4,
    name: 'RedGlow Mini Device',
    price: 89.99,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878430657-istockphoto-1549367921-612x612.jpg'
  }
];

export default function RelatedProducts({ currentProductId }) {
  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold mb-8">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-primary">
                  £{product.price}
                </span>
                <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-full">
                  <FiShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}