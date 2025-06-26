import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiShield, FiCreditCard, FiLock } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';

const initialCartItems = [
  {
    id: 1,
    name: 'RedGlow Pro Panel',
    price: 299.99,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878438225-PRO-PLUS-S-Shape-PDP-2000x2000px.jpg',
    quantity: 1,
    maxQuantity: 5,
    estimatedDelivery: '3-5 business days'
  },
  {
    id: 2,
    name: 'RedGlow Handheld Max',
    price: 149.99,
    image: 'https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878442341-5005LD_navy_5__89730.jpg',
    quantity: 2,
    maxQuantity: 8,
    estimatedDelivery: '3-5 business days'
  }
];

export default function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [discountCode, setDiscountCode] = useState('');
  const [discountError, setDiscountError] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const updateQuantity = (itemId, delta) => {
    setCartItems(items =>
      items.map(item =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, Math.min(item.maxQuantity, item.quantity + delta)) }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(items => items.filter(item => item.id !== itemId));
  };

  const handleApplyDiscount = () => {
    if (discountCode.toLowerCase() === 'save10') {
      setDiscountApplied(true);
      setDiscountError('');
    } else {
      setDiscountError('Invalid discount code');
      setDiscountApplied(false);
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const breadcrumbItems = [
    { name: 'Shop', path: '/shop' },
    { name: 'Cart', path: '/cart' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some red light therapy devices to start your wellness journey!</p>
          <Link
            to="/shop"
            className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg inline-flex items-center"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map(item => (
              <motion.div
                key={item.id}
                layout
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-primary font-bold">£{item.price}</p>
                  <p className="text-sm text-gray-600">
                    Estimated Delivery: {item.estimatedDelivery}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 border rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-2 hover:bg-gray-100 rounded-l-lg"
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus className={item.quantity <= 1 ? 'text-gray-400' : 'text-gray-600'} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-2 hover:bg-gray-100 rounded-r-lg"
                      disabled={item.quantity >= item.maxQuantity}
                    >
                      <FiPlus className={item.quantity >= item.maxQuantity ? 'text-gray-400' : 'text-gray-600'} />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Device Protection */}
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="flex items-start space-x-4">
                <FiShield className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-green-800">Device Protection</h3>
                  <p className="text-sm text-green-700">
                    All devices are carefully packaged and insured during shipping. 
                    If your device arrives damaged, we'll replace it for free.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>

              {/* Discount Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Discount Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-grow p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter code"
                  />
                  <button
                    onClick={handleApplyDiscount}
                    className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-light transition duration-200"
                  >
                    Apply
                  </button>
                </div>
                {discountError && (
                  <p className="text-red-500 text-sm mt-1">{discountError}</p>
                )}
                {discountApplied && (
                  <p className="text-green-500 text-sm mt-1">Discount applied!</p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}
                  </span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-green-600 text-sm">
                    <span>Discount (10%)</span>
                    <span>-£{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-bold text-lg pt-4 border-t">
                  <span>Total</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition duration-200"
              >
                <FiLock className="w-5 h-5" />
                <span>Proceed to Checkout</span>
              </Link>

              {/* Payment Methods */}
              <div className="mt-6">
                <p className="text-sm text-gray-600 text-center mb-2">
                  Secure Payment Methods
                </p>
                <div className="flex justify-center items-center space-x-4">
                  <FiCreditCard className="w-6 h-6 text-gray-400" />
                  <span className="text-gray-400">•••</span>
                  <span className="text-gray-400">PayPal</span>
                  <span className="text-gray-400">•••</span>
                  <span className="text-gray-400">UPI</span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-center space-x-4">
                  <div className="text-center">
                    <FiShield className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">Secure Payment</span>
                  </div>
                  <div className="text-center">
                    <FiLock className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                    <span className="text-xs text-gray-600">SSL Encrypted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}