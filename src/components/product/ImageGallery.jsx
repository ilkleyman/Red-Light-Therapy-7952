import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX } from 'react-icons/fi';

export default function ImageGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [showZoom, setShowZoom] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100">
        <div
          className="relative w-full h-[500px] cursor-zoom-in"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          onClick={() => setShowZoom(true)}
        >
          <img
            src={selectedImage}
            alt="Product"
            className="w-full h-full object-contain"
          />
          {isHovering && (
            <div
              className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-0"
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                transform: 'scale(2)',
                opacity: 0.9
              }}
            />
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowZoom(true);
            }}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <FiMaximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative rounded-lg overflow-hidden ${
              selectedImage === image ? 'ring-2 ring-primary' : ''
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-24 object-cover"
            />
          </motion.button>
        ))}
      </div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {showZoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setShowZoom(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                onClick={() => setShowZoom(false)}
                className="absolute top-4 right-4 p-2 bg-white rounded-full"
              >
                <FiX className="w-6 h-6" />
              </button>
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="relative w-[90vw] h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Zoomed Product"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}