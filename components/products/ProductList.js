import ProductCard from './ProductCard';

/**
 * ProductList component for displaying a list of products
 * @param {Object} props - Component props
 * @param {Array} props.products - Array of product data
 * @returns {JSX.Element} ProductList component
 */
const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <div className="no-products">No products found</div>;
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;