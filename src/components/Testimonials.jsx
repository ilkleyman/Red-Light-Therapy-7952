import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    role: 'Physical Therapist',
    content: 'I\'ve been using Red Glow devices in my practice for over a year. The results in pain reduction and healing acceleration are remarkable. My patients love the non-invasive treatment.',
    avatar: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Professional Athlete',
    content: 'Red light therapy has become an essential part of my recovery routine. The RedGlow Pro Panel helps me recover faster between training sessions and competitions.',
    avatar: 'https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    role: 'Chronic Pain Sufferer',
    content: 'After years of chronic back pain, red light therapy has given me my life back. The handheld device is perfect for targeted treatment, and I use it daily.',
    avatar: 'https://images.pexels.com/photos/7755240/pexels-photo-7755240.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-lg shadow-lg border border-red-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div className="flex text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}