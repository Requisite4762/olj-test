import { useState } from 'react';

/**
 * SearchBar component for filtering products
 * @param {Object} props - Component props
 * @param {Function} props.onSearch - Function to call when search term changes
 * @returns {JSX.Element} SearchBar component
 */
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search products by name..."
        value={searchTerm}
        onChange={handleChange}
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBar;