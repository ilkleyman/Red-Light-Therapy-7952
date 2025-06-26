import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCreditCard, FiLock, FiCheckCircle, FiClock } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';

const paymentMethods = [
  { id: 'card', name: 'Credit/Debit Card', icon: FiCreditCard },
  { id: 'paypal', name: 'PayPal', icon: FiCreditCard },
  { id: 'upi', name: 'UPI', icon: FiCreditCard }
];

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const breadcrumbItems = [
    { name: 'Cart', path: '/cart' },
    { name: 'Checkout', path: '/checkout' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Steps */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {/* Progress Steps */}
            <div className="flex justify-between mb-8">
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`flex items-center ${
                    num < step ? 'text-green-500' : num === step ? 'text-primary' : 'text-gray-300'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center
                    ${num < step ? 'border-green-500 bg-green-50' : 
                      num === step ? 'border-primary bg-primary-light text-white' : 
                      'border-gray-300'}`}
                  >
                    {num < step ? <FiCheckCircle /> : num}
                  </div>
                  <div className="ml-2">
                    {num === 1 ? 'Shipping' : num === 2 ? 'Payment' : 'Confirmation'}
                  </div>
                </div>
              ))}
            </div>

            {step === 1 && (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg transition duration-200"
                >
                  Continue to Payment
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors
                        ${paymentMethod === method.id ? 'border-primary bg-primary-light bg-opacity-10' : 'hover:border-gray-300'}`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="mr-3"
                      />
                      <method.icon className="w-6 h-6 mr-3" />
                      <span>{method.name}</span>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          CVC
                        </label>
                        <input
                          type="text"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleInputChange}
                          placeholder="123"
                          className="w-full p-2 border rounded focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                <button
                  onClick={handleSubmit}
                  className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg transition duration-200 flex items-center justify-center space-x-2"
                >
                  <FiLock className="w-5 h-5" />
                  <span>Complete Order</span>
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">
                  Thank you for your order!
                </h2>
                <p className="text-gray-600 mb-8">
                  Your order has been placed and will be processed soon.
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <FiClock className="w-5 h-5" />
                  <span>Estimated delivery: 3-5 business days</span>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            {/* Order details here */}
          </div>
        </div>
      </div>
    </div>
  );
}