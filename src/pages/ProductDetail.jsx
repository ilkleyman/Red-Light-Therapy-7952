import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiShoppingCart,
  FiHeart,
  FiInfo,
  FiCheck,
  FiShield
} from 'react-icons/fi';
import { getProduct } from '../services/productService';
import ImageGallery from '../components/product/ImageGallery';
import RelatedProducts from '../components/product/RelatedProducts';
import ReviewSection from '../components/product/ReviewSection';
import SustainabilityBadge from '../components/product/SustainabilityBadge';
import StockIndicator from '../components/product/StockIndicator';
import Breadcrumbs from '../components/Breadcrumbs';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState('description');

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const productData = await getProduct(id);
      if (productData) {
        setProduct(productData);
      } else {
        navigate('/shop');
      }
      setLoading(false);
    };
    fetchProduct();
  }, [id, navigate]);

  if (loading || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-200 rounded-lg mb-8"></div>
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Shop', path: '/shop' },
    { name: product.name, path: `/product/${id}` }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Image Gallery */}
        <ImageGallery images={product.images} />

        {/* Right Column - Product Details */}
        <div className="space-y-6">
          {/* Product Title and Price */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-4"
            >
              {product.name}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl font-bold text-primary mb-4"
            >
              ${product.price}
            </motion.div>
          </div>

          {/* Stock Status */}
          <StockIndicator stock={product.stock} />

          {/* Product Description */}
          <div className="prose prose-sm">
            <p className="text-gray-600">{product.description}</p>
          </div>

          {/* Sustainability Badge */}
          <SustainabilityBadge features={product.sustainability} />

          {/* Product Details Tabs */}
          <div className="border-t border-b py-4">
            <div className="flex space-x-6">
              {['details', 'care', 'shipping'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-2 ${
                    selectedTab === tab
                      ? 'border-b-2 border-primary text-primary'
                      : 'text-gray-600'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            <div className="mt-4">
              {selectedTab === 'details' && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <FiInfo className="text-gray-400" />
                    <span className="text-sm">
                      Material: {product.material}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiInfo className="text-gray-400" />
                    <span className="text-sm">Size: {product.size}</span>
                  </div>
                </div>
              )}
              {selectedTab === 'care' && (
                <ul className="space-y-2">
                  {product.care.map((instruction, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FiCheck className="text-primary" />
                      <span className="text-sm">{instruction}</span>
                    </li>
                  ))}
                </ul>
              )}
              {selectedTab === 'shipping' && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <FiShield className="text-primary" />
                    <span className="text-sm">
                      Free shipping on orders over $50
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FiShield className="text-primary" />
                    <span className="text-sm">
                      30-day money-back guarantee
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Add to Cart Section */}
          {product.stock > 0 && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-gray-600">Quantity:</label>
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border rounded-lg px-3 py-2"
                >
                  {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2"
                >
                  <FiShoppingCart />
                  <span>Add to Cart</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg"
                >
                  Buy Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <FiHeart className="w-6 h-6 text-gray-600" />
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewSection productId={product.id} />

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />
    </div>
  );
}