import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full mr-2 flex items-center justify-center">
                <div className="w-4 h-4 bg-red-200 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-xl font-bold">Red Glow Ltd</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of professional red light therapy devices for health and wellness.
            </p>
            <div className="flex space-x-4">
              <FiInstagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition duration-200" />
              <FiFacebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition duration-200" />
              <FiTwitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition duration-200" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">LED Panels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Handheld Devices</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Face Masks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Professional Series</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Therapy Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Warranty</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FiMail className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">support@redglowltd.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiPhone className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
            </div>
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-2">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-primary hover:bg-primary-light px-4 py-2 rounded-r-lg transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Red Glow Ltd. All rights reserved. | FDA Disclaimer: This device is not intended to diagnose, treat, cure, or prevent any disease.</p>
        </div>
      </div>
    </footer>
  );
}