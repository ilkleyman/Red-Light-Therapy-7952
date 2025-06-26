import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
      <Link to="/" className="hover:text-primary">Home</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <FiChevronRight className="w-4 h-4" />
          {index === items.length - 1 ? (
            <span className="text-gray-900 font-medium">{item.name}</span>
          ) : (
            <Link to={item.path} className="hover:text-primary">
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}