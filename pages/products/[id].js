import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetchProductById, getCategoryName } from '../../utils/api';
import { generateStockStatus } from '../../utils/helpers';

/**
 * Product detail page component
 * @returns {JSX.Element} Product detail page
 */
export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stockStatus] = useState(() => generateStockStatus());

  // Fetch product details when ID is available
  useEffect(() => {
    if (!id) return;

    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  // Render loading state
  if (loading) return <div className="loading">Loading product details...</div>;
  
  // Render error state
  if (error) return <div className="error">{error}</div>;
  
  // Render not found state
  if (!product) return <div className="error">Product not found</div>;

  return (
    <div>
      <Link href="/">
        <span className="back-link">← Back to Products</span>
      </Link>
      
      <div className="product-detail">
        <div className="product-image">
          <img 
            src={`https://picsum.photos/id/${product.id}/400/400`} 
            alt={product.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://picsum.photos/400/400'; // Fallback image
            }}
          />
        </div>
        
        <div className="product-info">
          <h1>{product.title}</h1>
          <p className="category">Category: {getCategoryName(product.userId)}</p>
          <p className={`stock-status ${stockStatus.className}`}>
            Status: {stockStatus.status}
          </p>
          <div className="description">
            <h2>Description</h2>
            <p>{product.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}