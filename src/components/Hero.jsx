import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative h-[700px] bg-gradient-to-br from-gray-900 via-red-900 to-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40" 
        style={{
          backgroundImage: "url('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750878434945-661d99ad09c4e8893871caea_04.2024_BlogImage_WhatisRedLight.jpg')"
        }}
      >
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-red-900/60">
        <div className="h-full max-w-7xl mx-auto px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Harness the Power of{' '}
              <span className="text-red-400 block">Red Light Therapy</span>
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Experience the science-backed benefits of red light therapy for pain relief, 
              skin health, muscle recovery, and overall wellness.
            </p>
            <div className="flex space-x-4">
              <Link
                to="/shop"
                className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg"
              >
                Shop Devices
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating red light effect */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-red-400 rounded-full opacity-30 blur-2xl animate-pulse delay-1000"></div>
    </div>
  );
}