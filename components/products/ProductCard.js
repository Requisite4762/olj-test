import Link from 'next/link';
import { getCategoryName } from '../../utils/api';
import { truncateText } from '../../utils/helpers';

/**
 * ProductCard component for displaying a product in the product list
 * @param {Object} props - Component props
 * @param {Object} props.product - Product data
 * @returns {JSX.Element} ProductCard component
 */
const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={`https://picsum.photos/id/${product.id}/200/200`} 
          alt={product.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://picsum.photos/200/200'; // Fallback image
          }}
        />
      </div>
      <div className="product-info">
        <h2 title={product.title}>{truncateText(product.title, 50)}</h2>
        <p className="category">Category: {getCategoryName(product.userId)}</p>
        <Link href={`/products/${product.id}`}>
          <span className="view-details">View Details</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;