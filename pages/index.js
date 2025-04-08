import { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchProducts } from '../utils/api';
import ProductList from '../components/products/ProductList';
import SearchBar from '../components/products/SearchBar';

/**
 * Home page component (Product Listing)
 * @returns {JSX.Element} Home page
 */
export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products on component mount
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  /**
   * Handle search term changes
   * @param {string} searchTerm - Search term
   */
  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredProducts(products);
      return;
    }
    
    const filtered = products.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Render loading state
  if (loading) return <div className="loading">Loading products...</div>;
  
  // Render error state
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <div className="page-header">
        <h1>Product Inventory</h1>
        <Link href="/products/add">
          <span className="add-button">Add New Product</span>
        </Link>
      </div>
      
      <SearchBar onSearch={handleSearch} />
      
      <ProductList products={filteredProducts} />
    </div>
  );
}