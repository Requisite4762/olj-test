import Link from 'next/link';
import AddProductForm from '../../components/products/AddProductForm';

/**
 * Add product page component
 * @returns {JSX.Element} Add product page
 */
export default function AddProduct() {
  return (
    <div>
      <Link href="/">
        <span className="back-link">← Back to Products</span>
      </Link>
      
      <h1>Add New Product</h1>
      
      <AddProductForm />
    </div>
  );
}