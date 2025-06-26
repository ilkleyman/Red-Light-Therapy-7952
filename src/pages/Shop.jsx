import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiList, FiSearch } from 'react-icons/fi';
import Breadcrumbs from '../components/Breadcrumbs';
import ProductCard from '../components/shop/ProductCard';
import ShopFilters from '../components/shop/ShopFilters';
import { useProducts } from '../hooks/useProducts';
import { sortOptions, categories, priceRanges } from '../data/shopProducts';

export default function Shop() {
  const { products: shopProducts } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [showOnSale, setShowOnSale] = useState(false);
  const [showInStock, setShowInStock] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [viewMode, setViewMode] = useState('grid');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...shopProducts];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.features.some(feature => 
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // Price range filter
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(product => {
        return selectedPriceRanges.some(rangeId => {
          const range = priceRanges.find(r => r.id === rangeId);
          return product.price >= range.min && product.price <= range.max;
        });
      });
    }

    // Sale filter
    if (showOnSale) {
      filtered = filtered.filter(product => product.onSale);
    }

    // Stock filter
    if (showInStock) {
      filtered = filtered.filter(product => product.stock > 0);
    }

    // Rating filter
    if (minRating > 0) {
      filtered = filtered.filter(product => product.rating >= minRating);
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'reviews':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        // Keep original order for 'featured'
        break;
    }

    return filtered;
  }, [
    shopProducts,
    selectedCategory,
    selectedPriceRanges,
    sortBy,
    searchQuery,
    showOnSale,
    showInStock,
    minRating
  ]);

  const breadcrumbItems = [
    { name: 'Shop', path: '/shop' }
  ];

  const activeCategory = categories.find(cat => cat.id === selectedCategory);

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedPriceRanges([]);
    setSearchQuery('');
    setShowOnSale(false);
    setShowInStock(false);
    setMinRating(0);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedPriceRanges.length > 0 || searchQuery || showOnSale || showInStock || minRating > 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Red Light Therapy Shop</h1>
        <p className="text-gray-600 text-lg">
          {activeCategory?.description || 'Discover our complete range of professional red light therapy devices'}
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="lg:w-64 flex-shrink-0">
          <ShopFilters
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedPriceRanges={selectedPriceRanges}
            onPriceRangeChange={setSelectedPriceRanges}
            showOnSale={showOnSale}
            onSaleChange={setShowOnSale}
            showInStock={showInStock}
            onStockChange={setShowInStock}
            minRating={minRating}
            onRatingChange={setMinRating}
          />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <div>
              <p className="text-gray-600">
                Showing {filteredAndSortedProducts.length} of {shopProducts.length} products
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-primary hover:text-primary-dark text-sm mt-1"
                >
                  Clear all filters
                </button>
              )}
            </div>

            <div className="flex items-center space-x-4">
              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-600'}`}
                >
                  <FiGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-600'}`}
                >
                  <FiList className="w-4 h-4" />
                </button>
              </div>

              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Products Grid/List */}
          {filteredAndSortedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters or search term</p>
              <button
                onClick={clearAllFilters}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <motion.div
              key={viewMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={`grid gap-6 ${
                viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
              }`}
            >
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <ProductCard product={product} viewMode={viewMode} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}