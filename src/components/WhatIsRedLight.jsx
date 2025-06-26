import { motion } from 'framer-motion';
import { FiInfo, FiTarget, FiTrendingUp } from 'react-icons/fi';

export default function WhatIsRedLight() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Red Light Therapy?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Red light therapy, also known as photobiomodulation (PBM) or low-level laser therapy (LLLT), 
                is a non-invasive treatment that uses specific wavelengths of red and near-infrared light to 
                stimulate cellular processes and promote healing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FiTarget className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Targeted Wavelengths</h3>
                    <p className="text-gray-600">Uses 660nm (red) and 850nm (near-infrared) light for optimal penetration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FiTrendingUp className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cellular Energy</h3>
                    <p className="text-gray-600">Stimulates mitochondria to produce more ATP, enhancing cellular function</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <FiInfo className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">FDA Approved</h3>
                    <p className="text-gray-600">Cleared by the FDA for pain relief and wound healing applications</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878434945-661d99ad09c4e8893871caea_04.2024_BlogImage_WhatisRedLight.jpg"
                alt="Red Light Therapy Treatment"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-red-100">
              <div className="text-2xl font-bold text-red-600">1000+</div>
              <div className="text-sm text-gray-600">Clinical Studies</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-red-100">
              <div className="text-2xl font-bold text-red-600">30+ Years</div>
              <div className="text-sm text-gray-600">Research History</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}