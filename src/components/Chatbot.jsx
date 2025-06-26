import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiZap } from 'react-icons/fi';

const chatbotResponses = {
  // Greetings
  greeting: [
    "Hello! I'm Greta, your Red Light Therapy specialist. How can I help you today?",
    "Hi there! I'm here to help with any questions about red light therapy, our products, or orders. What would you like to know?",
    "Welcome! I'm Greta from Red Glow Ltd. I can assist with therapy guidance, product selection, or order information. How can I help?"
  ],

  // Red Light Therapy Questions
  therapy: {
    whatIs: "Red light therapy, also known as photobiomodulation, uses specific wavelengths of red and near-infrared light (660nm and 850nm) to stimulate cellular processes. It helps with pain relief, skin health, muscle recovery, and wound healing by enhancing cellular energy production.",
    
    howWorks: "Red light therapy works by targeting cytochrome c oxidase in your mitochondria. When cells absorb these specific wavelengths, they produce more ATP (cellular energy), leading to improved healing, reduced inflammation, and enhanced cellular function.",
    
    benefits: "Red light therapy offers numerous benefits including: pain relief (87% improvement), enhanced skin health (92% satisfaction), faster muscle recovery (65% quicker), increased energy levels, improved circulation, and accelerated wound healing. It's FDA-cleared and backed by 5,000+ studies.",
    
    safety: "Red light therapy is extremely safe when used properly. Always protect your eyes, start with shorter sessions (5-10 minutes), maintain proper distance (6-12 inches), and ensure skin is clean. It's non-invasive, drug-free, and has virtually no side effects.",
    
    protocols: "Treatment protocols vary by condition: Pain relief (15-20 min daily), Skin health (10-15 min, 3-4x/week), Muscle recovery (15-20 min post-workout), Wound healing (10-15 min twice daily). Start conservative and gradually increase duration.",
    
    wavelengths: "We use two key wavelengths: 660nm red light penetrates 2-3mm for skin health and wound healing, while 850nm near-infrared penetrates 4-5cm for deep tissue, muscle recovery, and joint pain relief. Many devices combine both for comprehensive treatment."
  },

  // Product Questions
  products: {
    panels: "Our LED panels are perfect for full-body treatments. The RedGlow Pro Panel features 1200 LEDs, combines 660nm and 850nm wavelengths, covers large treatment areas, and is ideal for chronic pain, muscle recovery, and general wellness. Professional-grade quality with 3-year warranty.",
    
    handheld: "Handheld devices like the RedGlow Handheld Max are perfect for targeted treatments. They're portable, rechargeable, great for joint pain, facial treatments, and travel use. Lower cost entry point while maintaining professional effectiveness.",
    
    faceMasks: "Our LED face masks are specialized for facial treatments, anti-aging, and acne management. They provide hands-free operation, even light distribution across facial contours, and are perfect for incorporating into your skincare routine.",
    
    comparison: "Panels: Best for large areas, full-body treatments, chronic pain (£299-£1499). Handheld: Best for targeted therapy, portability, specific joints (£89-£299). Face masks: Best for facial skin health, anti-aging, acne (£179-£599). All feature medical-grade LEDs and FDA clearance.",
    
    recommendations: "For beginners: Start with RedGlow Mini Spot (£79.99). For serious users: RedGlow Pro Panel (£299.99). For athletes: RedGlow Sport Recovery (£199.99). For facial care: RedGlow LED Face Mask (£399.99). All devices include comprehensive guides and support."
  },

  // Order and Delivery
  orders: {
    process: "Ordering is simple: Browse our products, add to cart, proceed to secure checkout, and choose your payment method. We accept credit cards, PayPal, and UPI. Your order confirmation includes tracking information.",
    
    delivery: "We offer free shipping on orders over £50. Standard delivery takes 3-5 business days within the UK. Express delivery (1-2 days) available for urgent orders. All devices are carefully packaged and insured during shipping.",
    
    international: "We ship to 45+ countries worldwide. International delivery takes 7-14 business days depending on location. Customs duties may apply. Contact us for specific country shipping information and costs.",
    
    tracking: "You'll receive a tracking number via email once your order ships. Track your package through our website or directly with the carrier. We'll notify you of any delivery updates or delays.",
    
    returns: "We offer a 30-day satisfaction guarantee. If you're not completely happy, return your device for a full refund. Devices must be in original condition. Return shipping is free for defective items, customer pays for preference returns."
  },

  // Support and Warranty
  support: {
    warranty: "All devices come with a comprehensive 3-year warranty covering manufacturing defects. We also provide lifetime customer support, treatment guidance, and troubleshooting assistance. Professional service you can trust.",
    
    troubleshooting: "If your device isn't working properly: Check power connections, ensure LEDs are clean, verify distance and timing settings, and consult your user manual. Contact our support team for technical assistance - we're here 24/7.",
    
    contact: "Reach us at support@redglowltd.com, call +1 (555) 123-4567, or use our live chat. Our expert team is available 24/7 to help with technical questions, treatment guidance, or order support.",
    
    education: "We provide comprehensive resources: Treatment protocols, therapy guides, video tutorials, scientific research summaries, and ongoing support. Your success with red light therapy is our priority."
  }
};

const quickActions = [
  { text: "What is red light therapy?", key: "therapy.whatIs" },
  { text: "Product recommendations", key: "products.recommendations" },
  { text: "Shipping & delivery", key: "orders.delivery" },
  { text: "Treatment protocols", key: "therapy.protocols" },
  { text: "Safety guidelines", key: "therapy.safety" },
  { text: "Compare devices", key: "products.comparison" }
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial greeting when chatbot opens
      setTimeout(() => {
        addBotMessage(chatbotResponses.greeting[0]);
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (message) => {
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: message, 
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const addUserMessage = (message) => {
    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: message, 
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }]);
  };

  const getResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Greeting patterns
    if (input.match(/^(hi|hello|hey|good morning|good afternoon|good evening)/)) {
      return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
    }

    // Red light therapy questions
    if (input.includes('what is red light') || input.includes('what\'s red light') || input.includes('explain red light')) {
      return chatbotResponses.therapy.whatIs;
    }
    
    if (input.includes('how does') || input.includes('how work') || input.includes('mechanism')) {
      return chatbotResponses.therapy.howWorks;
    }
    
    if (input.includes('benefit') || input.includes('help with') || input.includes('good for')) {
      return chatbotResponses.therapy.benefits;
    }
    
    if (input.includes('safe') || input.includes('side effect') || input.includes('danger')) {
      return chatbotResponses.therapy.safety;
    }
    
    if (input.includes('protocol') || input.includes('how long') || input.includes('how often') || input.includes('treatment time')) {
      return chatbotResponses.therapy.protocols;
    }
    
    if (input.includes('wavelength') || input.includes('660') || input.includes('850') || input.includes('nm')) {
      return chatbotResponses.therapy.wavelengths;
    }

    // Product questions
    if (input.includes('panel') || input.includes('large device') || input.includes('full body')) {
      return chatbotResponses.products.panels;
    }
    
    if (input.includes('handheld') || input.includes('portable') || input.includes('small device')) {
      return chatbotResponses.products.handheld;
    }
    
    if (input.includes('face mask') || input.includes('facial') || input.includes('skin care')) {
      return chatbotResponses.products.faceMasks;
    }
    
    if (input.includes('compare') || input.includes('difference') || input.includes('which device') || input.includes('recommend')) {
      return chatbotResponses.products.comparison;
    }
    
    if (input.includes('beginner') || input.includes('start') || input.includes('first time') || input.includes('recommendation')) {
      return chatbotResponses.products.recommendations;
    }

    // Order and delivery
    if (input.includes('order') || input.includes('buy') || input.includes('purchase') || input.includes('checkout')) {
      return chatbotResponses.orders.process;
    }
    
    if (input.includes('delivery') || input.includes('shipping') || input.includes('ship') || input.includes('arrive')) {
      return chatbotResponses.orders.delivery;
    }
    
    if (input.includes('international') || input.includes('worldwide') || input.includes('country')) {
      return chatbotResponses.orders.international;
    }
    
    if (input.includes('track') || input.includes('status') || input.includes('where is my order')) {
      return chatbotResponses.orders.tracking;
    }
    
    if (input.includes('return') || input.includes('refund') || input.includes('money back')) {
      return chatbotResponses.orders.returns;
    }

    // Support questions
    if (input.includes('warranty') || input.includes('guarantee') || input.includes('broken')) {
      return chatbotResponses.support.warranty;
    }
    
    if (input.includes('not working') || input.includes('problem') || input.includes('issue') || input.includes('troubleshoot')) {
      return chatbotResponses.support.troubleshooting;
    }
    
    if (input.includes('contact') || input.includes('support') || input.includes('help') || input.includes('phone') || input.includes('email')) {
      return chatbotResponses.support.contact;
    }

    // Pain/condition specific
    if (input.includes('pain') || input.includes('arthritis') || input.includes('joint') || input.includes('muscle')) {
      return "For pain relief, I recommend our RedGlow Pro Panel with combined 660nm and 850nm wavelengths. Use daily for 15-20 minutes at 6-12 inches distance. Most users see improvement within 1-2 weeks. The deep-penetrating 850nm light is particularly effective for muscle and joint pain.";
    }
    
    if (input.includes('skin') || input.includes('acne') || input.includes('wrinkle') || input.includes('aging')) {
      return "For skin health, our RedGlow LED Face Mask or handheld devices work excellently. Use 660nm wavelength for 10-15 minutes, 3-4 times per week. This stimulates collagen production, reduces acne, and improves overall skin appearance. Results typically visible within 2-4 weeks.";
    }
    
    if (input.includes('athlete') || input.includes('recovery') || input.includes('exercise') || input.includes('workout')) {
      return "Athletes love our RedGlow Sport Recovery device! Use 850nm wavelength for 15-20 minutes post-workout to reduce muscle soreness by 65% and speed recovery. Many professional teams use our devices. Results visible within 24-48 hours.";
    }

    // Price questions
    if (input.includes('price') || input.includes('cost') || input.includes('expensive') || input.includes('cheap')) {
      return "Our devices range from £79.99 (RedGlow Mini Spot) to £1,499.99 (RedGlow Mega Panel). Most popular is the RedGlow Pro Panel at £299.99. All devices include free shipping over £50, 3-year warranty, and 30-day money-back guarantee. Quality investment in your health!";
    }

    // Default response
    return "I'd be happy to help with that! I specialize in red light therapy questions, product recommendations, orders, and delivery information. Could you be more specific about what you'd like to know? You can also try one of the quick actions below.";
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      addUserMessage(inputValue);
      setInputValue('');
      setIsTyping(true);

      // Simulate typing delay
      setTimeout(() => {
        setIsTyping(false);
        const response = getResponse(inputValue);
        addBotMessage(response);
      }, 1000 + Math.random() * 1000);
    }
  };

  const handleQuickAction = (key) => {
    const keys = key.split('.');
    let response = chatbotResponses;
    keys.forEach(k => response = response[k]);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      addBotMessage(response);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg transition-all duration-300 ${
          isOpen 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full h-full"
            >
              <FiX className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center w-full h-full"
            >
              <FiMessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                  <FiZap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Greta</h3>
                  <p className="text-red-100 text-sm">Red Light Therapy Specialist</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiZap className="w-8 h-8 text-red-600" />
                  </div>
                  <p className="text-gray-600">Hi! I'm Greta, your Red Light Therapy specialist. How can I help you today?</p>
                </div>
              )}

              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] rounded-2xl p-3 ${
                    message.sender === 'user'
                      ? 'bg-red-500 text-white rounded-br-md'
                      : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-200'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <FiZap className="w-3 h-3 text-red-600" />
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-red-200' : 'text-gray-400'
                        }`}>
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-800 rounded-2xl rounded-bl-md p-3 shadow-sm border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                        <FiZap className="w-3 h-3 text-red-600" />
                      </div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length <= 1 && (
              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-sm text-gray-600 mb-3">Quick questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.slice(0, 4).map((action, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickAction(action.key)}
                      className="text-xs p-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors text-left"
                    >
                      {action.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about red light therapy..."
                  className="flex-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <motion.button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}