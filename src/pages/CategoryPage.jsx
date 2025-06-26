import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiArrowLeft, FiShoppingCart } from 'react-icons/fi';

const categoryData = {
  indoor: {
    name: 'Indoor Plants',
    description: 'Transform your living space with our collection of beautiful indoor plants',
    carousel: [
      'https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
      'https://images.unsplash.com/photo-1516833228443-f516cce8f0af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80'
    ],
    products: [
      {
        id: 1,
        name: 'Monstera Deliciosa',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1614594075929-b0f1c1bcd4c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Swiss Cheese Plant'
      },
      {
        id: 2,
        name: 'Snake Plant',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1593691512429-5bb858f0c30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Mother-in-law\'s Tongue'
      },
      {
        id: 3,
        name: 'Peace Lily',
        price: 34.99,
        image: 'https://images.unsplash.com/photo-1593691512429-5bb858f0c30a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Spathiphyllum'
      },
      {
        id: 4,
        name: 'Fiddle Leaf Fig',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1508022713622-df2d8fb7b4cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Ficus Lyrata'
      },
      {
        id: 5,
        name: 'ZZ Plant',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Zamioculcas'
      },
      {
        id: 6,
        name: 'Pothos',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1507746212228-2d3645cbeb56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Devil\'s Ivy'
      },
      {
        id: 7,
        name: 'Chinese Evergreen',
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Aglaonema'
      },
      {
        id: 8,
        name: 'Rubber Plant',
        price: 44.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Ficus Elastica'
      },
      {
        id: 9,
        name: 'Bird of Paradise',
        price: 69.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Strelitzia Reginae'
      },
      {
        id: 10,
        name: 'Calathea Ornata',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        caption: 'Pinstripe Plant'
      }
    ]
  },
  // Add other categories as needed
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categoryData[categoryId];
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!category) {
    return <div>Category not found</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % category.carousel.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + category.carousel.length) % category.carousel.length);
  };

  return (
    <div>
      {/* Hero Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        {category.carousel.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="h-full max-w-7xl mx-auto px-4 flex items-center">
                  <div className="text-white">
                    <h1 className="text-5xl font-bold mb-4">{category.name}</h1>
                    <p className="text-xl">{category.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FiArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FiArrowRight className="w-6 h-6" />
        </button>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {category.products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.caption}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">
                    ${product.price}
                  </span>
                  <button className="bg-primary hover:bg-primary-light text-white p-2 rounded-full transition duration-300">
                    <FiShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}