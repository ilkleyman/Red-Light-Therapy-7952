import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b border-red-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full mr-2 flex items-center justify-center">
                <div className="w-4 h-4 bg-red-200 rounded-full animate-pulse"></div>
              </div>
              Red Glow Ltd
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition duration-200">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-primary transition duration-200">Shop</Link>
            <Link to="/therapy-guide" className="text-gray-700 hover:text-primary transition duration-200">Therapy Guide</Link>
            <Link to="/benefits" className="text-gray-700 hover:text-primary transition duration-200">Benefits</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary transition duration-200">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition duration-200">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-primary transition duration-200">
              <FiShoppingCart className="h-6 w-6" />
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
              <Link to="/shop" className="block px-3 py-2 text-gray-700 hover:text-primary">Shop</Link>
              <Link to="/therapy-guide" className="block px-3 py-2 text-gray-700 hover:text-primary">Therapy Guide</Link>
              <Link to="/benefits" className="block px-3 py-2 text-gray-700 hover:text-primary">Benefits</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-primary">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}