import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiFilter, FiX, FiChevronDown } from 'react-icons/fi';
import { categories, priceRanges } from '../../data/shopProducts';

export default function ShopFilters({ 
  selectedCategory, 
  onCategoryChange, 
  selectedPriceRanges, 
  onPriceRangeChange,
  showOnSale,
  onSaleChange,
  showInStock,
  onStockChange,
  minRating,
  onRatingChange
}) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    features: true,
    rating: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const FilterSection = ({ title, isExpanded, onToggle, children }) => (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
      >
        {title}
        <FiChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <FilterSection
        title="Category"
        isExpanded={expandedSections.category}
        onToggle={() => toggleSection('category')}
      >
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={selectedCategory === category.id}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{category.name}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Price Range Filter */}
      <FilterSection
        title="Price Range"
        isExpanded={expandedSections.price}
        onToggle={() => toggleSection('price')}
      >
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    onPriceRangeChange([...selectedPriceRanges, range.id]);
                  } else {
                    onPriceRangeChange(selectedPriceRanges.filter(id => id !== range.id));
                  }
                }}
                className="text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{range.label}</span>
            </label>
          ))}
        </div>
      </FilterSection>

      {/* Special Offers */}
      <FilterSection
        title="Special Offers"
        isExpanded={expandedSections.features}
        onToggle={() => toggleSection('features')}
      >
        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showOnSale}
              onChange={(e) => onSaleChange(e.target.checked)}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-700">On Sale</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={showInStock}
              onChange={(e) => onStockChange(e.target.checked)}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-700">In Stock Only</span>
          </label>
        </div>
      </FilterSection>

      {/* Rating Filter */}
      <FilterSection
        title="Minimum Rating"
        isExpanded={expandedSections.rating}
        onToggle={() => toggleSection('rating')}
      >
        <div className="space-y-2">
          {[4.5, 4.0, 3.5, 3.0].map((rating) => (
            <label key={rating} className="flex items-center space-x-2">
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={minRating === rating}
                onChange={(e) => onRatingChange(parseFloat(e.target.value))}
                className="text-primary focus:ring-primary"
              />
              <span className="text-sm text-gray-700">{rating}+ Stars</span>
            </label>
          ))}
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="rating"
              value={0}
              checked={minRating === 0}
              onChange={() => onRatingChange(0)}
              className="text-primary focus:ring-primary"
            />
            <span className="text-sm text-gray-700">All Ratings</span>
          </label>
        </div>
      </FilterSection>
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-6">Filters</h3>
          <FiltersContent />
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-300 rounded-lg"
        >
          <FiFilter className="w-4 h-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {showMobileFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={() => setShowMobileFilters(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="w-80 h-full bg-white overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Filters</h3>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <FiX className="w-5 h-5" />
                  </button>
                </div>
                <FiltersContent />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}