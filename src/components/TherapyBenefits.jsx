import { motion } from 'framer-motion';
import { FiHeart, FiZap, FiShield, FiSun, FiActivity, FiRefreshCw } from 'react-icons/fi';

const benefits = [
  {
    icon: FiHeart,
    title: 'Pain Relief',
    description: 'Reduce inflammation and chronic pain naturally',
    stat: '87% improvement',
    color: 'text-red-500'
  },
  {
    icon: FiSun,
    title: 'Skin Health',
    description: 'Stimulate collagen production and reduce aging signs',
    stat: '92% satisfaction',
    color: 'text-amber-500'
  },
  {
    icon: FiActivity,
    title: 'Muscle Recovery',
    description: 'Accelerate healing and reduce recovery time',
    stat: '65% faster',
    color: 'text-wellness'
  },
  {
    icon: FiZap,
    title: 'Energy Boost',
    description: 'Enhance cellular energy production',
    stat: '78% more energy',
    color: 'text-yellow-500'
  },
  {
    icon: FiShield,
    title: 'Immune Support',
    description: 'Strengthen your body\'s natural defense system',
    stat: '45% stronger',
    color: 'text-blue-500'
  },
  {
    icon: FiRefreshCw,
    title: 'Wound Healing',
    description: 'Accelerate tissue repair and regeneration',
    stat: '3x faster',
    color: 'text-green-500'
  }
];

export default function TherapyBenefits() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Science-Backed Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Red light therapy has been clinically proven to provide numerous health benefits
            through photobiomodulation at the cellular level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full bg-gray-100 ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <div className={`text-sm font-bold ${benefit.color}`}>{benefit.stat}</div>
                </div>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}