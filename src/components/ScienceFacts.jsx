import { motion } from 'framer-motion';
import { FiTrendingUp, FiClock, FiZap, FiAward } from 'react-icons/fi';

const facts = [
  {
    icon: FiTrendingUp,
    stat: '1000+',
    label: 'Clinical Studies',
    description: 'Peer-reviewed research supporting red light therapy benefits'
  },
  {
    icon: FiClock,
    stat: '30+',
    label: 'Years of Research',
    description: 'Decades of scientific investigation into photobiomodulation'
  },
  {
    icon: FiZap,
    stat: '660-850nm',
    label: 'Optimal Wavelengths',
    description: 'Scientifically proven most effective light spectrum'
  },
  {
    icon: FiAward,
    stat: 'FDA',
    label: 'Approved',
    description: 'Cleared for pain relief and wound healing applications'
  }
];

export default function ScienceFacts() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-900 to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Backed by Science
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Red light therapy isn't just a trend—it's a scientifically validated treatment 
            with decades of research supporting its effectiveness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-red-800 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <fact.icon className="w-8 h-8 text-red-200" />
              </div>
              <div className="text-4xl font-bold mb-2">{fact.stat}</div>
              <div className="text-xl font-semibold mb-2 text-red-100">{fact.label}</div>
              <p className="text-red-200 text-sm">{fact.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}