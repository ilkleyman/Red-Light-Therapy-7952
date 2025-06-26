import { FiChevronDown } from 'react-icons/fi';

const categories = [
  { id: 'panels', name: 'Panels' },
  { id: 'handheld', name: 'Hand Held Devices' },
  { id: 'face-masks', name: 'Face Masks' }
];

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
];

export default function FilterSort({ sortBy, onSortChange, selectedCategories, onCategoryChange }) {
  const handleCategoryChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Sort By</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="rounded text-primary focus:ring-primary"
              />
              <span>{category.name}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}