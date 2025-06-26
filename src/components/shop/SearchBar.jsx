import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const suggestions = [
  'LED Panel',
  'Handheld Device',
  'Face Mask',
  'Red Light',
  'Pain Relief',
  'Skin Treatment'
];

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    if (query) {
      const filtered = suggestions.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [query]);

  const handleSearch = (value) => {
    setQuery(value);
    onSearch(value);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <div className="relative">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search red light therapy devices..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <AnimatePresence>
        {showSuggestions && filteredSuggestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            {filteredSuggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSearch(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}